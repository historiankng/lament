import { StanzaNode, LiteraryTerm, QuizQuestion, Flashcard } from '../types';

export const STANZA_NODES: StanzaNode[] = [
  {
    id: 1,
    stanzaNumber: 1,
    title: 'Stanza 1: The Oil-Coated Cormorant',
    quote: 'For the cormorant in his nest of silk / For the shadow on the sea',
    fullStanzaText: 'For the cormorant in his nest of silk,\nfor the shadow on the sea,\nfor the turtle with his mantle of green,\nfor the grief of the cormorant.',
    category: 'Marine',
    zoneId: 1,
    xPos: 20,
    yPos: 18,
    techniques: ['Metaphor', 'Juxtaposition', 'Foreshadowing', 'Anaphora'],
    literaryDevices: [
      {
        name: 'Metaphor',
        quotePhrase: 'nest of silk',
        explanation: 'Metaphorically describes toxic, shimmering crude oil clinging to bird feathers as luxurious "silk", highlighting how deceptively destructive human pollution is.'
      },
      {
        name: 'Juxtaposition',
        quotePhrase: 'nest of silk / shadow on the sea',
        explanation: 'Juxtaposes delicacy and elegance with the ominous black slick spreading across marine waters.'
      },
      {
        name: 'Foreshadowing',
        quotePhrase: 'shadow on the sea',
        explanation: 'The "shadow" foreshadows darkness, environmental catastrophe, and the moral stain of human conflict.'
      }
    ],
    analysis: 'Stanza 1 initiates Gillian Clarke’s elegiac litany. By opening with "For the cormorant", Clarke establishes a mourning catalogue. The image pairs soft, luxurious imagery ("nest of silk") with suffocating crude oil that entraps sea life. "Shadow" denotes both the physical oil slick spreading over the Gulf waters and the dark moral shadow cast by human warfare.',
    context: '1991 Gulf War oil spill: Over 8 million barrels of crude oil were intentionally spilled into the Persian Gulf by Iraqi forces to impede US amphibious landings, resulting in the worst marine environmental catastrophe in history up to that time.',
    symbolism: ['Cormorant = Innocent wildlife trapped in human warfare', 'Silk = Viscous oil slick that glitters deceivingly', 'Shadow = Looming death and ecological ruin'],
    keyVocabulary: [
      { word: 'Cormorant', definition: 'A dark, diving seabird with webbed feet and a hooked beak.' },
      { word: 'Elegy', definition: 'A poem of serious reflection, typically a lament for the dead.' }
    ],
    essayPrompt: 'How does Gillian Clarke use ironic imagery in Stanza 1 to emphasize the tragedy of oil pollution?'
  },
  {
    id: 2,
    stanzaNumber: 2,
    title: 'Stanza 2: The Regal Turtle & Grief',
    quote: 'For the turtle with his mantle of green / For the grief of the cormorant',
    fullStanzaText: 'For the turtle with his mantle of green,\nfor the grief of the cormorant,\nfor the gull and the restless wader,\nfor the ocean\'s scalding boy.',
    category: 'Marine',
    zoneId: 1,
    xPos: 75,
    yPos: 26,
    techniques: ['Personification', 'Regal Diction', 'Anaphora', 'Empathy'],
    literaryDevices: [
      {
        name: 'Regal Diction',
        quotePhrase: 'mantle of green',
        explanation: '"Mantle" (a royal cloak) bestows majesty, dignity, and noble status onto innocent green sea turtles.'
      },
      {
        name: 'Personification',
        quotePhrase: 'grief of the cormorant',
        explanation: 'Attributes human emotional sorrow ("grief") to the seabird, breaking the barrier between human violence and animal suffering.'
      }
    ],
    analysis: '"Mantle" accords dignity and majesty to marine wildlife, depicting animals as noble citizens of the natural world now stripped of their habitat. The poem anthropomorphizes the cormorant by granting it "grief", suggesting nature itself mourns the loss of purity and balance.',
    context: 'Coastal breeding grounds, coral reefs, and endangered green turtle nesting beaches along Saudi Arabia and Kuwait were choked by oil slicks, killing tens of thousands of migratory birds and marine organisms.',
    symbolism: ['Mantle of green = Natural dignity & ancient green sea turtle shells', 'Grief = Nature’s unspoken trauma'],
    keyVocabulary: [
      { word: 'Mantle', definition: 'A sleeveless cloak or royal garment representing authority and dignity.' },
      { word: 'Anthropomorphism', definition: 'Attributing human traits or emotions to animals or non-human entities.' }
    ],
    essayPrompt: 'Examine how Clarke elevates non-human creatures into noble victims through choice of diction.'
  },
  {
    id: 3,
    stanzaNumber: 3,
    title: 'Stanza 3: Displaced Waders & Scalding Boy',
    quote: 'For the gull and the restless wader / For the ocean\'s scalding boy',
    fullStanzaText: 'for the gull and the restless wader,\nfor the ocean\'s scalding boy,\nfor the oil on the sea and the streak of fire,\nfor the burden of the sea.',
    category: 'Marine',
    zoneId: 1,
    xPos: 40,
    yPos: 32,
    techniques: ['Active Verbs', 'Oxymoron', 'Contrast', 'Juxtaposition'],
    literaryDevices: [
      {
        name: 'Active Verbs & Adjectives',
        quotePhrase: 'restless wader',
        explanation: '"Restless" evokes panic, loss of safe habitat, and constant flight from toxic oil slicks.'
      },
      {
        name: 'Oxymoron / Paradox',
        quotePhrase: 'ocean\'s scalding boy',
        explanation: 'Combines "ocean" (cool, life-giving water) with "scalding" (extreme burning heat) to depict burning naval war and young soldiers burning at sea.'
      }
    ],
    analysis: '"Restless" depicts severe animal displacement as birds search in vain for clean shores. The shocking image of "the ocean\'s scalding boy" shifts the poem\'s scope from animal suffering to human cost, representing young naval servicemen trapped in burning oil slicks.',
    context: 'During naval engagements in the Gulf, oil fires ignited across the sea surface. Sailors and pilots faced horrific burns in waters turned scorching hot by burning crude oil.',
    symbolism: ['Restless wader = Homeless wildlife and displaced populations', 'Scalding boy = Youthful innocence sacrificed in mechanized war'],
    keyVocabulary: [
      { word: 'Wader', definition: 'A long-legged shorebird that feeds in shallow coastal waters.' },
      { word: 'Scalding', definition: 'Injuring or burning with hot liquid or steam; extremely hot.' }
    ],
    essayPrompt: 'Analyze the shift in focus from animal suffering to human casualties in Stanza 3.'
  },
  {
    id: 4,
    stanzaNumber: 4,
    title: 'Stanza 4: The Moral Burden of the Sea',
    quote: 'For the oil on the sea and the streak of fire / For the burden of the sea',
    fullStanzaText: 'for the oil on the sea and the streak of fire,\nfor the burden of the sea,\nfor the soldier in his uniform of fire,\nfor the sun humbled.',
    category: 'Environmental Trauma',
    zoneId: 2,
    xPos: 25,
    yPos: 48,
    techniques: ['Tactile Imagery', 'Personification', 'Visual Contrast', 'Metonymy'],
    literaryDevices: [
      {
        name: 'Visual Contrast',
        quotePhrase: 'oil on the sea and the streak of fire',
        explanation: 'Contrasts dark, heavy, liquid petroleum with bright, violent streaks of missile fire and burning slicks.'
      },
      {
        name: 'Personification',
        quotePhrase: 'burden of the sea',
        explanation: 'Portrays the ocean as an overburdened entity carrying the weight of human sin, wreckage, and toxic oil.'
      }
    ],
    analysis: 'Stanza 4 transitions the map to the shoreline and environmental trauma. The sea is personified as carrying an unbearable physical and moral "burden". The "streak of fire" evokes missile trails across gulf skies and slicks burning on the water surface.',
    context: 'Over 240 million gallons of crude oil formed a toxic slick over 1,500 square miles of gulf coastlines, killing over 30,000 seabirds and devastating commercial fishing.',
    symbolism: ['Streak of fire = Missiles, bombing raids, and burning petroleum', 'Burden of the sea = Weight of human greed, ecological destruction, and military debris'],
    keyVocabulary: [
      { word: 'Burden', definition: 'A heavy load or moral weight carried with great difficulty.' }
    ],
    essayPrompt: 'How does Clarke use personification to convey the ocean\'s plight in Stanza 4?'
  },
  {
    id: 5,
    stanzaNumber: 5,
    title: 'Stanza 5: Uniform of Fire & Humbled Sun',
    quote: 'For the soldier in his uniform of fire / For the sun humbled',
    fullStanzaText: 'for the soldier in his uniform of fire,\nfor the sun humbled,\nfor the harvest burnt and the ocean\'s veil,\nfor her veil of oil.',
    category: 'Human Cost / War',
    zoneId: 2,
    xPos: 70,
    yPos: 56,
    techniques: ['Visceral Imagery', 'Hyperbole', 'Cosmic Scale', 'Metaphor'],
    literaryDevices: [
      {
        name: 'Visceral Imagery',
        quotePhrase: 'soldier in his uniform of fire',
        explanation: 'Shocking, painful imagery of combatants enveloped in flames, converting military attire into an instrument of agony.'
      },
      {
        name: 'Cosmic Scale / Personification',
        quotePhrase: 'sun humbled',
        explanation: 'The sun—the supreme celestial symbol of life and power—is reduced ("humbled") by thick black smoke plumes from burning Kuwaiti oil wells.'
      }
    ],
    analysis: 'Stanza 5 reaches peak intensity as human combatants suffer agonizing deaths ("uniform of fire"). The cosmic image "the sun humbled" conveys how human warfare disrupted planetary atmosphere and light cycles, blotting out daylight under thick black clouds of burning oil.',
    context: 'In February 1991, retreating Iraqi forces detonated explosives on over 700 Kuwaiti oil wells. The resulting fires burned for over 8 months, spewing 5,000 tons of soot daily and dimming sunlight across the Middle East.',
    symbolism: ['Uniform of fire = Agonies of combat, chemical/fire warfare', 'Sun humbled = Planetary disruption, loss of light and hope'],
    keyVocabulary: [
      { word: 'Humbled', definition: 'Lowered in dignity or power; dimmed and eclipsed.' },
      { word: 'Visceral', definition: 'Relating to deep inward feelings or physical bodily sensations.' }
    ],
    essayPrompt: 'Discuss how Gillian Clarke connects personal human suffering with cosmic environmental disruption in Stanza 5.'
  },
  {
    id: 6,
    stanzaNumber: 6,
    title: 'Stanza 6: Burnt Harvest & The Ocean\'s Veil',
    quote: 'For the harvest burnt and the ocean\'s veil / For her veil of oil',
    fullStanzaText: 'for the harvest burnt and the ocean\'s veil,\nfor her veil of oil,\nfor the burnt earth and the sun humbled,\nfor the blazing eye of the dragon.',
    category: 'Environmental Trauma',
    zoneId: 3,
    xPos: 30,
    yPos: 75,
    techniques: ['Anaphora', 'Elegiac Refrain', 'Symbolism', 'Repetition'],
    literaryDevices: [
      {
        name: 'Elegiac Symbolism',
        quotePhrase: 'ocean\'s veil / her veil of oil',
        explanation: 'The "veil" evokes funeral mourning attire, wedding purity ruined, and a suffocating layer of black oil choking ocean life.'
      },
      {
        name: 'Anaphora',
        quotePhrase: 'for the harvest burnt... for her veil',
        explanation: 'The relentless repetition of "for" mimics a church litany, funeral prayer, or solemn roll call of casualties.'
      }
    ],
    analysis: 'Stanza 6 links agricultural destruction ("harvest burnt") with marine suffocation. The metaphor "veil of oil" fuses the funeral veil worn by grieving widows with the thick coat of crude oil suffocating the sea mother ("her").',
    context: 'Black rain containing toxic sulfur dioxide and heavy metals fell across crop fields, water reservoirs, and farmlands across Iran, Iraq, and Kuwait.',
    symbolism: ['Burnt harvest = Ruined futures, destroyed food supply', 'Veil of oil = Mourning garb & choking environmental barrier'],
    keyVocabulary: [
      { word: 'Veil', definition: 'A fine material worn to protect or conceal the face, often associated with grief and mourning.' }
    ],
    essayPrompt: 'How does the image of the "veil" function on multiple symbolic levels in Stanza 6?'
  },
  {
    id: 7,
    stanzaNumber: 7,
    title: 'Stanza 7: Burnt Earth & The Blazing Dragon',
    quote: 'For the burnt earth and the sun humbled / For the blazing eye of the dragon',
    fullStanzaText: 'for the burnt earth and the sun humbled,\nfor the blazing eye of the dragon,\nfor the world\'s last breath.',
    category: 'Human Cost / War',
    zoneId: 3,
    xPos: 65,
    yPos: 85,
    techniques: ['Mythological Allusion', 'Metaphor', 'Apocalyptic Imagery', 'Climax'],
    literaryDevices: [
      {
        name: 'Mythological Allusion',
        quotePhrase: 'blazing eye of the dragon',
        explanation: 'Compares roaring oil well fire gushers and military destruction to a ferocious, monstrous dragon consuming the earth.'
      },
      {
        name: 'Apocalyptic Imagery',
        quotePhrase: 'for the world\'s last breath',
        explanation: 'Final climactic warning that unchecked military violence and environmental destruction could bring about planetary end.'
      }
    ],
    analysis: 'Stanza 7 brings Gillian Clarke’s elegy to its apocalyptic climax. The "blazing eye of the dragon" invokes mythic fire-breathing monsters to symbolize the terrifying, uncontrollable oil fires and hyper-technological weaponry of modern war.',
    context: 'Firefighters from 10 countries spent 9 months battling the infernos. The oil well gushers shot flames hundreds of feet into the air, visible from space like giant glowing dragon eyes.',
    symbolism: ['Dragon = Military industrial complex, roaring oil well fires', 'World’s last breath = Final ecological warning'],
    keyVocabulary: [
      { word: 'Apocalyptic', definition: 'Resembling the end of the world; catastrophic and ultimate.' },
      { word: 'Litany', definition: 'A tedious recital or repetitive chant, traditionally used in prayers for deliverance.' }
    ],
    essayPrompt: 'Examine how Gillian Clarke uses apocalyptic mythic imagery in the final stanza to warn future generations.'
  }
];

