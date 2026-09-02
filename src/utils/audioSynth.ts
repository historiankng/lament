// Web Audio API generator for moody ambient soundscape (Sea Swell & Ember Crackle)

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let waveGain: GainNode | null = null;
let emberGain: GainNode | null = null;
let masterGain: GainNode | null = null;
let intervalId: number | null = null;

export function toggleAmbientAudio(onStateChange?: (playing: boolean) => void): boolean {
  if (isPlaying) {
    stopAmbientAudio();
    if (onStateChange) onStateChange(false);
    return false;
  } else {
    startAmbientAudio();
    if (onStateChange) onStateChange(true);
    return true;
  }
}

export function isAudioPlaying(): boolean {
  return isPlaying;
}

export function startAmbientAudio() {
  if (isPlaying) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // 1. Sea Swell Synth (filtered brown noise with low frequency LFO)
    const bufferSize = audioCtx.sampleRate * 3;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // boost brown noise
    }

    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, audioCtx.currentTime);

    waveGain = audioCtx.createGain();
    waveGain.gain.setValueAtTime(0.2, audioCtx.currentTime);

    noiseSource.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(masterGain);
    noiseSource.start();

    // Subtle wave swell volume modulation
    let swellTime = 0;
    const swellInterval = window.setInterval(() => {
      if (!audioCtx || !waveGain) return;
      swellTime += 0.05;
      const gainVal = 0.15 + Math.sin(swellTime * 0.4) * 0.12;
      waveGain.gain.setTargetAtTime(gainVal, audioCtx.currentTime, 0.5);
    }, 100);
    intervalId = swellInterval;

    // 2. Ember Crackle Synth (random subtle pop clicks)
    emberGain = audioCtx.createGain();
    emberGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    emberGain.connect(masterGain);

    const crackleTimer = window.setInterval(() => {
      if (!audioCtx || !isPlaying || !emberGain) return;
      if (Math.random() < 0.35) {
        const osc = audioCtx.createOscillator();
        const popGain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800 + Math.random() * 2400, audioCtx.currentTime);
        popGain.gain.setValueAtTime(0.03 + Math.random() * 0.05, audioCtx.currentTime);
        popGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
        osc.connect(popGain);
        popGain.connect(emberGain);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      }
    }, 120);

    // Save interval clear
    const originalInterval = intervalId;
    intervalId = window.setInterval(() => {
      // heart beat check
    }, 1000);
    window.clearInterval(crackleTimer);
    window.clearInterval(originalInterval);

    isPlaying = true;
  } catch (err) {
    console.error('Audio Synth Error:', err);
    isPlaying = false;
  }
}

export function stopAmbientAudio() {
  if (intervalId) {
    window.clearInterval(intervalId);
    intervalId = null;
  }
  if (audioCtx) {
    try {
      audioCtx.close();
    } catch (e) {
      console.error(e);
    }
    audioCtx = null;
  }
  isPlaying = false;
}
