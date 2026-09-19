"use client";

import { useEffect, useState } from "react";

/* =========================================================
   WEEK 4 — GERMAN EXPRESSIONISM
========================================================= */

const lessons = [
  {
    title: "Mise-en-scène",
    definition:
      "Mise-en-scène refers to everything placed in front of the camera and arranged within the frame, including setting, props, lighting, costume, makeup, acting, and composition.",
    keyPoint:
      "Film meaning can be created through the deliberate arrangement of visual elements.",
    examples: ["Setting", "Lighting", "Props", "Costume", "Acting"],
    question:
      "When watching a scene, describe what has been placed in the frame before explaining what it means.",
  },
  {
    title: "Setting",
    definition:
      "Setting is the physical environment in which a scene takes place. In German Expressionism, settings can be distorted, artificial, exaggerated, or psychologically expressive.",
    keyPoint:
      "The environment does not simply contain the action; it can communicate an emotional or psychological state.",
    examples: ["Buildings", "Streets", "Rooms", "Doors", "Windows"],
    question:
      "What would change if the same action happened in a realistic rather than distorted setting?",
  },
  {
    title: "Character",
    definition:
      "Characters communicate through acting, costume, makeup, posture, gesture, movement, and their relationship to the surrounding space.",
    keyPoint:
      "A character's visual presentation can communicate psychological or social information.",
    examples: ["Posture", "Gesture", "Makeup", "Costume"],
    question:
      "What visual details make a character appear threatening, vulnerable, powerful, or strange?",
  },
  {
    title: "Lighting",
    definition:
      "Lighting controls visibility, contrast, shadows, emphasis, and mood. German Expressionist cinema frequently uses dramatic light and shadow.",
    keyPoint:
      "Lighting can make the visible world appear psychologically or emotionally charged.",
    examples: ["Shadows", "Contrast", "Low-key lighting", "Silhouette"],
    question:
      "What does the lighting make you notice first?",
  },
  {
    title: "Composition",
    definition:
      "Composition is the arrangement of people, objects, lines, shapes, spaces, and visual weight within the frame.",
    keyPoint:
      "Where something appears in the frame can influence how viewers understand it.",
    examples: ["Balance", "Lines", "Shape", "Depth", "Scale"],
    question:
      "What visual element dominates the frame, and why might the filmmaker want you to notice it?",
  },
  {
    title: "Cinematic Style",
    definition:
      "Cinematic style is the recognizable way a filmmaker or film movement uses visual and technical choices to communicate meaning.",
    keyPoint:
      "Style is not decoration; it can shape interpretation.",
    examples: ["Lighting", "Composition", "Setting", "Camera"],
    question:
      "Which repeated visual choices make the film recognizable as Expressionist?",
  },
  {
    title: "German Expressionism",
    definition:
      "German Expressionism is a film movement associated with exaggerated sets, distorted spaces, dramatic lighting, unusual compositions, and visual representations of psychological or emotional states.",
    keyPoint:
      "Expressionism often represents an internal state through an altered external world.",
    examples: ["Caligari", "Nosferatu", "Mabuse", "The Golem"],
    question:
      "How does the film make the external world communicate something internal?",
  },
  {
    title: "Visual Distortion",
    definition:
      "Visual distortion occurs when objects, spaces, proportions, lines, or perspectives are deliberately altered from ordinary realistic appearance.",
    keyPoint:
      "Distortion can make ordinary objects or spaces appear psychologically significant.",
    examples: ["Slanted walls", "Impossible streets", "Exaggerated shadows"],
    question:
      "What has been changed from ordinary reality?",
  },
  {
    title: "Defamiliarization",
    definition:
      "Defamiliarization makes something familiar appear strange or unfamiliar so that the viewer notices it differently.",
    keyPoint:
      "Making the familiar strange can encourage viewers to reconsider ordinary objects or spaces.",
    examples: ["Distorted doors", "Unusual streets", "Exaggerated furniture"],
    question:
      "What ordinary thing has been made strange?",
  },
  {
    title: "Symbolic Boundaries",
    definition:
      "Symbolic boundaries are visual or narrative divisions between different states or categories, such as reality and fantasy, sanity and madness, or safety and danger.",
    keyPoint:
      "Films can visually blur boundaries to create uncertainty.",
    examples: ["Doors", "Windows", "Thresholds", "Mirrors"],
    question:
      "What boundary is being created or challenged?",
  },
];

/* =========================================================
   WEEK 4 TERMS
========================================================= */

const terms = [
  {
    term: "Mise-en-scène",
    definition:
      "Everything arranged in front of the camera, including setting, props, lighting, costume, makeup, acting, and composition.",
    remember: "Think: everything placed in the scene.",
    example: "A distorted room, dramatic shadows, and exaggerated acting work together.",
  },
  {
    term: "Setting",
    definition:
      "The physical environment in which a scene takes place.",
    remember: "Where the action happens.",
    example: "A crooked street can make a city feel unstable.",
  },
  {
    term: "Character",
    definition:
      "The people represented in the film and the way their bodies, costumes, gestures, and performances communicate meaning.",
    remember: "Look at how the person is presented, not just what they do.",
    example: "An exaggerated posture can make a character appear threatening.",
  },
  {
    term: "Lighting",
    definition:
      "The use of light and shadow to control visibility, emphasis, contrast, and mood.",
    remember: "Ask what the light makes you see.",
    example: "A large shadow can become more visually important than the person casting it.",
  },
  {
    term: "Composition",
    definition:
      "The arrangement of visual elements within the frame.",
    remember: "Where things are placed matters.",
    example: "A character isolated in a large empty space can appear vulnerable.",
  },
  {
    term: "German Expressionism",
    definition:
      "A film movement known for distorted settings, dramatic lighting, stylized performances, and visual representations of psychological states.",
    remember: "The outside world can represent the inside world.",
    example: "Caligari's distorted streets and buildings create an unstable visual world.",
  },
  {
    term: "Visual Distortion",
    definition:
      "The deliberate alteration of realistic shape, proportion, perspective, or space.",
    remember: "Something ordinary is visually changed.",
    example: "A wall may appear unnaturally slanted.",
  },
  {
    term: "Defamiliarization",
    definition:
      "Making a familiar object, space, or experience appear strange.",
    remember: "Familiar → strange.",
    example: "An ordinary chair can become visually unsettling through scale and placement.",
  },
  {
    term: "Symbolic Boundary",
    definition:
      "A visual or narrative division between different categories or states.",
    remember: "Think of a threshold between two conditions.",
    example: "A doorway can separate safety from danger.",
  },
  {
    term: "Subjective Perspective",
    definition:
      "A perspective that represents or suggests a character's psychological or perceptual experience.",
    remember: "What the character experiences rather than neutral reality.",
    example: "A distorted environment may reflect a character's mental state.",
  },
  {
    term: "Liminal Space",
    definition:
      "A threshold or transitional space between two states or locations.",
    remember: "A space between things.",
    example: "A doorway can function as a liminal space.",
  },
  {
    term: "Low-key Lighting",
    definition:
      "Lighting characterized by strong contrast between light and dark areas.",
    remember: "Lots of shadow and contrast.",
    example: "A face partially hidden in darkness.",
  },
  {
    term: "National Cinema",
    definition:
      "Cinema associated with the cultural, historical, political, or industrial conditions of a particular nation.",
    remember: "Film connected to a national context.",
    example: "German Expressionism developed within a particular German historical context.",
  },
  {
    term: "UFA",
    definition:
      "Universum Film AG, a major German film company associated with German cinema during the early twentieth century.",
    remember: "A major German film studio.",
    example: "UFA was important to the development of German film production.",
  },
  {
    term: "Classical Narrative",
    definition:
      "A storytelling structure that generally uses logical cause and effect, continuity, and a recognizable beginning, middle, and end.",
    remember: "Story logic guides the viewer.",
    example: "One event motivates the next.",
  },
  {
    term: "Graphic Art",
    definition:
      "Visual art emphasizing lines, shapes, forms, contrast, and designed imagery.",
    remember: "Think visually designed shapes and lines.",
    example: "Expressionist film sets can resemble graphic artwork.",
  },
];

/* =========================================================
   WEEK 5 — TERMS
========================================================= */

const week5Terms = [
  {
    term: "Editing",
    definition:
      "The process of selecting, arranging, and connecting shots to create scenes, sequences, rhythm, space, time, and meaning.",
    importance:
      "Editing is where individual shots become part of a larger cinematic structure.",
  },
  {
    term: "Montage",
    definition:
      "The arrangement or juxtaposition of shots so that their combination produces meaning beyond what either shot communicates by itself.",
    importance:
      "Montage makes editing an active form of meaning-making.",
  },
  {
    term: "Kuleshov Effect",
    definition:
      "The phenomenon in which viewers interpret the same shot differently depending on the shot placed next to it.",
    importance:
      "It demonstrates that audiences construct meaning from relationships between shots.",
  },
  {
    term: "Soviet Montage",
    definition:
      "A film theory and practice associated with Soviet cinema that emphasizes editing and juxtaposition as central to cinematic meaning.",
    importance:
      "Soviet filmmakers pushed editing beyond simply connecting a story.",
  },
  {
    term: "Juxtaposition",
    definition:
      "Placing two or more elements next to each other so that their relationship becomes meaningful.",
    importance:
      "Juxtaposition can encourage viewers to make connections that are not explicitly stated.",
  },
  {
    term: "Collision",
    definition:
      "Eisenstein's idea that conflicting or contrasting shots can generate a new idea or meaning.",
    importance:
      "Collision distinguishes montage from simple logical linkage.",
  },
  {
    term: "Linkage",
    definition:
      "A logical or causal connection in which one shot or event leads naturally into another.",
    importance:
      "Linkage is central to classical continuity storytelling.",
  },
  {
    term: "Dialectical Montage",
    definition:
      "A montage model based on conflict between elements, where opposing ideas can produce a new synthesis.",
    importance:
      "It connects Eisenstein's editing theory to dialectical thought.",
  },
  {
    term: "Continuity Editing",
    definition:
      "Editing designed to create a smooth, logical, and spatially coherent flow of action.",
    importance:
      "It helps viewers understand where characters and objects are in relation to one another.",
  },
  {
    term: "Discontinuity Editing",
    definition:
      "Editing that deliberately disrupts spatial, temporal, or visual continuity.",
    importance:
      "Discontinuity can create confusion, psychological intensity, or self-conscious attention to editing.",
  },
  {
    term: "Parallel Editing",
    definition:
      "Cutting between two or more actions or storylines that are presented as occurring in relation to one another.",
    importance:
      "It can create suspense or encourage viewers to compare separate events.",
  },
  {
    term: "Eyeline Match",
    definition:
      "A continuity technique in which a shot of a character looking is followed by a shot showing what the character appears to be looking at.",
    importance:
      "It helps establish spatial relationships.",
  },
  {
    term: "180-Degree Rule",
    definition:
      "A continuity principle that keeps the camera on one side of an imaginary axis so screen direction remains consistent.",
    importance:
      "Breaking the rule can intentionally disorient the viewer.",
  },
  {
    term: "Ellipsis",
    definition:
      "The omission of unnecessary time or action so that the film moves efficiently from one important moment to another.",
    importance:
      "Editing can manipulate the viewer's experience of time.",
  },
  {
    term: "Jump Cut",
    definition:
      "A cut between similar shots that creates a visible discontinuity in time or space.",
    importance:
      "Jump cuts can emphasize time passing, instability, chaos, or the act of editing itself.",
  },
  {
    term: "Screen Direction",
    definition:
      "The consistent direction in which characters or objects appear to move across the screen.",
    importance:
      "Maintaining screen direction helps viewers understand cinematic space.",
  },
];

