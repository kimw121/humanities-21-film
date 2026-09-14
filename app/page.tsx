"use client";

import { useEffect, useState } from "react";

const lessons = [
  {
    title: "Mise-en-scène",
    short: "Everything placed before the camera.",
    definition:
      "Mise-en-scène means the arrangement of everything visible in the film frame.",
    keyPoint:
      "Setting, character, lighting, and composition work together to create meaning.",
    examples: ["Sets", "Props", "Costumes", "Lighting", "Composition"],
    question:
      "Ask: What do I see in the frame, and why might it look this way?",
  },
  {
    title: "Setting",
    short: "The physical world of the scene.",
    definition:
      "Setting is the physical space that characters and objects inhabit.",
    keyPoint:
      "In German Expressionism, the setting can communicate a character's psychological state.",
    examples: ["Buildings", "Rooms", "Furniture", "Props", "Landscape"],
    question:
      "Does the setting look realistic, or has it been deliberately distorted?",
  },
  {
    title: "Character",
    short: "The visual design of people.",
    definition:
      "Character includes costume, hair, makeup, body, movement, and physical appearance.",
    keyPoint:
      "Expressionist actors may use exaggerated makeup, gestures, and unnatural movement.",
    examples: ["Costume", "Makeup", "Hair", "Body", "Movement"],
    question:
      "How does the character's appearance or movement contribute to the mood?",
  },
  {
    title: "Lighting",
    short: "Light creates mood and meaning.",
    definition:
      "Lighting concerns the creative use of light, including its direction, intensity, and shadows.",
    keyPoint:
      "German Expressionist films often use strong contrast and dramatic shadows.",
    examples: ["Shadows", "Contrast", "Direction", "Intensity", "Silhouettes"],
    question:
      "What does the lighting make me feel, notice, or expect?",
  },
  {
    title: "Composition",
    short: "How everything is arranged in the frame.",
    definition:
      "Composition is the arrangement of people, objects, setting, lines, and shapes within the frame.",
    keyPoint:
      "Composition can direct attention and create visual meaning.",
    examples: ["Foreground", "Background", "Screen left/right", "Lines", "Shapes"],
    question:
      "How are objects and people positioned relative to one another?",
  },
  {
    title: "Cinematic Style",
    short: "A recognizable visual approach.",
    definition:
      "Cinematic style is the combination of visual and formal choices that give a film a particular look and feel.",
    keyPoint:
      "German Expressionism uses stylization rather than simply reproducing ordinary reality.",
    examples: ["Lighting", "Sets", "Acting", "Editing", "Composition"],
    question:
      "What repeated visual choices make this film recognizable?",
  },
  {
    title: "German Expressionism",
    short: "Distortion expresses inner emotional reality.",
    definition:
      "German Expressionism is an artistic and cinematic movement that uses extreme distortion and stylization to express subjective emotional or psychological reality.",
    keyPoint:
      "The goal is not simply to show what the world looks like, but how it feels from a subjective perspective.",
    examples: [
      "Distorted sets",
      "Grotesque figures",
      "Dark shadows",
      "Unnatural movement",
      "Symbolic mise-en-scène",
    ],
    question:
      "What emotional or psychological reality is the distorted world expressing?",
  },
  {
    title: "Visual Distortion",
    short: "Changing ordinary visual reality.",
    definition:
      "Visual distortion occurs when familiar people, objects, spaces, lines, colors, or proportions are deliberately changed.",
    keyPoint:
      "Distortion can communicate fear, anxiety, madness, instability, or other emotional states.",
    examples: [
      "Crooked buildings",
      "Jagged lines",
      "Extreme proportions",
      "Tilted surfaces",
      "Distorted bodies",
    ],
    question:
      "What has been distorted, and what emotional effect does the distortion create?",
  },
  {
    title: "Defamiliarization",
    short: "Making the familiar look strange.",
    definition:
      "Defamiliarization occurs when an ordinary, recognizable object or space is presented in an unusual way.",
    keyPoint:
      "The object remains recognizable, but its strange presentation makes us notice it differently.",
    examples: [
      "Tall chair",
      "Extremely high bed",
      "Strange hallway",
      "Unusual architecture",
      "Distorted furniture",
    ],
    question:
      "What ordinary thing has been made strange?",
  },
  {
    title: "Symbolic Boundaries",
    short: "Blurring categories that normally seem separate.",
    definition:
      "A symbolic boundary is a distinction between categories such as reality and dreams, life and death, or sanity and madness.",
    keyPoint:
      "Expressionist films can make these categories difficult to separate.",
    examples: [
      "Dream / reality",
      "Sanity / madness",
      "Life / death",
      "Good / evil",
      "Real / unreal",
    ],
    question:
      "What two categories become difficult to distinguish?",
  },
];

