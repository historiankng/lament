import { StanzaNode, LiteraryTerm, QuizQuestion, Flashcard } from '../types';

export const STANZA_NODES: StanzaNode[] = [
  {
    id: 1,
    stanzaNumber: 1,
    title: 'Nest of Sickness',
    quote: 'For her eggs laid in their nest of sickness.',
    fullStanzaText: 'For the green turtle with her pulsing burden,\nin search of the breeding-ground.\nFor her eggs laid in their nest of sickness.',
    category: 'Marine',
    zoneId: 1,
    xPos: 20,
    yPos: 18,
    techniques: ['Personification', 'Sibilance', 'Contrast'],
    literaryDevices: [
      {
        name: 'Personification',
        quotePhrase: 'her eggs',
        explanation: 'The speaker uses “her” to refer to the mother turtle. This adds impact; she has greater emotional significance and is just like us.'
      },
      {
        name: 'Sibilance',
        quotePhrase: 'nest of sickness',
        explanation: 'Conveys a sorrowful, uneasy mood. It slows down the reading pace, highlighting the reality the mother turtle faces.'
      }
    ],
    analysis: 'The speaker describes the nest as "their nest of sickness". "Their" represents a family home for future generations. "Nest" connotes new life and a safe atmosphere, which is shockingly contrasted by "sickness", indicating poisoning. This implies the severe impact war has on the ecological world.',
    context: 'The green sea turtle referenced is an endangered species. Her struggle to hatch healthy eggs already limits the number of future generations.',
    symbolism: ['Nest of sickness = Poisoned environment and ruined future'],
    keyVocabulary: [
      { word: 'Connotation', definition: 'An idea or feeling that a word invokes in addition to its literal meaning.' }
    ],
    essayPrompt: 'How does the phrase "nest of sickness" explore the impact of war on nature?'
  },
  {
    id: 2,
    stanzaNumber: 2,
    title: 'Funeral Silk',
    quote: 'For the cormorant in his funeral silk',
    fullStanzaText: 'For the cormorant in his funeral silk,\nthe veil of iridescence on the sand,\nthe shadow on the sea.',
    category: 'Marine',
    zoneId: 1,
    xPos: 75,
    yPos: 26,
    techniques: ['Metaphor', 'Personification', 'Metonymy'],
    literaryDevices: [
      {
        name: 'Metaphor',
        quotePhrase: 'funeral silk',
        explanation: 'Represents the cormorant’s feathers being covered with a layer of oil. When one thinks of a funeral, one imagines mourners in black.'
      },
      {
        name: 'Metonymy',
        quotePhrase: 'the cormorant',
        explanation: 'The cormorant is a metonym for the many animals who died in this environmental disaster.'
      }
    ],
    analysis: 'Clarke creates the image of a mourner in black, grieving for the destruction of his and many others’ habitat. The funeral silk represents the cormorant mourning for birds of his kind who succumbed to death as a result of oil pollution—and he is next in line.',
    context: 'Clarke alludes to the crude oil spilt into the Persian Gulf by the Iraqi Army, covering birds in black sludge.',
    symbolism: ['Funeral silk = Coat of oil and mourning for dead wildlife'],
    keyVocabulary: [
      { word: 'Metonymy', definition: 'A figure of speech in which a thing or concept is referred to by the name of something closely associated with it.' }
    ],
    essayPrompt: 'Discuss the dual meaning of "funeral silk" in portraying both literal oil and emotional grief.'
  },
  {
    id: 3,
    stanzaNumber: 3,
    title: 'The Silenced Whale',
    quote: 'the whale struck dumb by the missile’s thunder',
    fullStanzaText: 'For the ocean\'s lap with its mortal stain.\nFor Ahmed at the closed border.\nFor the whale struck dumb by the missile\'s thunder.',
    category: 'Marine',
    zoneId: 1,
    xPos: 40,
    yPos: 35,
    techniques: ['Juxtaposition', 'Metaphor', 'Plosives'],
    literaryDevices: [
      {
        name: 'Repetition of Plosives',
        quotePhrase: 'struck dumb by',
        explanation: 'Creates an abrupt, shocking effect that represents how the whale is puzzled and uneasy afterwards.'
      },
      {
        name: 'Juxtaposition',
        quotePhrase: 'missile’s thunder',
        explanation: 'Draws on the language of storms, comparing war with environmental disasters. War contaminates human society and the natural world.'
      }
    ],
    analysis: 'In a literal sense, the whale is silenced by the deep, percussive sound of a missile exploding. Whales rely on complex sounds to communicate; this man-made noise disrupts their navigation. The simple image of a silenced whale shows that the effects of war are not limited to humans—the sea, a sanctuary, is also devastated.',
    context: 'Missiles and explosions in naval warfare create overpowering noise pollution in the ocean.',
    symbolism: ['Missile\'s thunder = Unnatural, overwhelming human violence'],
    keyVocabulary: [
      { word: 'Plosive', definition: 'A consonant sound produced by stopping the airflow using the lips, teeth, or palate, followed by a sudden release of air.' }
    ],
    essayPrompt: 'How does Clarke use sound imagery to emphasize the disruption of the natural order?'
  },
  {
    id: 4,
    stanzaNumber: 4,
    title: 'Uniform of Fire',
    quote: 'For the soldier with his uniform of fire',
    fullStanzaText: 'For the soldier with his uniform of fire,\nFor the gunsmith and the armourer,\nthe boy fusilier who joined for the company...',
    category: 'Human Cost / War',
    zoneId: 2,
    xPos: 25,
    yPos: 48,
    techniques: ['Metaphor', 'Hellish Imagery'],
    literaryDevices: [
      {
        name: 'Metaphor',
        quotePhrase: 'uniform of fire',
        explanation: 'Suggests the soldier was being burned alive. A uniform, usually representative of pride, is devoured by fire, destroying both life and patriotism.'
      }
    ],
    analysis: 'This line intensifies the hellish imagery of war, showing that death is not abstract. It adds a layer of horror and shows the brutal, unrelenting nature of the violence. This acts as a bridge between the effects of war on nature and on people, running parallel to the suffering of the natural world.',
    context: 'The reality of ground and naval combat in the Gulf War resulted in horrific burn casualties.',
    symbolism: ['Uniform of fire = Destruction of nationhood, pride, and human life'],
    keyVocabulary: [
      { word: 'Patriotism', definition: 'The quality of being patriotic; devotion to and vigorous support for one\'s country.' }
    ],
    essayPrompt: 'Analyze how the "uniform of fire" functions as a bridge between environmental and human destruction.'
  },
  {
    id: 5,
    stanzaNumber: 5,
    title: 'Complicit Creators',
    quote: 'For the gunsmith and the armourer',
    fullStanzaText: 'For the gunsmith and the armourer,\nthe boy fusilier who joined for the company,\nthe farmer\'s sons, in it for the music.',
    category: 'Human Cost / War',
    zoneId: 2,
    xPos: 70,
    yPos: 56,
    techniques: ['Listing'],
    literaryDevices: [
      {
        name: 'Listing / Litany',
        quotePhrase: 'gunsmith and the armourer',
        explanation: 'Includes those who furnish and maintain weapons in the list of victims and participants of war.'
      }
    ],
    analysis: 'The speaker grieves for those who furnish weapons and defense systems. They might not have had a choice and had to become complicit in war. Their work illustrates a morally incorrect situation and perpetuates destruction. Perhaps they are only trying to profit financially from warfare, yet they are inextricably tied to the violence.',
    context: 'The military-industrial complex and the everyday workers whose livelihoods depend on the production of weapons.',
    symbolism: ['Gunsmith = Complicity in violence and moral ambiguity'],
    keyVocabulary: [
      { word: 'Complicit', definition: 'Involved with others in an illegal activity or wrongdoing.' }
    ],
    essayPrompt: 'Why does the poet include the gunsmith and the armourer in her litany of lamentation?'
  },
  {
    id: 6,
    stanzaNumber: 6,
    title: 'Naïve Motivations',
    quote: 'the farmer’s sons, in it for the music',
    fullStanzaText: 'the boy fusilier who joined for the company,\nthe farmer\'s sons, in it for the music.',
    category: 'Human Cost / War',
    zoneId: 2,
    xPos: 50,
    yPos: 65,
    techniques: ['Pathos', 'Irony'],
    literaryDevices: [
      {
        name: 'Pathos',
        quotePhrase: 'in it for the music',
        explanation: 'Highlights the young men joining for innocent, personal reasons (like a military band) rather than political ones, unaware of the reality.'
      }
    ],
    analysis: 'Creates an image of innocence and vulnerability. These young men are distanced from the dictators waging the war. It is a tragedy to see young, innocent men die while caught in fierce fighting, highlighting how disoriented their motivations are from larger political forces. "Sons" connotes lost potential and bright futures cut short.',
    context: 'Many young soldiers enlist for community, steady pay, or a sense of belonging rather than ideological hatred.',
    symbolism: ['The music = Innocent, naive motivations and camaraderie'],
    keyVocabulary: [
      { word: 'Pathos', definition: 'A quality that evokes pity or sadness.' }
    ],
    essayPrompt: 'Discuss how Clarke evokes pathos through the phrase "in it for the music".'
  },
  {
    id: 7,
    stanzaNumber: 7,
    title: 'The Veiled Sun',
    quote: 'the veiled sun and the stink of anger',
    fullStanzaText: 'For the veiled sun and the stink of anger.',
    category: 'Environmental Trauma',
    zoneId: 3,
    xPos: 30,
    yPos: 75,
    techniques: ['Personification', 'Synesthesia', 'Symbolism'],
    literaryDevices: [
      {
        name: 'Synesthesia',
        quotePhrase: 'stink of anger',
        explanation: 'Fuses sensory (smell) and emotional (anger) realms, showing the palpable, overwhelming rage that hangs in the air.'
      },
      {
        name: 'Personification',
        quotePhrase: 'veiled sun',
        explanation: 'The sun is personified; the smoke acts like a funeral veil, symbolizing the death of nature.'
      }
    ],
    analysis: 'The smoke from burning oil fields obscures the sun, acting like a funeral veil. This reinforces mourning for the planet and underscores the pointlessness of war, which destroys the harmony of the world. "Stink of anger" links the physical smell of burning oil to the emotional devastation caused by conflict.',
    context: 'The burning of Kuwaiti oil fields released massive clouds of toxic smoke, physically blocking out the sun.',
    symbolism: ['Veiled sun = Death of nature and harmony', 'Stink of anger = Palpable rage and burning oil'],
    keyVocabulary: [
      { word: 'Synesthesia', definition: 'A figure of speech in which one sense is described using terms from another.' }
    ],
    essayPrompt: 'How does the phrase "stink of anger" fuse the physical environment with the emotional reality of war?'
  },
  {
    id: 8,
    stanzaNumber: 8,
    title: 'Burnt Earth',
    quote: 'burnt earth and the sun put out',
    fullStanzaText: 'burnt earth and the sun put out',
    category: 'Environmental Trauma',
    zoneId: 3,
    xPos: 75,
    yPos: 80,
    techniques: ['Apocalyptic Imagery', 'Allusion', 'Metaphor'],
    literaryDevices: [
      {
        name: 'Allusion',
        quotePhrase: 'burnt earth',
        explanation: 'Alludes to the "scorched earth policy" of retreating armies burning resources, viewed as deeply evil and inhumane.'
      },
      {
        name: 'Metaphor',
        quotePhrase: 'sun put out',
        explanation: 'A chilling metaphor taking the "veiled sun" to its ultimate conclusion: the extinguishing of life itself.'
      }
    ],
    analysis: 'An apocalyptic vision of death and destruction. The "burnt earth" highlights how the scorched land is unable to sustain life, as though hell has been created on earth. "Put out" is casually phrased, as if destroying the sun is as easy as flipping a light switch, emphasizing human recklessness and nature\'s fragility.',
    context: 'The retreating Iraqi army utilized a scorched earth policy, setting fire to Kuwait’s oil wells to leave nothing for their enemies.',
    symbolism: ['Burnt earth = Irreversible destruction of the natural world'],
    keyVocabulary: [
      { word: 'Scorched Earth Policy', definition: 'A military strategy of burning or destroying buildings, crops, or other resources that might be of use to an invading enemy force.' }
    ],
    essayPrompt: 'Examine the effect of apocalyptic imagery in portraying the ultimate conclusion of human recklessness.'
  },
  {
    id: 9,
    stanzaNumber: 9,
    title: 'Ashes of Language',
    quote: 'For vengeance, and the ashes of language',
    fullStanzaText: 'For vengeance, and the ashes of language',
    category: 'Environmental Trauma',
    zoneId: 3,
    xPos: 45,
    yPos: 88,
    techniques: ['Metaphor', 'Symbolism'],
    literaryDevices: [
      {
        name: 'Metaphor',
        quotePhrase: 'ashes of language',
        explanation: 'Suggests that much more than the physical is lost; abstract concepts of civilization have been reduced to ashes.'
      }
    ],
    analysis: 'The word "vengeance" ends the poem on a sombre note, asking the reader to reflect on the human motivations behind war: retaliation and the cycle of violence. Language is a symbol of civilization, progress, and truth. Its destruction into "ashes" symbolizes deep barbarism and the regression of humanity, revealing the poet\'s ultimate view on war.',
    context: 'War destroys the ability to communicate, reason, and share truths, leaving only destruction.',
    symbolism: ['Ashes of language = The death of civilization, truth, and human connection'],
    keyVocabulary: [
      { word: 'Barbarism', definition: 'Absence of culture and civilization; extreme cruelty or brutality.' }
    ],
    essayPrompt: 'What does "the ashes of language" reveal about the ultimate cost of war beyond physical destruction?'
  }
];