/* =========================================================
   WEEK 5 — LESSONS
========================================================= */

const week5Lessons = [
  {
    id: 1,
    title: "Editing as Cinematic Language",
    summary:
      "Editing connects individual shots into larger units of cinematic meaning.",
    points: [
      "A shot has meaning, but its meaning can change when placed beside another shot.",
      "Editing works like cinematic grammar or syntax.",
      "The editor transforms raw footage into a coherent sequence.",
      "Juxtaposition gives individual images greater communicative power.",
    ],
  },
  {
    id: 2,
    title: "The Kuleshov Effect",
    summary:
      "Viewers use surrounding shots to interpret the meaning or emotion of a shot.",
    points: [
      "The same face can appear hungry, sad, or interested depending on the neighboring shot.",
      "Meaning is produced through relationships between images.",
      "The audience actively participates in constructing meaning.",
      "The effect demonstrates why editing matters beyond simple continuity.",
    ],
  },
  {
    id: 3,
    title: "Soviet Montage",
    summary:
      "Soviet filmmakers treated editing as one of the central creative tools of cinema.",
    points: [
      "The Soviet Montage Movement developed in the 1920s.",
      "Lev Kuleshov, Sergei Eisenstein, and Dziga Vertov were major figures.",
      "Editing could communicate political, social, and ideological ideas.",
      "Meaning could be generated through juxtaposition rather than explicit dialogue.",
    ],
  },
  {
    id: 4,
    title: "Eisenstein and Montage",
    summary:
      "Sergei Eisenstein developed theories of montage based on conflict, collision, and dialectical relationships.",
    points: [
      "Eisenstein distinguished montage from simple logical linkage.",
      "Shots can collide rather than merely connect.",
      "Thesis and antithesis can produce a new synthesis.",
      "The goal is to make viewers actively construct an idea.",
    ],
  },
  {
    id: 5,
    title: "Linkage vs. Collision",
    summary:
      "Classical editing often links events through cause and effect, while montage can create meaning through collision.",
    points: [
      "Linkage resembles connected train cars: one event leads to another.",
      "Collision places contrasting elements together.",
      "Collision can create a third meaning not contained in either image alone.",
      "Montage does not necessarily follow ordinary narrative logic.",
    ],
  },
  {
    id: 6,
    title: "Strike (1925)",
    summary:
      "Eisenstein's Strike demonstrates how editing can create political meaning through juxtaposition.",
    points: [
      "Workers being killed are intercut with footage of animals being slaughtered.",
      "The two events are not literally the same event.",
      "Their juxtaposition encourages the viewer to connect the treatment of workers with slaughter.",
      "Editing creates an idea that neither image communicates alone.",
    ],
  },
  {
    id: 7,
    title: "Continuity Editing",
    summary:
      "Continuity editing creates spatial and temporal coherence so viewers can follow the story smoothly.",
    points: [
      "Eyeline matches establish relationships between characters and objects.",
      "The 180-degree rule preserves screen direction.",
      "Cutting on action can make edits less noticeable.",
      "Master shots and coverage provide editors with multiple ways to construct a scene.",
    ],
  },
  {
    id: 8,
    title: "Editing Space and Time",
    summary:
      "Editing can manipulate both cinematic space and cinematic time.",
    points: [
      "Ellipsis removes unnecessary events.",
      "Flashbacks and flashforwards reorganize chronology.",
      "Editing can make separate locations appear connected.",
      "Rhythm refers to the pace at which shots and information are presented.",
    ],
  },
  {
    id: 9,
    title: "Discontinuity Editing",
    summary:
      "Discontinuity deliberately disrupts the smooth spatial or temporal logic of continuity editing.",
    points: [
      "Jump cuts can make the passage of time visible.",
      "Breaking screen direction can disorient the viewer.",
      "Discontinuous editing can represent fractured memory or psychology.",
      "The viewer becomes more aware of editing as a technique.",
    ],
  },
  {
    id: 10,
    title: "Montage and Cinematic Meaning",
    summary:
      "Montage treats the relationship between shots as a central source of cinematic meaning.",
    points: [
      "The key question is what meaning emerges between shots.",
      "Individual shots may be concrete while their combination produces an abstract idea.",
      "Eisenstein compared this process to combinations of ideograms.",
      "Montage makes viewers interpret relationships rather than simply follow events.",
    ],
  },
];

/* =========================================================
   WEEK 5 — READING / LECTURE NOTES
========================================================= */

const week5ReadingNotes = [
  {
    title: "Film Is Made Three Times",
    body:
      "Film can be understood as being made through three major stages: the screenwriter creates the blueprint, production translates that blueprint into shots and scenes, and post-production editing transforms the raw footage into a finished cinematic structure.",
    takeaway:
      "Editing is not simply cleaning up footage. It is a major stage of cinematic creation.",
  },
  {
    title: "Editing as Cinematic Grammar",
    body:
      "A single shot can communicate information, but its meaning gains additional force when it becomes part of a sequence. Editing functions like cinematic syntax because the relationship between images helps audiences construct meaning.",
    takeaway:
      "Ask not only what a shot shows, but what its placement next to another shot makes you think.",
  },
  {
    title: "The Kuleshov Effect",
    body:
      "Lev Kuleshov's famous experiment demonstrated how viewers interpret the same facial expression differently depending on the image that follows it. A face paired with soup can suggest hunger; paired with a dead child it can suggest sadness; paired with a woman it can suggest attraction.",
    takeaway:
      "The neighboring shot changes how the viewer interprets the first shot.",
  },
  {
    title: "Soviet Montage",
    body:
      "Soviet filmmakers in the 1920s pushed editing beyond its classical narrative function. Instead of using editing only to establish geography and advance a plot, they explored how juxtaposed images could communicate social, political, and ideological ideas.",
    takeaway:
      "Editing can be an active method of creating ideas.",
  },
  {
    title: "Classical Continuity",
    body:
      "Classical narrative editing generally attempts to make the flow of action understandable. Eyeline matches, screen direction, the 180-degree rule, cutting on action, master shots, and coverage help maintain spatial and temporal coherence.",
    takeaway:
      "Continuity editing generally tries to make editing feel invisible.",
  },
  {
    title: "Ellipsis and Time",
    body:
      "Editing can remove unnecessary events. A film might show a car arriving and then immediately cut to a person standing at a door, allowing the audience to understand that the journey occurred without showing every second of it.",
    takeaway:
      "Editing controls how much cinematic time the viewer experiences.",
  },
  {
    title: "Editing Rhythm",
    body:
      "Rhythm refers to the pace created by editing. The length of shots and the amount of visual information presented influence how quickly viewers process a sequence.",
    takeaway:
      "Fast editing is not automatically meaningful; consider what the pace does to the viewer.",
  },
  {
    title: "Continuity vs. Discontinuity",
    body:
      "Continuity editing seeks coherence, while discontinuity editing intentionally disrupts that coherence. Discontinuity can represent fractured memory, confusion, psychological instability, or the filmmaker's desire to make the viewer notice the editing process.",
    takeaway:
      "A break in continuity can itself become meaningful.",
  },
  {
    title: "Eisenstein's Collision",
    body:
      "Eisenstein argued that montage could operate through conflict or collision. Rather than simply linking one event to the next, editing could place contrasting images together and encourage viewers to generate a new idea.",
    takeaway:
      "Collision asks what a combination of images produces.",
  },
  {
    title: "Ideograms and Montage",
    body:
      "Eisenstein used Japanese writing as an analogy for montage. Separate concrete elements can combine to communicate a more abstract concept. The important principle is that the combination creates something beyond the isolated elements.",
    takeaway:
      "Concrete image + concrete image can produce an abstract idea.",
  },
  {
    title: "Strike and Political Meaning",
    body:
      "In Strike, footage of workers being attacked is intercut with footage of animals being slaughtered. The events are not literally the same, but the editing encourages viewers to understand the workers' treatment through the image of slaughter.",
    takeaway:
      "The political meaning comes from the relationship created through editing.",
  },
];

/* =========================================================
   WEEK 4 FILM EXAMPLES
========================================================= */