const terms = [
  {
    term: "Mise-en-scène",
    definition:
      "The arrangement of everything visible in the frame, including setting, character, lighting, and composition.",
    remember: "Everything placed before the camera.",
    example:
      "A distorted room, unusual makeup, dramatic shadows, and carefully arranged objects all contribute to mise-en-scène.",
  },
  {
    term: "Setting",
    definition: "The physical space in which characters and objects exist.",
    remember: "Where the scene takes place.",
    example: "The crooked streets and strange buildings in The Cabinet of Dr. Caligari.",
  },
  {
    term: "Character",
    definition:
      "The visual design of people, including costume, hair, makeup, body, and movement.",
    remember: "How the person looks and moves.",
    example: "Cesare's pale makeup and unnatural movement.",
  },
  {
    term: "Lighting",
    definition:
      "The creative use of light, including direction, intensity, contrast, and shadows.",
    remember: "Light can create mood and meaning.",
    example:
      "Nosferatu's shadow communicates danger without directly showing the vampire's face.",
  },
  {
    term: "Composition",
    definition:
      "The arrangement of people, objects, shapes, lines, and spaces within the frame.",
    remember: "Where things are placed.",
    example:
      "A character framed inside a doorway can make the doorway visually important.",
  },
  {
    term: "German Expressionism",
    definition:
      "An artistic and cinematic movement that uses extreme distortion and stylization to express inner emotional reality.",
    remember: "Distort the outside world to express the inside world.",
    example:
      "The distorted sets of The Cabinet of Dr. Caligari communicate a psychologically unstable world.",
  },
  {
    term: "Visual Distortion",
    definition:
      "The deliberate alteration of ordinary visual forms, proportions, lines, spaces, or bodies.",
    remember: "Change how the world normally looks.",
    example: "Crooked buildings and steeply tilted surfaces.",
  },
  {
    term: "Defamiliarization",
    definition:
      "Making a familiar object or space appear strange or unusual.",
    remember: "Familiar thing + unfamiliar appearance.",
    example:
      "A very tall chair that is still clearly recognizable as a chair.",
  },
  {
    term: "Symbolic Boundary",
    definition:
      "A distinction between categories that normally seem separate.",
    remember: "A line between two ideas.",
    example:
      "The boundary between sanity and madness becomes unclear in Caligari.",
  },
  {
    term: "Subjective Perspective",
    definition:
      "A representation of the world shaped by an individual's feelings, emotions, or psychological state.",
    remember: "How the world feels to someone.",
    example:
      "A distorted environment can represent a character's disturbed mental state.",
  },
  {
    term: "Liminal Space",
    definition:
      "A transitional or in-between space between two states or worlds.",
    remember: "A space between categories.",
    example:
      "A forest can function as a boundary between ordinary and supernatural spaces in Nosferatu.",
  },
  {
    term: "Low-key Lighting",
    definition:
      "Lighting with strong contrast between light and dark areas and prominent shadows.",
    remember: "Lots of shadow and contrast.",
    example: "A vampire's shadow appearing against a wall.",
  },
  {
    term: "National Cinema",
    definition:
      "A cinema industry associated with a particular country and shaped by its cultural, political, and economic circumstances.",
    remember: "Cinema shaped by a nation's context.",
    example:
      "German cinema developed distinctive approaches during the period between World War I and World War II.",
  },
  {
    term: "UFA",
    definition:
      "Universum Film-Aktiengesellschaft, a major German film studio consolidated with government support in 1918.",
    remember: "A major centralized German studio.",
    example:
      "UFA helped create a large German production system capable of pooling resources.",
  },
  {
    term: "Classical Narrative",
    definition:
      "A broad system of filmmaking organized around clear storytelling, continuity, causality, and understandable narrative space and time.",
    remember: "The conventional logic of movie storytelling.",
    example:
      "Sets and props often help construct a believable story world.",
  },
  {
    term: "Graphic Art",
    definition:
      "Art concerned strongly with visual design, shapes, lines, patterns, and graphic form.",
    remember: "The image itself becomes visually important.",
    example:
      "Expressionist films can make individual shots look like paintings or graphic artworks.",
  },
];

