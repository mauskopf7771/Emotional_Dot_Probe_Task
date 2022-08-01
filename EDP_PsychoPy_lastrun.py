#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Mon Feb 21 16:01:57 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Robyn_PsychoPy'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/jackcrosby/Desktop/Robyn_PsychoPy/Robyn_PsychoPy_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1512, 982], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Introduction"
IntroductionClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Welcome and thank you for participating in this task.\n\nFor this task, you will need a pair of headphones or earbuds with the volume set to just over halfway. It should be loud enough that you can hear it well but not so loud that you hurt yourself. You will be instructed when to put the headphones on and when to take them off.\n\nOn each trial, you will see a central fixation cross followed by two faces. A dot will appear behind one of these faces and your job is to press the key that corresponds to the side of the dot. Please be as quick and accurate as possible.\n\nIf the dot is behind the left-hand picture, press the left arrow  \n\nIf the dot is behind the right-hand picture, press the right arrow\n\nWhen you are ready, press the space bar to start the practice trial.',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "Mood_Slider_2"
Mood_Slider_2Clock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='please rate your mood right now where 0 is negative and 10 is positive',
    font='Open Sans',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
slider_2 = visual.Slider(win=win, name='slider_2',
    startValue=None, size=(0.85, 0.1), pos=(0, 0), units=None,
    labels=(0, 10), ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11), granularity=0.0,
    style='rating', styleTweaks=('labels45', 'triangleMarker'), opacity=None,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