export const LITERARY_TERMS: LiteraryTerm[] = [
  {
    term: 'Elegy',
    category: 'Structure',
    definition: 'A poem of serious reflection, typically a lament for the dead or lost way of life. *Lament* extends elegy beyond human loss to include flora, fauna, and the planet.',
    exampleFromPoem: '"For the cormorant in his nest of silk..."'
  },
  {
    term: 'Litany / Anaphora',
    category: 'Device',
    definition: 'Repetition of a word or phrase at the start of successive lines. Clarke repeats "For..." 21 times to mimic a funeral prayer or memorial roll call.',
    exampleFromPoem: '"For the gull... For the oil... For the soldier..."'
  },
  {
    term: 'Juxtaposition',
    category: 'Device',
    definition: 'Placing two contrasting ideas side-by-side to highlight differences. Pairs delicate beauty with brutal war.',
    exampleFromPoem: '"nest of silk" (oil slick) vs "shadow on the sea"'
  },
  {
    term: 'Anthropomorphism / Personification',
    category: 'Device',
    definition: 'Giving human feelings or qualities to non-human objects or animals, encouraging reader empathy.',
    exampleFromPoem: '"grief of the cormorant", "the sun humbled", "burden of the sea"'
  },
  {
    term: 'Oxymoron',
    category: 'Device',
    definition: 'A figure of speech in which contradictory terms appear in conjunction to signal unnatural conflict.',
    exampleFromPoem: '"ocean\'s scalding boy" (cool sea vs burning heat)'
  },
  {
    term: 'Cosmic Imagery',
    category: 'Device',
    definition: 'Using celestial bodies (sun, earth, horizon) to project human war onto a universal, planetary scale.',
    exampleFromPoem: '"the sun humbled", "burnt earth", "world\'s last breath"'
  },
  {
    term: 'Visceral Imagery',
    category: 'Device',
    definition: 'Physical, sensory description appealing to touch, temperature, sight, and bodily pain.',
    exampleFromPoem: '"uniform of fire", "nest of silk", "streak of fire"'
  },
  {
    term: 'Mythological Allusion',
    category: 'Device',
    definition: 'Referencing folklore, myths, or legendary creatures to amplify scale and terror.',
    exampleFromPoem: '"blazing eye of the dragon"'
  }
];