const readingNotes = [
  ["What is mise-en-scène?", "Mise-en-scène literally means putting on stage. It refers to everything arranged before the camera, including setting, character, lighting, and composition.", "The frame is not accidental. Visual choices can communicate meaning."],
  ["The four elements", "The four major elements are setting, character, lighting, and composition. Together they create the overall visual design of a scene.", "When analyzing a frame, look at all four rather than focusing on only one."],
  ["German Expressionism", "German Expressionism developed as a broader artistic movement in Germany in the early twentieth century and became especially important in cinema after World War I.", "Expressionism rejects simple realism and uses distortion to communicate inner emotional reality."],
  ["Expressionism and distortion", "Expressionist artists often distort bodies, buildings, perspective, colors, and objects. The distorted external world can communicate a subjective psychological or emotional state.", "Ask what the distortion expresses rather than simply identifying that something looks strange."],
  ["Historical context", "World War I disrupted European film industries and contributed to major changes in the global film market. Germany experienced military defeat, political transformation, economic crisis, inflation, and social trauma.", "Historical conditions help explain why artists were interested in instability, anxiety, death, and distorted reality."],
  ["Expressionism in cinema", "German Expressionist filmmakers used highly stylized mise-en-scène, geometric patterns, dramatic lighting, exaggerated acting, makeup, and distorted settings. The visual design itself can tell the story.", "The setting is not merely a realistic container for the action. It can have symbolic meaning."],
  ["The Cabinet of Dr. Caligari", "The film uses crooked sets, painted shadows, jagged lines, geometric forms, exaggerated makeup, stilted acting, and strange movement. The camera is often static and shots can last long enough to resemble paintings with moving characters.", "Look beneath the unnatural appearance for the emotional or psychological meaning."],
  ["Defamiliarization", "Defamiliarization makes familiar objects appear strange. In Expressionist cinema, ordinary furniture, buildings, doors, hallways, and spaces may be exaggerated or distorted.", "If you recognize an object but immediately notice that something about its appearance is wrong, you may be seeing defamiliarization."],
  ["Symbolic boundaries", "Expressionist cinema can blur boundaries such as waking and sleeping, reality and illusion, sanity and madness, life and death, and good and evil.", "Ask where one category ends and another begins—and whether the film makes that boundary uncertain."],
  ["Shots as paintings", "The static camera, slow editing, stylized composition, and highly designed sets can make individual shots resemble paintings or graphic artworks.", "Pause on a frame and study its lines, shapes, spaces, lighting, and figures."],
  ["Expressionism and horror", "German Expressionism strongly influenced later horror cinema and film noir. Its use of shadows, distorted figures, stylized spaces, and psychological atmosphere continues to appear in cinema.", "When watching horror, look for ways that lighting, composition, and setting create fear before anything actually happens."],
];

const filmExamples = [
  {
    title: "The Cabinet of Dr. Caligari",
    year: "1920",
    director: "Robert Wiene",
    concepts: ["German Expressionism", "Visual Distortion", "Defamiliarization", "Symbolic Boundaries", "Mise-en-scène", "Subjective Perspective"],
    emphasis: "The film turns the entire world into a visual expression of psychological instability. Sets, lighting, makeup, acting, and composition work together rather than simply creating a realistic setting.",
    lookFor: ["Crooked and jagged buildings", "Painted shadows and unusual light", "Geometric shapes and strange angles", "Exaggerated makeup and facial expressions", "Cesare's unnatural movement", "Very tall or strangely proportioned furniture", "Characters blending visually with the setting"],
  },
  {
    title: "Nosferatu",
    year: "1922",
    director: "F. W. Murnau",
    concepts: ["Defamiliarization", "Low-key Lighting", "Liminal Space", "Visual Distortion", "Composition", "Symbolic Boundaries"],
    emphasis: "Nosferatu repeatedly turns familiar people, objects, and spaces into strange or threatening forms. Shadows, silhouettes, architecture, and composition communicate horror and anxiety.",
    lookFor: ["Nosferatu's elongated body and fingers", "The vampire's shadow", "Crooked and empty buildings", "The forest as an in-between or liminal space", "Reversed black-and-white negative film", "The vampire's body matching architectural shapes", "Doorways and arches framing the vampire", "Ordinary furniture made unusually tall"],
  },
  {
    title: "Dr. Mabuse, the Gambler",
    year: "1922",
    director: "Fritz Lang",
    concepts: ["Composition", "Geometric Patterns", "Stylized Setting", "Mise-en-scène"],
    emphasis: "The film uses stylized spaces and geometric patterns so that the design of the environment contributes to the story rather than functioning only as realistic background.",
    lookFor: ["Geometric floor patterns", "Geometric wall designs", "Stylized interiors", "Patterns that organize characters within the frame", "The relationship between characters and their environment"],
  },
  {
    title: "The Golem",
    year: "1920",
    director: "Paul Wegener and Carl Boese",
    concepts: ["Character", "Setting", "Material Form", "German Expressionism", "Mise-en-scène"],
    emphasis: "The film creates a visual relationship between the golem and its environment. The character can appear to belong to the same material and visual world as the setting.",
    lookFor: ["Rounded architectural forms", "Earth or clay-like visual qualities", "The relationship between body and environment", "Characters blending with their surroundings", "Stylized architecture and spaces"],
  },
  {
    title: "Expressionism's Influence",
    year: "1930s–present",
    director: "Later filmmakers",
    concepts: ["Horror", "Film Noir", "Lighting", "Stylized Design", "Tim Burton"],
    emphasis: "German Expressionist techniques continued to influence horror, film noir, and later filmmakers. The movement was relatively short-lived, but its visual ideas had a long afterlife.",
    lookFor: ["Strong shadows in horror", "Distorted or stylized environments", "Unnatural-looking characters", "Lighting used to create psychological tension", "Tim Burton's stylized visual worlds"],
  },
];