export const LITERARY_TERMS: LiteraryTerm[] = [
  {
    term: 'Personification',
    category: 'Device',
    definition: 'Giving human feelings or qualities to non-human objects or animals, encouraging reader empathy.',
    exampleFromPoem: '"her eggs", "veiled sun"'
  },
  {
    term: 'Metaphor',
    category: 'Device',
    definition: 'A figure of speech describing an object or action in a way that isn\'t literally true, but helps explain an idea or make a comparison.',
    exampleFromPoem: '"funeral silk", "uniform of fire", "ashes of language"'
  },
  {
    term: 'Sibilance',
    category: 'Device',
    definition: 'Repetition of the \'s\' sound, often creating a sorrowful, uneasy, or sinister mood.',
    exampleFromPoem: '"nest of sickness"'
  },
  {
    term: 'Metonymy',
    category: 'Device',
    definition: 'A figure of speech in which a thing is referred to by the name of something closely associated with it, or a specific example stands in for a larger whole.',
    exampleFromPoem: '"the cormorant" (representing all dying wildlife)'
  },
  {
    term: 'Juxtaposition',
    category: 'Device',
    definition: 'Placing two contrasting ideas side-by-side to highlight differences.',
    exampleFromPoem: 'natural storms vs "missile\'s thunder"'
  },
  {
    term: 'Synesthesia',
    category: 'Device',
    definition: 'A figure of speech in which one sense is described using terms from another.',
    exampleFromPoem: '"stink of anger"'
  },
  {
    term: 'Pathos',
    category: 'Device',
    definition: 'A quality that evokes pity or sadness.',
    exampleFromPoem: '"the farmer’s sons, in it for the music"'
  },
  {
    term: 'Allusion',
    category: 'Device',
    definition: 'An expression designed to call something to mind without mentioning it explicitly; an indirect or passing reference.',
    exampleFromPoem: '"burnt earth" (referencing scorched earth policy)'
  }
];

