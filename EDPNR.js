/************** 
 * Edpnr Test *
 **************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'EDPNR';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(Intro_SliderRoutineBegin());
flowScheduler.add(Intro_SliderRoutineEachFrame());
flowScheduler.add(Intro_SliderRoutineEnd());
flowScheduler.add(Mood_SliderRoutineBegin());
flowScheduler.add(Mood_SliderRoutineEachFrame());
flowScheduler.add(Mood_SliderRoutineEnd());
flowScheduler.add(Instructions_Experiment_InstructionsRoutineBegin());
flowScheduler.add(Instructions_Experiment_InstructionsRoutineEachFrame());
flowScheduler.add(Instructions_Experiment_InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(BreakRoutineBegin());
flowScheduler.add(BreakRoutineEachFrame());
flowScheduler.add(BreakRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(Intro_SliderRoutineBegin());
flowScheduler.add(Intro_SliderRoutineEachFrame());
flowScheduler.add(Intro_SliderRoutineEnd());
flowScheduler.add(Mood_Slider_3RoutineBegin());
flowScheduler.add(Mood_Slider_3RoutineEachFrame());
flowScheduler.add(Mood_Slider_3RoutineEnd());
flowScheduler.add(Instructions_MusicRoutineBegin());
flowScheduler.add(Instructions_MusicRoutineEachFrame());
flowScheduler.add(Instructions_MusicRoutineEnd());
flowScheduler.add(Music_2RoutineBegin());
flowScheduler.add(Music_2RoutineEachFrame());
flowScheduler.add(Music_2RoutineEnd());
flowScheduler.add(Intro_SliderRoutineBegin());
flowScheduler.add(Intro_SliderRoutineEachFrame());
flowScheduler.add(Intro_SliderRoutineEnd());
flowScheduler.add(Mood_Slider_4RoutineBegin());
flowScheduler.add(Mood_Slider_4RoutineEachFrame());
flowScheduler.add(Mood_Slider_4RoutineEnd());
flowScheduler.add(Break_2RoutineBegin());
flowScheduler.add(Break_2RoutineEachFrame());
flowScheduler.add(Break_2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp', 'path': 'Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp'},
    {'name': 'AF35NES.JPG', 'path': 'AF35NES.JPG'},
    {'name': 'AM21NES.JPG', 'path': 'AM21NES.JPG'},
    {'name': 'AF32NES.JPG', 'path': 'AF32NES.JPG'},
    {'name': 'PositiveMusic.mp3', 'path': 'PositiveMusic.mp3'},
    {'name': 'AM10NES.JPG', 'path': 'AM10NES.JPG'},
    {'name': 'AM34NES.JPG', 'path': 'AM34NES.JPG'},
    {'name': 'AM01ANS.JPG', 'path': 'AM01ANS.JPG'},
    {'name': 'AF30NES.JPG', 'path': 'AF30NES.JPG'},
    {'name': 'AF33NES.JPG', 'path': 'AF33NES.JPG'},
    {'name': 'Emoji_Icon_-_Sad_Emoji_grande.webp', 'path': 'Emoji_Icon_-_Sad_Emoji_grande.webp'},
    {'name': 'AF09ANS.JPG', 'path': 'AF09ANS.JPG'},
    {'name': 'AM14NES.JPG', 'path': 'AM14NES.JPG'},
    {'name': 'NegativeMusic.mp3', 'path': 'NegativeMusic.mp3'},
    {'name': 'AM23NES.JPG', 'path': 'AM23NES.JPG'},
    {'name': 'AF27ANS.JPG', 'path': 'AF27ANS.JPG'},
    {'name': 'AM30ANS.JPG', 'path': 'AM30ANS.JPG'},
    {'name': 'AF09NES.JPG', 'path': 'AF09NES.JPG'},
    {'name': 'AF14ANS.JPG', 'path': 'AF14ANS.JPG'},
    {'name': 'AM08NES.JPG', 'path': 'AM08NES.JPG'},
    {'name': 'AF23NES.JPG', 'path': 'AF23NES.JPG'},
    {'name': 'AF35ANS.JPG', 'path': 'AF35ANS.JPG'},
    {'name': 'AM01NES.JPG', 'path': 'AM01NES.JPG'},
    {'name': 'AM21ANS.JPG', 'path': 'AM21ANS.JPG'},
    {'name': 'AM09ANS.JPG', 'path': 'AM09ANS.JPG'},
    {'name': 'AF26NES.JPG', 'path': 'AF26NES.JPG'},
    {'name': 'AM34ANS.JPG', 'path': 'AM34ANS.JPG'},
    {'name': 'AF33ANS.JPG', 'path': 'AF33ANS.JPG'},
    {'name': 'AF22ANS.JPG', 'path': 'AF22ANS.JPG'},
    {'name': 'AM29NES.JPG', 'path': 'AM29NES.JPG'},
    {'name': 'AM23ANS.JPG', 'path': 'AM23ANS.JPG'},
    {'name': 'AF26ANS.JPG', 'path': 'AF26ANS.JPG'},
    {'name': 'AF30ANS.JPG', 'path': 'AF30ANS.JPG'},
    {'name': 'AM05NES.JPG', 'path': 'AM05NES.JPG'},
    {'name': 'AM09NES.JPG', 'path': 'AM09NES.JPG'},
    {'name': 'AM05ANS.JPG', 'path': 'AM05ANS.JPG'},
    {'name': 'AM06ANS.JPG', 'path': 'AM06ANS.JPG'},
    {'name': 'AM22NES.JPG', 'path': 'AM22NES.JPG'},
    {'name': 'AF23ANS.JPG', 'path': 'AF23ANS.JPG'},
    {'name': 'AM08ANS.JPG', 'path': 'AM08ANS.JPG'},
    {'name': 'AF25ANS.JPG', 'path': 'AF25ANS.JPG'},
    {'name': 'AM10ANS.JPG', 'path': 'AM10ANS.JPG'},
    {'name': 'ROBYN_EXCEL_3.xlsx', 'path': 'ROBYN_EXCEL_3.xlsx'},
    {'name': 'AM30NES.JPG', 'path': 'AM30NES.JPG'},
    {'name': 'NegativeMusic.aif', 'path': 'NegativeMusic.aif'},
    {'name': 'AF14NES.JPG', 'path': 'AF14NES.JPG'},
    {'name': 'AF22NES.JPG', 'path': 'AF22NES.JPG'},
    {'name': 'AF25NES.JPG', 'path': 'AF25NES.JPG'},
    {'name': 'AF27NES.JPG', 'path': 'AF27NES.JPG'},
    {'name': 'AM14ANS.JPG', 'path': 'AM14ANS.JPG'},
    {'name': 'AM22ANS.JPG', 'path': 'AM22ANS.JPG'},
    {'name': 'AF32ANS.JPG', 'path': 'AF32ANS.JPG'},
    {'name': 'PositiveMusic.aif', 'path': 'PositiveMusic.aif'},
    {'name': 'AM29ANS.JPG', 'path': 'AM29ANS.JPG'},
    {'name': 'ROBYN_EXCEL_2.xlsx', 'path': 'ROBYN_EXCEL_2.xlsx'},
    {'name': 'AM06NES.JPG', 'path': 'AM06NES.JPG'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var IntroductionClock;
var text;
var key_resp;
var Intro_SliderClock;
var text_9;
var key_resp_7;
var Mood_SliderClock;
var slider;
var text_6;
var image_3;
var image_4;
var Instructions_Experiment_InstructionsClock;
var text_10;
var key_resp_8;
var Test_RoutineClock;
var FC_1;
var Test_Face_L;
var Test_Face_R;
var Dot;
var Test_ResponseClock;
var key_resp_2;
var BreakClock;
var text_5;
var key_resp_4;
var Mood_Slider_3Clock;
var slider_3;
var text_13;
var image_5;
var image_6;
var Instructions_MusicClock;
var text_2;
var key_resp_10;
var Music_2Clock;
var text_7;
var key_resp_6;
var sound_1;
var text_11;
var Mood_Slider_4Clock;
var slider_4;
var text_14;
var image_7;
var image_8;
var Break_2Clock;
var text_12;
var key_resp_9;
var EndClock;
var text_4;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome and thank you for participating in this task.\n\nFor this task, you will need a pair of headphones or earbuds with the volume set to just over halfway. It should be loud enough that you can hear it well but not so loud that you hurt yourself. You will be instructed when to put the headphones on and when to take them off.\n\nOn each trial, you will see a central fixation cross followed by two faces. A dot will appear behind one of these faces and your job is to press the key that corresponds to the side of the dot. Please be as quick and accurate as possible.\n\nIf the dot is behind the left-hand picture, press the left arrow  \n\nIf the dot is behind the right-hand picture, press the right arrow\n\nWhen you are ready, press the space bar to start the practice trial.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Intro_Slider"
  Intro_SliderClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'You will now be asked to indicate your mood.\n\npress the ’space’ bar to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Mood_Slider"
  Mood_SliderClock = new util.Clock();
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [0.8, 0.1], pos: [0, 0], units: 'height',
    labels: [0, 10], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'please rate your mood right now where 0 is negative and 10 is positive. Then there are faces on each end of slider',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'Emoji_Icon_-_Sad_Emoji_grande.webp', mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp', mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Instructions_Experiment_Instructions"
  Instructions_Experiment_InstructionsClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Thank you for your response. \n\nYou will now be shown a set of faces and a dot will appear. Your task is to press either the left arrow key, or the right arrow key to show which side the dot appeared on. \n\nYou will now be shown 5 test trials to get used to the experiment.\n\nPress the ‘space’ bar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Test_Routine"
  Test_RoutineClock = new util.Clock();
  FC_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FC_1',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Test_Face_L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test_Face_L', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Test_Face_R = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test_Face_R', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  Dot = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dot',
    text: '.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Test_Response"
  Test_ResponseClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'That concludes the practice trials.\n\nWhen you are ready, press the ‘space’ bar to move on to the full set of trials.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Mood_Slider_3"
  Mood_Slider_3Clock = new util.Clock();
  slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_3',
    size: [0.8, 0.1], pos: [0, 0], units: 'height',
    labels: [0, 10], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'please rate your mood right now where 0 is negative and 10 is positive. Then there are faces on each end of slider',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'Emoji_Icon_-_Sad_Emoji_grande.webp', mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0.0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp', mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Instructions_Music"
  Instructions_MusicClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please put on some headphones and make sure your volume is turned half way up.\n\nYou are going to listen to a piece of music. Simply sit back and relax.\n\n\nPress the ‘space’ bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Music_2"
  Music_2Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Please sit back, relax and enjoy the music.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_1.setVolume(1.0);
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Thank you for listening. Please remove your headphones.\n\nPress the ‘space’ bar to continue\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Mood_Slider_4"
  Mood_Slider_4Clock = new util.Clock();
  slider_4 = new visual.Slider({
    win: psychoJS.window, name: 'slider_4',
    size: [0.8, 0.1], pos: [0, 0], units: 'height',
    labels: [0, 10], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'please rate your mood right now where 0 is negative and 10 is positive. Then there are faces on each end of slider',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'Emoji_Icon_-_Sad_Emoji_grande.webp', mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp', mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Break_2"
  Break_2Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'You are now going to complete a set of trials similar to the ones you completed prior to listening to the music.\n\npress the ‘space’ bar to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Thank you for taking part in this section of the experiment. \n\nYour activity will now be recorded. All you will need to do now is close this tab and continue with the survey.\n\npress the ‘space’ bar to close the experiment and close the tab.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Introduction'-------
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text);
    IntroductionComponents.push(key_resp);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Introduction'-------
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroductionRoutineEnd() {
  return async function () {
    //------Ending Routine 'Introduction'-------
    for (const thisComponent of IntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var Intro_SliderComponents;
function Intro_SliderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_Slider'-------
    t = 0;
    Intro_SliderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    Intro_SliderComponents = [];
    Intro_SliderComponents.push(text_9);
    Intro_SliderComponents.push(key_resp_7);
    
    for (const thisComponent of Intro_SliderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_SliderRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_Slider'-------
    // get current time
    t = Intro_SliderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_SliderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_SliderRoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_Slider'-------
    for (const thisComponent of Intro_SliderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Intro_Slider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Mood_SliderComponents;
function Mood_SliderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Mood_Slider'-------
    t = 0;
    Mood_SliderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider.reset()
    // keep track of which components have finished
    Mood_SliderComponents = [];
    Mood_SliderComponents.push(slider);
    Mood_SliderComponents.push(text_6);
    Mood_SliderComponents.push(image_3);
    Mood_SliderComponents.push(image_4);
    
    for (const thisComponent of Mood_SliderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Mood_SliderRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Mood_Slider'-------
    // get current time
    t = Mood_SliderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // Check slider for response to end routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Mood_SliderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Mood_SliderRoutineEnd() {
  return async function () {
    //------Ending Routine 'Mood_Slider'-------
    for (const thisComponent of Mood_SliderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "Mood_Slider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var Instructions_Experiment_InstructionsComponents;
function Instructions_Experiment_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_Experiment_Instructions'-------
    t = 0;
    Instructions_Experiment_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Instructions_Experiment_InstructionsComponents = [];
    Instructions_Experiment_InstructionsComponents.push(text_10);
    Instructions_Experiment_InstructionsComponents.push(key_resp_8);
    
    for (const thisComponent of Instructions_Experiment_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_Experiment_InstructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_Experiment_Instructions'-------
    // get current time
    t = Instructions_Experiment_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_Experiment_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_Experiment_InstructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_Experiment_Instructions'-------
    for (const thisComponent of Instructions_Experiment_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Instructions_Experiment_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ROBYN_EXCEL_3.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Test_RoutineRoutineBegin(snapshot));
      trialsLoopScheduler.add(Test_RoutineRoutineEachFrame());
      trialsLoopScheduler.add(Test_RoutineRoutineEnd());
      trialsLoopScheduler.add(Test_ResponseRoutineBegin(snapshot));
      trialsLoopScheduler.add(Test_ResponseRoutineEachFrame());
      trialsLoopScheduler.add(Test_ResponseRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ROBYN_EXCEL_2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(Test_RoutineRoutineBegin(snapshot));
      trials_2LoopScheduler.add(Test_RoutineRoutineEachFrame());
      trials_2LoopScheduler.add(Test_RoutineRoutineEnd());
      trials_2LoopScheduler.add(Test_ResponseRoutineBegin(snapshot));
      trials_2LoopScheduler.add(Test_ResponseRoutineEachFrame());
      trials_2LoopScheduler.add(Test_ResponseRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ROBYN_EXCEL_2.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      const snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(Test_RoutineRoutineBegin(snapshot));
      trials_3LoopScheduler.add(Test_RoutineRoutineEachFrame());
      trials_3LoopScheduler.add(Test_RoutineRoutineEnd());
      trials_3LoopScheduler.add(Test_ResponseRoutineBegin(snapshot));
      trials_3LoopScheduler.add(Test_ResponseRoutineEachFrame());
      trials_3LoopScheduler.add(Test_ResponseRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var Test_RoutineComponents;
function Test_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Routine'-------
    t = 0;
    Test_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.525000);
    // update component parameters for each repeat
    Test_Face_L.setImage(Img_L);
    Test_Face_R.setImage(Img_R);
    Dot.setPos([dotX, dotY]);
    // keep track of which components have finished
    Test_RoutineComponents = [];
    Test_RoutineComponents.push(FC_1);
    Test_RoutineComponents.push(Test_Face_L);
    Test_RoutineComponents.push(Test_Face_R);
    Test_RoutineComponents.push(Dot);
    
    for (const thisComponent of Test_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Test_RoutineRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Routine'-------
    // get current time
    t = Test_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FC_1* updates
    if (t >= 0.0 && FC_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FC_1.tStart = t;  // (not accounting for frame time here)
      FC_1.frameNStart = frameN;  // exact frame index
      
      FC_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FC_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FC_1.setAutoDraw(false);
    }
    
    // *Test_Face_L* updates
    if (t >= 0.5 && Test_Face_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test_Face_L.tStart = t;  // (not accounting for frame time here)
      Test_Face_L.frameNStart = frameN;  // exact frame index
      
      Test_Face_L.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Test_Face_L.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Test_Face_L.setAutoDraw(false);
    }
    
    // *Test_Face_R* updates
    if (t >= 0.5 && Test_Face_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test_Face_R.tStart = t;  // (not accounting for frame time here)
      Test_Face_R.frameNStart = frameN;  // exact frame index
      
      Test_Face_R.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Test_Face_R.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Test_Face_R.setAutoDraw(false);
    }
    
    // *Dot* updates
    if (t >= 1.025 && Dot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dot.tStart = t;  // (not accounting for frame time here)
      Dot.frameNStart = frameN;  // exact frame index
      
      Dot.setAutoDraw(true);
    }

    frameRemains = 1.025 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Dot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Dot.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_RoutineRoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Routine'-------
    for (const thisComponent of Test_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Test_ResponseComponents;
function Test_ResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Response'-------
    t = 0;
    Test_ResponseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Test_ResponseComponents = [];
    Test_ResponseComponents.push(key_resp_2);
    
    for (const thisComponent of Test_ResponseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test_ResponseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Response'-------
    // get current time
    t = Test_ResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test_ResponseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_ResponseRoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Response'-------
    for (const thisComponent of Test_ResponseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Test_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Break'-------
    t = 0;
    BreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(text_5);
    BreakComponents.push(key_resp_4);
    
    for (const thisComponent of BreakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BreakRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Break'-------
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BreakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd() {
  return async function () {
    //------Ending Routine 'Break'-------
    for (const thisComponent of BreakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Mood_Slider_3Components;
function Mood_Slider_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Mood_Slider_3'-------
    t = 0;
    Mood_Slider_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_3.reset()
    // keep track of which components have finished
    Mood_Slider_3Components = [];
    Mood_Slider_3Components.push(slider_3);
    Mood_Slider_3Components.push(text_13);
    Mood_Slider_3Components.push(image_5);
    Mood_Slider_3Components.push(image_6);
    
    for (const thisComponent of Mood_Slider_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Mood_Slider_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Mood_Slider_3'-------
    // get current time
    t = Mood_Slider_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_3* updates
    if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_3.tStart = t;  // (not accounting for frame time here)
      slider_3.frameNStart = frameN;  // exact frame index
      
      slider_3.setAutoDraw(true);
    }

    
    // Check slider_3 for response to end routine
    if (slider_3.getRating() !== undefined && slider_3.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Mood_Slider_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Mood_Slider_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Mood_Slider_3'-------
    for (const thisComponent of Mood_Slider_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_3.response', slider_3.getRating());
    psychoJS.experiment.addData('slider_3.rt', slider_3.getRT());
    // the Routine "Mood_Slider_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var Instructions_MusicComponents;
function Instructions_MusicRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_Music'-------
    t = 0;
    Instructions_MusicClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    Instructions_MusicComponents = [];
    Instructions_MusicComponents.push(text_2);
    Instructions_MusicComponents.push(key_resp_10);
    
    for (const thisComponent of Instructions_MusicComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_MusicRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_Music'-------
    // get current time
    t = Instructions_MusicClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_MusicComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_MusicRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_Music'-------
    for (const thisComponent of Instructions_MusicComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "Instructions_Music" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var Music_2Components;
function Music_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Music_2'-------
    t = 0;
    Music_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'NegativeMusic.mp3',
    secs: -1,
    });
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    Music_2Components = [];
    Music_2Components.push(text_7);
    Music_2Components.push(key_resp_6);
    Music_2Components.push(sound_1);
    Music_2Components.push(text_11);
    
    for (const thisComponent of Music_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Music_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Music_2'-------
    // get current time
    t = Music_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 150 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *key_resp_6* updates
    if (t >= 150 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_1.getDuration() + sound_1.tStart)     && sound_1.status === PsychoJS.Status.STARTED) {
      sound_1.stop();  // stop the sound (if longer than duration)
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_11* updates
    if (t >= 150 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Music_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Music_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Music_2'-------
    for (const thisComponent of Music_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    sound_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "Music_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Mood_Slider_4Components;
function Mood_Slider_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Mood_Slider_4'-------
    t = 0;
    Mood_Slider_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_4.reset()
    // keep track of which components have finished
    Mood_Slider_4Components = [];
    Mood_Slider_4Components.push(slider_4);
    Mood_Slider_4Components.push(text_14);
    Mood_Slider_4Components.push(image_7);
    Mood_Slider_4Components.push(image_8);
    
    for (const thisComponent of Mood_Slider_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Mood_Slider_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Mood_Slider_4'-------
    // get current time
    t = Mood_Slider_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_4* updates
    if (t >= 0.0 && slider_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_4.tStart = t;  // (not accounting for frame time here)
      slider_4.frameNStart = frameN;  // exact frame index
      
      slider_4.setAutoDraw(true);
    }

    
    // Check slider_4 for response to end routine
    if (slider_4.getRating() !== undefined && slider_4.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }

    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Mood_Slider_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Mood_Slider_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Mood_Slider_4'-------
    for (const thisComponent of Mood_Slider_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_4.response', slider_4.getRating());
    psychoJS.experiment.addData('slider_4.rt', slider_4.getRT());
    // the Routine "Mood_Slider_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var Break_2Components;
function Break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Break_2'-------
    t = 0;
    Break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Break_2Components = [];
    Break_2Components.push(text_12);
    Break_2Components.push(key_resp_9);
    
    for (const thisComponent of Break_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Break_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Break_2'-------
    // get current time
    t = Break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Break_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Break_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Break_2'-------
    for (const thisComponent of Break_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_4);
    EndComponents.push(key_resp_5);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd() {
  return async function () {
    //------Ending Routine 'End'-------
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