const viewingChecklist = [
  ["1. Notice the world", ["Does the setting look realistic or distorted?", "Are buildings, rooms, streets, or furniture unusually shaped?", "Do the lines look straight, crooked, jagged, or tilted?"]],
  ["2. Watch the people", ["How do the actors move?", "Are gestures realistic or exaggerated?", "What do makeup, hair, costume, and body shape communicate?"]],
  ["3. Watch the light", ["Where are the strongest shadows?", "Is the lighting high-key or low-key?", "Does a shadow communicate something that the character does not say?"]],
  ["4. Study composition", ["What is in the foreground, middle ground, and background?", "What is on screen left and screen right?", "What lines, shapes, or patterns organize the frame?"]],
  ["5. Look for distortion", ["What familiar object has been made strange?", "What has changed about its size, shape, angle, or placement?", "What emotional effect does the distortion create?"]],
  ["6. Look for blurred boundaries", ["Does the film blur reality and illusion?", "Does it blur sanity and madness?", "Does it blur life and death or good and evil?"]],
  ["7. Capture your own evidence", ["What exact moment caught your attention?", "What specific visual detail can you describe?", "Could this become evidence for your assignment?"]],
];

const filmComparison = [
  ["Main visual strategy", "Extreme distortion and stylized sets make the entire world feel psychologically unstable.", "Familiar people, objects, architecture, and shadows become strange and threatening.", "Geometric patterns and stylized environments organize the visual space.", "Characters and environments share visual and material qualities."],
  ["Setting", "Crooked, jagged, exaggerated spaces that reject ordinary perspective.", "Real locations are transformed through architecture, framing, shadow, and unusual spaces.", "Stylized interiors and geometric patterns give spaces symbolic visual weight.", "Rounded, stylized architecture visually connects the environment with the golem."],
  ["Character", "Exaggerated makeup, facial expressions, gestures, and unnatural movement.", "Nosferatu's elongated body, fingers, face, and movement make him visibly nonhuman.", "Characters are organized within carefully designed geometric environments.", "The golem's physical form visually relates to the material qualities of the setting."],
  ["Lighting", "Painted shadows and stylized light make literal space difficult to separate from visual design.", "Shadows become a major source of horror and communicate danger.", "Lighting works alongside geometric design to shape visual space.", "Lighting contributes to stylized atmosphere."],
  ["Defamiliarization", "Ordinary furniture and architecture are changed through extreme proportions and shapes.", "Ordinary objects, spaces, bodies, and shadows become unfamiliar or threatening.", "Stylized patterns and spaces make familiar social environments unusual.", "The relationship between figure and environment creates a strange material world."],
  ["Symbolic boundaries", "Reality and illusion, sanity and madness, and life and death become difficult to separate.", "Ordinary and supernatural worlds overlap.", "Stylized environments complicate ordinary social space.", "The boundary between human and nonhuman is challenged."],
  ["What to remember", "The whole world can function as an expression of a disturbed psychological state.", "Horror can come from making familiar forms unfamiliar.", "Geometry and spatial design can communicate meaning.", "Character and setting can visually become part of the same world."],
];

const frameSteps = [
  ["Scale", "Identify whether the shot is a long shot, medium shot, or close-up.", ["Long shot", "Medium shot", "Close-up"]],
  ["Angle", "Identify whether the camera is looking down, straight on, or up.", ["High angle", "Eye level", "Low angle"]],
  ["Mise-en-scène", "Start with the setting. Then identify the people and objects. Finally notice lighting and visual details.", ["Setting", "People & objects", "Lighting & visual details"]],
  ["Composition", "Describe foreground, middle ground, background, screen left/right, lines, shapes, and depth.", ["Foreground / middle / background", "Screen left / screen right", "Lines, shapes & depth"]],
];

const firstShotSteps = [
  ["Scale", "Begin by identifying whether the first shot is a long shot, medium shot, or close-up."],
  ["Main Subject", "For this assignment, assume the main subject is the man."],
  ["Angle", "Identify whether the camera uses a high angle, eye-level angle, or low angle."],
  ["Setting", "Establish the setting first. Describe the overall space before listing individual objects."],
  ["People & Objects", "List the people and important objects you can actually see. Avoid adding things that are not visible."],
  ["Composition", "Start with the element that structures the space. Pay particular attention to the train and train tracks if they appear."],
  ["Spatial Coordinates", "Use foreground, middle ground, background, screen left, and screen right. Combine them when useful."],
  ["Depth & Diagonal Lines", "Look for diagonal lines and other visual elements that create an illusion of three-dimensional depth."],
];