const filmExamples = [
  {
    title: "The Cabinet of Dr. Caligari",
    year: "1920",
    director: "Robert Wiene",
    concepts: ["Distortion", "Mise-en-scène", "Defamiliarization"],
    emphasis:
      "The film uses distorted architecture, painted shadows, unusual shapes, and stylized spaces to make the world appear psychologically unstable.",
    lookFor: [
      "Slanted walls",
      "Distorted streets",
      "Painted shadows",
      "Unusual doors and windows",
    ],
  },
  {
    title: "Nosferatu",
    year: "1922",
    director: "F. W. Murnau",
    concepts: ["Shadow", "Lighting", "Subjective Perspective"],
    emphasis:
      "The film uses shadows, spaces, movement, and visual contrast to create an uncanny atmosphere.",
    lookFor: [
      "The vampire's shadow",
      "Doorways and thresholds",
      "Strong contrasts",
      "Unusual movement",
    ],
  },
  {
    title: "Dr. Mabuse, the Gambler",
    year: "1922",
    director: "Fritz Lang",
    concepts: ["Composition", "Power", "Visual Design"],
    emphasis:
      "The film uses composition and visual design to explore power, manipulation, and psychological control.",
    lookFor: [
      "Crowded compositions",
      "Faces and gazes",
      "Geometric arrangements",
      "Spaces associated with power",
    ],
  },
  {
    title: "The Golem",
    year: "1920",
    director: "Paul Wegener and Carl Boese",
    concepts: ["Setting", "Architecture", "Expressionist Design"],
    emphasis:
      "The film uses stylized environments and architecture to construct a distinctive visual world.",
    lookFor: [
      "Architecture",
      "Doorways",
      "Geometric forms",
      "Character scale",
    ],
  },
  {
    title: "Expressionism's Influence",
    year: "1930s–present",
    director: "Later filmmakers",
    concepts: ["Style", "Shadow", "Distortion"],
    emphasis:
      "Expressionist techniques continued to influence later filmmakers through lighting, composition, distortion, and psychological visual design.",
    lookFor: [
      "High contrast",
      "Distorted spaces",
      "Expressionistic shadows",
      "Psychological environments",
    ],
  },
];

/* =========================================================
   WEEK 4 VIEWING
========================================================= */

const viewingChecklist = [
  [
    "Setting",
    [
      "What physical environment surrounds the characters?",
      "Does the space look realistic or distorted?",
      "Are walls, buildings, doors, or windows unusual?",
    ],
  ],
  [
    "Lighting",
    [
      "Where is the strongest light?",
      "Where are the deepest shadows?",
      "What does the lighting make you notice?",
    ],
  ],
  [
    "Character",
    [
      "How do characters move?",
      "What do costume and makeup communicate?",
      "How does posture affect your interpretation?",
    ],
  ],
  [
    "Composition",
    [
      "Where are characters positioned?",
      "What lines and shapes dominate?",
      "How is foreground, middle ground, and background organized?",
    ],
  ],
  [
    "Distortion",
    [
      "What looks unlike ordinary reality?",
      "Which familiar object has been made strange?",
      "What effect does the distortion create?",
    ],
  ],
  [
    "Boundaries",
    [
      "Are there doors, windows, thresholds, or other boundaries?",
      "What categories do these boundaries separate?",
      "Does the film blur those categories?",
    ],
  ],
  [
    "Psychology",
    [
      "Does the environment appear to reflect a character's internal state?",
      "What emotion or psychological condition does the visual design suggest?",
      "What specific evidence supports your interpretation?",
    ],
  ],
];

/* =========================================================
   WEEK 4 COMPARISON
========================================================= */

const filmComparison = [
  [
    "Visual distortion",
    "Extensive",
    "More restrained",
    "Selective",
    "Stylized",
  ],
  [
    "Lighting",
    "Dramatic",
    "Strong shadows",
    "Contrasting",
    "Stylized",
  ],
  [
    "Architecture",
    "Highly distorted",
    "More realistic",
    "Urban and controlled",
    "Highly stylized",
  ],
  [
    "Psychological effect",
    "Very strong",
    "Uncanny",
    "Manipulative",
    "Mythic",
  ],
  [
    "Boundaries",
    "Reality/madness",
    "Human/monster",
    "Power/control",
    "Human/created being",
  ],
  [
    "Defamiliarization",
    "Very visible",
    "Through shadow and movement",
    "Through composition",
    "Through design",
  ],
  [
    "Overall visual world",
    "Distorted",
    "Uncanny",
    "Controlled",
    "Stylized",
  ],
];

/* =========================================================
   WEEK 4 FRAME / FIRST SHOT
========================================================= */

const frameSteps = [
  [
    "Shot scale",
    "Identify how much of the subject is visible.",
    ["Long shot", "Medium shot", "Close-up"],
  ],
  [
    "Camera angle",
    "Identify the relationship between the camera and the subject.",
    ["High angle", "Eye level", "Low angle"],
  ],
  [
    "Spatial depth",
    "Look at how the image is organized across space.",
    ["Foreground", "Middle ground", "Background"],
  ],
  [
    "Composition",
    "Identify the visual structures that organize the frame.",
    ["Lines", "Shapes", "Symmetry", "Perspective"],
  ],
];

const firstShotSteps = [
  [
    "Shot scale",
    "Begin by identifying whether the first shot is a long shot, medium shot, close-up, or another scale.",
  ],
  [
    "Camera angle",
    "Identify whether the camera looks down, straight across, or upward.",
  ],
  [
    "Mise-en-scène",
    "Describe the important elements arranged in front of the camera.",
  ],
  [
    "Foreground",
    "Identify what appears closest to the camera.",
  ],
  [
    "Middle ground",
    "Identify the important elements between the foreground and background.",
  ],
  [
    "Background",
    "Describe the environment behind the main subject.",
  ],
  [
    "Screen direction",
    "Identify whether movement or visual attention is directed toward screen left or screen right.",
  ],
  [
    "Lines and perspective",
    "Identify strong lines, diagonals, depth cues, or perspective that organize the image.",
  ],
];

/* =========================================================
   WEEK 4 ASSIGNMENT
========================================================= */

const assignmentRequirements = [
  [
    1,
    "Watch the film",
    "Watch the assigned film rather than relying on summaries or outside descriptions.",
    ["Watch the film yourself."],
  ],
  [
    2,
    "Choose one example",
    "Choose either a visually distorted/defamiliarized object or a moment that blurs a symbolic boundary.",
    ["Choose one specific moment."],
  ],
  [
    3,
    "After the first ten minutes",
    "Your example must occur after the first ten minutes of the film.",
    ["Check the timestamp."],
  ],
  [
    4,
    "Use your own screenshot",
    "Your evidence must come from your own viewing.",
    ["Capture your own screenshot."],
  ],
  [
    5,
    "Describe evidence specifically",
    "Describe what is actually visible in the image.",
    ["Name objects, shapes, lines, lighting, spatial relationships, or other visible details."],
  ],
  [
    6,
    "Explain the effect",
    "Explain what the visual choice does to the viewer's experience.",
    ["Move beyond simply saying that something looks strange."],
  ],
  [
    7,
    "Connect to German Expressionism",
    "Explain how your evidence demonstrates a course concept.",
    ["Make the connection explicit."],
  ],
  [
    8,
    "Proofread",
    "Make sure the final response is clear and readable.",
    ["Check grammar, clarity, and organization."],
  ],
];

/* =========================================================
   WEEK 4 QUIZ
========================================================= */

const quizQuestions = [
  {
    question: "What is mise-en-scène?",
    options: [
      "Only the editing of a film",
      "Everything arranged in front of the camera",
      "Only the dialogue in a film",
      "Only the camera movement",
    ],
    answer: 1,
  },
  {
    question: "Which feature is strongly associated with German Expressionism?",
    options: [
      "Only realistic locations",
      "Distorted settings and dramatic visual design",
      "No use of lighting",
      "Only documentary footage",
    ],
    answer: 1,
  },
  {
    question: "What does defamiliarization do?",
    options: [
      "Makes familiar things appear strange",
      "Makes every scene realistic",
      "Removes all visual style",
      "Eliminates the setting",
    ],
    answer: 0,
  },
  {
    question: "What can dramatic lighting communicate?",
    options: [
      "Only the time of day",
      "Mood, emphasis, and psychological states",
      "Only character names",
      "Only dialogue",
    ],
    answer: 1,
  },
  {
    question: "What is visual distortion?",
    options: [
      "Accidentally filming the wrong scene",
      "Deliberately altering realistic visual appearance",
      "Removing all objects",
      "Using only close-ups",
    ],
    answer: 1,
  },
  {
    question: "What is a symbolic boundary?",
    options: [
      "A division between different states or categories",
      "A type of camera lens",
      "A film soundtrack",
      "A production company",
    ],
    answer: 0,
  },
  {
    question: "Which film is associated with Robert Wiene?",
    options: [
      "Nosferatu",
      "The Golem",
      "The Cabinet of Dr. Caligari",
      "Strike",
    ],
    answer: 2,
  },
  {
    question:
      "What is a strong approach to analyzing an Expressionist image?",
    options: [
      "Describe it only as weird",
      "Describe visible evidence, explain its effect, and connect it to a concept",
      "Summarize the entire plot",
      "Use only information from an internet search",
    ],
    answer: 1,
  },
];

/* =========================================================
   WEEK 5 — KULESHOV PRACTICE
========================================================= */

const kuleshovScenarios = [
  {
    title: "Scenario 1: The Soup",
    shotA:
      "Shot A: A man looks directly ahead with a neutral facial expression.",
    shotB:
      "Shot B: A steaming bowl of soup sits on a table.",
    prompt:
      "If these two shots are placed together, what might the audience infer about the man's response?",
  },
  {
    title: "Scenario 2: The Child",
    shotA:
      "Shot A: The same man looks directly ahead with the same neutral facial expression.",
    shotB:
      "Shot B: A child lies motionless in a bed.",
    prompt:
      "How might the meaning of the man's expression change when the neighboring shot changes?",
  },
  {
    title: "Scenario 3: The Woman",
    shotA:
      "Shot A: The same man looks directly ahead with the same neutral facial expression.",
    shotB:
      "Shot B: A woman walks through the room.",
    prompt:
      "What interpretation might the audience construct from this pairing?",
  },
];

/* =========================================================
   WEEK 5 — MONTAGE PRACTICE
========================================================= */