export const OVERARCHING_ANALYSIS = {
  title: "Gillian Clarke's *Lament*: Structural & Historical Analysis",
  formAndElegy: {
    heading: "Grief over the effects of war on nature",
    content: "The poem laments the impact war has on the ecological world. The nest of sickness, the funeral silk of the cormorant, and the whale struck dumb represent innocent creatures whose habitats and lives are destroyed. Nature becomes collateral damage, bearing the toxic consequences of human violence."
  },
  litanyStructure: {
    heading: "The Human Qualities of War",
    content: "War is not abstract; its violence burns through humanity as deeply as the earth. From the soldier in his uniform of fire to the young farmer\'s sons joining for the music, human beings are caught in forces beyond their control. Even the gunsmith and armourer are pulled into the machinery of complicity and death."
  },
  gulfWarContext: {
    heading: "1991 Gulf War & Scorched Earth",
    content: "The historical backdrop involves the 1991 Gulf War, where millions of barrels of crude oil were spilled into the Persian Gulf and retreating armies ignited Kuwaiti oil wells. The resulting thick smoke literally eclipsed the sun, while coastal habitats were coated in toxic sludge."
  },
  thematicProgression: {
    heading: "Senselessness of War & The Ashes of Language",
    content: "Ultimately, the poem reveals the utter pointlessness and barbarism of conflict. Retaliation and vengeance lead to a state where both the physical earth is burnt, and the abstract pillars of human civilization—represented by 'the ashes of language'—are destroyed. The ability to communicate, reason, and write history is reduced to dust."
  }
};