const assignmentRequirements = [
  ["01", "Watch the film", "Your analysis must come from your own viewing of The Cabinet of Dr. Caligari.", ["Watch the relevant sequence yourself.", "Pay attention to the visual details in the actual shot.", "Do not rely only on summaries or study notes."]],
  ["02", "Choose your example", "Choose ONE example that clearly demonstrates one of the assignment's required concepts.", ["Visual distortion / defamiliarized object", "OR blurring of a symbolic boundary", "Examples include dream/reality or sanity/madness."]],
  ["03", "Respect the first 10 minutes rule", "Your chosen example must come from after the first ten minutes of the movie.", ["Do not use an example from the first ten minutes.", "Make sure you know approximately where your chosen moment occurs."]],
  ["04", "Use your own screenshot", "Provide a screenshot from the movie that serves as visual evidence.", ["The screenshot should clearly show the example.", "Choose a frame that makes your visual claim easy to see.", "Use your own screenshot as evidence."]],
  ["05", "Describe the evidence", "Describe what is actually visible rather than saying the scene looks weird.", ["Identify specific objects, people, lines, shapes, lighting, or spaces.", "Be precise about what has been distorted or what boundary has been blurred.", "Separate description from interpretation."]],
  ["06", "Explain the effect", "Explain why the visual choice matters.", ["What does the visual choice make the viewer notice?", "What feeling or impression does it create?", "What does it communicate beyond realistic appearance?"]],
  ["07", "Connect to German Expressionism", "Make the connection to the week's concept explicit.", ["Explain how your example demonstrates German Expressionism.", "Use relevant vocabulary.", "Explain the connection rather than simply naming the term."]],
  ["08", "Proofread", "Your instructor emphasizes clear, concise, logical, coherent, proofread work.", ["Answer the question directly.", "Use evidence that actually supports your claim.", "Check grammar, spelling, and clarity."]],
];

const quizQuestions = [
  {
    question: "What is the best description of mise-en-scène?",
    options: [
      "The arrangement of everything visible in the film frame",
      "Only the dialogue spoken by characters",
      "The historical background of a film",
      "The order in which scenes are edited",
    ],
    answer: 0,
  },
  {
    question: "Which four elements are central to mise-en-scène?",
    options: [
      "Editing, sound, dialogue, and narrative",
      "Setting, character, lighting, and composition",
      "Camera movement, music, dialogue, and editing",
      "Plot, genre, audience, and director",
    ],
    answer: 1,
  },
  {
    question: "What does setting refer to?",
    options: [
      "Only the location where the director was born",
      "The physical space that characters and objects inhabit",
      "The emotional state of the audience",
      "The order of the film's scenes",
    ],
    answer: 1,
  },
  {
    question: "What is composition?",
    options: [
      "The arrangement of people, objects, lines, shapes, and spaces within the frame",
      "The actors' spoken dialogue",
      "The film's production budget",
      "The historical period in which a film was made",
    ],
    answer: 0,
  },
  {
    question: "What makes German Expressionist mise-en-scène distinctive?",
    options: [
      "It always tries to reproduce ordinary reality exactly",
      "It avoids using lighting and composition",
      "It uses stylization and distortion to communicate emotional or psychological reality",
      "It focuses only on realistic costumes",
    ],
    answer: 2,
  },
  {
    question: "What is visual distortion?",
    options: [
      "Changing ordinary visual forms, proportions, lines, spaces, or bodies",
      "Removing all visual elements from a frame",
      "Using only realistic locations",
      "Editing a film into chronological order",
    ],
    answer: 0,
  },
  {
    question: "What is a symbolic boundary?",
    options: [
      "A physical wall in a film set",
      "A distinction between categories such as reality and illusion or sanity and madness",
      "The edge of the movie screen",
      "A line drawn by the director",
    ],
    answer: 1,
  },
  {
    question: "Which observation would be strongest for an A-level visual analysis?",
    options: [
      "The scene looks weird.",
      "This is German Expressionism.",
      "The crooked lines and distorted proportions make the space feel unstable, which connects the visual design to Expressionism's use of distortion to communicate psychological reality.",
      "The movie is old and scary.",
    ],
    answer: 2,
  },
];

const defaultProgress = {
  requirements: false,
  terms: false,
  notes: false,
  films: false,
  viewing: false,
  compare: false,
  lessons: false,
  frame: false,
  analysis: false,
  coach: false,
  discussion: false,
  firstShot: false,
  quiz: false,
};