const montageScenarios = [
  {
    title: "Montage Scenario 1",
    shotA:
      "Shot A: A factory worker wipes sweat from their face after a long shift.",
    shotB:
      "Shot B: A machine continues operating rapidly.",
    prompt:
      "What meaning might emerge from placing these shots together?",
  },
  {
    title: "Montage Scenario 2",
    shotA:
      "Shot A: A group of workers move toward a factory entrance.",
    shotB:
      "Shot B: A row of identical mechanical parts moves along a conveyor belt.",
    prompt:
      "What relationship might the juxtaposition encourage you to notice?",
  },
  {
    title: "Montage Scenario 3",
    shotA:
      "Shot A: A politician raises a glass during a formal dinner.",
    shotB:
      "Shot B: Workers eat a simple meal in a crowded room.",
    prompt:
      "What social contrast could the editing encourage the audience to construct?",
  },
];

/* =========================================================
   WEEK 5 — DISCUSSION
========================================================= */

const week5DiscussionPrompts = [
  {
    title: "Editing as Meaning",
    prompt:
      "How does Soviet montage challenge the idea that editing should simply connect one event to the next?",
  },
  {
    title: "The Kuleshov Effect",
    prompt:
      "Why does the Kuleshov Effect demonstrate that audiences actively participate in creating cinematic meaning?",
  },
  {
    title: "Strike",
    prompt:
      "How does the juxtaposition of workers being killed and animals being slaughtered create meaning beyond the individual shots?",
  },
  {
    title: "Continuity vs. Montage",
    prompt:
      "What is the difference between linkage in classical continuity editing and collision in Eisenstein's theory of montage?",
  },
];

/* =========================================================
   WEEK 5 QUIZ
========================================================= */

const week5QuizQuestions = [
  {
    question:
      "What is the central idea of Soviet montage?",
    options: [
      "Editing should always remain invisible",
      "Meaning can be created through the relationship between shots",
      "Films should never use close-ups",
      "Every film must follow chronological time",
    ],
    answer: 1,
  },
  {
    question: "What does the Kuleshov Effect demonstrate?",
    options: [
      "Lighting determines all meaning",
      "The same shot can be interpreted differently depending on the neighboring shot",
      "Actors must change their expressions between every shot",
      "Editing has no effect on interpretation",
    ],
    answer: 1,
  },
  {
    question: "Which filmmaker is strongly associated with Soviet montage theory?",
    options: [
      "Sergei Eisenstein",
      "Robert Wiene",
      "F. W. Murnau",
      "Georges Méliès",
    ],
    answer: 0,
  },
  {
    question: "What is the difference between linkage and collision?",
    options: [
      "Linkage creates causal continuity; collision creates meaning through contrast or conflict",
      "They mean exactly the same thing",
      "Collision is only used for sound",
      "Linkage means using no editing",
    ],
    answer: 0,
  },
  {
    question: "What happens in the important montage sequence in Strike?",
    options: [
      "Workers are compared through editing with slaughtered animals",
      "A character walks through a realistic city",
      "A wedding is shown without cuts",
      "A single shot lasts the entire sequence",
    ],
    answer: 0,
  },
  {
    question: "What is continuity editing generally designed to do?",
    options: [
      "Create spatial and temporal coherence",
      "Make every shot confusing",
      "Remove all cause and effect",
      "Prevent viewers from understanding geography",
    ],
    answer: 0,
  },
  {
    question: "What is an eyeline match?",
    options: [
      "A cut from a character looking to what the character appears to be looking at",
      "A cut between two unrelated objects",
      "A type of soundtrack",
      "A type of camera lens",
    ],
    answer: 0,
  },
  {
    question: "What is ellipsis?",
    options: [
      "Showing every second of an event",
      "Removing unnecessary time or action",
      "Breaking the 180-degree rule",
      "Using only close-ups",
    ],
    answer: 1,
  },
  {
    question: "What is a jump cut?",
    options: [
      "A smooth continuity transition",
      "A cut that creates a visible discontinuity between similar shots",
      "A fade to black",
      "A type of sound effect",
    ],
    answer: 1,
  },
  {
    question: "What does Eisenstein mean by collision?",
    options: [
      "Shots are placed in conflict or contrast so that a new idea can emerge",
      "Two cameras physically collide",
      "Actors collide on screen",
      "The film has no editing",
    ],
    answer: 0,
  },
];

/* =========================================================
   PROGRESS
========================================================= */

const defaultProgress = {
  requirements: false,
  terms: false,
  week5Terms: false,
  notes: false,
  films: false,
  viewing: false,
  compare: false,
  learn: false,
  week5: false,
  kuleshov: false,
  montage: false,
  frame: false,
  analysis: false,
  coach: false,
  discussion: false,
  week5Discussion: false,
  firstShot: false,
  quiz: false,
  week5Quiz: false,
};

const progressItems = [
  ["requirements", "Week 4 Assignment Requirements reviewed"],
  ["terms", "Week 4 Key Terms studied"],
  ["week5Terms", "Week 5 Key Terms studied"],
  ["notes", "Reading & Lecture Notes reviewed"],
  ["films", "Film Examples reviewed"],
  ["viewing", "Film Viewing Checklist used"],
  ["compare", "Compare the Films reviewed"],
  ["learn", "Week 4 Lessons completed"],
  ["week5", "Week 5 Lessons completed"],
  ["kuleshov", "Kuleshov Effect practiced"],
  ["montage", "Montage Analysis practiced"],
  ["frame", "Frame Analysis practiced"],
  ["analysis", "Build an Analysis practiced"],
  ["coach", "A-Level Coach completed"],
  ["discussion", "Week 4 Discussion Practice completed"],
  ["week5Discussion", "Week 5 Discussion Practice completed"],
  ["firstShot", "First Shot practiced"],
  ["quiz", "Week 4 Quiz completed"],
  ["week5Quiz", "Week 5 Quiz completed"],
];

/* =========================================================
   MAIN APP
========================================================= */