export const OVERARCHING_ANALYSIS = {
  title: "Gillian Clarke's *Lament*: Structural & Historical Analysis",
  formAndElegy: {
    heading: "Form, Elegy & Meter",
    content: "Written in response to the 1991 Gulf War, *Lament* is a modern anti-war environmental elegy. Unlike traditional elegies focused on a single deceased individual, Clarke expands her mournful scope to encompass entire marine ecosystems, coastal habitats, innocent civilians, young soldiers, and the planet itself. The poem is written in 7 irregular stanzas using free verse with anaphoric rhythm."
  },
  litanyStructure: {
    heading: "The Litany of Losses (Anaphora)",
    content: "The relentless repetition of the preposition 'For...' at the beginning of 21 phrases turns the poem into a solemn litany—a sacred prayer or list of casualties recited at a funeral. Each line names a victim, from the smallest seabird to the planet's atmosphere, creating a cumulative emotional weight that builds to the apocalyptic final stanza."
  },
  gulfWarContext: {
    heading: "1991 Gulf War Historical Background",
    content: "In January 1991, during Operation Desert Storm, Iraqi forces intentionally released over 8 million barrels of crude oil into the Persian Gulf and ignited over 700 Kuwaiti oil wells. The resulting environmental devastation was catastrophic: miles of coastlines were buried in black sludge, tens of thousands of migratory birds starved or suffocated, and black smoke clouds blocked sunlight across the Middle East for nearly a year."
  },
  thematicProgression: {
    heading: "Zone & Thematic Progression",
    content: "The poem moves systematically through three geographic and thematic zones:\n1. Marine Life (Stanzas 1–3): Delicate coastal fauna trapped in petroleum.\n2. Shoreline & Human Impact (Stanzas 4–5): Physical destruction extending to naval personnel and ground combatants.\n3. Desert, Sky & Cosmic Fallout (Stanzas 6–7): Total ecological collapse, global smoke, and apocalyptic war."
  }
};