export const REVISION_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    stanzaNumber: 1,
    question: 'What technique is primarily used in the phrase "nest of sickness"?',
    options: ['Simile', 'Sibilance', 'Onomatopoeia', 'Hyperbole'],
    correctAnswer: 1,
    explanation: 'Sibilance (the repetition of \'s\' sounds) in "nest of sickness" conveys a sorrowful, uneasy mood and slows down the pace of reading.',
    techniqueTested: 'Sibilance'
  },
  {
    id: 2,
    stanzaNumber: 2,
    question: 'How is the cormorant described as a mourner?',
    options: [
      'It wears a black veil',
      'It is dressed in "funeral silk" (oil)',
      'It sings a sad song',
      'It is flying away'
    ],
    correctAnswer: 1,
    explanation: 'The metaphor "funeral silk" represents the cormorant’s feathers being covered in a layer of oil, making it look like a mourner in black.',
    techniqueTested: 'Metaphor'
  },
  {
    id: 3,
    stanzaNumber: 3,
    question: 'What is disrupted when the whale is "struck dumb"?',
    options: [
      'The ocean\'s tides',
      'Its complex sounds used for communication and navigation',
      'Its ability to find food',
      'The soldiers\' radios'
    ],
    correctAnswer: 1,
    explanation: 'Whales rely on complex sounds to communicate; the overpowering "missile\'s thunder" disrupts their navigation and silences them.',
    techniqueTested: 'Context / Impact'
  },
  {
    id: 4,
    stanzaNumber: 4,
    question: 'What does the "uniform of fire" symbolize?',
    options: ['A special military camouflage', 'The destruction of nationhood and pride through horrific burns', 'A medal of honor', 'The sun setting'],
    correctAnswer: 1,
    explanation: 'A uniform represents pride and nationhood, but when devoured by fire, it shows how war destroys both life and patriotism.',
    techniqueTested: 'Metaphor'
  },
  {
    id: 5,
    stanzaNumber: 6,
    question: 'Why did the "farmer’s sons" join the military, according to the poem?',
    options: [
      'For political motivations',
      'For the music and human connection',
      'To become generals',
      'For vengeance'
    ],
    correctAnswer: 1,
    explanation: 'They were "in it for the music", highlighting their naive, personal motivations rather than political ones.',
    techniqueTested: 'Pathos'
  },
  {
    id: 6,
    stanzaNumber: 7,
    question: 'What two realms does "stink of anger" fuse?',
    options: [
      'Visual and auditory',
      'Sensory (smell) and emotional (anger)',
      'Taste and touch',
      'Past and present'
    ],
    correctAnswer: 1,
    explanation: 'Synesthesia is used here to fuse the physical smell of burning oil with the emotional devastation and palpable rage of war.',
    techniqueTested: 'Synesthesia'
  },
  {
    id: 7,
    stanzaNumber: 9,
    question: 'What do "the ashes of language" represent?',
    options: [
      'Burnt books',
      'The regression of civilization and destruction of human communication',
      'A campfire',
      'The end of the poem'
    ],
    correctAnswer: 1,
    explanation: 'Language symbolizes civilization and progress. Its destruction into ashes conveys deep barbarism and the loss of truth.',
    techniqueTested: 'Symbolism'
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    stanzaNumber: 1,
    front: 'Quote: "nest of sickness"\nTechnique?',
    back: 'Sibilance & Contrast: "Nest" connotes safety and new life, contrasted shockingly with "sickness". The sibilance creates an uneasy, sorrowful mood.',
    category: 'Marine'
  },
  {
    id: 2,
    stanzaNumber: 2,
    front: 'Quote: "funeral silk"\nTechnique?',
    back: 'Metaphor: Represents the layer of oil covering the cormorant. It creates the image of a mourner in black grieving for its ruined habitat.',
    category: 'Marine'
  },
  {
    id: 3,
    stanzaNumber: 3,
    front: 'Quote: "missile\'s thunder"\nTechnique?',
    back: 'Juxtaposition: Compares man-made weapons to natural storms. The unnatural noise overpowers the whale’s song and natural order.',
    category: 'Marine'
  },
  {
    id: 4,
    stanzaNumber: 4,
    front: 'Quote: "uniform of fire"\nTechnique?',
    back: 'Metaphor: Agonizing description of soldiers burning. It shows the destruction of military pride and human life, bridging natural and human suffering.',
    category: 'Human Cost'
  },
  {
    id: 5,
    stanzaNumber: 6,
    front: 'Quote: "in it for the music"\nTechnique?',
    back: 'Pathos: Highlights the innocence and vulnerability of young men whose naive motivations led them to tragedy, distanced from political leaders.',
    category: 'Human Cost'
  },
  {
    id: 6,
    stanzaNumber: 7,
    front: 'Quote: "stink of anger"\nTechnique?',
    back: 'Synesthesia: Fuses the physical smell of burning oil fields with the emotional, palpable rage hanging in the air.',
    category: 'Environmental Trauma'
  },
  {
    id: 7,
    stanzaNumber: 8,
    front: 'Quote: "burnt earth"\nTechnique?',
    back: 'Allusion: References the inhumane "scorched earth policy" of destroying resources, highlighting the apocalyptic aftermath of conflict.',
    category: 'Environmental Trauma'
  },
  {
    id: 8,
    stanzaNumber: 9,
    front: 'Quote: "ashes of language"\nTechnique?',
    back: 'Symbolism: The destruction of civilization and progress. It implies war reduces humanity to barbarism where communication and truth are destroyed.',
    category: 'Environmental Trauma'
  }
];