image = visual.ImageStim(
    win=win,
    name='image', 
    image='Emoji_Icon_-_Sad_Emoji_grande.webp', mask=None,
    ori=0.0, pos=(-0.5, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.webp', mask=None,
    ori=0.0, pos=(0.5, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "Test_Routine"
Test_RoutineClock = core.Clock()
FC_1 = visual.TextStim(win=win, name='FC_1',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Test_Face_L = visual.ImageStim(
    win=win,
    name='Test_Face_L', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
Test_Face_R = visual.ImageStim(
    win=win,
    name='Test_Face_R', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
Dot = visual.TextStim(win=win, name='Dot',
    text='.',
    font='Open Sans',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "Test_Response"
Test_ResponseClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Was the dot on the left or the right?\n\n\n\n\nPress the left arrow key for left\nPress the right arrow key for right',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Break"
BreakClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Break\n\nI guess there will be some music played?',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Test_Routine"
Test_RoutineClock = core.Clock()
FC_1 = visual.TextStim(win=win, name='FC_1',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Test_Face_L = visual.ImageStim(
    win=win,
    name='Test_Face_L', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
Test_Face_R = visual.ImageStim(
    win=win,
    name='Test_Face_R', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
Dot = visual.TextStim(win=win, name='Dot',
    text='.',
    font='Open Sans',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "Test_Response"
Test_ResponseClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Was the dot on the left or the right?\n\n\n\n\nPress the left arrow key for left\nPress the right arrow key for right',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Break"
BreakClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Break\n\nI guess there will be some music played?',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Music_2"
Music_2Clock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()
sound_1 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sound_1')
sound_1.setVolume(1.0)

# Initialize components for Routine "Test_Routine"
Test_RoutineClock = core.Clock()
FC_1 = visual.TextStim(win=win, name='FC_1',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Test_Face_L = visual.ImageStim(
    win=win,
    name='Test_Face_L', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
Test_Face_R = visual.ImageStim(
    win=win,
    name='Test_Face_R', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
Dot = visual.TextStim(win=win, name='Dot',
    text='.',
    font='Open Sans',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "Test_Response"
Test_ResponseClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Was the dot on the left or the right?\n\n\n\n\nPress the left arrow key for left\nPress the right arrow key for right',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "End"
EndClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='Thank you for taking part in this section of the experiment. \n\nYour activity will now be recorded. All you will need to do now is close this tab and continue with the Qualtics survey.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Introduction"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
IntroductionComponents = [text, key_resp]
for thisComponent in IntroductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
IntroductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Introduction"-------
while continueRoutine:
    # get current time
    t = IntroductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=IntroductionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntroductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Introduction"-------
for thisComponent in IntroductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Mood_Slider_2"-------
continueRoutine = True
# update component parameters for each repeat
slider_2.reset()
# keep track of which components have finished
Mood_Slider_2Components = [text_8, slider_2, image, image_2]
for thisComponent in Mood_Slider_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Mood_Slider_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Mood_Slider_2"-------
while continueRoutine:
    # get current time
    t = Mood_Slider_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Mood_Slider_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        text_8.setAutoDraw(True)
    
    # *slider_2* updates
    if slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_2.frameNStart = frameN  # exact frame index
        slider_2.tStart = t  # local t and not account for scr refresh
        slider_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_2, 'tStartRefresh')  # time at next scr refresh
        slider_2.setAutoDraw(True)
    
    # Check slider_2 for response to end routine
    if slider_2.getRating() is not None and slider_2.status == STARTED:
        continueRoutine = False
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        image.setAutoDraw(True)
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        image_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Mood_Slider_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Mood_Slider_2"-------
for thisComponent in Mood_Slider_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_8.started', text_8.tStartRefresh)
thisExp.addData('text_8.stopped', text_8.tStopRefresh)
thisExp.addData('slider_2.response', slider_2.getRating())
thisExp.addData('slider_2.rt', slider_2.getRT())
thisExp.addData('slider_2.started', slider_2.tStartRefresh)
thisExp.addData('slider_2.stopped', slider_2.tStopRefresh)
thisExp.addData('image.started', image.tStartRefresh)
thisExp.addData('image.stopped', image.tStopRefresh)
thisExp.addData('image_2.started', image_2.tStartRefresh)
thisExp.addData('image_2.stopped', image_2.tStopRefresh)
# the Routine "Mood_Slider_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('ROBYN_EXCEL_3.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test_Routine"-------
    continueRoutine = True
    routineTimer.add(1.525000)
    # update component parameters for each repeat
    Test_Face_L.setImage(Img_L)
    Test_Face_R.setImage(Img_R)
    Dot.setPos(Dot_Pos)
    # keep track of which components have finished
    Test_RoutineComponents = [FC_1, Test_Face_L, Test_Face_R, Dot]
    for thisComponent in Test_RoutineComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_RoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Routine"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Test_RoutineClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_RoutineClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *FC_1* updates
        if FC_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            FC_1.frameNStart = frameN  # exact frame index
            FC_1.tStart = t  # local t and not account for scr refresh
            FC_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FC_1, 'tStartRefresh')  # time at next scr refresh
            FC_1.setAutoDraw(True)
        if FC_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FC_1.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                FC_1.tStop = t  # not accounting for scr refresh
                FC_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(FC_1, 'tStopRefresh')  # time at next scr refresh
                FC_1.setAutoDraw(False)
        
        # *Test_Face_L* updates
        if Test_Face_L.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_L.frameNStart = frameN  # exact frame index
            Test_Face_L.tStart = t  # local t and not account for scr refresh
            Test_Face_L.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_L, 'tStartRefresh')  # time at next scr refresh
            Test_Face_L.setAutoDraw(True)
        if Test_Face_L.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_L.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_L.tStop = t  # not accounting for scr refresh
                Test_Face_L.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_L, 'tStopRefresh')  # time at next scr refresh
                Test_Face_L.setAutoDraw(False)
        
        # *Test_Face_R* updates
        if Test_Face_R.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_R.frameNStart = frameN  # exact frame index
            Test_Face_R.tStart = t  # local t and not account for scr refresh
            Test_Face_R.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_R, 'tStartRefresh')  # time at next scr refresh
            Test_Face_R.setAutoDraw(True)
        if Test_Face_R.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_R.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_R.tStop = t  # not accounting for scr refresh
                Test_Face_R.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_R, 'tStopRefresh')  # time at next scr refresh
                Test_Face_R.setAutoDraw(False)
        
        # *Dot* updates
        if Dot.status == NOT_STARTED and tThisFlip >= 1.025-frameTolerance:
            # keep track of start time/frame for later
            Dot.frameNStart = frameN  # exact frame index
            Dot.tStart = t  # local t and not account for scr refresh
            Dot.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Dot, 'tStartRefresh')  # time at next scr refresh
            Dot.setAutoDraw(True)
        if Dot.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Dot.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Dot.tStop = t  # not accounting for scr refresh
                Dot.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Dot, 'tStopRefresh')  # time at next scr refresh
                Dot.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_RoutineComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Routine"-------
    for thisComponent in Test_RoutineComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('FC_1.started', FC_1.tStartRefresh)
    trials.addData('FC_1.stopped', FC_1.tStopRefresh)
    trials.addData('Test_Face_L.started', Test_Face_L.tStartRefresh)
    trials.addData('Test_Face_L.stopped', Test_Face_L.tStopRefresh)
    trials.addData('Test_Face_R.started', Test_Face_R.tStartRefresh)
    trials.addData('Test_Face_R.stopped', Test_Face_R.tStopRefresh)
    trials.addData('Dot.started', Dot.tStartRefresh)
    trials.addData('Dot.stopped', Dot.tStopRefresh)
    
    # ------Prepare to start Routine "Test_Response"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    Test_ResponseComponents = [text_2, key_resp_2]
    for thisComponent in Test_ResponseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_ResponseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Response"-------
    while continueRoutine:
        # get current time
        t = Test_ResponseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_ResponseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_ResponseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Response"-------
    for thisComponent in Test_ResponseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_2.started', text_2.tStartRefresh)
    trials.addData('text_2.stopped', text_2.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials.addData('key_resp_2.rt', key_resp_2.rt)
    trials.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "Test_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# ------Prepare to start Routine "Break"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
BreakComponents = [text_5, key_resp_4]
for thisComponent in BreakComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
BreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Break"-------
while continueRoutine:
    # get current time
    t = BreakClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=BreakClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in BreakComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Break"-------
for thisComponent in BreakComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "Break" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('ROBYN_EXCEL_2.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test_Routine"-------
    continueRoutine = True
    routineTimer.add(1.525000)
    # update component parameters for each repeat
    Test_Face_L.setImage(Img_L)
    Test_Face_R.setImage(Img_R)
    Dot.setPos(Dot_Pos)
    # keep track of which components have finished
    Test_RoutineComponents = [FC_1, Test_Face_L, Test_Face_R, Dot]
    for thisComponent in Test_RoutineComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_RoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Routine"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Test_RoutineClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_RoutineClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *FC_1* updates
        if FC_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            FC_1.frameNStart = frameN  # exact frame index
            FC_1.tStart = t  # local t and not account for scr refresh
            FC_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FC_1, 'tStartRefresh')  # time at next scr refresh
            FC_1.setAutoDraw(True)
        if FC_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FC_1.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                FC_1.tStop = t  # not accounting for scr refresh
                FC_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(FC_1, 'tStopRefresh')  # time at next scr refresh
                FC_1.setAutoDraw(False)
        
        # *Test_Face_L* updates
        if Test_Face_L.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_L.frameNStart = frameN  # exact frame index
            Test_Face_L.tStart = t  # local t and not account for scr refresh
            Test_Face_L.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_L, 'tStartRefresh')  # time at next scr refresh
            Test_Face_L.setAutoDraw(True)
        if Test_Face_L.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_L.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_L.tStop = t  # not accounting for scr refresh
                Test_Face_L.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_L, 'tStopRefresh')  # time at next scr refresh
                Test_Face_L.setAutoDraw(False)
        
        # *Test_Face_R* updates
        if Test_Face_R.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_R.frameNStart = frameN  # exact frame index
            Test_Face_R.tStart = t  # local t and not account for scr refresh
            Test_Face_R.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_R, 'tStartRefresh')  # time at next scr refresh
            Test_Face_R.setAutoDraw(True)
        if Test_Face_R.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_R.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_R.tStop = t  # not accounting for scr refresh
                Test_Face_R.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_R, 'tStopRefresh')  # time at next scr refresh
                Test_Face_R.setAutoDraw(False)
        
        # *Dot* updates
        if Dot.status == NOT_STARTED and tThisFlip >= 1.025-frameTolerance:
            # keep track of start time/frame for later
            Dot.frameNStart = frameN  # exact frame index
            Dot.tStart = t  # local t and not account for scr refresh
            Dot.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Dot, 'tStartRefresh')  # time at next scr refresh
            Dot.setAutoDraw(True)
        if Dot.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Dot.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Dot.tStop = t  # not accounting for scr refresh
                Dot.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Dot, 'tStopRefresh')  # time at next scr refresh
                Dot.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_RoutineComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Routine"-------
    for thisComponent in Test_RoutineComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('FC_1.started', FC_1.tStartRefresh)
    trials_2.addData('FC_1.stopped', FC_1.tStopRefresh)
    trials_2.addData('Test_Face_L.started', Test_Face_L.tStartRefresh)
    trials_2.addData('Test_Face_L.stopped', Test_Face_L.tStopRefresh)
    trials_2.addData('Test_Face_R.started', Test_Face_R.tStartRefresh)
    trials_2.addData('Test_Face_R.stopped', Test_Face_R.tStopRefresh)
    trials_2.addData('Dot.started', Dot.tStartRefresh)
    trials_2.addData('Dot.stopped', Dot.tStopRefresh)
    
    # ------Prepare to start Routine "Test_Response"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    Test_ResponseComponents = [text_2, key_resp_2]
    for thisComponent in Test_ResponseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_ResponseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Response"-------
    while continueRoutine:
        # get current time
        t = Test_ResponseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_ResponseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_ResponseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Response"-------
    for thisComponent in Test_ResponseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('text_2.started', text_2.tStartRefresh)
    trials_2.addData('text_2.stopped', text_2.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials_2.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials_2.addData('key_resp_2.rt', key_resp_2.rt)
    trials_2.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials_2.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "Test_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_2'


# ------Prepare to start Routine "Break"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
BreakComponents = [text_5, key_resp_4]
for thisComponent in BreakComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
BreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Break"-------
while continueRoutine:
    # get current time
    t = BreakClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=BreakClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in BreakComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Break"-------
for thisComponent in BreakComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "Break" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_4 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Robyn_Music.xlsx'),
    seed=None, name='trials_4')
thisExp.addLoop(trials_4)  # add the loop to the experiment
thisTrial_4 = trials_4.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
if thisTrial_4 != None:
    for paramName in thisTrial_4:
        exec('{} = thisTrial_4[paramName]'.format(paramName))

for thisTrial_4 in trials_4:
    currentLoop = trials_4
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
    if thisTrial_4 != None:
        for paramName in thisTrial_4:
            exec('{} = thisTrial_4[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Music_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_7.setText(Music)
    key_resp_6.keys = []
    key_resp_6.rt = []
    _key_resp_6_allKeys = []
    sound_1.setSound(Music, hamming=True)
    sound_1.setVolume(1.0, log=False)
    # keep track of which components have finished
    Music_2Components = [text_7, key_resp_6, sound_1]
    for thisComponent in Music_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Music_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Music_2"-------
    while continueRoutine:
        # get current time
        t = Music_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Music_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        
        # *key_resp_6* updates
        waitOnFlip = False
        if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_6.frameNStart = frameN  # exact frame index
            key_resp_6.tStart = t  # local t and not account for scr refresh
            key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
            key_resp_6.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_6.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_6.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
            _key_resp_6_allKeys.extend(theseKeys)
            if len(_key_resp_6_allKeys):
                key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
                key_resp_6.rt = _key_resp_6_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # start/stop sound_1
        if sound_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_1.frameNStart = frameN  # exact frame index
            sound_1.tStart = t  # local t and not account for scr refresh
            sound_1.tStartRefresh = tThisFlipGlobal  # on global time
            sound_1.play(when=win)  # sync with win flip
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Music_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Music_2"-------
    for thisComponent in Music_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_4.addData('text_7.started', text_7.tStartRefresh)
    trials_4.addData('text_7.stopped', text_7.tStopRefresh)
    # check responses
    if key_resp_6.keys in ['', [], None]:  # No response was made
        key_resp_6.keys = None
    trials_4.addData('key_resp_6.keys',key_resp_6.keys)
    if key_resp_6.keys != None:  # we had a response
        trials_4.addData('key_resp_6.rt', key_resp_6.rt)
    trials_4.addData('key_resp_6.started', key_resp_6.tStartRefresh)
    trials_4.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
    sound_1.stop()  # ensure sound has stopped at end of routine
    trials_4.addData('sound_1.started', sound_1.tStartRefresh)
    trials_4.addData('sound_1.stopped', sound_1.tStopRefresh)
    # the Routine "Music_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'trials_4'


# set up handler to look after randomisation of conditions etc
trials_3 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('ROBYN_EXCEL_2.xlsx'),
    seed=None, name='trials_3')
thisExp.addLoop(trials_3)  # add the loop to the experiment
thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
if thisTrial_3 != None:
    for paramName in thisTrial_3:
        exec('{} = thisTrial_3[paramName]'.format(paramName))

for thisTrial_3 in trials_3:
    currentLoop = trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            exec('{} = thisTrial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test_Routine"-------
    continueRoutine = True
    routineTimer.add(1.525000)
    # update component parameters for each repeat
    Test_Face_L.setImage(Img_L)
    Test_Face_R.setImage(Img_R)
    Dot.setPos(Dot_Pos)
    # keep track of which components have finished
    Test_RoutineComponents = [FC_1, Test_Face_L, Test_Face_R, Dot]
    for thisComponent in Test_RoutineComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_RoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Routine"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Test_RoutineClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_RoutineClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *FC_1* updates
        if FC_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            FC_1.frameNStart = frameN  # exact frame index
            FC_1.tStart = t  # local t and not account for scr refresh
            FC_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FC_1, 'tStartRefresh')  # time at next scr refresh
            FC_1.setAutoDraw(True)
        if FC_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FC_1.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                FC_1.tStop = t  # not accounting for scr refresh
                FC_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(FC_1, 'tStopRefresh')  # time at next scr refresh
                FC_1.setAutoDraw(False)
        
        # *Test_Face_L* updates
        if Test_Face_L.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_L.frameNStart = frameN  # exact frame index
            Test_Face_L.tStart = t  # local t and not account for scr refresh
            Test_Face_L.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_L, 'tStartRefresh')  # time at next scr refresh
            Test_Face_L.setAutoDraw(True)
        if Test_Face_L.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_L.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_L.tStop = t  # not accounting for scr refresh
                Test_Face_L.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_L, 'tStopRefresh')  # time at next scr refresh
                Test_Face_L.setAutoDraw(False)
        
        # *Test_Face_R* updates
        if Test_Face_R.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Test_Face_R.frameNStart = frameN  # exact frame index
            Test_Face_R.tStart = t  # local t and not account for scr refresh
            Test_Face_R.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Test_Face_R, 'tStartRefresh')  # time at next scr refresh
            Test_Face_R.setAutoDraw(True)
        if Test_Face_R.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Test_Face_R.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Test_Face_R.tStop = t  # not accounting for scr refresh
                Test_Face_R.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Test_Face_R, 'tStopRefresh')  # time at next scr refresh
                Test_Face_R.setAutoDraw(False)
        
        # *Dot* updates
        if Dot.status == NOT_STARTED and tThisFlip >= 1.025-frameTolerance:
            # keep track of start time/frame for later
            Dot.frameNStart = frameN  # exact frame index
            Dot.tStart = t  # local t and not account for scr refresh
            Dot.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Dot, 'tStartRefresh')  # time at next scr refresh
            Dot.setAutoDraw(True)
        if Dot.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Dot.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Dot.tStop = t  # not accounting for scr refresh
                Dot.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Dot, 'tStopRefresh')  # time at next scr refresh
                Dot.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_RoutineComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Routine"-------
    for thisComponent in Test_RoutineComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_3.addData('FC_1.started', FC_1.tStartRefresh)
    trials_3.addData('FC_1.stopped', FC_1.tStopRefresh)
    trials_3.addData('Test_Face_L.started', Test_Face_L.tStartRefresh)
    trials_3.addData('Test_Face_L.stopped', Test_Face_L.tStopRefresh)
    trials_3.addData('Test_Face_R.started', Test_Face_R.tStartRefresh)
    trials_3.addData('Test_Face_R.stopped', Test_Face_R.tStopRefresh)
    trials_3.addData('Dot.started', Dot.tStartRefresh)
    trials_3.addData('Dot.stopped', Dot.tStopRefresh)
    
    # ------Prepare to start Routine "Test_Response"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    Test_ResponseComponents = [text_2, key_resp_2]
    for thisComponent in Test_ResponseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Test_ResponseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test_Response"-------
    while continueRoutine:
        # get current time
        t = Test_ResponseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Test_ResponseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_ResponseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Response"-------
    for thisComponent in Test_ResponseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_3.addData('text_2.started', text_2.tStartRefresh)
    trials_3.addData('text_2.stopped', text_2.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials_3.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials_3.addData('key_resp_2.rt', key_resp_2.rt)
    trials_3.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials_3.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "Test_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_3'


# ------Prepare to start Routine "End"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
EndComponents = [text_4, key_resp_5]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "End"-------
while continueRoutine:
    # get current time
    t = EndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "End"-------
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.addData('key_resp_5.started', key_resp_5.tStartRefresh)
thisExp.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "End" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