export const REVISION_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    stanzaNumber: 1,
    question: 'What technique is used in "nest of silk" to describe crude oil in Stanza 1?',
    options: ['Simile', 'Metaphor', 'Onomatopoeia', 'Hyperbole'],
    correctAnswer: 1,
    explanation: '"Nest of silk" is a metaphor comparing viscous, glittering oil to soft luxury silk, emphasizing how deceptively deadly human pollution is.',
    techniqueTested: 'Metaphor'
  },
  {
    id: 2,
    stanzaNumber: 2,
    question: 'Why does Gillian Clarke describe the green turtle as having a "mantle of green"?',
    options: [
      'To show the turtle is camouflage hunting',
      'To bestow royal dignity upon the victimized creature',
      'To indicate the turtle is sick with algae',
      'To emphasize military uniforms'
    ],
    correctAnswer: 1,
    explanation: '"Mantle" (a royal cloak) gives noble dignity to nature, showing that innocent animals are majestic beings suffering from human violence.',
    techniqueTested: 'Regal Diction'
  },
  {
    id: 3,
    stanzaNumber: 3,
    question: 'What paradox / oxymoron is created by the phrase "ocean\'s scalding boy"?',
    options: [
      'The ocean is normally warm and comforting',
      'The ocean (normally cool water) is turned scalding hot by oil fires and naval combat',
      'Boys are naturally cold-blooded',
      'The sun is cooling down the sea'
    ],
    correctAnswer: 1,
    explanation: 'Combining "ocean" (cool water) with "scalding" highlights how war unnaturally transforms life-giving water into a burning trap for young soldiers.',
    techniqueTested: 'Oxymoron / Contrast'
  },
  {
    id: 4,
    stanzaNumber: 4,
    question: 'What structural device is used by repeating "For..." at the start of lines throughout *Lament*?',
    options: ['Alliterative rhyme', 'Anaphora / Litany', 'Sonnet voltas', 'Enjambment'],
    correctAnswer: 1,
    explanation: 'The repetition of "For..." is anaphora, creating a funeral litany or roll call of war casualties.',
    techniqueTested: 'Anaphora'
  },
  {
    id: 5,
    stanzaNumber: 5,
    question: 'What historical event directly inspired the line "for the sun humbled"?',
    options: [
      'A solar eclipse over Baghdad',
      'The burning of over 700 Kuwaiti oil wells creating massive black smoke plumes',
      'Nuclear fallout in Europe',
      'Volcanic eruption in the Gulf'
    ],
    correctAnswer: 1,
    explanation: 'In 1991, retreat fires lit over 700 oil wells in Kuwait, creating dense black smoke clouds that blocked daylight for months.',
    techniqueTested: 'Historical Context / Cosmic Scale'
  },
  {
    id: 6,
    stanzaNumber: 6,
    question: 'In Stanza 6, what dual meaning does the metaphor "veil of oil" carry?',
    options: [
      'A wedding celebration and bright sunshine',
      'Funeral mourning attire and a physical choking layer over the ocean',
      'A magician’s trick and oil drilling rigs',
      'Military camouflage nets'
    ],
    correctAnswer: 1,
    explanation: '"Veil" links the black mourning veil worn by widows with the suffocating layer of oil choking marine life.',
    techniqueTested: 'Elegiac Symbolism'
  },
  {
    id: 7,
    stanzaNumber: 7,
    question: 'What does the "blazing eye of the dragon" symbolize in the final stanza?',
    options: [
      'A mythical pet kept by soldiers',
      'Roaring oil well fire infernos and monstrous military destruction',
      'Ancient Persian gulf folklore',
      'The heat of the desert sand dunes'
    ],
    correctAnswer: 1,
    explanation: 'The "dragon" is a mythological allusion representing the fire-breathing, uncontrollable destruction of oil infernos and war machinery.',
    techniqueTested: 'Mythological Allusion'
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    stanzaNumber: 1,
    front: 'Quote: "nest of silk"\nTechnique?',
    back: 'Metaphor: Compares sticky, toxic crude oil to luxurious silk, revealing how human pollution deceptively traps wildlife.',
    category: 'Marine'
  },
  {
    id: 2,
    stanzaNumber: 2,
    front: 'Quote: "mantle of green"\nTechnique?',
    back: 'Regal Diction / Honorific: Bestows royal dignity upon the green sea turtle victimized by war.',
    category: 'Marine'
  },
  {
    id: 3,
    stanzaNumber: 3,
    front: 'Quote: "ocean\'s scalding boy"\nTechnique?',
    back: 'Oxymoron / Paradox: Juxtaposes cool ocean waters with scalding heat, referencing naval oil fires and young soldiers.',
    category: 'Shoreline'
  },
  {
    id: 4,
    stanzaNumber: 4,
    front: 'Quote: "burden of the sea"\nTechnique?',
    back: 'Personification: The ocean is portrayed as carrying an unbearable physical and moral weight of human sin.',
    category: 'Environmental Trauma'
  },
  {
    id: 5,
    stanzaNumber: 5,
    front: 'Quote: "soldier in his uniform of fire"\nTechnique?',
    back: 'Visceral Imagery: Agonizing description of combatants engulfed in flames during military engagement.',
    category: 'Human Cost'
  },
  {
    id: 6,
    stanzaNumber: 5,
    front: 'Quote: "sun humbled"\nTechnique?',
    back: 'Cosmic Scale / Personification: Thick soot from 700 burning oil wells eclipsed daylight, proving war disrupts planetary cycles.',
    category: 'Environmental Trauma'
  },
  {
    id: 7,
    stanzaNumber: 6,
    front: 'Quote: "veil of oil"\nTechnique?',
    back: 'Elegiac Symbolism: Fuses widow mourning veils with the suffocating slick covering marine life.',
    category: 'Environmental Trauma'
  },
  {
    id: 8,
    stanzaNumber: 7,
    front: 'Quote: "blazing eye of the dragon"\nTechnique?',
    back: 'Mythological Allusion: Compares roaring 100ft oil well fire infernos to a destructive mythic dragon.',
    category: 'War & Desert'
  }
];