const progressItems = [
  ["requirements", "Assignment Requirements reviewed"],
  ["terms", "Key Terms studied"],
  ["notes", "Reading & Lecture Notes reviewed"],
  ["films", "Film Examples reviewed"],
  ["viewing", "Film Viewing Checklist used"],
  ["compare", "Compare the Films reviewed"],
  ["lessons", "Lessons completed"],
  ["frame", "Frame Analysis practiced"],
  ["analysis", "Build an Analysis practiced"],
  ["coach", "A-Level Coach completed"],
  ["discussion", "Discussion Practice completed"],
  ["firstShot", "First Shot practiced"],
  ["quiz", "Quiz completed"],
];

export default function Home() {
  const [section, setSection] = useState("home");
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState(0);

  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

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

  const [firstShotNotes, setFirstShotNotes] = useState("");
  const [firstShotFeedback, setFirstShotFeedback] = useState("");

  const [coachEvidence, setCoachEvidence] = useState("");
  const [coachEffect, setCoachEffect] = useState("");
  const [coachConcept, setCoachConcept] = useState("");
  const [coachFeedback, setCoachFeedback] = useState("");

  const [progress, setProgress] = useState(defaultProgress);
  const [progressLoaded, setProgressLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("humanities21-week4-progress");

    if (saved) {
      try {
        setProgress({ ...defaultProgress, ...JSON.parse(saved) });
      } catch {
        localStorage.removeItem("humanities21-week4-progress");
      }
    }

    setProgressLoaded(true);
  }, []);

  useEffect(() => {
    if (!progressLoaded) return;

    localStorage.setItem(
      "humanities21-week4-progress",
      JSON.stringify(progress)
    );
  }, [progress, progressLoaded]);

  function goTo(id: string) {
    setSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAnalysis() {
    const filled =
      claim.trim().length > 15 &&
      evidence.trim().length > 20 &&
      explanation.trim().length > 20 &&
      connection.trim().length > 15;

    setAnalysisFeedback(
      filled
        ? "Good structure. Now check that your evidence is specific, your explanation says why it matters, and your German Expressionism connection is explicit."
        : "Keep building your analysis. Make sure you have a clear claim, specific evidence, an explanation of why the evidence matters, and an explicit connection to German Expressionism."
    );
  }

  function checkDiscussion() {
    const words = discussionResponse.trim().split(/\s+/).filter(Boolean);

    const hasEvidence =
      /scene|shot|frame|set|setting|lighting|shadow|object|character|makeup|composition|line|shape|space|door|chair|bed|building|Cesare/i.test(
        discussionResponse
      );

    const hasAnalysis =
      /because|shows|suggests|creates|makes|communicates|emphasizes|expresses|therefore|effect/i.test(
        discussionResponse
      );

    if (words.length < 50) {
      setDiscussionFeedback(
        "Your response needs more development. Try to reach at least 50 words and include a specific visual example."
      );
    } else if (!hasEvidence) {
      setDiscussionFeedback(
        "You have enough words, but add a specific visual detail from the film as evidence."
      );
    } else if (!hasAnalysis) {
      setDiscussionFeedback(
        "You have evidence. Now explain what that evidence does or communicates rather than only describing it."
      );
    } else {
      setDiscussionFeedback(
        "Strong practice response structure. Check that you directly answer the prompt, use a specific film example, explain why it matters, connect it to a course concept, and proofread."
      );
    }
  }

  function checkFirstShot() {
    const text = firstShotNotes.toLowerCase();

    const checks = [
      /long shot|medium shot|close-up/,
      /high angle|eye level|low angle/,
      /foreground|middle ground|background/,
      /screen left|screen right/,
      /depth|diagonal|line|perspective/,
    ];

    const passed = checks.filter((pattern) => pattern.test(text)).length;

    setFirstShotFeedback(
      passed >= 5
        ? "Good checklist coverage. Now make sure your description follows the required order and describes only what you can actually see."
        : "Keep going. Your description should include scale, angle, spatial depth, screen left/right, and lines or perspective."
    );
  }

  function checkCoach() {
    const evidenceWords = coachEvidence.trim().split(/\s+/).filter(Boolean);
    const effectWords = coachEffect.trim().split(/\s+/).filter(Boolean);

    const hasSpecificEvidence =
      evidenceWords.length >= 12 &&
      /left|right|foreground|middle|background|shadow|light|dark|line|shape|crooked|jagged|tilted|door|chair|bed|building|body|face|makeup|costume|composition|frame|angle|setting/i.test(
        coachEvidence
      );

    const hasEffect =
      effectWords.length >= 12 &&
      /makes|creates|suggests|communicates|emphasizes|feels|effect|impression|sense|fear|anxiety|unstable|strange|threatening|psychological/i.test(
        coachEffect
      );

    if (!coachEvidence.trim() || !coachEffect.trim() || !coachConcept.trim()) {
      setCoachFeedback(
        "Complete all three boxes first: specific evidence → effect → course concept."
      );
    } else if (!hasSpecificEvidence) {
      setCoachFeedback(
        "Your evidence needs to become more specific. Describe exactly what is visible in the frame."
      );
    } else if (!hasEffect) {
      setCoachFeedback(
        "You identified evidence, but now explain its effect. What does this visual choice make the viewer feel, notice, or understand?"
      );
    } else {
      setCoachFeedback(
        "Excellent structure. You have moved from WHAT you see → WHAT EFFECT it creates → WHAT COURSE CONCEPT explains it. Now write the final claim in your own words."
      );
    }
  }

  function submitQuizAnswer() {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === quizQuestions[quizIndex].answer;

    if (correct) setScore((current) => current + 1);

    setSelectedAnswer(null);

    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((current) => current + 1);
    } else {
      setProgress((current) => ({ ...current, quiz: true }));
      setSection("quiz-results");
    }
  }

  function resetQuiz() {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setSection("quiz");
  }

  const completed = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completed / progressItems.length) * 100);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <header className="mb-8">
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Humanities 21 • Film: Art and Communication
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Week 4: German Expressionism
          </h1>

          <p className="mt-3 max-w-3xl text-slate-300">
            A study guide for mise-en-scène, German Expressionism, visual
            distortion, defamiliarization, symbolic boundaries, and frame
            analysis.
          </p>
        </header>

        <nav className="mb-8 flex flex-wrap gap-2">
          {[
            ["home", "🏠 Home"],
            ["requirements", "📌 Assignment"],
            ["progress", "📝 Progress"],
            ["terms", "🔑 Key Terms"],
            ["notes", "📚 Notes"],
            ["films", "🎬 Film Examples"],
            ["viewing", "🎞️ Viewing"],
            ["compare", "🔄 Compare"],
            ["learn", "📖 Lessons"],
            ["frame", "🖼️ Frame Analysis"],
            ["analysis", "✍️ Analysis"],
            ["coach", "🎯 A-Level Coach"],
            ["discussion", "💬 Discussion"],
            ["first-shot", "🎞️ First Shot"],
            ["quiz", "🧠 Quiz"],
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

        {section === "home" && (
          <section>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["requirements", "📌", "Assignment Requirements", "Keep the Week 4 graded requirements in one place."],
                ["progress", "📝", "Study Progress", "Track what you have reviewed and practiced."],
                ["terms", "🔑", "Key Terms", "Master the vocabulary you need for the week."],
                ["notes", "📚", "Reading & Lecture Notes", "Review the important ideas from reading and lecture."],
                ["films", "🎬", "Film Examples", "Review how the concepts appear in the films."],
                ["viewing", "🎞️", "Viewing Checklist", "Train your eye while watching the films."],
                ["compare", "🔄", "Compare the Films", "See what the films share and where they differ."],
                ["learn", "📖", "Lessons", "Work through the concepts one at a time."],
                ["frame", "🖼️", "Frame Analysis", "Practice scale, angle, mise-en-scène, and composition."],
                ["analysis", "✍️", "Build an Analysis", "Practice claim, evidence, explanation, and connection."],
                ["coach", "🎯", "A-Level Coach", "Turn visual observations into stronger analysis."],
                ["discussion", "💬", "Discussion Practice", "Practice evidence-based film responses."],
                ["first-shot", "🎞️", "First Shot", "Practice the required first-shot structure."],
                ["quiz", "🧠", "Quiz", "Test yourself and review the concepts."],
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
                🎯 Your A-level goal
              </h2>
              <p className="mt-2 leading-7 text-slate-300">
                Don't just identify that something looks strange. Describe
                exactly what you see, explain the effect, and connect the
                evidence to German Expressionism.
              </p>
            </div>
          </section>
        )}

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
                    checked={Boolean(progress[key as keyof typeof progress])}
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
                Assignment → Notes → Terms → Films → Viewing → Compare →
                Lessons → Frame → Coach → Analysis → Discussion → First Shot →
                Quiz
              </p>
            </div>

            <button
              onClick={() => setProgress(defaultProgress)}
              className="mt-6 rounded-xl bg-slate-800 px-5 py-3 font-semibold hover:bg-slate-700"
            >
              Reset Progress
            </button>
          </section>
        )}

        {section === "requirements" && (
          <section>
            <h2 className="text-3xl font-bold">📌 Week 4 Assignment Requirements</h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Use this as a checklist while completing your own work.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {assignmentRequirements.map(([number, title, description, checklist]) => (
                <article
                  key={number}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="text-sm font-bold tracking-widest text-amber-400">
                    {number}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{description}</p>
                  <ul className="mt-5 space-y-2">
                    {(checklist as string[]).map((item) => (
                      <li key={item} className="rounded-2xl bg-slate-800 p-4 text-sm text-slate-300">
                        ☐ {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-xl font-bold text-red-300">🚫 Avoid</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Choosing an example from the first ten minutes.</li>
                <li>• Giving only plot summary.</li>
                <li>• Saying something is "weird" without explaining why.</li>
                <li>• Naming German Expressionism without making the connection.</li>
                <li>• Using vague evidence that cannot be seen in the screenshot.</li>
              </ul>
            </div>
          </section>
        )}

        {section === "terms" && (
          <section>
            <h2 className="text-3xl font-bold">🔑 Key Terms</h2>
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
                  <div className="font-semibold text-amber-300">Remember it</div>
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

        {section === "notes" && (
          <section>
            <h2 className="text-3xl font-bold">📚 Reading & Lecture Notes</h2>
            <p className="mt-2 text-slate-400">
              Review the important ideas from the reading and lecture.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {readingNotes.map(([title, body, takeaway], index) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="text-sm font-semibold text-amber-400">
                    {index + 1}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{body}</p>
                  <div className="mt-5 rounded-2xl bg-slate-800 p-4">
                    <div className="font-semibold text-amber-300">
                      Key takeaway
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {takeaway}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-amber-500/30 bg-amber-400/10 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                Professor's central idea
              </h3>
              <p className="mt-3 leading-8 text-slate-300">
                German Expressionism uses mise-en-scène, props, setting,
                lighting, makeup, acting, and composition to communicate an
                internal emotional state rather than simply reproducing
                realistic external reality.
              </p>
            </div>
          </section>
        )}

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
                    <div className="mt-1 text-sm opacity-70">{film.year}</div>
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

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-800 p-5">
                    <h4 className="font-bold text-amber-300">Look for</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {filmExamples[selectedFilm].lookFor.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {section === "viewing" && (
          <section>
            <h2 className="text-3xl font-bold">🎞️ Film Viewing Checklist</h2>
            <p className="mt-2 text-slate-400">
              Train your eye to notice visual evidence before writing.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {viewingChecklist.map(([title, questions]) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h3 className="text-xl font-bold text-amber-300">{title}</h3>
                  <ul className="mt-4 space-y-3">
                    {(questions as string[]).map((question) => (
                      <li key={question} className="rounded-2xl bg-slate-800 p-4 text-sm text-slate-300">
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
              <div className="mt-5 rounded-2xl bg-slate-950/60 p-5 font-semibold">
                SEE → DESCRIBE → EXPLAIN → CONNECT
              </div>
            </div>
          </section>
        )}

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
                    <th className="p-5 text-left text-amber-300">Category</th>
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

        {section === "learn" && (
          <section>
            <h2 className="text-3xl font-bold">📖 Lessons</h2>

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
                  <div className="font-semibold text-amber-300">Key point</div>
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

        {section === "frame" && (
          <section>
            <h2 className="text-3xl font-bold">🖼️ Frame Analysis</h2>

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
                  <div key={choice} className="rounded-2xl bg-slate-800 p-4 text-center font-semibold">
                    {choice}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => setFrameStep((x) => Math.max(0, x - 1))}
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

        {section === "analysis" && (
          <section>
            <h2 className="text-3xl font-bold">✍️ Build an Analysis</h2>
            <p className="mt-2 text-slate-400">
              Practice the structure without having the app write the answer.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Claim", claim, setClaim, "What is your main point?"],
                ["Evidence", evidence, setEvidence, "What specific visual evidence supports your claim?"],
                ["Explanation", explanation, setExplanation, "Why does that evidence matter?"],
                ["German Expressionism connection", connection, setConnection, "How does this connect specifically to German Expressionism?"],
              ].map(([label, value, setter, placeholder]) => (
                <div key={label as string} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
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

        {section === "coach" && (
          <section>
            <h2 className="text-3xl font-bold">🎯 A-Level Analysis Coach</h2>
            <p className="mt-2 text-slate-400">
              Move from observation → effect → course concept.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["1. What do you see?", coachEvidence, setCoachEvidence, "Describe the exact visual evidence."],
                ["2. What effect does it create?", coachEffect, setCoachEffect, "Explain what the visual choice makes the viewer feel or notice."],
              ].map(([label, value, setter, placeholder]) => (
                <div key={label as string} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
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

        {section === "discussion" && (
          <section>
            <h2 className="text-3xl font-bold">💬 Discussion Practice</h2>

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

        {section === "first-shot" && (
          <section>
            <h2 className="text-3xl font-bold">🎞️ First Shot Assignment</h2>
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

        {section === "quiz" && (
          <section>
            <h2 className="text-3xl font-bold">🧠 Quiz</h2>
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

        {section === "quiz-results" && (
          <section>
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <div className="text-5xl">🎉</div>
              <h2 className="mt-4 text-3xl font-bold">Quiz Complete</h2>
              <p className="mt-4 text-5xl font-bold text-amber-400">
                {score}/{quizQuestions.length}
              </p>

              <p className="mt-4 text-slate-400">
                Review the lessons and key terms for anything you missed.
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
      </div>
    </main>
  );
}