export default function Home() {
  const [section, setSection] = useState("home");

  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState(0);

  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const [week5QuizIndex, setWeek5QuizIndex] = useState(0);
  const [week5SelectedAnswer, setWeek5SelectedAnswer] = useState<number | null>(
    null
  );
  const [week5Score, setWeek5Score] = useState(0);

  const [frameStep, setFrameStep] = useState(0);
  const [firstShotStep, setFirstShotStep] = useState(0);

  const [claim, setClaim] = useState("");
  const [evidence, setEvidence] = useState("");
  const [explanation, setExplanation] = useState("");
  const [connection, setConnection] = useState("");
  const [analysisFeedback, setAnalysisFeedback] = useState("");

  const [discussionPrompt, setDiscussionPrompt] = useState(0);
  const [discussionResponse, setDiscussionResponse] = useState("");
  const [discussionFeedback, setDiscussionFeedback] = useState("");

  const [week5DiscussionPrompt, setWeek5DiscussionPrompt] = useState(0);
  const [week5DiscussionResponse, setWeek5DiscussionResponse] =
    useState("");
  const [week5DiscussionFeedback, setWeek5DiscussionFeedback] = useState("");

  const [firstShotNotes, setFirstShotNotes] = useState("");
  const [firstShotFeedback, setFirstShotFeedback] = useState("");

  const [coachEvidence, setCoachEvidence] = useState("");
  const [coachEffect, setCoachEffect] = useState("");
  const [coachConcept, setCoachConcept] = useState("");
  const [coachFeedback, setCoachFeedback] = useState("");

  const [kuleshovIndex, setKuleshovIndex] = useState(0);
  const [kuleshovResponse, setKuleshovResponse] = useState("");
  const [kuleshovFeedback, setKuleshovFeedback] = useState("");

  const [montageIndex, setMontageIndex] = useState(0);
  const [montageMeaning, setMontageMeaning] = useState("");
  const [montageConcept, setMontageConcept] = useState("");
  const [montageFeedback, setMontageFeedback] = useState("");

  const [progress, setProgress] = useState(defaultProgress);
  const [progressLoaded, setProgressLoaded] = useState(false);

  /* =========================================================
     LOAD / SAVE PROGRESS
  ========================================================= */

  useEffect(() => {
    const saved = localStorage.getItem("humanities21-film-progress");

    if (saved) {
      try {
        setProgress({
          ...defaultProgress,
          ...JSON.parse(saved),
        });
      } catch {
        localStorage.removeItem("humanities21-film-progress");
      }
    }

    setProgressLoaded(true);
  }, []);

  useEffect(() => {
    if (!progressLoaded) return;

    localStorage.setItem(
      "humanities21-film-progress",
      JSON.stringify(progress)
    );
  }, [progress, progressLoaded]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  function goTo(id: string) {
    setSection(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     WEEK 4 ANALYSIS CHECKER
  ========================================================= */

  function checkAnalysis() {
    const claimStrong = claim.trim().length > 15;
    const evidenceStrong = evidence.trim().length > 20;
    const explanationStrong = explanation.trim().length > 20;
    const connectionStrong = connection.trim().length > 15;

    if (!claimStrong || !evidenceStrong || !explanationStrong || !connectionStrong) {
      setAnalysisFeedback(
        "Complete all four parts with enough detail before checking your analysis."
      );
      return;
    }

    const evidenceSpecific =
      /wall|door|window|shadow|light|shape|line|space|building|street|object|chair|room|costume|makeup|composition|foreground|background|angle|perspective/i.test(
        evidence
      );

    const connectionSpecific =
      /expressionism|expressionist|distortion|defamiliarization|mise-en-scène|mise en scène|psychological|visual/i.test(
        connection
      );

    if (!evidenceSpecific) {
      setAnalysisFeedback(
        "Your evidence needs to become more specific. Name something the viewer can actually see: a shape, shadow, object, line, space, character position, or other visual detail."
      );
      return;
    }

    if (!connectionSpecific) {
      setAnalysisFeedback(
        "Your course connection needs to be explicit. Explain exactly how the evidence demonstrates German Expressionism or one of its concepts."
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      analysis: true,
    }));

    setAnalysisFeedback(
      "Strong structure. You have a claim, specific evidence, an explanation of its effect, and an explicit course connection."
    );
  }

  /* =========================================================
     WEEK 4 DISCUSSION CHECKER
  ========================================================= */

  function checkDiscussion() {
    const words = discussionResponse.trim().split(/\s+/).filter(Boolean);

    if (words.length < 50) {
      setDiscussionFeedback(
        "Develop the response further. Aim for at least 50 words so that you can provide evidence and explain its significance."
      );
      return;
    }

    const hasVisualEvidence =
      /scene|shot|frame|set|setting|lighting|shadow|object|character|makeup|composition|line|shape|space|door|chair|bed|building|Cesare/i.test(
        discussionResponse
      );

    const hasAnalysis =
      /because|shows|suggests|creates|makes|communicates|emphasizes|expresses|therefore|effect/i.test(
        discussionResponse
      );

    if (!hasVisualEvidence) {
      setDiscussionFeedback(
        "Add specific visual evidence from the film. Name what you actually see."
      );
      return;
    }

    if (!hasAnalysis) {
      setDiscussionFeedback(
        "You have evidence, but develop the analytical connection. Explain what the visual choice does or communicates."
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      discussion: true,
    }));

    setDiscussionFeedback(
      "Good discussion structure: you have enough development, visual evidence, and analytical language."
    );
  }

  /* =========================================================
     WEEK 4 FIRST SHOT CHECKER
  ========================================================= */

  function checkFirstShot() {
    const text = firstShotNotes.toLowerCase();

    const checks = [
      /long shot|medium shot|close-up|close up|wide shot/.test(text),
      /high angle|eye level|low angle/.test(text),
      /foreground|middle ground|background/.test(text),
      /screen left|screen right/.test(text),
      /depth|diagonal|line|perspective/.test(text),
    ];

    const passed = checks.filter(Boolean).length;

    if (passed >= 5) {
      setProgress((current) => ({
        ...current,
        firstShot: true,
      }));

      setFirstShotFeedback(
        "Good checklist coverage. You included shot scale, angle, spatial depth, screen direction, and compositional details."
      );
    } else {
      setFirstShotFeedback(
        "Add more specific visual information. Make sure your description addresses scale, camera angle, foreground/middle ground/background, screen left/right, and lines or perspective."
      );
    }
  }

  /* =========================================================
     WEEK 4 COACH
  ========================================================= */

  function checkCoach() {
    const evidenceWords = coachEvidence.trim().split(/\s+/).filter(Boolean);
    const effectWords = coachEffect.trim().split(/\s+/).filter(Boolean);

    const hasSpecificEvidence =
      evidenceWords.length >= 12 &&
      /wall|door|window|shadow|light|shape|line|space|building|street|object|chair|room|foreground|background|angle|perspective/i.test(
        coachEvidence
      );

    const hasEffect =
      effectWords.length >= 12 &&
      /creates|makes|causes|suggests|emphasizes|draws|directs|forces|encourages|communicates|feels|viewer|audience/i.test(
        coachEffect
      );

    if (!coachEvidence.trim() || !coachEffect.trim() || !coachConcept.trim()) {
      setCoachFeedback(
        "Complete all three parts: what you see, what effect it creates, and which course concept fits."
      );
      return;
    }

    if (!hasSpecificEvidence) {
      setCoachFeedback(
        "Make your evidence more specific. Instead of saying something looks strange, identify the exact object, shape, shadow, line, space, or spatial relationship you see."
      );
      return;
    }

    if (!hasEffect) {
      setCoachFeedback(
        "Explain the effect more clearly. What does the visual choice make the viewer notice, feel, question, or understand?"
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      coach: true,
    }));

    setCoachFeedback(
      "Strong structure: WHAT you see → WHAT EFFECT it creates → WHAT COURSE CONCEPT explains it."
    );
  }

  /* =========================================================
     KULESHOV CHECKER
  ========================================================= */

  function checkKuleshov() {
    const words = kuleshovResponse.trim().split(/\s+/).filter(Boolean);

    if (words.length < 20) {
      setKuleshovFeedback(
        "Develop your response a little more. Explain what the audience might infer and why the second shot changes the interpretation."
      );
      return;
    }

    const hasRelationship =
      /because|suggests|makes|creates|appears|interprets|audience|viewer|context|shot|meaning|emotion/i.test(
        kuleshovResponse
      );

    if (!hasRelationship) {
      setKuleshovFeedback(
        "Explain the relationship between the two shots. The key question is how Shot B changes the way the audience interprets Shot A."
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      kuleshov: true,
    }));

    setKuleshovFeedback(
      "Good. You are focusing on the relationship between the shots rather than treating each image as completely independent."
    );
  }

  /* =========================================================
     MONTAGE CHECKER
  ========================================================= */

  function checkMontage() {
    const meaningWords = montageMeaning.trim().split(/\s+/).filter(Boolean);

    if (meaningWords.length < 25) {
      setMontageFeedback(
        "Develop the third meaning further. Explain what idea emerges from putting Shot A and Shot B together."
      );
      return;
    }

    if (!montageConcept.trim()) {
      setMontageFeedback(
        "Add a course concept. Consider montage, juxtaposition, collision, linkage, ideology, social forces, or dialectical montage."
      );
      return;
    }

    const hasJuxtaposition =
      /together|juxtaposition|contrast|comparison|relationship|combination|placing|between|collision/i.test(
        montageMeaning
      );

    if (!hasJuxtaposition) {
      setMontageFeedback(
        "Focus on the relationship between the two shots. What does their juxtaposition make the audience think about?"
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      montage: true,
    }));

    setMontageFeedback(
      "Good montage analysis. You are identifying a meaning produced through the relationship between the shots."
    );
  }

  /* =========================================================
     WEEK 5 DISCUSSION CHECKER
  ========================================================= */

  function checkWeek5Discussion() {
    const words = week5DiscussionResponse
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (words.length < 60) {
      setWeek5DiscussionFeedback(
        "Develop your response to at least 60 words. Include a specific example from the lecture, reading, or Strike and explain how it supports your point."
      );
      return;
    }

    const hasCourseConcept =
      /montage|editing|Kuleshov|juxtaposition|collision|linkage|continuity|discontinuity|Eisenstein|Strike|shot|cutting/i.test(
        week5DiscussionResponse
      );

    const hasExplanation =
      /because|therefore|shows|suggests|creates|means|allows|encourages|communicates|demonstrates|effect/i.test(
        week5DiscussionResponse
      );

    if (!hasCourseConcept) {
      setWeek5DiscussionFeedback(
        "Use at least one specific Week 5 concept such as montage, juxtaposition, collision, linkage, continuity, or the Kuleshov Effect."
      );
      return;
    }

    if (!hasExplanation) {
      setWeek5DiscussionFeedback(
        "You have a course concept, but explain why it matters. Show how the example supports your interpretation."
      );
      return;
    }

    setProgress((current) => ({
      ...current,
      week5Discussion: true,
    }));

    setWeek5DiscussionFeedback(
      "Good discussion structure. You are using a Week 5 concept and explaining its relationship to your example."
    );
  }

  /* =========================================================
     WEEK 4 QUIZ
  ========================================================= */

  function submitQuizAnswer() {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === quizQuestions[quizIndex].answer;

    if (correct) {
      setScore((current) => current + 1);
    }

    setSelectedAnswer(null);

    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((current) => current + 1);
    } else {
      setProgress((current) => ({
        ...current,
        quiz: true,
      }));
      setSection("quiz-results");
    }
  }

  function resetQuiz() {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setSection("quiz");
  }

  /* =========================================================
     WEEK 5 QUIZ
  ========================================================= */

  function submitWeek5QuizAnswer() {
    if (week5SelectedAnswer === null) return;

    const correct =
      week5SelectedAnswer === week5QuizQuestions[week5QuizIndex].answer;

    if (correct) {
      setWeek5Score((current) => current + 1);
    }

    setWeek5SelectedAnswer(null);

    if (week5QuizIndex < week5QuizQuestions.length - 1) {
      setWeek5QuizIndex((current) => current + 1);
    } else {
      setProgress((current) => ({
        ...current,
        week5Quiz: true,
      }));
      setSection("week5-quiz-results");
    }
  }

  function resetWeek5Quiz() {
    setWeek5QuizIndex(0);
    setWeek5SelectedAnswer(null);
    setWeek5Score(0);
    setSection("week5-quiz");
  }

  /* =========================================================
     PROGRESS
  ========================================================= */

  const completed = Object.values(progress).filter(Boolean).length;

  const percentage = Math.round(
    (completed / progressItems.length) * 100
  );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-8">

        {/* HEADER */}

        <header className="mb-8">
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Humanities 21 • Film: Art and Communication
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Film Study Guide
          </h1>

          <p className="mt-3 max-w-3xl text-slate-300">
            Week 4: German Expressionism → Week 5: Soviet Montage & Editing
          </p>
        </header>

        {/* NAVIGATION */}

        <nav className="mb-8 flex flex-wrap gap-2">
          {[
            ["home", "🏠 Home"],
            ["requirements", "📌 Assignment"],
            ["progress", "📝 Progress"],
            ["terms", "🔑 Week 4 Terms"],
            ["week5-terms", "🎞️ Week 5 Terms"],
            ["notes", "📚 Notes"],
            ["films", "🎬 Film Examples"],
            ["viewing", "🎞️ Viewing"],
            ["compare", "🔄 Compare"],
            ["learn", "📖 Week 4 Lessons"],
            ["week5", "🎬 Week 5: Montage"],
            ["kuleshov", "👁️ Kuleshov"],
            ["montage", "✂️ Montage Practice"],
            ["frame", "🖼️ Frame Analysis"],
            ["analysis", "✍️ Analysis"],
            ["coach", "🎯 A-Level Coach"],
            ["discussion", "💬 Week 4 Discussion"],
            ["week5-discussion", "💬 Week 5 Discussion"],
            ["first-shot", "🎞️ First Shot"],
            ["quiz", "🧠 Week 4 Quiz"],
            ["week5-quiz", "🧠 Week 5 Quiz"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                section === id
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* HOME */}

        {section === "home" && (
          <section>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "requirements",
                  "📌",
                  "Assignment Requirements",
                  "Keep the Week 4 graded requirements in one place.",
                ],
                [
                  "progress",
                  "📝",
                  "Study Progress",
                  "Track what you have reviewed and practiced.",
                ],
                [
                  "terms",
                  "🔑",
                  "Week 4 Key Terms",
                  "Review German Expressionism vocabulary.",
                ],
                [
                  "week5-terms",
                  "🎞️",
                  "Week 5 Key Terms",
                  "Learn the vocabulary for Soviet Montage and Editing.",
                ],
                [
                  "notes",
                  "📚",
                  "Reading & Lecture Notes",
                  "Review the important ideas from the readings and lectures.",
                ],
                [
                  "films",
                  "🎬",
                  "Film Examples",
                  "Review how concepts appear in the films.",
                ],
                [
                  "viewing",
                  "🎞️",
                  "Viewing Checklist",
                  "Train your eye while watching.",
                ],
                [
                  "compare",
                  "🔄",
                  "Compare the Films",
                  "Review Week 4 film comparisons.",
                ],
                [
                  "learn",
                  "📖",
                  "Week 4 Lessons",
                  "Work through German Expressionism concepts.",
                ],
                [
                  "week5",
                  "🎬",
                  "Week 5: Soviet Montage",
                  "Learn editing, montage, Kuleshov, Eisenstein, continuity, and collision.",
                ],
                [
                  "kuleshov",
                  "👁️",
                  "Kuleshov Effect",
                  "Practice how neighboring shots change meaning.",
                ],
                [
                  "montage",
                  "✂️",
                  "Montage Practice",
                  "Practice identifying meaning created through juxtaposition.",
                ],
                [
                  "frame",
                  "🖼️",
                  "Frame Analysis",
                  "Practice scale, angle, mise-en-scène, and composition.",
                ],
                [
                  "analysis",
                  "✍️",
                  "Build an Analysis",
                  "Practice claim, evidence, explanation, and connection.",
                ],
                [
                  "coach",
                  "🎯",
                  "A-Level Coach",
                  "Turn observations into stronger analysis.",
                ],
                [
                  "week5-discussion",
                  "💬",
                  "Week 5 Discussion",
                  "Practice evidence-based responses about montage and editing.",
                ],
                [
                  "first-shot",
                  "🎞️",
                  "First Shot",
                  "Practice the required first-shot structure.",
                ],
                [
                  "quiz",
                  "🧠",
                  "Week 4 Quiz",
                  "Test German Expressionism concepts.",
                ],
                [
                  "week5-quiz",
                  "🧠",
                  "Week 5 Quiz",
                  "Test Soviet Montage and Editing concepts.",
                ],
              ].map(([id, icon, title, text]) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:-translate-y-1 hover:border-amber-400"
                >
                  <div className="mb-4 text-4xl">{icon}</div>
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="mt-2 text-slate-400">{text}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <h2 className="text-xl font-bold text-amber-300">
                🎯 Week 5 focus
              </h2>

              <p className="mt-2 leading-7 text-slate-300">
                Week 4 focused on meaning created through mise-en-scène.
                Week 5 shifts attention to meaning created through editing.
                Pay attention to what happens when two shots are placed next
                to each other.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-950/60 p-5 text-center text-lg font-bold">
                WEEK 4: WHAT IS IN THE FRAME
                <span className="mx-3 text-amber-400">→</span>
                WEEK 5: WHAT HAPPENS BETWEEN FRAMES
              </div>
            </div>
          </section>
        )}

        {/* PROGRESS */}

        {section === "progress" && (
          <section>
            <h2 className="text-3xl font-bold">📝 Study Progress</h2>

            <p className="mt-2 text-slate-400">
              Your progress is saved in this browser.
            </p>

            <div className="mt-7 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold text-amber-400">
                    {percentage}%
                  </div>

                  <p className="mt-1 text-slate-300">
                    {completed} of {progressItems.length} completed
                  </p>
                </div>
              </div>

              <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {progressItems.map(([key, label]) => (
                <label
                  key={key}
                  className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(
                      progress[key as keyof typeof progress]
                    )}
                    onChange={(event) =>
                      setProgress((current) => ({
                        ...current,
                        [key]: event.target.checked,
                      }))
                    }
                    className="h-5 w-5 accent-amber-400"
                  />

                  <span className="font-semibold">{label}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                Suggested study order
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Assignment → Week 5 Terms → Notes → Strike → Lessons →
                Kuleshov → Montage → Discussion → Quiz
              </p>
            </div>

            <button
              onClick={() => setProgress({ ...defaultProgress })}
              className="mt-6 rounded-xl bg-slate-800 px-5 py-3 font-semibold hover:bg-slate-700"
            >
              Reset Progress
            </button>
          </section>
        )}

        {/* REQUIREMENTS */}

        {section === "requirements" && (
          <section>
            <h2 className="text-3xl font-bold">
              📌 Week 4 Assignment Requirements
            </h2>

            <p className="mt-2 max-w-3xl text-slate-400">
              Use this as a checklist while completing your own work.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {assignmentRequirements.map(
                ([number, title, description, checklist]) => (
                  <article
                    key={String(number)}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <div className="text-sm font-bold tracking-widest text-amber-400">
                      {number}
                    </div>

                    <h3 className="mt-2 text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {(checklist as string[]).map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl bg-slate-800 p-4 text-sm text-slate-300"
                        >
                          ☐ {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              )}
            </div>

            <div className="mt-7 rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-xl font-bold text-red-300">🚫 Avoid</h3>

              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Choosing an example from the first ten minutes.</li>
                <li>• Giving only plot summary.</li>
                <li>• Saying something is "weird" without explaining why.</li>
                <li>
                  • Naming German Expressionism without making the connection.
                </li>
                <li>
                  • Using vague evidence that cannot be seen in the screenshot.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* WEEK 4 TERMS */}

        {section === "terms" && (
          <section>
            <h2 className="text-3xl font-bold">🔑 Week 4 Key Terms</h2>

            <p className="mt-2 text-slate-400">
              Learn the vocabulary, then explain each term in your own words.
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-[280px_1fr]">
              <div className="space-y-2">
                {terms.map((item, index) => (
                  <button
                    key={item.term}
                    onClick={() => setSelectedTerm(index)}
                    className={`w-full rounded-2xl p-4 text-left ${
                      selectedTerm === index
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    {index + 1}. {item.term}
                  </button>
                ))}
              </div>

              <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm text-amber-400">
                  Term {selectedTerm + 1}
                </div>

                <h3 className="mt-2 text-3xl font-bold">
                  {terms[selectedTerm].term}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {terms[selectedTerm].definition}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-800 p-5">
                  <div className="font-semibold text-amber-300">
                    Remember it
                  </div>

                  <p className="mt-2 text-slate-300">
                    {terms[selectedTerm].remember}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="font-semibold">Example</div>

                  <p className="mt-2 text-slate-400">
                    {terms[selectedTerm].example}
                  </p>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* WEEK 5 TERMS */}

        {section === "week5-terms" && (
          <section>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Week 5
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              🎞️ Key Terms: Soviet Montage & Editing
            </h2>

            <p className="mt-2 max-w-3xl text-slate-300">
              Learn the vocabulary you need to understand editing, Soviet
              montage, the Kuleshov Effect, continuity, discontinuity, and
              Eisenstein's ideas about cinematic meaning.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {week5Terms.map((item) => (
                <article
                  key={item.term}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.term}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.definition}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    <span className="font-semibold text-slate-200">
                      Why it matters:
                    </span>{" "}
                    {item.importance}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                ⭐ Core Week 5 idea
              </h3>

              <p className="mt-3 text-lg leading-8 text-slate-200">
                Soviet montage uses the juxtaposition or collision of shots
                to create meaning that is not contained in the individual
                shots themselves.
              </p>
            </div>
          </section>
        )}

        {/* NOTES */}

        {section === "notes" && (
          <section>
            <h2 className="text-3xl font-bold">
              📚 Reading & Lecture Notes
            </h2>

            <p className="mt-2 text-slate-400">
              Review the important ideas from Week 4 and Week 5.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-amber-300">
                Week 5: Editing & Soviet Montage
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {week5ReadingNotes.map((note, index) => (
                  <article
                    key={note.title}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <div className="text-sm font-semibold text-amber-400">
                      {index + 1}
                    </div>

                    <h3 className="mt-2 text-xl font-bold">
                      {note.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {note.body}
                    </p>

                    <div className="mt-5 rounded-2xl bg-slate-800 p-4">
                      <div className="font-semibold text-amber-300">
                        Key takeaway
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {note.takeaway}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                ⭐ The Week 4 → Week 5 connection
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Week 4 asks you to analyze meaning created inside the frame:
                setting, lighting, composition, acting, props, and visual
                distortion. Week 5 asks you to analyze meaning created between
                frames: editing, juxtaposition, continuity, collision, and
                montage.
              </p>
            </div>
          </section>
        )}

        {/* FILMS */}

        {section === "films" && (
          <section>
            <h2 className="text-3xl font-bold">🎬 Film Examples</h2>

            <p className="mt-2 text-slate-400">
              Use these as viewing guides—not substitutes for watching.
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-[300px_1fr]">
              <div className="space-y-2">
                {filmExamples.map((film, index) => (
                  <button
                    key={film.title}
                    onClick={() => setSelectedFilm(index)}
                    className={`w-full rounded-2xl p-4 text-left ${
                      selectedFilm === index
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    <div className="font-bold">{film.title}</div>

                    <div className="mt-1 text-sm opacity-70">
                      {film.year}
                    </div>
                  </button>
                ))}
              </div>

              <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm text-amber-400">
                  {filmExamples[selectedFilm].year}
                </div>

                <h3 className="mt-2 text-3xl font-bold">
                  {filmExamples[selectedFilm].title}
                </h3>

                <p className="mt-2 text-slate-500">
                  Director: {filmExamples[selectedFilm].director}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {filmExamples[selectedFilm].concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-amber-300"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                <p className="mt-7 leading-7 text-slate-300">
                  {filmExamples[selectedFilm].emphasis}
                </p>

                <div className="mt-7 rounded-2xl bg-slate-800 p-5">
                  <h4 className="font-bold text-amber-300">Look for</h4>

                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {filmExamples[selectedFilm].lookFor.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* VIEWING */}

        {section === "viewing" && (
          <section>
            <h2 className="text-3xl font-bold">
              🎞️ Film Viewing Checklist
            </h2>

            <p className="mt-2 text-slate-400">
              Train your eye to notice visual evidence before writing.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {viewingChecklist.map(([title, questions]) => (
                <article
                  key={String(title)}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h3 className="text-xl font-bold text-amber-300">
                    {title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {(questions as string[]).map((question) => (
                      <li
                        key={question}
                        className="rounded-2xl bg-slate-800 p-4 text-sm text-slate-300"
                      >
                        ☐ {question}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                ⭐ The most important habit
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                First describe exactly what you see. Then ask what effect it
                creates. Finally connect it to the concept.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-950/60 p-5 text-center font-semibold">
                SEE → DESCRIBE → EXPLAIN → CONNECT
              </div>
            </div>
          </section>
        )}

        {/* COMPARE */}

        {section === "compare" && (
          <section>
            <h2 className="text-3xl font-bold">🔄 Compare the Films</h2>

            <p className="mt-2 text-slate-400">
              Look for the larger Expressionist ideas connecting the films.
            </p>

            <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
              <table className="min-w-[1000px] w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="p-5 text-left text-amber-300">
                      Category
                    </th>
                    <th className="p-5 text-left">Caligari</th>
                    <th className="p-5 text-left">Nosferatu</th>
                    <th className="p-5 text-left">Mabuse</th>
                    <th className="p-5 text-left">The Golem</th>
                  </tr>
                </thead>

                <tbody>
                  {filmComparison.map((row) => (
                    <tr key={row[0] as string}>
                      {row.map((cell, index) => (
                        <td
                          key={cell as string}
                          className="border-t border-slate-800 p-5 text-sm leading-6 text-slate-300"
                        >
                          {index === 0 ? (
                            <strong className="text-amber-300">
                              {cell}
                            </strong>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-7 rounded-3xl border border-amber-500/20 bg-amber-400/5 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                📝 Practice question
              </h3>

              <p className="mt-3 text-lg leading-8 text-slate-300">
                Which film gives you the clearest example of visual distortion
                or defamiliarization—and what specific visual evidence makes
                you say that?
              </p>
            </div>
          </section>
        )}

        {/* WEEK 4 LESSONS */}

        {section === "learn" && (
          <section>
            <h2 className="text-3xl font-bold">
              📖 Week 4: German Expressionism Lessons
            </h2>

            <div className="mt-6 grid gap-5 lg:grid-cols-[280px_1fr]">
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.title}
                    onClick={() => setSelectedLesson(index)}
                    className={`w-full rounded-2xl p-4 text-left ${
                      selectedLesson === index
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    {index + 1}. {lesson.title}
                  </button>
                ))}
              </div>

              <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm text-amber-400">
                  Lesson {selectedLesson + 1}
                </div>

                <h3 className="mt-2 text-3xl font-bold">
                  {lessons[selectedLesson].title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {lessons[selectedLesson].definition}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-800 p-5">
                  <div className="font-semibold text-amber-300">
                    Key point
                  </div>

                  <p className="mt-2 text-slate-300">
                    {lessons[selectedLesson].keyPoint}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {lessons[selectedLesson].examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-amber-500/20 bg-amber-400/5 p-5">
                  {lessons[selectedLesson].question}
                </div>
              </article>
            </div>
          </section>
        )}

        {/* WEEK 5 LESSONS */}

        {section === "week5" && (
          <section>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Week 5
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              🎬 Soviet Montage & Editing
            </h2>

            <p className="mt-2 max-w-3xl text-slate-400">
              Work through these lessons to understand how editing creates
              cinematic meaning through juxtaposition, continuity, collision,
              and montage.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {week5Lessons.map((lesson, index) => (
                <article
                  key={lesson.id}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-slate-200">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {lesson.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {lesson.summary}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {lesson.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex gap-2"
                          >
                            <span className="text-slate-500">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <button
                onClick={() => goTo("kuleshov")}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-left hover:border-amber-400"
              >
                <div className="text-3xl">👁️</div>
                <h3 className="mt-3 text-xl font-bold">
                  Practice Kuleshov
                </h3>
                <p className="mt-2 text-slate-400">
                  Explore how neighboring shots change interpretation.
                </p>
              </button>

              <button
                onClick={() => goTo("montage")}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-left hover:border-amber-400"
              >
                <div className="text-3xl">✂️</div>
                <h3 className="mt-3 text-xl font-bold">
                  Practice Montage
                </h3>
                <p className="mt-2 text-slate-400">
                  Find the third meaning created between shots.
                </p>
              </button>

              <button
                onClick={() => goTo("week5-discussion")}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-left hover:border-amber-400"
              >
                <div className="text-3xl">💬</div>
                <h3 className="mt-3 text-xl font-bold">
                  Discussion Practice
                </h3>
                <p className="mt-2 text-slate-400">
                  Practice explaining Week 5 concepts in your own words.
                </p>
              </button>
            </div>
          </section>
        )}

        {/* KULESHOV */}

        {section === "kuleshov" && (
          <section>
            <h2 className="text-3xl font-bold">
              👁️ Kuleshov Effect Practice
            </h2>

            <p className="mt-2 max-w-3xl text-slate-400">
              Focus on how the neighboring shot changes the audience's
              interpretation of the first shot.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="text-sm text-amber-400">
                Scenario {kuleshovIndex + 1} of {kuleshovScenarios.length}
              </div>

              <h3 className="mt-2 text-3xl font-bold">
                {kuleshovScenarios[kuleshovIndex].title}
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-800 p-5">
                  <div className="font-bold text-amber-300">
                    Shot A
                  </div>

                  <p className="mt-3 leading-7 text-slate-300">
                    {kuleshovScenarios[kuleshovIndex].shotA}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <div className="font-bold text-amber-300">
                    Shot B
                  </div>

                  <p className="mt-3 leading-7 text-slate-300">
                    {kuleshovScenarios[kuleshovIndex].shotB}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-400/5 p-5">
                <p className="text-lg leading-8 text-slate-200">
                  {kuleshovScenarios[kuleshovIndex].prompt}
                </p>
              </div>

              <textarea
                value={kuleshovResponse}
                onChange={(e) => setKuleshovResponse(e.target.value)}
                placeholder="Write your own interpretation..."
                className="mt-6 min-h-40 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
              />

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={checkKuleshov}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Check My Thinking
                </button>

                <button
                  onClick={() => {
                    setKuleshovIndex(
                      (current) =>
                        (current + 1) % kuleshovScenarios.length
                    );
                    setKuleshovResponse("");
                    setKuleshovFeedback("");
                  }}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  Next Scenario
                </button>
              </div>

              {kuleshovFeedback && (
                <div className="mt-5 rounded-2xl bg-amber-400/10 p-5">
                  {kuleshovFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* MONTAGE PRACTICE */}

        {section === "montage" && (
          <section>
            <h2 className="text-3xl font-bold">
              ✂️ Montage Analysis Practice
            </h2>

            <p className="mt-2 max-w-3xl text-slate-400">
              Your goal is to identify the meaning created by the
              juxtaposition—not simply describe each shot separately.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="text-sm text-amber-400">
                Scenario {montageIndex + 1} of {montageScenarios.length}
              </div>

              <h3 className="mt-2 text-3xl font-bold">
                {montageScenarios[montageIndex].title}
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-800 p-5">
                  <div className="font-bold text-amber-300">
                    Shot A
                  </div>

                  <p className="mt-2 text-slate-300">
                    {montageScenarios[montageIndex].shotA}
                  </p>
                </div>

                <div className="text-center text-2xl text-amber-400">
                  +
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <div className="font-bold text-amber-300">
                    Shot B
                  </div>

                  <p className="mt-2 text-slate-300">
                    {montageScenarios[montageIndex].shotB}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-400/5 p-5">
                <p className="text-lg leading-8 text-slate-200">
                  {montageScenarios[montageIndex].prompt}
                </p>
              </div>

              <label className="mt-6 block text-lg font-bold text-amber-300">
                What meaning is created?
              </label>

              <textarea
                value={montageMeaning}
                onChange={(e) => setMontageMeaning(e.target.value)}
                placeholder="Explain the idea created by putting these shots together..."
                className="mt-3 min-h-44 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
              />

              <label className="mt-6 block text-lg font-bold text-amber-300">
                Which course concept fits?
              </label>

              <input
                value={montageConcept}
                onChange={(e) => setMontageConcept(e.target.value)}
                placeholder="e.g. montage, collision, juxtaposition"
                className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
              />

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={checkMontage}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Check My Analysis
                </button>

                <button
                  onClick={() => {
                    setMontageIndex(
                      (current) =>
                        (current + 1) % montageScenarios.length
                    );
                    setMontageMeaning("");
                    setMontageConcept("");
                    setMontageFeedback("");
                  }}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  Next Scenario
                </button>
              </div>

              {montageFeedback && (
                <div className="mt-5 rounded-2xl bg-amber-400/10 p-5">
                  {montageFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* FRAME */}

        {section === "frame" && (
          <section>
            <h2 className="text-3xl font-bold">
              🖼️ Frame Analysis
            </h2>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="text-sm text-amber-400">
                Step {frameStep + 1} of {frameSteps.length}
              </div>

              <h3 className="mt-2 text-3xl font-bold">
                {frameSteps[frameStep][0]}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {frameSteps[frameStep][1]}
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {(frameSteps[frameStep][2] as string[]).map((choice) => (
                  <div
                    key={choice}
                    className="rounded-2xl bg-slate-800 p-4 text-center font-semibold"
                  >
                    {choice}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <button
                  onClick={() =>
                    setFrameStep((x) => Math.max(0, x - 1))
                  }
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  ← Back
                </button>

                <button
                  onClick={() =>
                    setFrameStep((x) =>
                      Math.min(frameSteps.length - 1, x + 1)
                    )
                  }
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Next →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ANALYSIS */}

        {section === "analysis" && (
          <section>
            <h2 className="text-3xl font-bold">
              ✍️ Build an Analysis
            </h2>

            <p className="mt-2 text-slate-400">
              Practice the structure without having the app write the answer.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Claim", claim, setClaim, "What is your main point?"],
                [
                  "Evidence",
                  evidence,
                  setEvidence,
                  "What specific visual evidence supports your claim?",
                ],
                [
                  "Explanation",
                  explanation,
                  setExplanation,
                  "Why does that evidence matter?",
                ],
                [
                  "German Expressionism connection",
                  connection,
                  setConnection,
                  "How does this connect specifically to German Expressionism?",
                ],
              ].map(([label, value, setter, placeholder]) => (
                <div
                  key={label as string}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <label className="text-lg font-bold text-amber-300">
                    {label as string}
                  </label>

                  <textarea
                    value={value as string}
                    onChange={(e) =>
                      (setter as (value: string) => void)(e.target.value)
                    }
                    placeholder={placeholder as string}
                    className="mt-3 min-h-32 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
                  />
                </div>
              ))}

              <button
                onClick={checkAnalysis}
                className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
              >
                Check My Analysis
              </button>

              {analysisFeedback && (
                <div className="rounded-2xl bg-amber-400/10 p-5">
                  {analysisFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* COACH */}

        {section === "coach" && (
          <section>
            <h2 className="text-3xl font-bold">
              🎯 A-Level Analysis Coach
            </h2>

            <p className="mt-2 text-slate-400">
              Move from observation → effect → course concept.
            </p>

            <div className="mt-6 space-y-5">
              {[
                [
                  "1. What do you see?",
                  coachEvidence,
                  setCoachEvidence,
                  "Describe the exact visual evidence.",
                ],
                [
                  "2. What effect does it create?",
                  coachEffect,
                  setCoachEffect,
                  "Explain what the visual choice makes the viewer feel or notice.",
                ],
              ].map(([label, value, setter, placeholder]) => (
                <div
                  key={label as string}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <label className="text-xl font-bold text-amber-300">
                    {label as string}
                  </label>

                  <textarea
                    value={value as string}
                    onChange={(e) =>
                      (setter as (value: string) => void)(e.target.value)
                    }
                    placeholder={placeholder as string}
                    className="mt-4 min-h-36 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
                  />
                </div>
              ))}

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <label className="text-xl font-bold text-amber-300">
                  3. Which course concept fits?
                </label>

                <input
                  value={coachConcept}
                  onChange={(e) => setCoachConcept(e.target.value)}
                  placeholder="e.g. Defamiliarization"
                  className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
                />
              </div>

              <button
                onClick={checkCoach}
                className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950"
              >
                Check My Thinking
              </button>

              {coachFeedback && (
                <div className="rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
                  {coachFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* WEEK 4 DISCUSSION */}

        {section === "discussion" && (
          <section>
            <h2 className="text-3xl font-bold">
              💬 Week 4 Discussion Practice
            </h2>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="text-sm text-amber-400">
                Practice prompt {discussionPrompt + 1}
              </div>

              <h3 className="mt-3 text-2xl font-bold">
                {
                  ["Visual World", "Distortion", "Boundaries", "Mise-en-scène"][
                    discussionPrompt
                  ]
                }
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {
                  [
                    "How does the visual design of The Cabinet of Dr. Caligari make its world feel different from ordinary reality?",
                    "Choose one visually distorted object or space. What has been changed, and what effect does that change have?",
                    "How does the film blur a boundary such as dream/reality or sanity/madness?",
                    "How do two or more elements of mise-en-scène work together to create the film's visual style?",
                  ][discussionPrompt]
                }
              </p>

              <textarea
                value={discussionResponse}
                onChange={(e) => setDiscussionResponse(e.target.value)}
                placeholder="Write your own response here..."
                className="mt-6 min-h-48 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
              />

              <div className="mt-5 flex gap-3">
                <button
                  onClick={checkDiscussion}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Check My Response
                </button>

                <button
                  onClick={() => {
                    setDiscussionPrompt((x) => (x + 1) % 4);
                    setDiscussionResponse("");
                    setDiscussionFeedback("");
                  }}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  New Prompt
                </button>
              </div>

              {discussionFeedback && (
                <div className="mt-5 rounded-2xl bg-amber-400/10 p-5">
                  {discussionFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* WEEK 5 DISCUSSION */}

        {section === "week5-discussion" && (
          <section>
            <h2 className="text-3xl font-bold">
              💬 Week 5 Discussion Practice
            </h2>

            <p className="mt-2 max-w-3xl text-slate-400">
              Practice making your own argument using specific Week 5
              concepts. The checker evaluates structure; it does not write
              the answer for you.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="text-sm text-amber-400">
                Prompt {week5DiscussionPrompt + 1} of{" "}
                {week5DiscussionPrompts.length}
              </div>

              <h3 className="mt-3 text-2xl font-bold">
                {week5DiscussionPrompts[week5DiscussionPrompt].title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {week5DiscussionPrompts[week5DiscussionPrompt].prompt}
              </p>

              <textarea
                value={week5DiscussionResponse}
                onChange={(e) =>
                  setWeek5DiscussionResponse(e.target.value)
                }
                placeholder="Write your own response here..."
                className="mt-6 min-h-56 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
              />

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={checkWeek5Discussion}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Check My Response
                </button>

                <button
                  onClick={() => {
                    setWeek5DiscussionPrompt(
                      (x) =>
                        (x + 1) % week5DiscussionPrompts.length
                    );
                    setWeek5DiscussionResponse("");
                    setWeek5DiscussionFeedback("");
                  }}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  New Prompt
                </button>
              </div>

              {week5DiscussionFeedback && (
                <div className="mt-5 rounded-2xl bg-amber-400/10 p-5">
                  {week5DiscussionFeedback}
                </div>
              )}
            </div>
          </section>
        )}

        {/* FIRST SHOT */}

        {section === "first-shot" && (
          <section>
            <h2 className="text-3xl font-bold">
              🎞️ First Shot Assignment
            </h2>

            <p className="mt-2 text-slate-400">
              Practice the professor's required order.
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-[300px_1fr]">
              <div className="space-y-2">
                {firstShotSteps.map(([title], index) => (
                  <button
                    key={title}
                    onClick={() => setFirstShotStep(index)}
                    className={`w-full rounded-2xl p-4 text-left ${
                      firstShotStep === index
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    {index + 1}. {title}
                  </button>
                ))}
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm text-amber-400">
                  Step {firstShotStep + 1} of {firstShotSteps.length}
                </div>

                <h3 className="mt-2 text-3xl font-bold">
                  {firstShotSteps[firstShotStep][0]}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                  {firstShotSteps[firstShotStep][1]}
                </p>

                <textarea
                  value={firstShotNotes}
                  onChange={(e) => setFirstShotNotes(e.target.value)}
                  placeholder="Write your own description here..."
                  className="mt-6 min-h-56 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-amber-400"
                />

                <button
                  onClick={checkFirstShot}
                  className="mt-5 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Check My Description
                </button>

                {firstShotFeedback && (
                  <div className="mt-5 rounded-2xl bg-amber-400/10 p-5">
                    {firstShotFeedback}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* WEEK 4 QUIZ */}

        {section === "quiz" && (
          <section>
            <h2 className="text-3xl font-bold">🧠 Week 4 Quiz</h2>

            <p className="mt-2 text-slate-400">
              Question {quizIndex + 1} of {quizQuestions.length}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h3 className="text-2xl font-bold">
                {quizQuestions[quizIndex].question}
              </h3>

              <div className="mt-6 space-y-3">
                {quizQuestions[quizIndex].options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(index)}
                    className={`w-full rounded-2xl border p-4 text-left ${
                      selectedAnswer === index
                        ? "border-amber-400 bg-amber-400/10"
                        : "border-slate-700 bg-slate-950 hover:border-slate-500"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                onClick={submitQuizAnswer}
                disabled={selectedAnswer === null}
                className="mt-6 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 disabled:opacity-40"
              >
                {quizIndex === quizQuestions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          </section>
        )}

        {/* WEEK 4 QUIZ RESULTS */}

        {section === "quiz-results" && (
          <section>
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <div className="text-5xl">🎉</div>

              <h2 className="mt-4 text-3xl font-bold">
                Week 4 Quiz Complete
              </h2>

              <p className="mt-4 text-5xl font-bold text-amber-400">
                {score}/{quizQuestions.length}
              </p>

              <p className="mt-4 text-slate-400">
                Review the Week 4 lessons and key terms for anything you
                missed.
              </p>

              <div className="mt-7 flex justify-center gap-3">
                <button
                  onClick={resetQuiz}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Try Again
                </button>

                <button
                  onClick={() => goTo("home")}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  Home
                </button>
              </div>
            </div>
          </section>
        )}

        {/* WEEK 5 QUIZ */}

        {section === "week5-quiz" && (
          <section>
            <h2 className="text-3xl font-bold">
              🧠 Week 5 Quiz: Soviet Montage & Editing
            </h2>

            <p className="mt-2 text-slate-400">
              Question {week5QuizIndex + 1} of{" "}
              {week5QuizQuestions.length}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h3 className="text-2xl font-bold">
                {week5QuizQuestions[week5QuizIndex].question}
              </h3>

              <div className="mt-6 space-y-3">
                {week5QuizQuestions[week5QuizIndex].options.map(
                  (option, index) => (
                    <button
                      key={option}
                      onClick={() =>
                        setWeek5SelectedAnswer(index)
                      }
                      className={`w-full rounded-2xl border p-4 text-left ${
                        week5SelectedAnswer === index
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-slate-700 bg-slate-950 hover:border-slate-500"
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={submitWeek5QuizAnswer}
                disabled={week5SelectedAnswer === null}
                className="mt-6 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 disabled:opacity-40"
              >
                {week5QuizIndex === week5QuizQuestions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          </section>
        )}

        {/* WEEK 5 QUIZ RESULTS */}

        {section === "week5-quiz-results" && (
          <section>
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <div className="text-5xl">🎬</div>

              <h2 className="mt-4 text-3xl font-bold">
                Week 5 Quiz Complete
              </h2>

              <p className="mt-4 text-5xl font-bold text-amber-400">
                {week5Score}/{week5QuizQuestions.length}
              </p>

              <p className="mt-4 text-slate-400">
                Review the Week 5 lessons, terms, and notes for anything you
                missed.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  onClick={resetWeek5Quiz}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
                >
                  Try Again
                </button>

                <button
                  onClick={() => goTo("week5")}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  Week 5 Lessons
                </button>

                <button
                  onClick={() => goTo("home")}
                  className="rounded-xl bg-slate-800 px-5 py-3"
                >
                  Home
                </button>
              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}