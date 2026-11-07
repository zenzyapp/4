document.addEventListener("DOMContentLoaded", function(){
  // Fisher–Yates shuffle: unlike sort(Math.random), this gives every answer
  // a fair chance of appearing in each position.
  function shuffledCopy(items){
    const result = Array.from(items || []);
    for(let i = result.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  const avatarEmojis = [
    '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿',
    '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿',
    '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿',
    '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿',
    '🧑🏻', '🧑🏼', '🧑🏽', '🧑🏾', '🧑🏿',
    '👩‍🦰', '👩‍🦱', '👩‍🦳', '👨‍🦰', '👨‍🦱', '👨‍🦳',
    '🧑‍🦽', '🧑‍🦼', '🧑‍🦯', '👩‍🚀', '👨‍🚀'
  ];
  const zenzyPage = document.getElementById("zenzyPage");
  const zenzyEggClick = document.getElementById("zenzyEggClick");
  const zenzyEggState = document.getElementById("zenzyEggState");
  const zenzySadState = document.getElementById("zenzySadState");
  const zenzyStatusText = document.getElementById("zenzyStatusText");
  const collectZenzyBtn = document.getElementById("collectZenzyBtn");
  const adoptMessage = document.getElementById("adoptMessage");
  const zenzyHelpModal = document.getElementById("zenzyHelpModal");
  const zenzyHelpYes = document.getElementById("zenzyHelpYes");
  const zenzyHelpNo = document.getElementById("zenzyHelpNo");
  const zenzyHelpInfo = document.getElementById("zenzyHelpInfo");
  const zenzyHelpInfoOk = document.getElementById("zenzyHelpInfoOk");
  const zenzyCollectedModal = document.getElementById("zenzyCollectedModal");
  const zenzyCollectedOk = document.getElementById("zenzyCollectedOk");
  const zenzyHatchingModal = document.getElementById("zenzyHatchingModal");
  const zenzyHatchingText = document.getElementById("zenzyHatchingText");
  const zenzyHatchingImageModal = document.getElementById("zenzyHatchingImage");
  const zenzyAdoptConfirmModal = document.getElementById("zenzyAdoptConfirmModal");
  const zenzyAdoptYes = document.getElementById("zenzyAdoptYes");
  const eggHatchingScreen = document.getElementById("eggHatchingScreen");
  const hatchingEggImage = document.getElementById("hatchingEggImage");
  const zenzyHomeModal = document.getElementById("zenzyHomeModal");
  const zenzyHomeModalOk = document.getElementById("zenzyHomeModalOk");
  const zenzyHomeModalMissions = document.getElementById("zenzyHomeModalMissions");
  const zenzyHomeModalText = document.getElementById("zenzyHomeModalText");
  const zenzyMissionHabitatModal = document.getElementById("zenzyMissionHabitatModal");
  const zenzyMissionHabitatMore = document.getElementById("zenzyMissionHabitatMore");
  const zenzyMissionHabitatReturn = document.getElementById("zenzyMissionHabitatReturn");
  const zenzyHomeConfirmModal = document.getElementById("zenzyHomeConfirmModal");
  const zenzyHomeConfirmYes = document.getElementById("zenzyHomeConfirmYes");
  const zenzyHomeConfirmNo = document.getElementById("zenzyHomeConfirmNo");
  const zenzyHomeConfirmText = document.getElementById("zenzyHomeConfirmText");
  const petAdoptionScreen = document.getElementById("petAdoptionScreen");
  const zenzyNameInput = document.getElementById("zenzyNameInput");
  const adoptZenzyBtn = document.getElementById("adoptZenzyBtn");
  const petZenzyName = document.getElementById("petZenzyName");
  const homeZenzyContainer = document.querySelector('.home-zenzy-container');
  const zenzyStageEl = document.getElementById("zenzyStage");
  const zenzyBackground = document.getElementById("zenzyBackground");
  const zenzyAvatar = document.getElementById("zenzyAvatar");
  const zenzyEggHint = document.getElementById("zenzyEggHint");
  const zenzyIntroOverlay = document.getElementById("zenzyIntroOverlay");
  const zenzyTopStatus = document.getElementById("zenzyTopStatus");
  const zenzyAvatarFriend = document.getElementById("zenzyAvatarFriend");
  const zenzyDragHandle = document.getElementById("zenzyDragHandle");
  const zenzySpeech = document.getElementById("zenzySpeech");
  const zenzySpeechBubbleContainer = document.querySelector('.zenzy-speech-bubble-container');
  const zenzyWallpaper = document.getElementById("zenzyWallpaper");
  const zenzyCarpet = document.getElementById("zenzyCarpet");
  const zenzyWallLeft = document.getElementById("zenzyWallLeft");
  const zenzyWallRight = document.getElementById("zenzyWallRight");
  const feedZenzyBtn = document.getElementById("feedZenzyBtn");
  const drinkZenzyBtn = document.getElementById("drinkZenzyBtn");
  const playZenzyBtn = document.getElementById("playZenzyBtn");
  const playPCBtn = document.getElementById("playPCBtn");
  const doArtBtn = document.getElementById("doArtBtn");
  const readZenzyBtn = document.getElementById("readZenzyBtn");
  const sleepZenzyBtn = document.getElementById("sleepZenzyBtn");
  const cheerZenzyBtn = document.getElementById("cheerZenzyBtn");
  const calmZenzyBtn = document.getElementById("calmZenzyBtn");
  const miniGamesBtn = document.getElementById("miniGamesBtn");
  const zenzySleepModal = document.getElementById("zenzySleepModal");
  const sleepZenzyModalImage = document.getElementById("sleepZenzyModalImage");
  const sleepMusicOption = document.getElementById("sleepMusicOption");
  const sleepMeditateOption = document.getElementById("sleepMeditateOption");
  const sleepStoryOption = document.getElementById("sleepStoryOption");
  const insufficientZpModal = document.getElementById("insufficientZpModal");
  const goToCheckinBtn = document.getElementById("goToCheckinBtn");
  const goToToolboxBtn = document.getElementById("goToToolboxBtn");
  const goToMissionsBtn = document.getElementById("goToMissionsBtn");
  const cheerUpModal = document.getElementById("cheerUpModal");
  const calmDownModal = document.getElementById("calmDownModal");
  const cheerUpZenzyModalImage = document.getElementById("cheerUpZenzyModalImage");
  const calmDownZenzyModalImage = document.getElementById("calmDownZenzyModalImage");
  const emotionalActivityResultModal = document.getElementById("emotionalActivityResultModal");
  const writeFeelingsModal = document.getElementById("writeFeelingsModal");
  const drawingModal = document.getElementById("drawingModal");
  const cheerUpActivities = document.getElementById("cheerUpActivities");
  const calmDownActivities = document.getElementById("calmDownActivities");
  const closeCheerUpModal = document.getElementById("closeCheerUpModal");
  const closeCalmDownModal = document.getElementById("closeCalmDownModal");
  const closeEmotionalActivityModal = document.getElementById("closeEmotionalActivityModal");
  const emotionalActivityTitle = document.getElementById("emotionalActivityTitle");
  const emotionalActivityMessage = document.getElementById("emotionalActivityMessage");
  const takeZenzyHomeBtn = document.getElementById("takeZenzyHomeBtn");
  const switchZenzyRoomBtn = document.getElementById("switchZenzyRoomBtn");
  const prevZenzyRoomBtn = document.getElementById("prevZenzyRoomBtn");
  const nextZenzyRoomBtn = document.getElementById("nextZenzyRoomBtn");
  const addZenzyRoomBtn = document.getElementById("addZenzyRoomBtn");
  const roomScrollHint = document.getElementById("roomScrollHint");
  const weeklyMissionBtn = document.getElementById("weeklyMissionBtn");
  const zenzyAvatarFace = document.getElementById('zenzyAvatarFace');
  const zenzyAvatarHat = document.getElementById('zenzyAvatarHat');
  const zenzyImageFaces = new Map();
  const appearanceOptions = document.querySelectorAll('.appearance-option');
  const removeZenzyHatBtn = document.getElementById('removeZenzyHatBtn');
  const weeklyMissionScreen = document.getElementById("weeklyMissionScreen");
  const weeklyMissionBackBtn = document.getElementById("weeklyMissionBackBtn");
  const weeklyMissionHeading = document.getElementById("weeklyMissionHeading");
  const weeklyMissionWeekTitle = document.getElementById("weeklyMissionWeekTitle");
  const weeklyMissionProgressText = document.getElementById("weeklyMissionProgressText");
  const weeklyMissionDotBar = document.getElementById("weeklyMissionDotBar");
  const weeklyMissionDayContent = document.getElementById("weeklyMissionDayContent");
  const weeklyMissionDayDots = weeklyMissionDotBar ? Array.from(weeklyMissionDotBar.querySelectorAll('.weekly-mission-dot')) : [];
  const weeklyMissionCelebration = document.getElementById("weeklyMissionCelebration");
  const weeklyMissionCelebrationContinueBtn = document.getElementById("weeklyMissionCelebrationContinueBtn");
  const decorButtons = document.querySelectorAll('.decor-btn');
  const toyButtons = document.querySelectorAll('.toy-btn');
  const dayOutButtons = document.querySelectorAll('.day-out-btn');
  const dayOutSectionEl = document.getElementById('dayOutSection');
  const archiveEggAndEvolveFeatures = true;
  const searchEggBtn = document.getElementById("searchEggBtn");
  const evolveZenzyBtn = document.getElementById("evolveZenzyBtn");
  const eggHuntScreen = document.getElementById("eggHuntScreen");
  const eggHuntStage = document.getElementById("eggHuntStage");
  const zenzyCount = document.getElementById("zenzyCount");
  const eggCount = document.getElementById("eggCount");
  const eggsSection = document.getElementById("eggsSection");
  const eggInventoryCount = document.getElementById("eggInventoryCount");
  const combineEggBtn = document.getElementById("combineEggBtn");
  const hatchEggBtn = document.getElementById("hatchEggBtn");
  const healthStatsContainer = document.getElementById("healthStatsContainer");
  const energyTrackerMarker = document.getElementById("energyTrackerMarker");
  const moodTrackerMarker = document.getElementById("moodTrackerMarker");
  
  // Health bar elements
  const overallHealthBar = document.getElementById("overallHealthBar");
  const overallHealthPercent = document.getElementById("overallHealthPercent");
  const emotionalBar = document.getElementById("emotionalBar");
  const emotionalPercent = document.getElementById("emotionalPercent");
  const hungerBar = document.getElementById("hungerBar");
  const hungerPercent = document.getElementById("hungerPercent");
  const thirstBar = document.getElementById("thirstBar");
  const thirstPercent = document.getElementById("thirstPercent");
  const tiredBar = document.getElementById("tiredBar");
  const tiredPercent = document.getElementById("tiredPercent");
  const socialBar = document.getElementById("socialBar");
  const socialPercent = document.getElementById("socialPercent");
  const activityBar = document.getElementById("activityBar");
  const activityPercent = document.getElementById("activityPercent");
  const stimulationBar = document.getElementById("stimulationBar");
  const stimulationPercent = document.getElementById("stimulationPercent");
  const eggHuntBackground = document.getElementById("eggHuntBackground");
  const eggHuntEgg = document.getElementById("eggHuntEgg");
  const eggHuntNext = document.getElementById("eggHuntNext");
  const eggHuntCollect = document.getElementById("eggHuntCollect");
  const zenzyMiniGamesScreen = document.getElementById("zenzyMiniGames");
  const miniTapDashBtn = document.getElementById("miniTapDashBtn");
  const miniMemoryBtn = document.getElementById("miniMemoryBtn");
  const miniOddOneBtn = document.getElementById("miniOddOneBtn");
  const miniGameStatus = document.getElementById("miniGameStatus");
  const miniGameScoreRow = document.getElementById("miniGameScoreRow");
  const miniGameLevel = document.getElementById("miniGameLevel");
  const miniGameTime = document.getElementById("miniGameTime");
  const miniGameTarget = document.getElementById("miniGameTarget");
  const miniGameBestRow = document.getElementById("miniGameBestRow");
  const miniGameBestScore = document.getElementById("miniGameBestScore");
  const miniGameBoard = document.getElementById("miniGameBoard");
  const miniGameBadge = document.getElementById("miniGameBadge");
  const miniGameStartBtn = document.getElementById("miniGameStartBtn");
  const miniGameNextLevelBtn = document.getElementById("miniGameNextLevelBtn");
  const miniGameRetryBtn = document.getElementById("miniGameRetryBtn");
  const miniGameBackBtn = document.getElementById("miniGameBackBtn");
  const homeScreen = document.getElementById("home");
      const checkinScreen = document.getElementById("checkin");
      const reasonScreen = document.getElementById("reason");
      const celebrationOverlay = document.getElementById("celebrationOverlay");
      const celebrationMessage = document.getElementById("celebrationMessage");
      const celebrationCoins = document.getElementById("celebrationCoins");
      const mindfulnessScreen = document.getElementById("mindfulness");
      const gratitudeScreen = document.getElementById("gratitude");
      const amazingMeScreen = document.getElementById("amazingMe");
      const getMovingScreen = document.getElementById("getMoving");
      let starElements = [];
      let selectedCheckinFeeling = '';
      const otherCheckinFeeling = document.getElementById('otherCheckinFeeling');
      const checkinFeelings = document.querySelectorAll("#checkin .feeling");
      const submitReason = document.getElementById("submitReason");
      const completeMindfulness = document.getElementById("completeMindfulness");
      const breathingText = document.getElementById("breathingText");
      const mindfulnessIntro = document.getElementById("mindfulnessIntro");
      const squareBreathingGuide = document.getElementById('squareBreathingGuide');
      const breathingCircle = document.querySelector(".breathing-circle");
      const mindfulnessInput = document.getElementById("mindfulnessInput");
      const mindfulnessInputField = document.getElementById("mindfulnessInputField");
      const breathingSquare = document.getElementById("breathingSquare");
      const squareSides = breathingSquare ? breathingSquare.querySelectorAll('.side') : [];
      const submitGratitude = document.getElementById("submitGratitude");
      const submitAmazing = document.getElementById("submitAmazing");
      const amazingAffirmation = document.getElementById('amazingAffirmation');
      const starJumpsInputWrap = document.getElementById("starJumpsInputWrap");
      const starJumpsInput = document.getElementById("starJumpsInput");
      const startTimer = document.getElementById("startTimer");
      const skipGetMovingBtn = document.getElementById("skipGetMovingBtn");
      const skipMindfulnessBtn = document.getElementById("skipMindfulnessBtn");
      const skipHotChocolateBtn = document.getElementById("skipHotChocolateBtn");
      const completeMoving = document.getElementById("completeMoving");
      const movingPrompt = document.getElementById("movingPrompt");
      const petShop = document.getElementById('petShop');
      const sleepScreen = document.getElementById('sleep');
      const sleepMusicScreen = document.getElementById('sleepMusic');
      const sleepMeditationScreen = document.getElementById('sleepMeditation');
      const sleepStoryScreen = document.getElementById('sleepStory');
      const toolboxScreen = document.getElementById('toolbox');
      const toolboxHelpScreen = document.getElementById('toolboxHelpScreen');
      const helpOptionProblem = document.getElementById('helpOptionProblem');
      const helpOptionWorry = document.getElementById('helpOptionWorry');
      const helpOptionRegulate = document.getElementById('helpOptionRegulate');
      const helpOptionTools = document.getElementById('helpOptionTools');
      const helpOptionSleep = document.getElementById('helpOptionSleep');
      const helpOptionUnsure = document.getElementById('helpOptionUnsure');
      const toolboxProblemBtn = document.getElementById('toolboxProblemBtn');
      const toolboxWorryBtn = document.getElementById('toolboxWorryBtn');
      const toolboxSleepBtn = document.getElementById('toolboxSleepBtn');
      const redActivitiesScreen = document.getElementById('redActivities');
      const talkToSomebodyScreen = document.getElementById('talkToSomebodyScreen');
      const greenActivitiesScreen = document.getElementById('greenActivities');
      const blueActivitiesScreen = document.getElementById('blueActivities');
      const helpScreen = document.getElementById('help');
      const problemText = document.getElementById('problemText');
      const problemDecisionModal = document.getElementById('problemDecisionModal');
      const problemDecisionCancel = document.getElementById('problemDecisionCancel');
      const problemNoScreen = document.getElementById('problemDistractionScreen');
      const problemActionsScreen = document.getElementById('problemActions');
      const problemYes = document.getElementById('problemYes');
      const problemNo = document.getElementById('problemNo');
      const problemActionInputs = ['problemActionOne', 'problemActionTwo', 'problemActionThree'].map(function(id){ return document.getElementById(id); });
      const problemConsequenceInputs = ['problemConsequenceOne', 'problemConsequenceTwo', 'problemConsequenceThree'].map(function(id){ return document.getElementById(id); });
      const problemSolutionOptions = document.querySelectorAll('input[name="problemBestSolution"]');
      const problemBestActionWhy = document.getElementById('problemBestActionWhy');
      const saveProblemPlanBtn = document.getElementById('saveProblemPlanBtn');
      const problemPlanFeedback = document.getElementById('problemPlanFeedback');
      const problemPlanBackBtn = document.getElementById('problemPlanBackBtn');
      const problemDistractionBackBtn = document.getElementById('problemDistractionBackBtn');
      const problemChooseBreathing = document.getElementById('problemChooseBreathing');
      const problemChooseMovement = document.getElementById('problemChooseMovement');
      const problemChoosePuzzle = document.getElementById('problemChoosePuzzle');
      const problemChoiceModal = document.getElementById('problemChoiceModal');
      const problemChoiceOk = document.getElementById('problemChoiceOk');
      const problemRewardModal = document.getElementById('problemRewardModal');
      const problemHelpModal = document.getElementById('problemHelpModal');
      const problemHelpYes = document.getElementById('problemHelpYes');
      const problemHelpNo = document.getElementById('problemHelpNo');
      const problemHelpTitle = document.getElementById('problemHelpTitle');
      const problemHelpChoices = document.getElementById('problemHelpChoices');
      const problemTryAgain = document.getElementById('problemTryAgain');
      const problemDistractionOptions = document.getElementById('problemDistractionOptions');
      const problemChoiceButtons = document.querySelectorAll('.problem-choice');
      const missionsScreen = document.getElementById('missions');
      const userProfileScreen = document.getElementById('userProfile');
      const questDetailScreen = document.getElementById('questDetail');
      const questDetailTitle = document.getElementById('questDetailTitle');
      const questDetailText = document.getElementById('questDetailText');
      const emotionsMatchingScreen = document.getElementById('emotionsMatchingScreen');
      const emotionsMatchingContainer = document.getElementById('emotionsMatchingContainer');
      const completeEmotionsMatching = document.getElementById('completeEmotionsMatching');
      const emotionsDrawScreen = document.getElementById('emotionsDrawScreen');
      const completeEmotionsDraw = document.getElementById('completeEmotionsDraw');
      const emotionsNeedsScreen = document.getElementById('emotionsNeedsScreen');
      const emotionsNeedsMatchContainer = document.getElementById('emotionsNeedsMatchContainer');
      const completeEmotionsNeeds = document.getElementById('completeEmotionsNeeds');
      const emotionsTriggerScreen = document.getElementById('emotionsTriggerScreen');
      const completeEmotionsTrigger = document.getElementById('completeEmotionsTrigger');
      const emotionsCueSortScreen = document.getElementById('emotionsCueSortScreen');
      const emotionsCuePool = document.getElementById('emotionsCuePool');
      const completeEmotionsCueSort = document.getElementById('completeEmotionsCueSort');
      const emotionsMatchingLearningText = document.getElementById('emotionsMatchingLearningText');
      const happinessScreen = document.getElementById('happinessScreen');
      const happinessOptions = document.getElementById('happinessOptions');
      const happinessLearningText = document.getElementById('happinessLearningText');
      const additionalHappiness = document.getElementById('additionalHappiness');
      const completeHappiness = document.getElementById('completeHappiness');
      const emotionActivityScreen = document.getElementById('emotionActivityScreen');
      const emotionActivityTitle = document.getElementById('emotionActivityTitle');
      const emotionLearningText = document.getElementById('emotionLearningText');
      const emotionActivityPrompt = document.getElementById('emotionActivityPrompt');
      const emotionActivityOptions = document.getElementById('emotionActivityOptions');
      const emotionAnythingElsePrompt = document.getElementById('emotionAnythingElsePrompt');
      const additionalEmotionElse = document.getElementById('additionalEmotionElse');
      const additionalEmotion = document.getElementById('additionalEmotion');
      const emotionStep1Section = document.getElementById('emotionStep1Section');
      const emotionStep2Section = document.getElementById('emotionStep2Section');
      const emotionStep3Section = document.getElementById('emotionStep3Section');
      const emotionBehaviorPrompt = document.getElementById('emotionBehaviorPrompt');
      const emotionBehaviorSuggestions = document.getElementById('emotionBehaviorSuggestions');
      const emotionBodyPrompt = document.getElementById('emotionBodyPrompt');
      const emotionBodySuggestions = document.getElementById('emotionBodySuggestions');
      const emotionBodyFeeling = document.getElementById('emotionBodyFeeling');
      const emotionBodyFeelingElse = document.getElementById('emotionBodyFeelingElse');
      const completeEmotionActivity = document.getElementById('completeEmotionActivity');
      const emotionSummaryScreen = document.getElementById('emotionSummaryScreen');
      const emotionSummaryContent = document.getElementById('emotionSummaryContent');
      const completeEmotionSummary = document.getElementById('completeEmotionSummary');
      const socialDetectiveIntro = document.getElementById('socialDetectiveIntro');
      const startSocialDetective = document.getElementById('startSocialDetective');
      const socialNormsReflection = document.getElementById('socialNormsReflection');
      const socialNoNormsImpact = document.getElementById('socialNoNormsImpact');
      const socialNoNormsOptions = document.querySelectorAll('.social-no-norm-option');
      const socialS1Step1Section = document.getElementById('socialS1Step1Section');
      const socialS1Step2Section = document.getElementById('socialS1Step2Section');
      const socialNormsQuizFeedback = document.getElementById('socialNormsQuizFeedback');
      const socialNormsQuizOptions = document.querySelectorAll('.social-norm-quiz-option');
      const socialActivityScreen = document.getElementById('socialActivityScreen');
      const socialActivityTitle = document.getElementById('socialActivityTitle');
      const socialLearningText = document.getElementById('socialLearningText');
      const socialActivityPrompt = document.getElementById('socialActivityPrompt');
      const socialLessonSection = document.getElementById('socialLessonSection');
      const socialLessonFeedback = document.getElementById('socialLessonFeedback');
      const socialLessonNoNormOptions = document.querySelectorAll('.social-lesson-option');
      const socialQuizSection = document.getElementById('socialQuizSection');
      const socialQuizQuestions = document.getElementById('socialQuizQuestions');
      const socialQuizFeedback = document.getElementById('socialQuizFeedback');
      const socialStep1Section = document.getElementById('socialStep1Section');
      const socialStep2Section = document.getElementById('socialStep2Section');
      const socialStep3Section = document.getElementById('socialStep3Section');
      const socialExpectedPrompt = document.getElementById('socialExpectedPrompt');
      const socialExpectedChoices = document.getElementById('socialExpectedChoices');
      const socialExpectedFeedback = document.getElementById('socialExpectedFeedback');
      const socialUnexpectedPrompt = document.getElementById('socialUnexpectedPrompt');
      const socialUnexpectedChoices = document.getElementById('socialUnexpectedChoices');
      const socialUnexpectedFeedback = document.getElementById('socialUnexpectedFeedback');
      const completeSocialActivity = document.getElementById('completeSocialActivity');
      const friendshipDetectiveIntro = document.getElementById('friendshipDetectiveIntro');
      const startFriendshipDetective = document.getElementById('startFriendshipDetective');
      const friendshipActivityScreen = document.getElementById('friendshipActivityScreen');
      const friendshipLearningText = document.getElementById('friendshipLearningText');
      const friendshipScenarios = document.getElementById('friendshipScenarios');
      const completeFriendshipActivity = document.getElementById('completeFriendshipActivity');
      const feelingDetectiveIntro = document.getElementById('feelingDetectiveIntro');
      const startFeelingDetective = document.getElementById('startFeelingDetective');
      const feelingActivityScreen = document.getElementById('feelingActivityScreen');
      const feelingLearningText = document.getElementById('feelingLearningText');
      const feelingScenario = document.getElementById('feelingScenario');
      const communicationDetectiveIntro = document.getElementById('communicationDetectiveIntro');
      const startCommunicationDetective = document.getElementById('startCommunicationDetective');
      const communicationActivityScreen = document.getElementById('communicationActivityScreen');
      const communicationLearningText = document.getElementById('communicationLearningText');
      const communicationScenario = document.getElementById('communicationScenario');
      const communicationOptions = document.getElementById('communicationOptions');
      const communicationFeedback = document.getElementById('communicationFeedback');
      const feedbackText = document.getElementById('feedbackText');
      const completeCommunicationActivity = document.getElementById('completeCommunicationActivity');
      const communicationResultsScreen = document.getElementById('communicationResultsScreen');
      const resultsMessage = document.getElementById('resultsMessage');
      const resultsContent = document.getElementById('resultsContent');
      const resultsDescription = document.getElementById('resultsDescription');
      const closeCommResults = document.getElementById('closeCommResults');
      const identityDetectiveIntro = document.getElementById('identityDetectiveIntro');
      const startIdentityDetective = document.getElementById('startIdentityDetective');
      const identityActivityScreen = document.getElementById('identityActivityScreen');
      const identityActivityTitle = document.getElementById('identityActivityTitle');
      const identityLearningText = document.getElementById('identityLearningText');
      const identityActivityPrompt = document.getElementById('identityActivityPrompt');
      const identityActivityContent = document.getElementById('identityActivityContent');
      const completeIdentityActivity = document.getElementById('completeIdentityActivity');
      const mindsetDetectiveIntro = document.getElementById('mindsetDetectiveIntro');
      const startMindsetDetective = document.getElementById('startMindsetDetective');
      const mindsetActivityScreen = document.getElementById('mindsetActivityScreen');
      const mindsetActivityTitle = document.getElementById('mindsetActivityTitle');
      const mindsetLearningText = document.getElementById('mindsetLearningText');
      const mindsetActivityPrompt = document.getElementById('mindsetActivityPrompt');
      const mindsetActivityOptions = document.getElementById('mindsetActivityOptions');
      const mindsetInputWrap = document.getElementById('mindsetInputWrap');
      const mindsetInputLabel = document.getElementById('mindsetInputLabel');
      const mindsetActivityInput = document.getElementById('mindsetActivityInput');
      const completeMindsetActivity = document.getElementById('completeMindsetActivity');
      const sensoryDetectiveIntro = document.getElementById('sensoryDetectiveIntro');
      const startSensoryDetective = document.getElementById('startSensoryDetective');
      const thoughtDetectiveIntro = document.getElementById('thoughtDetectiveIntro');
      const startThoughtDetective = document.getElementById('startThoughtDetective');
      const conflictDetectiveIntro = document.getElementById('conflictDetectiveIntro');
      const startConflictDetective = document.getElementById('startConflictDetective');
      const feelingOptions = document.getElementById('feelingOptions');
      const completeFeelingActivity = document.getElementById('completeFeelingActivity');
      const worryManager = document.getElementById('worryManager');
      const worryText = document.getElementById('worryText');
      const worrySubmit = document.getElementById('worrySubmit');
      const distortionModal = document.getElementById('distortionModal');
      const distortionsScreen = document.getElementById('distortionsScreen');
      const distortionButtons = document.querySelectorAll('.distortion-item[data-distortion]');
      const noWorryTrap = document.getElementById('noWorryTrap');
      const balancedThoughtScreen = document.getElementById('balancedThought');
      const balancedThoughtText = document.getElementById('balancedThoughtText');
      const balancedThoughtSubmit = document.getElementById('balancedThoughtSubmit');
      const yellowThingsScreen = document.getElementById('yellowThings');
      const completeYellow = document.getElementById('completeYellow');
      const rainbowActivityScreen = document.getElementById('rainbowActivity');
      const completeRainbow = document.getElementById('completeRainbow');
      const hotChocolateScreen = document.getElementById('hotChocolate');
      const hotChocolateText = document.getElementById('hotChocolateText');
      const balancedRewardModal = document.getElementById('balancedRewardModal');
      const balancedRewardOk = document.getElementById('balancedRewardOk');
      const shopBtns = document.querySelectorAll('.shop-btn');
      const zenzyHabitat = document.getElementById('zenzyHabitat');
      const closeShop = document.getElementById('closeShop');
      const shopMsg = document.getElementById('shopMsg');
      const coinsRows = document.querySelectorAll('.coins-row');
      const dailyComplete = document.getElementById('dailyComplete');
      const navSleep = document.getElementById('navSleep');
      const navToolbox = document.getElementById('navToolbox');
      const navHelp = document.getElementById('navHelp');
      const navPet = document.getElementById('navPet');
      const navmissions = document.getElementById('navmissions');
      const navUser = document.getElementById('navUser');
      const navWorry = document.getElementById('navWorry');
      const navHome = document.getElementById('navHome');
      const userBtn = document.getElementById('userBtn');
      const userBtnAvatar = document.getElementById('userBtnAvatar');
      const profileSetup = document.getElementById('profileSetup');
      const avatarGrid = document.getElementById('avatarGrid');
      const nicknameInput = document.getElementById('nicknameInput');
      const lovesCheckboxes = document.querySelectorAll('.loves-option');
      const hatesCheckboxes = document.querySelectorAll('.hates-option');
      const strengthsCheckboxes = document.querySelectorAll('.strengths-option');
      const strugglesCheckboxes = document.querySelectorAll('.struggles-option');
      const lovesMore = document.getElementById('lovesMore');
      const hatesMore = document.getElementById('hatesMore');
      const strengthsMore = document.getElementById('strengthsMore');
      const strugglesMore = document.getElementById('strugglesMore');
      const completeProfileSetup = document.getElementById('completeProfileSetup');
      const profileAvatar = document.getElementById('profileAvatar');
      const profileNickname = document.getElementById('profileNickname');
      const editProfile = document.getElementById('editProfile');
      const profileLoves = document.getElementById('profileLoves');
      const profileHates = document.getElementById('profileHates');
      const profileStrengths = document.getElementById('profileStrengths');
      const profileStruggles = document.getElementById('profileStruggles');
      const quizResults = document.getElementById('quizResults');
      const takeMoreQuizzes = document.getElementById('takeMoreQuizzes');
      const closeUserProfile = document.getElementById('closeUserProfile');
      const quizListingScreen = document.getElementById('quizListingScreen');
      const quizList = document.getElementById('quizList');
      const closeQuizListing = document.getElementById('closeQuizListing');
      const allScreens = document.querySelectorAll('.screen');
      const refreshStateKey = 'calmKidsSessionView_v1';
      let savedRefreshState = null;
      let refreshStateReady = false;
      let currentMindfulnessType = '';
      try {
        const saved = sessionStorage.getItem(refreshStateKey);
        if(saved) savedRefreshState = JSON.parse(saved);
      } catch(error) {
        console.error('Unable to read the saved session view.', error);
      }
      const autoFitBubbleTextNodes = Array.from(document.querySelectorAll('.auto-fit-bubble-text'));
      const toolboxMsg = document.getElementById('toolboxMsg');
      const questWheels = document.querySelectorAll('.quest-wheel');
      const circleSegmentTitles = {
        emotions: ['Feelings', 'Big feelings', 'Feeling happy', 'Feeling sad', 'Feeling angry', 'Feeling scared', 'Feeling embarrassed', 'Feeling worried', 'Feeling calm', 'Feeling jealous'],
        friendship: ['Being a good friend', 'Seeing another point of view', 'Taking turns', 'Listening to friends', 'Understanding friends', 'Including others', 'Trust and boundaries', 'Caring for friends', 'Different points of view', 'Respecting friends'],
        feeling: ['Noticing feelings', 'Helping with big feelings', 'Feeling worried', 'Feeling sad', 'Finding calm', 'Feeling frustrated', 'Trying new things', 'Feeling confused', 'Helping with feelings', 'Happy surprises'],
        communication: ['Speaking up kindly', 'Sharing your ideas', 'Listening to others', 'Respectful words', 'Talking with friends', 'Including everyone', 'Trust and honesty', 'Caring conversations', 'Working together', 'Kind communication'],
        social: ['Getting along', 'Classroom behaviour', 'Greeting people', 'Lunchtime behaviour', 'Playing games', 'Corridor behaviour', 'At the cinema', 'Playground behaviour', 'Having a conversation', 'Visiting a friend'],
        identity: ['Getting to know me', 'Groups I belong to', 'How I see myself', 'Things that matter to me', 'My different roles', 'My culture', 'My interests', 'My strengths', 'My future', 'All about me'],
        mindset: ['Learning and growing', 'Learning from mistakes', 'The power of yet', 'Being optimistic', 'Looking at things differently', 'Effort matters', 'Kind words to yourself', 'Hopeful thinking', 'Spotting the good', 'My helpful thought'],
        sensory: ['My senses', 'My senses each day', 'Sensations I like', 'Sensations I dislike', 'Body clues', 'Tricky times of day', 'Where my body is', 'Moving and balancing', 'My sensory toolkit', 'My sensory plan'],
        thought: ['Noticing thoughts', 'Thoughts and feelings', 'Finding a balanced thought', 'When worries feel big', 'Checking what I know', 'Questioning a thought', 'Kind self-talk', 'One small step', 'Thought detective tools', 'My thought plan'],
        conflict: ['Pause first', 'What happens next?', 'Listening to each other', 'Agreeing to disagree', 'Thinking about consequences', 'Letting small things go', 'Warning signs', 'Actions and feelings', 'Solving disagreements', 'My conflict plan']
      };
      const bookQuestGrid = document.getElementById('bookQuestGrid');
      const bookActivityScreen = document.getElementById('bookActivityScreen');
      const bookActivityTitle = document.getElementById('bookActivityTitle');
      const bookActivityProgress = document.getElementById('bookActivityProgress');
      const bookActivityPrompt = document.getElementById('bookActivityPrompt');
      const bookActivityResponse = document.getElementById('bookActivityResponse');
      const bookActivityFeedback = document.getElementById('bookActivityFeedback');
      const bookActivityBackBtn = document.getElementById('bookActivityBackBtn');
      const completeBookActivityBtn = document.getElementById('completeBookActivityBtn');
      const bookChapters = [
        { id: 'ch01', title: 'Section 1: Self-Awareness and Self-Esteem', activities: [
          ['Self-Assessment for Children', 'Do you like yourself? Do you know what you are good and bad at? Choose Yes, Sometimes, or No for each question. There are no right or wrong answers.', ['Yes', 'Sometimes', 'No']],
          ['What I Am Good At', 'Write or draw things you are good at. Include something you find difficult too.'],
          ['Things I Like About Myself', 'Write or draw one thing you like about yourself. You can ask someone you trust to help you think of an idea.'],
          ['My Favourite Things', 'Write or draw some of your favourite things and share what they tell you about yourself.'],
          ['My Values and Behaviour', 'Choose one value that matters to you. Describe a time your behaviour showed that value.']
        ] },
        { id: 'ch02', title: 'Section 2: Emotions', activities: [
          ['Understanding Your Emotions', 'Do you understand your emotions? Choose Yes, Sometimes, or No. Then write one feeling you have had recently. There are no right or wrong answers.', ['Yes', 'Sometimes', 'No']],
          ['Emotion Words and Body Clues', 'Choose an emotion. What does your body feel like when you feel it?'],
          ['Facial Expressions and Body Language', 'Choose an emotion and describe a facial expression or body-language clue that might show it.'],
          ['Emotion Cards', 'Choose an emotion card. Talk or write about a time you felt that emotion and what your body felt like.'],
          ['Match an Emotion to a Scenario', 'Choose an emotion that could fit a situation. Remember that different people may feel differently in the same situation.']
        ] },
        { id: 'ch03', title: 'Section 3: Big Emotions', activities: [
          ['Survival Mode', 'What might happen to your thoughts, body, or behaviour when a big emotion puts you into survival mode?'],
          ['Size of the Emotion Scale', 'Choose a recent feeling and show how big it felt on a scale. What was happening at the time?'],
          ['Big Emotions Plan', 'Write your early thought or body signals, helpful self-talk, and one strategy you will use to express or manage a big emotion.'],
          ['Managing Big Emotions Plan', 'Choose a breathing exercise, movement, grounding, trusted person, or drawing/writing strategy for your plan.'],
          ['What Helps When Feelings Grow?', 'Name an early sign that your feeling is getting bigger and what you can try as soon as you notice it.']
        ] },
        { id: 'ch04', title: 'Section 4: Communicating Emotions', activities: [
          ['Communicating Your Emotions', 'Think of one helpful and one unhelpful way to communicate a strong feeling. What might happen after each?'],
          ['Words, Face, and Body', 'Choose a feeling and describe how words, facial expression, tone, and body language could communicate it.'],
          ['What Could You Say?', 'Choose a situation where you feel upset. Write a respectful sentence that tells someone how you feel.'],
          ['Communicating With Parents and Carers', 'Think of a time you needed help. What could you say so a parent or carer understands what you feel and need?'],
          ['Expressing a Feeling', 'Complete: “I feel ___ because ___.” Add one thing that might help.']
        ] },
        { id: 'ch05', title: 'Section 5: Worries and Negative Thoughts', activities: [
          ['Problem-Solving Sheet', 'Write or draw a worry or problem. List three things you could do, then choose one and consider what might happen.'],
          ['Can I Do Anything About It?', 'Choose a worry. Can you do anything about it? If yes, write possible actions; if not, choose a breathing or calming strategy.'],
          ['Worry and Negative Thoughts', 'Write one thought linked to a worry. What feeling or body clue comes with it?'],
          ['Choose the Best Idea', 'Think of a problem and two possible responses. Which response seems most helpful, and what might happen next?'],
          ['Breathing and Calming Strategy', 'Choose a breathing exercise or calming strategy you could use when a worry feels difficult.']
        ] },
        { id: 'ch06', title: 'Section 6: Being Kind to Yourself', activities: [
          ['Positive Self-Talk', 'Write something kind and helpful you can tell yourself when something feels difficult.'],
          ['Think Positively', 'Choose a difficult thought and write a more balanced, encouraging thought to try instead.'],
          ['Affirmation', 'Write an affirmation about yourself. Decorate or colour it in, as in the journal activity.'],
          ['Something You Did Well', 'Write one thing you did well today and why you feel pleased with it.'],
          ['What Could I Do Differently?', 'Think about a mistake or disappointment. What could you try differently next time without being unkind to yourself?']
        ] },
        { id: 'ch07', title: 'Section 7: Sensory Regulation', activities: [
          ['Trigger Management Plan', 'Name a sensory trigger, something you can tell yourself, and one thing you can say or do to manage it.'],
          ['Sensory Circuit Cards: Alerting', 'Choose a safe alerting movement activity to help your body feel more awake.'],
          ['Sensory Circuit Cards: Organising', 'Choose a simple organising activity to help your body and attention get ready to focus.'],
          ['Sensory Circuit Cards: Calming', 'Choose a calming activity and notice how your body feels afterwards.'],
          ['Regulation Scale', 'Use the regulation scale to check how your body feels. What kind of sensory support might help now?']
        ] },
        { id: 'ch08', title: 'Section 8: Social Norms', activities: [
          ['Social Norms', 'Think of an expected behaviour in a shared situation. What might be unexpected? Could expectations vary between groups?'],
          ['Scenario Cards', 'Choose a scenario. How would you feel? How might the other person feel? What would you do?'],
          ['What Might Happen?', 'Choose an action in a social situation. What could happen if you do that? What is another way to deal with it?'],
          ['Different Groups, Different Expectations', 'Describe a social expectation that could vary between families, groups, or places. How could you find out respectfully?'],
          ['Discuss a Scenario', 'Use a scenario to think about the size of the problem and where each person might be on the regulation scale.']
        ] },
        { id: 'ch09', title: 'Section 9: Belonging', activities: [
          ['Feeling Left Out', 'Think of a time someone might feel left out. What might they think, feel, and do?'],
          ['Belonging Scenario', 'Your friend will not play the game you want because you have played it all morning. What could each person be thinking and feeling?'],
          ['What Could You Do?', 'Think of a situation where someone wants to join in. Name one respectful thing they could say or do.'],
          ['Jealousy and Friendship', 'Think about a time someone else gets an opportunity you wanted. What could you do with the feeling?'],
          ['Scenario Cards', 'Choose a scenario about belonging. How would you feel, how might the other person feel, and what might happen next?']
        ] },
        { id: 'ch10', title: 'Section 10: Friendship', activities: [
          ['Friendship Scenarios', 'Your friend keeps annoying you. What could you say or do? What might be another way to handle it?'],
          ['Respecting Other People’s Opinions', 'Write your opinion and another person’s opinion about a favourite thing. Can you be friends if you disagree?'],
          ['Agree to Disagree', 'Two friends think different instruments are best. What could one say to agree to disagree respectfully?'],
          ['Letting It Go: Friends and Family', 'Name a habit that might annoy you. Is it something you can let go, or do you need to talk about it?'],
          ['Letting It Go Quiz: Friends and Family', 'Your brother bumps into you by accident and apologises. Choose a response that avoids turning it into an argument.', ['Push him back and start an argument.', 'Believe him and move on.'], 'Believe him and move on.']
        ] },
        { id: 'ch11', title: 'Section 11: Understanding Other Perspectives', activities: [
          ['Perspective-Taking', 'Choose a scenario. What might each person think, feel, and do?'],
          ['Your Perspective and Their Perspective', 'Your friend will not play a game you want because you have played it all morning. Write both perspectives.'],
          ['Letting It Go: Strangers and Acquaintances', 'Someone gives you a dirty look. What are two possible reasons, and how could you respond?'],
          ['Letting It Go Quiz', 'A classmate hums while working and will not stop when asked. Choose a safe response that helps you concentrate.', ['Threaten to fight them.', 'Ask the teacher if you can move seats.', 'Shout at them.'], 'Ask the teacher if you can move seats.'],
          ['Consequences of an Action', 'Choose one response to a disagreement. What might happen to you and to the other person?']
        ] },
        { id: 'ch12', title: 'Section 12: Communication', activities: [
          ['Misunderstandings', 'Draw or write about a time you misunderstood somebody and a time somebody misunderstood you.'],
          ['Communication Styles Quiz', 'Your friend wants to watch a movie you dislike. Choose an assertive response.', ['Watch it anyway.', 'Tell the truth and suggest finding something you both like.', 'Demand that you choose.'], 'Tell the truth and suggest finding something you both like.'],
          ['Communication Quiz', 'Jin forgets his lunch and feels annoyed but tells nobody. Was Jin’s communication style passive, aggressive, or assertive?', ['Passive', 'Aggressive', 'Assertive'], 'Passive'],
          ['Communicating With Parents and Carers', 'A child needs help while their parent is busy. What might each person be thinking, and what could the child say?'],
          ['Communication Clues', 'How can a receiver use facial expression, tone of voice, and body language to understand a message?']
        ] },
        { id: 'ch13', title: 'Section 13: Looking After Your Mental Health', activities: [
          ['Ten-Day Mental Health Challenge', 'Choose three wellbeing activities from the book to try today. Which will you do?'],
          ['Mindfulness: Focus on Your Senses', 'List something you can see, hear, feel, smell, and taste right now.'],
          ['Breathing Techniques', 'Choose finger breathing, balloon breathing, square breathing, or figure-of-eight breathing. What did you notice afterwards?'],
          ['Mindfulness Tracker', 'Choose one breathing exercise and one mindful activity to practise today.'],
          ['Gratitude Diary', 'Write or draw one thing you are grateful for today.']
        ] },
        { id: 'ch14', title: 'Section 14: Cards and Worksheets', activities: [
          ['Daily Journal', 'How are you feeling? Why? Write or draw three good things about your day.'],
          ['Problem-Solving Sheet', 'Write a problem, how it makes you feel, three things you could do, and which option seems best.'],
          ['Reflection Sheet', 'Think about a problem that happened. How did it make you feel? What could you do differently next time?'],
          ['Trigger Management Plan', 'Name a trigger, something you will tell yourself, and something you will say or do.'],
          ['Cards and Scales', 'Choose a sensory circuit card, scenario card, emotion card, regulation scale, or size-of-emotion scale. How will you use it?']
        ] }
      ];
      const redPromptModal = document.getElementById('redPromptModal');
      const redResultModal = document.getElementById('redResultModal');
      const redResultText = document.getElementById('redResultText');
      const redResultPoints = document.getElementById('redResultPoints');
      const redYes = document.getElementById('redYes');
      const redNo = document.getElementById('redNo');
      const redABit = document.getElementById('redABit');
      const redResultOk = document.getElementById('redResultOk');
      const redActivityButtons = document.querySelectorAll('#redActivities .feeling');
      const bluePromptModal = document.getElementById('bluePromptModal');
      const blueResultModal = document.getElementById('blueResultModal');
      const blueResultText = document.getElementById('blueResultText');
      const blueResultPoints = document.getElementById('blueResultPoints');
      const blueYes = document.getElementById('blueYes');
      const blueNo = document.getElementById('blueNo');
      const blueABit = document.getElementById('blueABit');
      const blueResultOk = document.getElementById('blueResultOk');
      const blueActivityButtons = document.querySelectorAll('#blueActivities .feeling');
      const greenActivityButtons = document.querySelectorAll('#greenActivities .feeling');
      const blueGetMovingBtn = document.getElementById('blueGetMovingBtn');
      const blueDanceSongBtn = document.getElementById('blueDanceSongBtn');
      const blueObstacleCourseBtn = document.getElementById('blueObstacleCourseBtn');
      const blueSpinAroundBtn = document.getElementById('blueSpinAroundBtn');
      const blueJumpingJacksBtn = document.getElementById('blueJumpingJacksBtn');
      const bluePowerPoseBtn = document.getElementById('bluePowerPoseBtn');
      const blueShakeOutBtn = document.getElementById('blueShakeOutBtn');
      const blueHighKneesBtn = document.getElementById('blueHighKneesBtn');
      const blueAnimalMovesBtn = document.getElementById('blueAnimalMovesBtn');
      const blueFastFeetBtn = document.getElementById('blueFastFeetBtn');
      const blueSleepToolsBtn = document.getElementById('blueSleepToolsBtn');
      const blueProblemSolverBtn = document.getElementById('blueProblemSolverBtn');
      const redWorryNinjaBtn = document.getElementById('redWorryNinjaBtn');
      const blueGetMovingScreen = document.getElementById('blueGetMovingScreen');
      const blueDanceSongScreen = document.getElementById('blueDanceSongScreen');
      const blueObstacleCourseScreen = document.getElementById('blueObstacleCourseScreen');
      const blueSpinAroundScreen = document.getElementById('blueSpinAroundScreen');
      const blueJumpingJacksScreen = document.getElementById('blueJumpingJacksScreen');
      const bluePowerPoseScreen = document.getElementById('bluePowerPoseScreen');
      const blueShakeOutScreen = document.getElementById('blueShakeOutScreen');
      const blueHighKneesScreen = document.getElementById('blueHighKneesScreen');
      const blueAnimalMovesScreen = document.getElementById('blueAnimalMovesScreen');
      const blueFastFeetScreen = document.getElementById('blueFastFeetScreen');
      const blueStartRandomExerciseBtn = document.getElementById('blueStartRandomExerciseBtn');
      const completeBlueGetMoving = document.getElementById('completeBlueGetMoving');
      const completeBlueDanceSong = document.getElementById('completeBlueDanceSong');
      const completeBlueObstacleCourse = document.getElementById('completeBlueObstacleCourse');
      const completeBlueSpinAround = document.getElementById('completeBlueSpinAround');
      const completeBlueJumpingJacks = document.getElementById('completeBlueJumpingJacks');
      const completeBluePowerPose = document.getElementById('completeBluePowerPose');
      const completeBlueShakeOut = document.getElementById('completeBlueShakeOut');
      const completeBlueHighKnees = document.getElementById('completeBlueHighKnees');
      const completeBlueAnimalMoves = document.getElementById('completeBlueAnimalMoves');
      const completeBlueFastFeet = document.getElementById('completeBlueFastFeet');
      const blueSpinTimerDisplay = document.getElementById('blueSpinTimerDisplay');
      const greenShareWinBtn = document.getElementById('greenShareWinBtn');
      const greenHelpSomeoneBtn = document.getElementById('greenHelpSomeoneBtn');
      const greenThankYouNoteBtn = document.getElementById('greenThankYouNoteBtn');
      const greenDanceSongBtn = document.getElementById('greenDanceSongBtn');
      const greenKindMessageBtn = document.getElementById('greenKindMessageBtn');
      const greenNatureWalkBtn = document.getElementById('greenNatureWalkBtn');
      const greenGratitudeListBtn = document.getElementById('greenGratitudeListBtn');
      const greenBreathingBuddyBtn = document.getElementById('greenBreathingBuddyBtn');
      const greenCelebratePersonBtn = document.getElementById('greenCelebratePersonBtn');
      const greenActsPlanBtn = document.getElementById('greenActsPlanBtn');
      const greenPositiveMemoryBtn = document.getElementById('greenPositiveMemoryBtn');
      const greenComplimentSelfBtn = document.getElementById('greenComplimentSelfBtn');
      const greenShareWinScreen = document.getElementById('greenShareWinScreen');
      const greenHelpSomeoneScreen = document.getElementById('greenHelpSomeoneScreen');
      const greenThankYouNoteScreen = document.getElementById('greenThankYouNoteScreen');
      const greenDanceSongScreen = document.getElementById('greenDanceSongScreen');
      const greenKindMessageScreen = document.getElementById('greenKindMessageScreen');
      const greenNatureWalkScreen = document.getElementById('greenNatureWalkScreen');
      const greenGratitudeListScreen = document.getElementById('greenGratitudeListScreen');
      const greenBreathingBuddyScreen = document.getElementById('greenBreathingBuddyScreen');
      const greenCelebratePersonScreen = document.getElementById('greenCelebratePersonScreen');
      const greenActsPlanScreen = document.getElementById('greenActsPlanScreen');
      const greenPositiveMemoryScreen = document.getElementById('greenPositiveMemoryScreen');
      const greenComplimentSelfScreen = document.getElementById('greenComplimentSelfScreen');
      const completeGreenShareWin = document.getElementById('completeGreenShareWin');
      const completeGreenHelpSomeone = document.getElementById('completeGreenHelpSomeone');
      const completeGreenThankYouNote = document.getElementById('completeGreenThankYouNote');
      const completeGreenDanceSong = document.getElementById('completeGreenDanceSong');
      const completeGreenKindMessage = document.getElementById('completeGreenKindMessage');
      const completeGreenNatureWalk = document.getElementById('completeGreenNatureWalk');
      const completeGreenGratitudeList = document.getElementById('completeGreenGratitudeList');
      const completeGreenBreathingBuddy = document.getElementById('completeGreenBreathingBuddy');
      const completeGreenCelebratePerson = document.getElementById('completeGreenCelebratePerson');
      const completeGreenActsPlan = document.getElementById('completeGreenActsPlan');
      const completeGreenPositiveMemory = document.getElementById('completeGreenPositiveMemory');
      const completeGreenComplimentSelf = document.getElementById('completeGreenComplimentSelf');
      const thermoSegments = document.querySelectorAll('.thermo-segment');
      const grounding54321Screen = document.getElementById('grounding54321');
      const completeGrounding = document.getElementById('completeGrounding');
      const red54321Btn = document.getElementById('red54321Btn');
      const redHandSqueezeBtn = document.getElementById('redHandSqueezeBtn');
      const deepBreathsBtn = document.getElementById('deepBreathsBtn');
      const meditateBtn = document.getElementById('meditateBtn');
      const visualisationBtn = document.getElementById('visualisationBtn');
      const yogaBtn = document.getElementById('yogaBtn');
      const yogaScreen = document.getElementById('yogaScreen');
      const completeYoga = document.getElementById('completeYoga');
      const pushWallBtn = document.getElementById('pushWallBtn');
      const pushWallScreen = document.getElementById('pushWallScreen');
      const pushWallTimerDisplay = document.getElementById('pushWallTimerDisplay');
      const pushWallAfterText = document.getElementById('pushWallAfterText');
      const completePushWall = document.getElementById('completePushWall');
      const redHandSqueezeScreen = document.getElementById('redHandSqueezeScreen');
      const redHandSqueezeText = document.getElementById('redHandSqueezeText');
      const completeRedHandSqueeze = document.getElementById('completeRedHandSqueeze');
      const meditateScreen = document.getElementById('meditateScreen');
      const meditateTimerDisplay = document.getElementById('meditateTimerDisplay');
      const meditateAfterText = document.getElementById('meditateAfterText');
      const completeMeditate = document.getElementById('completeMeditate');
      const visualisationScreen = document.getElementById('visualisationScreen');
      const visualisationText = document.getElementById('visualisationText');
      const visualisationSeeText = document.getElementById('visualisationSeeText');
      const visualisationHearText = document.getElementById('visualisationHearText');
      const visualisationSmellText = document.getElementById('visualisationSmellText');
      const visualisationFeelText = document.getElementById('visualisationFeelText');
      const visualisationAfterText = document.getElementById('visualisationAfterText');
      const completeVisualisation = document.getElementById('completeVisualisation');
      const talkToSomebodyBtn = document.getElementById('talkToSomebodyBtn');
      const completeTalkToSomebody = document.getElementById('completeTalkToSomebody');
      const talkToSomebodyElseInput = document.getElementById('talkToSomebodyElseInput');
      const talkAfterTalkingInput = document.getElementById('talkAfterTalkingInput');
      const talkPersonButtons = document.querySelectorAll('#talkToSomebodyOptions .talk-person-option');
      
      // Timer variables
      let breathingTimer = null;
      let breathingCycleGeneration = 0;
      let squareTimer = null;
      let breathCount = 0;
      let hotChocolateTimer = null;
      let hotChocolateCycleGeneration = 0;
      let movingTimerInterval = null;
      let awaitingMovementCount = false;
      let pushWallTimerInterval = null;
      let pushWallTimeLeft = 60;
      let meditateTimerInterval = null;
      let meditateTimeLeft = 60;
      let blueSpinTimerInterval = null;
      let blueSpinTimeLeft = 60;
      let currentActivityColor = 'red';
      let pendingHabitatChangeFlow = false;
      let habitatRedirectTimer = null;
      let habitatPromptDelayTimer = null;
      let habitatGuidanceTimer = null;
      let bubbleFitRaf = null;
      let zenzySpeechLockObserver = null;
      let zenzyEmotionLockTimer = null;
      let zenzyEmotionLockUntil = parseInt(localStorage.getItem('zenzyEmotionLockUntil') || '0', 10) || 0;
      let zenzyEmotionLockMode = localStorage.getItem('zenzyEmotionLockMode') || '';
      let zenzyEmotionLockSpeech = localStorage.getItem('zenzyEmotionLockSpeech') || '';
      let habitatMissionPromptActive = localStorage.getItem('zenzyMissionHabitatPromptActive') === 'true';
      let habitatMissionPromptShown = localStorage.getItem('zenzyMissionHabitatPromptShown') === 'true';
      let habitatMissionEarnedZp = parseInt(localStorage.getItem('zenzyMissionHabitatEarnedZp') || '0', 10) || 0;
      let currentEmotionmissionstepKey = '';
      let currentEmotionQuestTitle = '';
      let currentSocialS1Step = 'step1';
      let currentSocialActivitySets = [];
      let currentSocialActivitySetIndex = 0;
      let currentSocialActivityStepIndex = 0;
      let currentSocialFlow = ['sort', 'expected', 'unexpected'];
      let currentSocialQuizAnswers = {};
      const e1ActivityProgress = {
        draw: false,
        quiz: false,
        match: false
      };
      const e2ActivityProgress = {
        needs: false,
        signals: false,
        cues: false
      };
      const emotionActivityProgress = {
        feel: false,
        tell: false,
        body: false
      };
      const socialActivityProgress = {
        lesson: false,
        quiz: false,
        sort: false,
        expected: false,
        unexpected: false
      };
      let currentEmotionActivityStep = 'feel';
      let currentSocialActivityMode = 'sort';
      let currentSocialActivityTitle = '';
      let currentSocialActivityPromptBase = '';
      let currentEmotionsTriggerFlow = 'e1';
      const EMOTION_SUMMARY_STORAGE_KEY = 'emotionQuestResponses';
      const ADOPTION_HABITAT_PROMPT = "Thank you for adopting me! Please can we get out of here? This place is so creepy!";
      const HABITAT_PROMPT_DELAY_MS = 10000;
      const HABITAT_THANK_YOU_PROMPT = 'Thank you, I love this place.';
      const HABITAT_THANK_YOU_DURATION_MS = 10000;
      const HATCHED_GREETING_PROMPT = "Thank you for helping me hatch! It's great to meet you!";
      const PLAY_ACTION_LOCK_DURATION_MS = 60000;
      const PLAY_ACTION_HAPPY_PROMPT = "I'm feeling happy!";
      const PLAY_SOCIAL_BOOST = 14;
      const PLAY_ACTIVITY_BOOST = 30;
      const PLAY_PC_SOCIAL_BOOST = 12;
      const PLAY_PC_ACTIVITY_BOOST = 16;
      const MINI_GAME_SOCIAL_BOOST = 8;
      const MINI_GAME_ACTIVITY_BOOST = 12;
      const HABITAT_GUIDE_TEXT = "Click below to change the zenzy's habitat.";
      const ZENZY_EGG_COLLECT_COST_ZP = 150;
      const MINI_GAME_PLAY_COST_ZP = 50;
      const ROOM_BUILD_COST_ZP = 50;
      const ROOM_BUILD_HINT_TEXT = 'Click below to build zenzy a room.';
      const ROOM_BUILD_COLD_PROMPT = 'I wish I had a room.';
      const ZENZY_ADOPT_HINT_TEXT = 'Tap to adopt Zenzy';
      const ZENZY_DECORATE_HINT_TEXT = "Click below to decorate zenzy's room.";
      const HABITAT_MISSION_TARGET_ZP = 100;
      const puzzleBtn = document.getElementById('puzzleBtn');
      const exerciseBtn = document.getElementById('exerciseBtn');
      const drawBtn = document.getElementById('drawBtn');
      const puzzleScreen = document.getElementById('puzzleScreen');
      const puzzleContainer = document.getElementById('puzzleContainer');
      const completePuzzle = document.getElementById('completePuzzle');
      const exerciseOptionScreen = document.getElementById('exerciseOptionScreen');
      const jumpingJacksBtn = document.getElementById('jumpingJacksBtn');
      const danceBtn = document.getElementById('danceBtn');
      const joggingBtn = document.getElementById('joggingBtn');
      const stretchBtn = document.getElementById('stretchBtn');
      const favoriteSongDanceBtn = document.getElementById('favoriteSongDanceBtn');
      const exerciseFeedbackModal = document.getElementById('exerciseFeedbackModal');
      const exerciseFeedbackInput = document.getElementById('exerciseFeedbackInput');
      const submitExerciseFeedback = document.getElementById('submitExerciseFeedback');
      const drawingScreen = document.getElementById('drawingScreen');
      const completeDrawing = document.getElementById('completeDrawing');
      let fromRedActivities = false;
      const foodFeedingModal = document.getElementById('foodFeedingModal');
      const foodModalZenzyImage = document.getElementById('foodModalZenzyImage');
      const feedingMsg = document.getElementById('feedingMsg');
      const drinkingModal = document.getElementById('drinkingModal');
      const drinkingModalZenzyImage = document.getElementById('drinkingModalZenzyImage');
      const drinkingMsg = document.getElementById('drinkingMsg');
      const playingModal = document.getElementById('playingModal');
      const playingModalZenzyImage = document.getElementById('playingModalZenzyImage');
      const playingMsg = document.getElementById('playingMsg');
      const artModal = document.getElementById('artModal');
      const readingModal = document.getElementById('readingModal');
      const pcModal = document.getElementById('pcModal');
      const artModalZenzyImage = document.getElementById('artModalZenzyImage');
      const readingModalZenzyImage = document.getElementById('readingModalZenzyImage');
      const pcModalZenzyImage = document.getElementById('pcModalZenzyImage');
      const artMsg = document.getElementById('artMsg');
      const readingMsg = document.getElementById('readingMsg');
      const pcMsg = document.getElementById('pcMsg');
      const greenResultModal = document.getElementById('greenResultModal');
      const greenResultOk = document.getElementById('greenResultOk');
      const settingsBtn = document.getElementById('settingsBtn');
      const settingsModal = document.getElementById('settingsModal');
      const closeSettingsBtn = document.getElementById('closeSettingsBtn');
      const soundToggle = document.getElementById('soundToggle');
      const resetAppBtn = document.getElementById('resetAppBtn');
      const privacyPolicyBtn = document.getElementById('privacyPolicyBtn');
      const privacyPolicyScreen = document.getElementById('privacyPolicy');
      const backFromPrivacy = document.getElementById('backFromPrivacy');
      let soundEnabled = true;

      const mindfulnessActivities = [
        { type: 'breathing', text: 'Take a deep breath' },
        { type: 'hotChocolate', text: 'Hot chocolate breathing' },
        { type: 'yellow', text: 'How many yellow things can you see?' },
        { type: 'rainbow', text: 'Look around the room that you are in. Can you spot items in every colour of the rainbow?' },
        { type: 'square', text: 'Let’s try square breathing!' },
        { type: '5-4-3-2-1', text: '5-4-3-2-1 Grounding Activity' }
      ];
      let mindfulnessIndex = parseInt(localStorage.getItem('mindfulnessIndex') || '0', 10) || 0;

      const movingActivities = [
        'Jog on the spot for 60 seconds!',
        'How many star jumps can you do in 1 minute?',
        'How many press ups can you do in 1 minute?'
      ];
      let movingIndex = parseInt(localStorage.getItem('movingIndex') || '0', 10) || 0;
      let activeStarIndex = 0;
      let completedCount = parseInt(localStorage.getItem('completedStars') || '0', 10) || 0;
      let readyCollectTapCount = 0;
      let zenzyEggTapCount = 0;
      let habitatTapCount = 0;

      // Celebration messages
      const celebrationMessages = [
        'Amazing work! 🌟',
        'You did it! 🎉',
        'Well done! ✨',
        'Fantastic job! 🥳',
        'Superstar! ⭐',
        'Incredible! 🎊',
        'You\'re awesome! 💫',
        'Great effort! 🙌',
        'Keep it up! 🌈',
        'You rock! 🤩',
        'Brilliant! 💛',
        'Outstanding! 🌟',
        'Way to go! 🎉',
        'Excellent! ✨',
        'You\'re a star! ⭐'
      ];
      
      // Home greeting messages
      // Removed homeGreetings - no longer used
      
      // Initialize user button with saved profile avatar
      updateUserButton();
      observeBubbleTextChanges();
      scheduleBubbleTextFit();

      // Coins state
      const coinCountEl = document.getElementById('coinCount');
      let coins = parseInt(localStorage.getItem('coins') || '0', 10) || 0;
      coinCountEl.textContent = coins;
      const coinsCounterEl = document.querySelector('.coins-counter');
      function getVisibleZenzyAnchor() {
        if (zenzyAvatar && window.getComputedStyle(zenzyAvatar).display !== 'none') {
          return zenzyAvatar;
        }
        if (zenzyAvatarFriend && window.getComputedStyle(zenzyAvatarFriend).display !== 'none') {
          return zenzyAvatarFriend;
        }
        return null;
      }

      function fitSpeechBubbleText(textEl) {
        if (!textEl || !textEl.parentElement) return;
        if (!textEl.getClientRects || textEl.getClientRects().length === 0) return;

        const wrapper = textEl.parentElement;
        const bubbleImage = wrapper.querySelector('img');
        const sourceWidth = (bubbleImage && bubbleImage.clientWidth) || wrapper.clientWidth;
        const sourceHeight = (bubbleImage && bubbleImage.clientHeight) || wrapper.clientHeight;
        if (!sourceWidth || !sourceHeight) return;

        const widthRatio = parseFloat(textEl.dataset.bubbleWidth || '0.72');
        const heightRatio = parseFloat(textEl.dataset.bubbleHeight || '0.52');
        const targetWidth = Math.max(56, Math.floor(sourceWidth * widthRatio));
        const targetHeight = Math.max(36, Math.floor(sourceHeight * heightRatio));

        textEl.style.width = targetWidth + 'px';
        textEl.style.maxWidth = targetWidth + 'px';
        textEl.style.height = targetHeight + 'px';
        textEl.style.maxHeight = targetHeight + 'px';

        const computedStyle = window.getComputedStyle(textEl);
        const baseSize = parseFloat(textEl.dataset.baseFontSize || computedStyle.fontSize || '16');
        if (!textEl.dataset.baseFontSize) {
          textEl.dataset.baseFontSize = String(baseSize);
        }

        const minFont = parseFloat(textEl.dataset.minFontSize || '10');
        const maxFont = parseFloat(textEl.dataset.maxFontSize || textEl.dataset.baseFontSize || '16');

        let fontSize = maxFont;
        textEl.style.fontSize = fontSize + 'px';

        while (
          fontSize > minFont &&
          (textEl.scrollWidth > textEl.clientWidth + 1 || textEl.scrollHeight > textEl.clientHeight + 1)
        ) {
          fontSize = Math.max(minFont, fontSize - 0.5);
          textEl.style.fontSize = fontSize + 'px';
        }
      }

      function fitAllSpeechBubbleText() {
        if (!autoFitBubbleTextNodes || !autoFitBubbleTextNodes.length) return;
        autoFitBubbleTextNodes.forEach(function(textEl) {
          fitSpeechBubbleText(textEl);
        });
      }

      function scheduleBubbleTextFit() {
        if (bubbleFitRaf) {
          cancelAnimationFrame(bubbleFitRaf);
        }
        bubbleFitRaf = requestAnimationFrame(function() {
          bubbleFitRaf = null;
          fitAllSpeechBubbleText();
        });
      }

      function observeBubbleTextChanges() {
        if (zenzySpeech && typeof MutationObserver !== 'undefined') {
          new MutationObserver(function() {
            requestAnimationFrame(updateZenzySpeechBubblePosition);
          }).observe(zenzySpeech, { childList: true, characterData: true, subtree: true });
        }
        if (zenzySpeechBubbleContainer && typeof ResizeObserver !== 'undefined') {
          new ResizeObserver(function() {
            requestAnimationFrame(updateZenzySpeechBubblePosition);
          }).observe(zenzySpeechBubbleContainer);
        }
        if (!autoFitBubbleTextNodes || !autoFitBubbleTextNodes.length) return;

        if (typeof MutationObserver !== 'undefined') {
          autoFitBubbleTextNodes.forEach(function(textEl) {
            const observer = new MutationObserver(function() {
              scheduleBubbleTextFit();
            });
            observer.observe(textEl, { childList: true, characterData: true, subtree: true });
          });
        }

        if (typeof ResizeObserver !== 'undefined') {
          const resizeObserver = new ResizeObserver(function() {
            scheduleBubbleTextFit();
          });
          autoFitBubbleTextNodes.forEach(function(textEl) {
            if (textEl.parentElement) {
              resizeObserver.observe(textEl.parentElement);
            }
          });
        }
      }

      function updateZenzySpeechBubblePosition() {
        if (!zenzySpeechBubbleContainer) return;
        if (window.getComputedStyle(zenzySpeechBubbleContainer).display === 'none') return;

        const stageContainer = zenzySpeechBubbleContainer.parentElement;
        const anchorEl = getVisibleZenzyAnchor();
        if (!stageContainer || !anchorEl) return;

        const containerRect = stageContainer.getBoundingClientRect();
        const anchorRect = anchorEl.getBoundingClientRect();

        // If the anchor image hasn't loaded yet its height is 0 and our calculated
        // position will be wrong. Clear stale inline overrides and retry on load.
        if (!anchorRect.height || !containerRect.width || !containerRect.height) {
          zenzySpeechBubbleContainer.style.removeProperty('top');
          zenzySpeechBubbleContainer.style.removeProperty('bottom');
          zenzySpeechBubbleContainer.style.removeProperty('left');
          zenzySpeechBubbleContainer.style.removeProperty('transform');
          if (anchorEl.tagName === 'IMG' && !anchorEl._bubblePosLoadPending) {
            anchorEl._bubblePosLoadPending = true;
            anchorEl.addEventListener('load', function onAnchorLoad() {
              anchorEl.removeEventListener('load', onAnchorLoad);
              anchorEl._bubblePosLoadPending = false;
              requestAnimationFrame(updateZenzySpeechBubblePosition);
            });
          }
          return;
        }

        const bubbleWidth = zenzySpeechBubbleContainer.offsetWidth;
        const bubbleHeight = zenzySpeechBubbleContainer.offsetHeight;

        const anchorLeft = anchorRect.left - containerRect.left;
        const anchorRight = anchorRect.right - containerRect.left;
        const anchorTop = anchorRect.top - containerRect.top;
        const anchorBottom = anchorRect.bottom - containerRect.top;

        const centerX = (anchorLeft + anchorRight) / 2;
        const centerY = (anchorTop + anchorBottom) / 2;
        const gap = 10;
        const clamp = function(value, min, max){ return Math.max(min, Math.min(max, value)); };
        const maxLeft = Math.max(8, containerRect.width - bubbleWidth - 8);
        const maxTop = Math.max(8, containerRect.height - bubbleHeight - 8);
        let left;
        let top;
        let tail;
        if (anchorRight + gap + bubbleWidth <= containerRect.width - 8) {
          left = anchorRight + gap;
          top = clamp(centerY - bubbleHeight / 2, 8, maxTop);
          tail = 'left';
        } else if (anchorLeft - gap - bubbleWidth >= 8) {
          left = anchorLeft - gap - bubbleWidth;
          top = clamp(centerY - bubbleHeight / 2, 8, maxTop);
          tail = 'right';
        } else if (anchorTop - gap - bubbleHeight >= 8) {
          left = clamp(centerX - bubbleWidth / 2, 8, maxLeft);
          top = anchorTop - gap - bubbleHeight;
          tail = 'bottom';
        } else {
          left = clamp(centerX - bubbleWidth / 2, 8, maxLeft);
          top = clamp(anchorBottom + gap, 8, maxTop);
          tail = centerY >= top + bubbleHeight / 2 ? 'bottom' : 'top';
        }

        const horizontalTail = tail === 'top' || tail === 'bottom';
        const offset = horizontalTail ? centerX - left - 6 : centerY - top - 6;
        const edgeLength = horizontalTail ? bubbleWidth : bubbleHeight;
        zenzySpeechBubbleContainer.dataset.tail = tail;
        zenzySpeechBubbleContainer.style.setProperty('--tail-offset', clamp(offset, 10, Math.max(10, edgeLength - 22)) + 'px');
        zenzySpeechBubbleContainer.style.left = left + 'px';
        zenzySpeechBubbleContainer.style.top = top + 'px';
        zenzySpeechBubbleContainer.style.bottom = 'auto';
        zenzySpeechBubbleContainer.style.transform = 'none';
        updateZenzyDragHandlePosition();
      }

      function updateZenzyDragHandlePosition() {
        if (!zenzyDragHandle || !zenzyAvatar) return;
        if (zenzyStage !== 'adopted') {
          zenzyDragHandle.style.display = 'none';
          return;
        }
        const stageContainer = zenzyAvatar.parentElement;
        if (!stageContainer) return;
        const containerRect = stageContainer.getBoundingClientRect();
        const avatarRect = zenzyAvatar.getBoundingClientRect();
        const centerX = (avatarRect.left - containerRect.left) + (avatarRect.width / 2);
        const topY = (avatarRect.top - containerRect.top) + (avatarRect.height * 0.78);
        zenzyDragHandle.style.left = centerX + 'px';
        zenzyDragHandle.style.top = topY + 'px';
        zenzyDragHandle.style.transform = 'translate(-50%, -50%)';
        zenzyDragHandle.style.display = 'inline-flex';
      }

      function openZenzyPetShop() {
        showScreen(petShop);
        if(petShop){
          petShop.style.display = 'flex';
          petShop.style.visibility = 'visible';
          petShop.style.opacity = '1';
        }
        try{
          const stage = localStorage.getItem('zenzyStage') || 'egg';
          if(stage === 'adopted'){
            updateShopSectionsVisibility();
            updateCounts();
            enableZenzyAvatarDrag();
            updateHealthBars();
          } else {
            updateCounts();
          }
        }catch(e){
          console.error('openZenzyPetShop setup error:', e);
        }
        maybeShowAdoptReminder(700);
        updateWeeklyMissionButtonState();
        renderWeeklyMission();
        requestAnimationFrame(updateZenzySpeechBubblePosition);
        requestAnimationFrame(updateZenzyDragHandlePosition);
      }
      // clicking the coins counter opens the petshop
      if(coinsCounterEl){
        coinsCounterEl.onclick = function(){
          openZenzyPetShop();
        };
      }

      // Shop interactions use coins now

      if(shopBtns && shopBtns.length && shopMsg){
        shopBtns.forEach(function(b){
          b.onclick = function(){
            const cost = parseInt(b.dataset.cost||'0',10);
            const btnText = b.textContent;
            const habitat = b.dataset.habitat;
            if(coins>=cost){
              coins -= cost;
              localStorage.setItem('coins', coins);
              if(coinCountEl) coinCountEl.textContent = coins;
              if(habitat){
                if(zenzyHabitat){
                  zenzyHabitat.classList.remove('habitat-forest','habitat-bedroom','habitat-river');
                  zenzyHabitat.classList.add(`habitat-${habitat}`);
                }
                shopMsg.textContent = 'Habitat updated!';
                setTimeout(()=>shopMsg.textContent='',1800);
              } else if(btnText.indexOf('Buy food') === 0){
                triggerFoodFeeding();
              } else if(btnText.indexOf('Give drink') === 0){
                triggerDrinking();
              } else if(btnText.indexOf('Play') === 0){
                triggerPlaying();
              } else {
                shopMsg.textContent = `You used ${cost} ZP!`;
                setTimeout(()=>shopMsg.textContent='',1800);
              }
            } else {
              showInsufficientZpModal();
            }
          };
        });
      }

      function showEarned(successEl, amount){
        const el = successEl.querySelector('.coins-earned');
        if(el){ el.textContent = `+${amount} ZP`; el.style.display = 'block'; }
      }

      // play a short reward sound (WebAudio) when coins are awarded
      function playRewardSound(){
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const g = ctx.createGain();
          g.connect(ctx.destination);
          g.gain.setValueAtTime(0.0001, now);
          g.gain.linearRampToValueAtTime(0.16, now + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

          // Drum hit
          const drum = ctx.createOscillator();
          const drumGain = ctx.createGain();
          drum.type = 'sine';
          drum.frequency.setValueAtTime(130, now);
          drum.frequency.exponentialRampToValueAtTime(70, now + 0.14);
          drumGain.gain.setValueAtTime(0.9, now);
          drumGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
          drum.connect(drumGain);
          drumGain.connect(g);
          drum.start(now);
          drum.stop(now + 0.2);

          // Cheer (short filtered noise burst)
          const bufferSize = ctx.sampleRate * 0.3;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for(let i = 0; i < bufferSize; i++){ data[i] = (Math.random() * 2 - 1) * 0.6; }
          const noise = ctx.createBufferSource();
          noise.buffer = buffer;
          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(1200, now + 0.02);
          filter.Q.setValueAtTime(0.7, now + 0.02);
          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.0, now);
          noiseGain.gain.linearRampToValueAtTime(0.18, now + 0.03);
          noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
          noise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(g);
          noise.start(now + 0.02);
          noise.stop(now + 0.34);

          // Bright sparkle tones
          const notes = [659.25, 783.99, 987.77, 1318.5];
          let t = now + 0.06;
          for(let i = 0; i < notes.length; i++){
            const o = ctx.createOscillator();
            const og = ctx.createGain();
            o.type = 'triangle';
            o.frequency.setValueAtTime(notes[i], t);
            og.gain.setValueAtTime(0.0001, t);
            og.gain.linearRampToValueAtTime(0.18, t + 0.02);
            og.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
            o.connect(og);
            og.connect(g);
            o.start(t);
            o.stop(t + 0.18);
            t += 0.1;
          }

          setTimeout(()=>{ try{ if(ctx && ctx.close) ctx.close(); }catch(e){} }, 1200);
        }catch(e){}
      }

      function playCheeringSound(){
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const duration = 2.5;
          
          // Create multiple voices cheering at different pitches
          const voices = 8;
          for(let v = 0; v < voices; v++){
            const startTime = now + (v * 0.08);
            const baseFreq = 400 + (v * 50) + Math.random() * 80;
            
            // Each voice does multiple cheers
            const cheers = 4;
            for(let c = 0; c < cheers; c++){
              const t = startTime + (c * 0.6);
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              
              osc.type = c % 2 === 0 ? 'sine' : 'triangle';
              osc.frequency.setValueAtTime(baseFreq, t);
              osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, t + 0.08);
              osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, t + 0.18);
              
              gain.gain.setValueAtTime(0.0, t);
              gain.gain.linearRampToValueAtTime(0.08, t + 0.02);
              gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
              
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(t);
              osc.stop(t + 0.25);
            }
          }
          
          setTimeout(()=>{ try{ if(ctx && ctx.close) ctx.close(); }catch(e){} }, (duration * 1000) + 500);
        }catch(e){}
      }

      // Quest rewards are queued by completeActiveQuestSegment and paid by the
      // celebration itself. This avoids paying the quest reward and then paying
      // the default celebration reward a second time.
      let pendingQuestCelebrationReward = null;
      function showCelebration(onComplete, zpAmount, customMessage){
        // Consume a queued quest reward before checking the overlay. If the
        // overlay is unavailable, or this celebration supplies its own amount,
        // a stale quest reward must never leak into a later celebration.
        const queuedQuestReward = pendingQuestCelebrationReward;
        pendingQuestCelebrationReward = null;

        // A queued zero means the child replayed an already-completed segment
        // (or the completion context was invalid). Finish the navigation callback
        // without showing a misleading +0 ZP celebration or awarding default coins.
        if(queuedQuestReward === 0){
          if(typeof onComplete === 'function') onComplete();
          return;
        }
        if(!celebrationOverlay || !celebrationMessage){
          // The visual celebration is optional; a completed quest reward is not.
          // Pay a queued positive quest reward even when the overlay markup is
          // missing, then continue navigation without trying to render effects.
          if(typeof queuedQuestReward === 'number' && queuedQuestReward > 0){
            awardCoins(queuedQuestReward);
          }
          if(typeof onComplete === 'function') onComplete();
          return;
        }
        
        let amount;
        if(typeof zpAmount === 'number'){
          amount = zpAmount;
        } else if(queuedQuestReward !== null){
          amount = queuedQuestReward;
        } else {
          amount = 10;
        }
        
        // Random message
        const randomMessage = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
        celebrationMessage.textContent = customMessage || randomMessage;
        celebrationCoins.textContent = `+${amount} ZP`;
        scheduleBubbleTextFit();
        
        // Show overlay
        celebrationOverlay.style.display = 'flex';
        requestAnimationFrame(updateZenzyAppearancePosition);
        
        // Award coins
        awardCoins(amount);
        
        // Trigger all celebration effects
        createConfetti(2);
        createBackgroundBurst();
        createCoinShower();
        createEmojiBurst();
        
        // Play cheering sound
        playCheeringSound();
        
        // Vibrate
        try{ if(navigator && navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]); }catch(e){}
        
        // Auto-dismiss after 5 seconds
        setTimeout(function(){
          celebrationOverlay.style.display = 'none';
          requestAnimationFrame(updateZenzyAppearancePosition);
          if(onComplete) onComplete();
        }, 5000);
      }

      function awardCoins(amount, successEl){
        coins += amount;
        localStorage.setItem('coins', coins);
        if(coinCountEl) coinCountEl.textContent = coins;
        if(successEl) showEarned(successEl, amount);
        updateCoinGlow();
        maybeTrackHabitatMissionProgress(amount);
        // short vibration to acknowledge coin reward on supported devices
        try{ if(navigator && navigator.vibrate) navigator.vibrate(180); }catch(e){}
        // play reward sound
        playRewardSound();
      }

      const WEEKLY_MISSION_DAY_REWARD_ZP = 100;
      const WEEKLY_MISSION_REAL_LIFE_REWARD_ZP = 40;
      const WEEKLY_MISSION_WEEK_REWARD_ZP = 1000;
      const WEEKLY_MISSION_FLASH_COOLDOWN_MS = 24 * 60 * 60 * 1000;
      let selectedWeeklyMissionDayIndex = 0;

      const WEEKLY_MISSION_TEMPLATES = [
        {
          id: 'communication',
          title: 'Communicate your emotions',
          firstDayOpening: 'This week your mission is to communicate your emotions.',
          passiveAggressiveAssertive: {
            passive: '"It is fine..." (but feeling hurt and not saying it)',
            aggressive: '"Give it back now!" with shouting or snatching',
            assertive: '"I feel upset because I want a turn. Please can I have it back?"'
          },
          followUps: [
            'How did you communicate your feelings today? What words helped?',
            'What happened in your body when you used calm and clear words?',
            'Who did you talk to today and how did they respond?',
            'What is one sentence you can use next time you feel upset?',
            'Think of a tricky moment. How could assertive words help?',
            'What are you proud of from this week of communication practice?'
          ],
          scriptScenario: 'Kim has lost her tablet. She could say: "I feel worried because I have lost my tablet. Could you help me find it please?"'
        },
        {
          id: 'self-regulation',
          title: 'Calm your body and mind',
          firstDayOpening: 'This week your mission is to notice your body signals and calm your body.',
          followUps: [
            'What body clue told you that you were getting stressed today?',
            'Which calm strategy worked best for you today?',
            'How did your breathing change before and after calming down?',
            'When did you pause before reacting today?',
            'Who can remind you to use your calm strategy?',
            'What calm skill are you most proud of this week?'
          ],
          scriptScenario: 'Luca feels overwhelmed in class. Luca could say: "I feel overwhelmed because it is noisy. Could I have one quiet minute please?"'
        },
        {
          id: 'friendship',
          title: 'Build kind communication',
          firstDayOpening: 'This week your mission is to build healthy friendships with kind and clear words.',
          followUps: [
            'What kind words did you use with a friend today?',
            'How did you solve a small disagreement today?',
            'What helped you listen carefully to someone else?',
            'How did you ask for what you needed in a respectful way?',
            'What did you do to include someone today?',
            'What friendship skill will you keep using next week?'
          ],
          scriptScenario: 'Mia feels left out. Mia could say: "I feel left out because I want to join in. Please could I play with you?"'
        }
      ];

      function getIsoWeekKey(dateObj) {
        const d = new Date(dateObj.getTime());
        d.setHours(0, 0, 0, 0);
        const dayNum = (d.getDay() + 6) % 7;
        d.setDate(d.getDate() - dayNum + 3);
        const firstThursday = new Date(d.getFullYear(), 0, 4);
        const firstThursdayDayNum = (firstThursday.getDay() + 6) % 7;
        firstThursday.setDate(firstThursday.getDate() - firstThursdayDayNum + 3);
        const weekNo = 1 + Math.round((d - firstThursday) / 604800000);
        return String(d.getFullYear()) + '-W' + String(weekNo).padStart(2, '0');
      }

      function createDefaultWeeklyMissionState() {
        return {
          cycleIndex: 0,
          weekKey: getIsoWeekKey(new Date()),
          daysCompleted: [false, false, false, false, false, false, false],
          realLifeAwarded: [false, false, false, false, false, false, false],
          dayOneQuizPassed: false,
          lastActivityAt: 0
        };
      }

      function getWeeklyMissionState() {
        let state = createDefaultWeeklyMissionState();
        try {
          const saved = JSON.parse(localStorage.getItem('weeklyMissionState') || '{}');
          if (saved && typeof saved === 'object') {
            state = {
              cycleIndex: parseInt(saved.cycleIndex, 10) || 0,
              weekKey: typeof saved.weekKey === 'string' ? saved.weekKey : getIsoWeekKey(new Date()),
              daysCompleted: Array.isArray(saved.daysCompleted) ? saved.daysCompleted.slice(0, 7) : state.daysCompleted,
              realLifeAwarded: Array.isArray(saved.realLifeAwarded) ? saved.realLifeAwarded.slice(0, 7) : state.realLifeAwarded,
              dayOneQuizPassed: saved.dayOneQuizPassed === true,
              lastActivityAt: Number.isFinite(Number(saved.lastActivityAt)) ? Number(saved.lastActivityAt) : 0
            };
          }
        } catch (err) {
          state = createDefaultWeeklyMissionState();
        }

        while (state.daysCompleted.length < 7) state.daysCompleted.push(false);
        while (state.realLifeAwarded.length < 7) state.realLifeAwarded.push(false);

        const currentWeekKey = getIsoWeekKey(new Date());
        if (state.weekKey !== currentWeekKey) {
          state.cycleIndex += 1;
          state.weekKey = currentWeekKey;
          state.daysCompleted = [false, false, false, false, false, false, false];
          state.realLifeAwarded = [false, false, false, false, false, false, false];
          state.dayOneQuizPassed = false;
          saveWeeklyMissionState(state);
        }

        return state;
      }

      function saveWeeklyMissionState(state) {
        localStorage.setItem('weeklyMissionState', JSON.stringify(state));
      }

      function getWeeklyMissionTemplate(state) {
        const safeIndex = ((state.cycleIndex % WEEKLY_MISSION_TEMPLATES.length) + WEEKLY_MISSION_TEMPLATES.length) % WEEKLY_MISSION_TEMPLATES.length;
        return WEEKLY_MISSION_TEMPLATES[safeIndex];
      }

      function getFirstIncompleteWeeklyMissionDay(state) {
        const idx = state.daysCompleted.findIndex(function(done) { return !done; });
        return idx === -1 ? 6 : idx;
      }

      function isWeeklyMissionDayUnlocked(state, dayIndex) {
        if (state.daysCompleted[dayIndex]) return true;
        const firstIncomplete = getFirstIncompleteWeeklyMissionDay(state);
        return dayIndex <= firstIncomplete;
      }

      function hasWeeklyMissionRecentActivity(state) {
        const lastActivityAt = Number(state && state.lastActivityAt);
        if (!Number.isFinite(lastActivityAt) || lastActivityAt <= 0) return false;
        return (Date.now() - lastActivityAt) < WEEKLY_MISSION_FLASH_COOLDOWN_MS;
      }

      function isWeeklyMissionUnlockedByZenzyRoom() {
        const adopted = zenzyStage === 'adopted';
        const hasBuiltRoom = isZenzyHomeUnlocked();
        const hasDecoratedRoom = localStorage.getItem('zenzyDecorateHintActive') === 'false';
        return adopted && hasBuiltRoom && hasDecoratedRoom;
      }

      function rotateToNextWeeklyMission(state) {
        state.cycleIndex += 1;
        state.daysCompleted = [false, false, false, false, false, false, false];
        state.realLifeAwarded = [false, false, false, false, false, false, false];
        state.dayOneQuizPassed = false;
        state.weekKey = getIsoWeekKey(new Date());
      }

      function openWeeklyMissionPage() {
        if (!weeklyMissionScreen || !isWeeklyMissionUnlockedByZenzyRoom()) return;
        showScreen(weeklyMissionScreen);
        renderWeeklyMission();
      }

      function closeWeeklyMissionPage() {
        showScreen(petShop);
      }

      function showWeeklyMissionCompletionCelebration(onContinue) {
        if (!weeklyMissionCelebration) {
          if (typeof onContinue === 'function') onContinue();
          return;
        }
        weeklyMissionCelebration.style.display = 'flex';
        weeklyMissionCelebration.setAttribute('aria-hidden', 'false');

        // Fire confetti, coin shower, and cheering sound
        createConfetti(2);
        createCoinShower();
        playCheeringSound();

        var autoCloseTimer = null;
        const closeCelebration = function() {
          if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null; }
          weeklyMissionCelebration.style.display = 'none';
          weeklyMissionCelebration.setAttribute('aria-hidden', 'true');
          if (typeof onContinue === 'function') onContinue();
        };

        // Auto-close after 6 seconds
        autoCloseTimer = setTimeout(closeCelebration, 6000);

        if (weeklyMissionCelebrationContinueBtn) {
          weeklyMissionCelebrationContinueBtn.onclick = closeCelebration;
        }
      }

      function updateWeeklyMissionDots(state) {
        if (!weeklyMissionDayDots || !weeklyMissionDayDots.length) return;
        weeklyMissionDayDots.forEach(function(dot, index) {
          const unlocked = isWeeklyMissionDayUnlocked(state, index);
          const completed = !!state.daysCompleted[index];
          dot.classList.toggle('completed', completed);
          dot.classList.toggle('active', index === selectedWeeklyMissionDayIndex);
          dot.disabled = !unlocked;
          dot.setAttribute('aria-pressed', index === selectedWeeklyMissionDayIndex ? 'true' : 'false');
        });
      }

      function buildWeeklyMissionDayOneContent(state, template) {
        const quizPassedText = state.dayOneQuizPassed ? 'Quiz complete. Great thinking.' : 'Complete the quiz to finish Day 1.';
        return '' +
          '<div class="weekly-mission-day-title">Day 1</div>' +
          '<div class="weekly-mission-body">' +
            '<p class="intro-bold"><strong>' + template.firstDayOpening + '</strong></p>' +
            '<div class="weekly-mission-example-box">' +
              '<p><strong>Passive:</strong> ' + template.passiveAggressiveAssertive.passive + '</p>' +
              '<p><strong>Aggressive:</strong> ' + template.passiveAggressiveAssertive.aggressive + '</p>' +
              '<p><strong>Assertive:</strong> ' + template.passiveAggressiveAssertive.assertive + '</p>' +
            '</div>' +
            '<div class="weekly-mission-quiz">' +
              '<h3>Quick quiz</h3>' +
              '<div class="weekly-mission-question">' +
                '<p><strong>1.</strong> Jenny snatches a toy from her brother. How should she respond?</p>' +
                '<label><input type="radio" name="weeklyMissionQ1" value="a"> A. Tell him to give it back and snatch it off him.</label>' +
                '<label><input type="radio" name="weeklyMissionQ1" value="b"> B. Let him play with it even though she wants it.</label>' +
                '<label><input type="radio" name="weeklyMissionQ1" value="c"> C. "I feel upset you are playing with my toy. I would like to play with it please."</label>' +
              '</div>' +
              '<div class="weekly-mission-question">' +
                '<p><strong>2.</strong> Noah feels angry because someone cut in line. Best response?</p>' +
                '<label><input type="radio" name="weeklyMissionQ2" value="a"> A. Push in front of them.</label>' +
                '<label><input type="radio" name="weeklyMissionQ2" value="b"> B. Stay quiet and say nothing.</label>' +
                '<label><input type="radio" name="weeklyMissionQ2" value="c"> C. "I feel frustrated when people cut in. Please wait your turn."</label>' +
              '</div>' +
              '<div class="weekly-mission-question">' +
                '<p><strong>3.</strong> Ava wants help but feels worried. Which sentence is assertive?</p>' +
                '<label><input type="radio" name="weeklyMissionQ3" value="a"> A. "You never help me!"</label>' +
                '<label><input type="radio" name="weeklyMissionQ3" value="b"> B. "It does not matter."</label>' +
                '<label><input type="radio" name="weeklyMissionQ3" value="c"> C. "I feel worried because this is hard. Please can you help me?"</label>' +
              '</div>' +
              '<button type="button" class="submit-button" id="weeklyMissionCheckQuizBtn">Check quiz</button>' +
              '<div class="weekly-mission-note" id="weeklyMissionQuizResult">' + quizPassedText + '</div>' +
            '</div>' +
            '<div class="weekly-mission-script-box">' +
              '<h3>Use this emotion script</h3>' +
              '<p>' + template.scriptScenario + '</p>' +
              '<p><strong>Give it a try!</strong> Think of something you would like to say to a friend or family member.</p>' +
              '<div class="weekly-mission-script-line">I feel <input type="text" id="weeklyMissionFeelInput" placeholder="..."> Because <input type="text" id="weeklyMissionBecauseInput" placeholder="..."></div>' +
              '<div class="weekly-mission-script-line">Please could you <input type="text" id="weeklyMissionPleaseInput" placeholder="..."></div>' +
              '<p><strong>Great job! Come back tomorrow to tell me how it went!</strong></p>' +
            '</div>' +
          '</div>';
      }

      function buildWeeklyMissionFollowUpContent(state, template, dayIndex) {
        const prompt = template.followUps[Math.max(0, dayIndex - 1)] || 'How did you use your communication skills today?';
        return '' +
          '<div class="weekly-mission-day-title">Day ' + (dayIndex + 1) + '</div>' +
          '<div class="weekly-mission-body">' +
            '<p><strong>Follow-up challenge:</strong> ' + prompt + '</p>' +
            '<div class="weekly-mission-reflect-box">' +
              '<h3>Reflect and apply</h3>' +
              '<p>Write one thing that happened today and one sentence you used (or could use) to communicate clearly.</p>' +
              '<textarea id="weeklyMissionReflectionInput" rows="4" style="width:100%;border:1px solid #9ccaca;border-radius:8px;padding:8px;box-sizing:border-box;font-size:12px;" placeholder="Today I felt... I said..."></textarea>' +
            '</div>' +
            '<p>Use your script in real life and tell Zenzy how it went to earn extra ZP.</p>' +
          '</div>';
      }

      function renderWeeklyMissionDay(state, template) {
        if (!weeklyMissionDayContent) return;
        if (selectedWeeklyMissionDayIndex === 0) {
          weeklyMissionDayContent.innerHTML = buildWeeklyMissionDayOneContent(state, template);
        } else {
          weeklyMissionDayContent.innerHTML = buildWeeklyMissionFollowUpContent(state, template, selectedWeeklyMissionDayIndex);
        }

        const realLifeDone = !!state.realLifeAwarded[selectedWeeklyMissionDayIndex];
        const dayDone = !!state.daysCompleted[selectedWeeklyMissionDayIndex];
        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'weekly-mission-actions';

        const realLifeBtn = document.createElement('button');
        realLifeBtn.type = 'button';
        realLifeBtn.className = 'submit-button';
        realLifeBtn.id = 'weeklyMissionRealLifeBtn';
        realLifeBtn.textContent = realLifeDone
          ? 'Real-life script reward claimed'
          : 'I used my script in real life (+' + WEEKLY_MISSION_REAL_LIFE_REWARD_ZP + ' ZP)';
        realLifeBtn.disabled = realLifeDone;
        actionsWrap.appendChild(realLifeBtn);

        const completeDayBtn = document.createElement('button');
        completeDayBtn.type = 'button';
        completeDayBtn.className = 'submit-button';
        completeDayBtn.id = 'weeklyMissionCompleteDayBtn';
        completeDayBtn.textContent = dayDone
          ? 'Day complete'
          : 'Complete Day ' + (selectedWeeklyMissionDayIndex + 1) + ' (+' + WEEKLY_MISSION_DAY_REWARD_ZP + ' ZP)';
        completeDayBtn.disabled = dayDone;
        actionsWrap.appendChild(completeDayBtn);

        const status = document.createElement('div');
        status.className = 'weekly-mission-note';
        status.id = 'weeklyMissionDayStatus';
        status.textContent = dayDone
          ? 'Great work. This day is complete.'
          : 'Complete this day to fill the circle.';

        weeklyMissionDayContent.appendChild(actionsWrap);
        weeklyMissionDayContent.appendChild(status);

        const quizBtn = document.getElementById('weeklyMissionCheckQuizBtn');
        if (quizBtn) {
          quizBtn.onclick = function() {
            const q1 = document.querySelector('input[name="weeklyMissionQ1"]:checked');
            const q2 = document.querySelector('input[name="weeklyMissionQ2"]:checked');
            const q3 = document.querySelector('input[name="weeklyMissionQ3"]:checked');
            const resultEl = document.getElementById('weeklyMissionQuizResult');
            if (!q1 || !q2 || !q3) {
              if (resultEl) resultEl.textContent = 'Please answer all three questions first.';
              return;
            }
            const isCorrect = q1.value === 'c' && q2.value === 'c' && q3.value === 'c';
            if (isCorrect) {
              const newState = getWeeklyMissionState();
              newState.dayOneQuizPassed = true;
              saveWeeklyMissionState(newState);
              if (resultEl) resultEl.textContent = 'Excellent. You used assertive communication.';
            } else {
              if (resultEl) resultEl.textContent = 'Try again. Look for calm, clear, respectful responses.';
            }
          };
        }

        const realLifeBtnEl = document.getElementById('weeklyMissionRealLifeBtn');
        if (realLifeBtnEl) {
          realLifeBtnEl.onclick = function() {
            const newState = getWeeklyMissionState();
            const dayIndex = selectedWeeklyMissionDayIndex;
            if (newState.realLifeAwarded[dayIndex]) return;
            newState.realLifeAwarded[dayIndex] = true;
            newState.lastActivityAt = Date.now();
            saveWeeklyMissionState(newState);
            awardCoins(WEEKLY_MISSION_REAL_LIFE_REWARD_ZP);
            setShopMessage('Real-life communication reward earned!');
            updateWeeklyMissionButtonState();
            renderWeeklyMission();
          };
        }

        const completeDayBtnEl = document.getElementById('weeklyMissionCompleteDayBtn');
        if (completeDayBtnEl) {
          completeDayBtnEl.onclick = function() {
            const newState = getWeeklyMissionState();
            const dayIndex = selectedWeeklyMissionDayIndex;
            if (newState.daysCompleted[dayIndex]) return;
            if (dayIndex === 0 && !newState.dayOneQuizPassed) {
              const statusEl = document.getElementById('weeklyMissionDayStatus');
              if (statusEl) statusEl.textContent = 'Please complete the Day 1 quiz first.';
              return;
            }

            newState.daysCompleted[dayIndex] = true;
            newState.lastActivityAt = Date.now();
            saveWeeklyMissionState(newState);
            awardCoins(WEEKLY_MISSION_DAY_REWARD_ZP);

            const allDone = newState.daysCompleted.every(function(done) { return done; });
            if (allDone) {
              awardCoins(WEEKLY_MISSION_WEEK_REWARD_ZP);
              showWeeklyMissionCompletionCelebration(function() {
                rotateToNextWeeklyMission(newState);
                saveWeeklyMissionState(newState);
                selectedWeeklyMissionDayIndex = 0;
                setShopMessage('Weekly mission complete! +1000 ZP and a new mission is ready.');
                updateWeeklyMissionButtonState();
                renderWeeklyMission();
              });
            } else {
              selectedWeeklyMissionDayIndex = Math.min(6, dayIndex + 1);
              setShopMessage('Day complete! New dot unlocked.');
              updateWeeklyMissionButtonState();
              renderWeeklyMission();
            }
          };
        }
      }

      function renderWeeklyMission() {
        const state = getWeeklyMissionState();
        const template = getWeeklyMissionTemplate(state);

        const firstIncomplete = getFirstIncompleteWeeklyMissionDay(state);
        if (!isWeeklyMissionDayUnlocked(state, selectedWeeklyMissionDayIndex)) {
          selectedWeeklyMissionDayIndex = firstIncomplete;
        }

        if (weeklyMissionHeading) weeklyMissionHeading.textContent = 'Weekly Mission';
        if (weeklyMissionWeekTitle) weeklyMissionWeekTitle.textContent = 'This week: ' + template.title;
        if (weeklyMissionProgressText) {
          const doneCount = state.daysCompleted.filter(function(done) { return done; }).length;
          weeklyMissionProgressText.textContent = doneCount + '/7 days complete';
        }

        updateWeeklyMissionDots(state);
        renderWeeklyMissionDay(state, template);
      }

      function updateWeeklyMissionButtonState() {
        if (!weeklyMissionBtn) return;
        const unlockedByRoom = isWeeklyMissionUnlockedByZenzyRoom();
        if (!unlockedByRoom) {
          weeklyMissionBtn.style.display = 'none';
          weeklyMissionBtn.classList.add('disabled');
          weeklyMissionBtn.setAttribute('disabled', 'disabled');
          weeklyMissionBtn.classList.add('no-flash');
          return;
        }

        weeklyMissionBtn.style.display = '';
        weeklyMissionBtn.classList.remove('disabled');
        weeklyMissionBtn.removeAttribute('disabled');

        const state = getWeeklyMissionState();
        const isOnCooldown = hasWeeklyMissionRecentActivity(state);
        weeklyMissionBtn.classList.toggle('no-flash', isOnCooldown);
      }

      function setHabitatMissionPromptState(active, shown, earnedZp){
        habitatMissionPromptActive = !!active;
        habitatMissionPromptShown = !!shown;
        habitatMissionEarnedZp = Math.max(0, parseInt(earnedZp, 10) || 0);
        localStorage.setItem('zenzyMissionHabitatPromptActive', habitatMissionPromptActive ? 'true' : 'false');
        localStorage.setItem('zenzyMissionHabitatPromptShown', habitatMissionPromptShown ? 'true' : 'false');
        localStorage.setItem('zenzyMissionHabitatEarnedZp', String(habitatMissionEarnedZp));
      }

      function beginHabitatMissionPromptFlow(){
        if (isZenzyHomeUnlocked()) return;
        setHabitatMissionPromptState(true, false, 0);
      }

      function maybeTrackHabitatMissionProgress(amount){
        if (!habitatMissionPromptActive || habitatMissionPromptShown || isZenzyHomeUnlocked()) return;
        const earned = parseInt(amount, 10) || 0;
        if (earned <= 0) return;
        habitatMissionEarnedZp += earned;
        localStorage.setItem('zenzyMissionHabitatEarnedZp', String(habitatMissionEarnedZp));
        if (habitatMissionEarnedZp < HABITAT_MISSION_TARGET_ZP) return;
        habitatMissionPromptShown = true;
        localStorage.setItem('zenzyMissionHabitatPromptShown', 'true');
        if (zenzyMissionHabitatModal) {
          showModal(zenzyMissionHabitatModal);
        }
      }

      function updateCoinGlow(){
        const currentCompleted = document.querySelectorAll('.star-segment.completed').length;
        const starsDone = currentCompleted > 0 && currentCompleted % 5 === 0;
        if(coinsRows && coinsRows.length){
          coinsRows.forEach(function(row){ row.classList.toggle('glow', starsDone); });
        }
      }

      function playChompingSound(){
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const duration = 0.9;
          const chomps = 8;
          const chompInterval = duration / chomps;
          for(let c = 0; c < chomps; c++){
            const t = now + (c * chompInterval);
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(220 + Math.random() * 80, t);
            osc.frequency.exponentialRampToValueAtTime(100, t + 0.1);
            gain.gain.setValueAtTime(0.15, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.2);
          }
          setTimeout(()=>{ try{ if(ctx && ctx.close) ctx.close(); }catch(e){} }, (duration * 1000) + 500);
        }catch(e){}
      }

      function playSlurpingSound(){
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const duration = 0.9;
          const slurps = 6;
          const slurpInterval = duration / slurps;
          for(let s = 0; s < slurps; s++){
            const t = now + (s * slurpInterval);
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450 + Math.random() * 120, t);
            osc.frequency.exponentialRampToValueAtTime(200, t + 0.25);
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.35);
          }
          setTimeout(()=>{ try{ if(ctx && ctx.close) ctx.close(); }catch(e){} }, (duration * 1000) + 500);
        }catch(e){}
      }

      function playLaughingSound(){
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const duration = 10;
          const laughs = 12;
          const laughInterval = duration / laughs;
          for(let l = 0; l < laughs; l++){
            const t = now + (l * laughInterval);
            const freq = 600 + (l % 3) * 250 + Math.random() * 100;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = l % 2 === 0 ? 'sine' : 'square';
            osc.frequency.setValueAtTime(freq, t);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.12);
            gain.gain.setValueAtTime(0.0, t);
            gain.gain.linearRampToValueAtTime(0.14, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.16);
          }
          setTimeout(()=>{ try{ if(ctx && ctx.close) ctx.close(); }catch(e){} }, (duration * 1000) + 500);
        }catch(e){}
      }

      function triggerFoodFeeding(){
        if(!foodFeedingModal) return;
        feedingMsg.textContent = '';
        setCareModalZenzyImage(foodModalZenzyImage, getZenzyEvolvedStateImage('eating', 'New%20zenzy.png'), 'Zenzy eating');
        showModal(foodFeedingModal);
        playChompingSound();
        
        // Update health stats
        updateHealthStat('hunger', 30);
        updateHealthStat('emotional', 10);
        
        // Show eating Zenzy image
        if(zenzyAvatar){
          const evolvedSet = getEvolvedSet();
          if(evolvedSet && evolvedSet['eating']){
            zenzyAvatar.src = evolvedSet['eating'];
          } else {
            zenzyAvatar.src = 'New%20zenzy.png';
          }
        }
        
        setTimeout(()=>{
          feedingMsg.textContent = 'Thanks, I needed that!';
        }, 2500);
        setTimeout(()=>{
          hideModal(foodFeedingModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function triggerDrinking(){
        if(!drinkingModal) return;
        drinkingMsg.textContent = '';
        setCareModalZenzyImage(drinkingModalZenzyImage, getZenzyEvolvedStateImage('drinking', 'New%20zenzy.png'), 'Zenzy drinking');
        showModal(drinkingModal);
        playSlurpingSound();
        
        // Update health stats
        updateHealthStat('thirst', 30);
        updateHealthStat('emotional', 5);
        
        // Show drinking Zenzy image
        if(zenzyAvatar){
          const evolvedSet = getEvolvedSet();
          if(evolvedSet && evolvedSet['drinking']){
            zenzyAvatar.src = evolvedSet['drinking'];
          } else {
            zenzyAvatar.src = 'New%20zenzy.png';
          }
        }
        
        setTimeout(()=>{
          drinkingMsg.textContent = 'Ahh, so refreshing!';
        }, 2500);
        setTimeout(()=>{
          hideModal(drinkingModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function triggerPlaying(){
        if(!playingModal) return;
        playingMsg.textContent = '';
        setCareModalZenzyImage(playingModalZenzyImage, getZenzyEvolvedStateImage('playing', 'New%20zenzy.png'), 'Zenzy playing');
        showModal(playingModal);
        playLaughingSound();
        
        // Update health stats
        updateHealthStat('activity', PLAY_ACTIVITY_BOOST);
        updateHealthStat('stimulation', 25);
        updateHealthStat('emotional', 15);
        updateHealthStat('social', PLAY_SOCIAL_BOOST);
        
        // Show playing Zenzy image
        if(zenzyAvatar){
          zenzyAvatar.src = getZenzyEvolvedStateImage('playing', 'New%20zenzy.png');
        }
        
        setTimeout(()=>{
          playingMsg.textContent = 'That was so much fun!';
        }, 2500);
        setTimeout(()=>{
          hideModal(playingModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function triggerArt(){
        if(!artModal) return;
        artMsg.textContent = '';
        setCareModalZenzyImage(artModalZenzyImage, getZenzyEvolvedStateImage('art', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png')), 'Zenzy doing art');
        showModal(artModal);
        
        // Update health stats
        updateHealthStat('stimulation', 20);
        updateHealthStat('emotional', 15);
        updateHealthStat('activity', 10);
        
        // Show art Zenzy image
        if(zenzyAvatar){
          zenzyAvatar.src = getZenzyEvolvedStateImage('art', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png'));
        }
        
        setTimeout(()=>{
          artMsg.textContent = 'Look what we made!';
        }, 2500);
        setTimeout(()=>{
          hideModal(artModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function triggerReading(){
        if(!readingModal) return;
        readingMsg.textContent = '';
        setCareModalZenzyImage(readingModalZenzyImage, getZenzyEvolvedStateImage('reading', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png')), 'Zenzy reading');
        showModal(readingModal);
        
        // Update health stats
        updateHealthStat('emotional', 20);
        updateHealthStat('tired', 5);
        updateHealthStat('stimulation', 10);
        
        // Show reading Zenzy image
        if(zenzyAvatar){
          zenzyAvatar.src = getZenzyEvolvedStateImage('reading', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png'));
        }
        
        setTimeout(()=>{
          readingMsg.textContent = 'Great story time!';
        }, 2500);
        setTimeout(()=>{
          hideModal(readingModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function triggerPC(){
        if(!pcModal) return;
        pcMsg.textContent = '';
        setCareModalZenzyImage(pcModalZenzyImage, getZenzyEvolvedStateImage('pc', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png')), 'Zenzy playing on the PC');
        showModal(pcModal);
        
        // Update health stats
        updateHealthStat('stimulation', 25);
        updateHealthStat('emotional', 15);
        updateHealthStat('activity', PLAY_PC_ACTIVITY_BOOST);
        updateHealthStat('social', PLAY_PC_SOCIAL_BOOST);
        
        // Show PC Zenzy image
        if(zenzyAvatar){
          zenzyAvatar.src = getZenzyEvolvedStateImage('pc', getZenzyEvolvedStateImage('normal', 'New%20zenzy.png'));
        }
        
        setTimeout(()=>{
          pcMsg.textContent = 'Level up!';
        }, 2500);
        setTimeout(()=>{
          hideModal(pcModal);
          lockZenzyEmotionState('normal', PLAY_ACTION_LOCK_DURATION_MS, PLAY_ACTION_HAPPY_PROMPT);
        }, 4500);
      }

      function showDailyComplete(){
        showCelebration(function(){
          if(zenzyStage === 'helping' && completedCount >= 5){
            setZenzyStage('ready_collect');
            readyCollectTapCount = 0;
            showScreen(petShop);
            syncZenzyShopIntroState();
          } else {
            homeScreen.style.display = 'block';
          }
        }, 100, "Well done! You've completed your daily check in! I hope you come back tomorrow!");
      }

      function startZenzyShopHatchingSequence(){
        if (archiveEggAndEvolveFeatures) return;
        setZenzyStage('hatching');
        if(zenzyHatchingText) zenzyHatchingText.textContent = 'The zenzy egg is hatching!';
        if(zenzyHatchingImageModal){
          zenzyHatchingImageModal.src = 'Images/Other%20image/Egg.png';
        }
        if(zenzyHatchingModal) showModal(zenzyHatchingModal);

        setTimeout(function(){
          if(zenzyHatchingImageModal){
            zenzyHatchingImageModal.src = 'Images/Other%20image/Cracking%20egg%201.png';
          }
        }, 1200);

        setTimeout(function(){
          if(zenzyHatchingImageModal){
            zenzyHatchingImageModal.src = 'New%20zenzy.png';
          }
        }, 2500);

        setTimeout(function(){
          if(zenzyHatchingImageModal){
            zenzyHatchingImageModal.src = 'New%20zenzy.png';
          }
        }, 3800);

        setTimeout(function(){
          if(zenzyHatchingModal) hideModal(zenzyHatchingModal);
          adjustInventoryCounts({ eggDelta: -1, zenzyDelta: 1 });

          setZenzyStage('adopted');
          localStorage.setItem('zenzySpeechOverride', HATCHED_GREETING_PROMPT);
          localStorage.setItem('zenzyMood', 'normal');
          localStorage.setItem('zenzyEmotionId', 'normal');
          if(zenzyAvatar){
            zenzyAvatar.src = 'New%20zenzy.png';
            zenzyAvatar.alt = 'Normal Zenzy';
            zenzyAvatar.style.left = '50%';
            zenzyAvatar.style.bottom = '0px';
            zenzyAvatar.style.transform = 'translateX(-50%)';
          }
          if(zenzyEggHint) {
            zenzyEggHint.style.display = 'block';
            zenzyEggHint.style.cursor = 'pointer';
            zenzyEggHint.textContent = ZENZY_ADOPT_HINT_TEXT;
          }
          updateHomeZenzyVisibility();
          updateShopSectionsVisibility();
          updateCounts();
          enableZenzyAvatarDrag();
          updateHealthBars();
          requestAnimationFrame(updateZenzySpeechBubblePosition);

          // Adoption modal is tap-triggered (3 taps on Zenzy), not automatic.
        }, 5000);
      }

      function addBabyZenzyToStage() {
        if (!zenzyStageEl) return;
        const existingBaby = document.getElementById('zenzyBabyGift');
        if (existingBaby) existingBaby.remove();
        const babyImg = document.createElement('img');
        babyImg.id = 'zenzyBabyGift';
        babyImg.src = 'New%20zenzy.png';
        babyImg.alt = 'Baby Zenzy';
        babyImg.style.position = 'absolute';
        babyImg.style.width = '95px';
        babyImg.style.height = 'auto';
        babyImg.style.left = '34%';
        babyImg.style.bottom = '15px';
        babyImg.style.transform = 'translateX(-50%)';
        babyImg.style.zIndex = '19';
        babyImg.style.pointerEvents = 'none';
        zenzyStageEl.appendChild(babyImg);
      }

      // confetti
      function createConfetti(layers) {
        const layerCount = layers || 1;
        // vibrate on supported devices when confetti is created
        try{ if(navigator && navigator.vibrate) navigator.vibrate([120,40,120]); }catch(e){}
        for (let layer = 0; layer < layerCount; layer++) {
          for (let i = 0; i < 120; i++) {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.style.left = Math.random() * window.innerWidth + 'px';
            c.style.top = '0px';
            // vary size and color for a richer effect
            c.style.width = (6 + Math.random()*12) + 'px';
            c.style.height = c.style.width;
            c.style.backgroundColor = ['#1fa7a7','#FFD700','#FF69B4','#87CEEB','#FFA500','#ADFF2F'][Math.floor(Math.random()*6)];
            c.style.opacity = (0.75 + Math.random()*0.25).toString();
            c.style.animationDuration = (2.4 + Math.random()*1.6) + 's';
            c.style.animationDelay = (layer * 0.25) + 's';
            document.body.appendChild(c);
            setTimeout(()=>c.remove(), 3800);
          }
        }
      }

      function createEmojiBurst(){
        const emojis = ['🎉','✨','🌟','🎊','💛'];
        for(let i = 0; i < 18; i++){
          const e = document.createElement('div');
          e.className = 'celebration-emoji';
          e.textContent = emojis[Math.floor(Math.random()*emojis.length)];
          e.style.left = (window.innerWidth * 0.2 + Math.random() * window.innerWidth * 0.6) + 'px';
          e.style.top = (window.innerHeight * 0.55 + Math.random() * window.innerHeight * 0.2) + 'px';
          e.style.animationDelay = (Math.random() * 0.4) + 's';
          document.body.appendChild(e);
          setTimeout(()=>e.remove(), 2600);
        }
      }

      function createCoinShower(){
        const count = 48;
        for(let i = 0; i < count; i++){
          const c = document.createElement('div');
          c.className = 'coin-drop';
          c.textContent = '🪙';
          c.style.left = (window.innerWidth * 0.15 + Math.random() * window.innerWidth * 0.7) + 'px';
          c.style.top = (Math.random() * 40 - 60) + 'px';
          c.style.animationDelay = (Math.random() * 0.35) + 's';
          c.style.animationDuration = (2.2 + Math.random() * 0.8) + 's';
          document.body.appendChild(c);
          setTimeout(()=>c.remove(), 3200);
        }
      }

      function createBackgroundBurst(){
        const b = document.createElement('div');
        b.className = 'celebration-burst';
        document.body.appendChild(b);
        setTimeout(()=>b.remove(), 1300);
      }

      function createStickerBadge(){
        const messages = ['Awesome!', 'Great job!', 'You did it!', 'Super star!', 'High five!'];
        const b = document.createElement('div');
        b.className = 'sticker-badge';
        b.textContent = messages[Math.floor(Math.random()*messages.length)];
        document.body.appendChild(b);
        setTimeout(()=>b.remove(), 1500);
      }

      function createCelebration(){
        createConfetti(2);
        createBackgroundBurst();
        createCoinShower();
        createEmojiBurst();
        createStickerBadge();
      }

      function generateRandomPuzzle(){
        const puzzleTypes = ['maze', 'wordsearch', 'matching'];
        const randomType = puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];
        
        if(puzzleContainer){
          puzzleContainer.innerHTML = '';
          
          if(randomType === 'maze'){
            generateMaze();
          } else if(randomType === 'wordsearch'){
            generateWordsearch();
          } else if(randomType === 'matching'){
            generateMatching();
          }
        }
      }

      function generateMaze(){
        if (!puzzleContainer) return;
        const cols = 10;
        const rows = 12;
        const cellSize = 24;
        const canvasWidth = cols * cellSize + 1;
        const canvasHeight = rows * cellSize + 1;

        puzzleContainer.innerHTML = `
          <h2 style="color:#1fa7a7; margin-top:0;">🌀 Maze</h2>
          <div class="maze-scene">
            <div class="maze-sidekick"><img src="New%20zenzy.png" alt="Zenzy looking for food" /><span>Help Zenzy!</span></div>
            <div class="maze-wrap">
              <canvas id="mazeCanvas" class="maze-canvas" width="${canvasWidth}" height="${canvasHeight}"></canvas>
              <canvas id="mazeDrawCanvas" class="maze-draw-canvas" width="${canvasWidth}" height="${canvasHeight}"></canvas>
            </div>
            <div class="maze-food" role="img" aria-label="Food for Zenzy"><span>🍎</span><span>🥕</span><span>🍓</span></div>
          </div>
          <div class="maze-actions">
            <button class="submit-button" id="mazeClearBtn" style="background:#b7b7b7; margin-top:10px;">Clear Path</button>
          </div>
          <p style="color:#1fa7a7; margin-top:10px; font-size:14px;">Help Zenzy find the food! Draw from the red start to the green finish.</p>
        `;

        const mazeCanvas = document.getElementById('mazeCanvas');
        const drawCanvas = document.getElementById('mazeDrawCanvas');
        if (!mazeCanvas || !drawCanvas) return;
        const ctx = mazeCanvas.getContext('2d');
        if (!ctx) return;

        const grid = buildMazeGrid(rows, cols);
        drawMazeGrid(ctx, grid, cellSize);
        setupMazeDrawing(drawCanvas);

        const clearBtn = document.getElementById('mazeClearBtn');
        if (clearBtn) {
          clearBtn.onclick = function(){
            const drawCtx = drawCanvas.getContext('2d');
            if (drawCtx) drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
          };
        }
      }

      function buildMazeGrid(rows, cols){
        const grid = [];
        for (let r = 0; r < rows; r++) {
          const row = [];
          for (let c = 0; c < cols; c++) {
            row.push({
              row: r,
              col: c,
              visited: false,
              walls: { top: true, right: true, bottom: true, left: true }
            });
          }
          grid.push(row);
        }

        const stack = [];
        let current = grid[0][0];
        current.visited = true;
        stack.push(current);

        while (stack.length) {
          const cell = stack[stack.length - 1];
          const neighbors = [];
          const r = cell.row;
          const c = cell.col;
          if (r > 0 && !grid[r - 1][c].visited) neighbors.push(grid[r - 1][c]);
          if (c < cols - 1 && !grid[r][c + 1].visited) neighbors.push(grid[r][c + 1]);
          if (r < rows - 1 && !grid[r + 1][c].visited) neighbors.push(grid[r + 1][c]);
          if (c > 0 && !grid[r][c - 1].visited) neighbors.push(grid[r][c - 1]);

          if (neighbors.length) {
            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            removeMazeWalls(cell, next);
            next.visited = true;
            stack.push(next);
          } else {
            stack.pop();
          }
        }

        return grid;
      }

      function removeMazeWalls(a, b){
        const dx = b.col - a.col;
        const dy = b.row - a.row;
        if (dx === 1) {
          a.walls.right = false;
          b.walls.left = false;
        } else if (dx === -1) {
          a.walls.left = false;
          b.walls.right = false;
        } else if (dy === 1) {
          a.walls.bottom = false;
          b.walls.top = false;
        } else if (dy === -1) {
          a.walls.top = false;
          b.walls.bottom = false;
        }
      }

      function drawMazeGrid(ctx, grid, size){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = '#1fa7a7';
        ctx.lineWidth = 2;

        for (let r = 0; r < grid.length; r++) {
          for (let c = 0; c < grid[0].length; c++) {
            const cell = grid[r][c];
            const x = c * size;
            const y = r * size;
            if (cell.walls.top) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + size, y);
              ctx.stroke();
            }
            if (cell.walls.right) {
              ctx.beginPath();
              ctx.moveTo(x + size, y);
              ctx.lineTo(x + size, y + size);
              ctx.stroke();
            }
            if (cell.walls.bottom) {
              ctx.beginPath();
              ctx.moveTo(x, y + size);
              ctx.lineTo(x + size, y + size);
              ctx.stroke();
            }
            if (cell.walls.left) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + size);
              ctx.stroke();
            }
          }
        }

        ctx.fillStyle = '#ff6b6b';
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#51cf66';
        ctx.beginPath();
        ctx.arc((grid[0].length - 0.5) * size, (grid.length - 0.5) * size, size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      }

      function setupMazeDrawing(canvas){
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let drawing = false;
        let lastX = 0;
        let lastY = 0;

        function getPos(e){
          const rect = canvas.getBoundingClientRect();
          const scaleX = canvas.width / rect.width;
          const scaleY = canvas.height / rect.height;
          const point = e.touches ? e.touches[0] : e;
          return {
            x: (point.clientX - rect.left) * scaleX,
            y: (point.clientY - rect.top) * scaleY
          };
        }

        function start(e){
          e.preventDefault();
          drawing = true;
          const pos = getPos(e);
          lastX = pos.x;
          lastY = pos.y;
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
        }

        function move(e){
          if (!drawing) return;
          e.preventDefault();
          const pos = getPos(e);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
          lastX = pos.x;
          lastY = pos.y;
        }

        function end(){
          drawing = false;
          ctx.closePath();
        }

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', move);
        canvas.addEventListener('mouseup', end);
        canvas.addEventListener('mouseleave', end);
        canvas.addEventListener('touchstart', start, { passive: false });
        canvas.addEventListener('touchmove', move, { passive: false });
        canvas.addEventListener('touchend', end);
        canvas.addEventListener('touchcancel', end);
      }

      function generateWordsearch(){
        const words = ['CALM', 'BREATHE', 'PEACE', 'RELAX', 'HAPPY'];
        const gridSize = 8;
        const grid = Array(gridSize).fill().map(() => Array(gridSize).fill('?'));
        
        // Place some words (simplified)
        grid[0][0] = 'C'; grid[0][1] = 'A'; grid[0][2] = 'L'; grid[0][3] = 'M';
        grid[2][0] = 'B'; grid[2][1] = 'R'; grid[2][2] = 'E'; grid[2][3] = 'A'; grid[2][4] = 'T'; grid[2][5] = 'H'; grid[2][6] = 'E';
        grid[4][0] = 'P'; grid[4][1] = 'E'; grid[4][2] = 'A'; grid[4][3] = 'C'; grid[4][4] = 'E';
        
        // Fill rest with random letters
        for(let i = 0; i < gridSize; i++){
          for(let j = 0; j < gridSize; j++){
            if(grid[i][j] === '?'){
              grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
          }
        }
        
        let tableHTML = '<h2 style="color:#1fa7a7; margin-top:0;">🔎 Word Search</h2>';
        tableHTML += '<p style="color:#1fa7a7; margin-bottom:10px; font-size:14px;">Find and click the words: CALM, BREATHE, PEACE, RELAX, HAPPY</p>';
        tableHTML += '<table id="wordsearchTable" style="margin:0 auto; border-collapse:collapse;">';
        
        for(let i = 0; i < gridSize; i++){
          tableHTML += '<tr>';
          for(let j = 0; j < gridSize; j++){
            tableHTML += `<td class="wordsearch-cell" data-row="${i}" data-col="${j}" style="border:1px solid #1fa7a7; width:35px; height:35px; text-align:center; color:#1fa7a7; font-weight:bold; cursor:pointer; user-select:none; background:#fff; transition: background 0.2s;" onmouseover="this.style.background='#dff3f3';" onmouseout="if(!this.classList.contains('highlighted')) this.style.background='white';">${grid[i][j]}</td>`;
          }
          tableHTML += '</tr>';
        }
        tableHTML += '</table>';
        
        puzzleContainer.innerHTML = tableHTML;
        
        // Add click handlers for highlighting
        const cells = document.querySelectorAll('.wordsearch-cell');
        let selectedCells = [];
        
        cells.forEach(cell => {
          cell.addEventListener('click', function() {
            this.classList.toggle('highlighted');
            this.style.background = this.classList.contains('highlighted') ? '#FFD700' : 'white';
            
            // Optional: flash effect
            if(this.classList.contains('highlighted')){
              this.style.transition = 'transform 0.1s';
              this.style.transform = 'scale(1.1)';
              setTimeout(() => {
                this.style.transform = 'scale(1)';
              }, 100);
            }
          });
        });
      }

      function generateMatching(){
        const pairs = [
          { emoji: '😊', word: 'Happy' },
          { emoji: '😴', word: 'Tired' },
          { emoji: '😢', word: 'Sad' },
          { emoji: '😠', word: 'Angry' }
        ];
        
        let matchHTML = '<h2 style="color:#1fa7a7; margin-top:0;">🧩 Match the Pairs</h2>';
        matchHTML += '<p style="color:#1fa7a7; margin-bottom:10px; font-size:14px;">Match the emojis with the words!</p>';
        matchHTML += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:300px; margin:0 auto;">';
        
        // Shuffle pairs
        const shuffled = shuffledCopy(pairs);
        
        pairs.forEach((pair, i) => {
          matchHTML += `<div style="background:#e8f5f5; border:2px solid #1fa7a7; border-radius:8px; padding:10px; text-align:center; cursor:pointer; user-select:none;" onclick="this.style.background='#b7e3e3';"><span style="font-size:32px;">${pair.emoji}</span></div>`;
        });
        
        matchHTML += '</div><div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:300px; margin:16px auto 0;">';
        
        shuffled.forEach((pair, i) => {
          matchHTML += `<div style="background:#e8f5f5; border:2px solid #1fa7a7; border-radius:8px; padding:10px; text-align:center; cursor:pointer; user-select:none;" onclick="this.style.background='#b7e3e3';">${pair.word}</div>`;
        });
        
        matchHTML += '</div>';
        puzzleContainer.innerHTML = matchHTML;
      }

      // Drawing Application
      const drawingApp = {
        canvas: null,
        ctx: null,
        isDrawing: false,
        currentColor: '#4ECDC4',
        brushSize: 5,
        isEraser: false,
        lastX: 0,
        lastY: 0,
        
        init: function() {
          this.canvas = document.getElementById('drawingCanvas');
          this.ctx = this.canvas.getContext('2d');
          this.setupEventListeners();
          this.clearCanvas();
        },
        
        setupEventListeners: function() {
          const self = this;
          // Mouse events
          this.canvas.addEventListener('mousedown', (e) => self.startDrawing(e));
          this.canvas.addEventListener('mousemove', (e) => self.draw(e));
          this.canvas.addEventListener('mouseup', () => self.stopDrawing());
          this.canvas.addEventListener('mouseout', () => self.stopDrawing());
          // Touch events for mobile
          this.canvas.addEventListener('touchstart', (e) => self.startDrawing(e));
          this.canvas.addEventListener('touchmove', (e) => self.draw(e));
          this.canvas.addEventListener('touchend', () => self.stopDrawing());
          // Color buttons
          const redBtn = document.getElementById('drawColorRed');
          const blueBtn = document.getElementById('drawColorBlue');
          const greenBtn = document.getElementById('drawColorGreen');
          const yellowBtn = document.getElementById('drawColorYellow');
          const purpleBtn = document.getElementById('drawColorPurple');
          const blackBtn = document.getElementById('drawColorBlack');
          if (redBtn) redBtn.addEventListener('click', (e) => self.setColor('#FF6B6B', e.currentTarget));
          if (blueBtn) blueBtn.addEventListener('click', (e) => self.setColor('#4ECDC4', e.currentTarget));
          if (greenBtn) greenBtn.addEventListener('click', (e) => self.setColor('#95E1D3', e.currentTarget));
          if (yellowBtn) yellowBtn.addEventListener('click', (e) => self.setColor('#FFE66D', e.currentTarget));
          if (purpleBtn) purpleBtn.addEventListener('click', (e) => self.setColor('#C7B3E5', e.currentTarget));
          if (blackBtn) blackBtn.addEventListener('click', (e) => self.setColor('#333', e.currentTarget));
          // Eraser and clear buttons
          const eraserBtn = document.getElementById('drawEraserBtn');
          if (eraserBtn) eraserBtn.addEventListener('click', () => self.toggleEraser());
          const clearBtn = document.getElementById('drawClearBtn');
          if (clearBtn) clearBtn.addEventListener('click', () => self.clearCanvas());
        },
        
        getMousePos: function(e) {
          const rect = this.canvas.getBoundingClientRect();
          const scaleX = this.canvas.width / rect.width;
          const scaleY = this.canvas.height / rect.height;
          
          let x, y;
          if (e.touches) {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
          } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
          }
          return { x, y };
        },
        
        startDrawing: function(e) {
          e.preventDefault();
          this.isDrawing = true;
          const pos = this.getMousePos(e);
          this.lastX = pos.x;
          this.lastY = pos.y;
          
          if (this.isEraser) {
            this.ctx.clearRect(pos.x - this.brushSize/2, pos.y - this.brushSize/2, this.brushSize, this.brushSize);
          } else {
            this.ctx.beginPath();
            this.ctx.moveTo(pos.x, pos.y);
          }
        },
        
        draw: function(e) {
          if (!this.isDrawing) return;
          e.preventDefault();
          
          const pos = this.getMousePos(e);
          
          if (this.isEraser) {
            this.eraseStroke(this.lastX, this.lastY, pos.x, pos.y);
          } else {
            this.ctx.strokeStyle = this.currentColor;
            this.ctx.lineWidth = this.brushSize;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            this.ctx.lineTo(pos.x, pos.y);
            this.ctx.stroke();
          }
          
          this.lastX = pos.x;
          this.lastY = pos.y;
        },
        
        eraseStroke: function(x0, y0, x1, y1) {
          // Create a smooth erasing stroke between two points
          const dx = x1 - x0;
          const dy = y1 - y0;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const steps = Math.ceil(distance);
          
          for (let i = 0; i <= steps; i++) {
            const t = steps > 0 ? i / steps : 0;
            const x = x0 + dx * t;
            const y = y0 + dy * t;
            this.ctx.clearRect(x - this.brushSize/2, y - this.brushSize/2, this.brushSize, this.brushSize);
          }
        },
        
        stopDrawing: function() {
          this.isDrawing = false;
          if (!this.isEraser) {
            this.ctx.closePath();
          }
        },
        
        setColor: function(color, targetBtn) {
          this.currentColor = color;
          this.isEraser = false;
          const eraserBtn = document.getElementById('drawEraserBtn');
          if (eraserBtn) {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
          // Update color button borders
          const palette = document.querySelectorAll('#drawingScreen .color-btn');
          palette.forEach(btn => {
            btn.style.borderColor = '#999';
            btn.style.borderWidth = '2px';
          });
          if (targetBtn) {
            targetBtn.style.borderColor = '#333';
            targetBtn.style.borderWidth = '3px';
          }
        },
        
        toggleEraser: function() {
          this.isEraser = !this.isEraser;
          const eraserBtn = document.getElementById('drawEraserBtn');
          if (!eraserBtn) return;
          if (this.isEraser) {
            eraserBtn.style.background = '#FF6B6B';
            eraserBtn.style.color = 'white';
          } else {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
        },
        
        updateBrushSize: function() {
          this.brushSize = parseInt(document.getElementById('brushSize').value);
        },
        
        clearCanvas: function() {
          this.ctx.fillStyle = '#fff';
          this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          this.isEraser = false;
          const eraserBtn = document.getElementById('drawEraserBtn');
          if (eraserBtn) {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
        }
      };

      // Emotional Drawing App (for drawing feelings activities)
      const emotionalDrawingApp = {
        canvas: null,
        ctx: null,
        isDrawing: false,
        currentColor: '#4ECDC4',
        brushSize: 5,
        isEraser: false,
        lastX: 0,
        lastY: 0,
        
        init: function() {
          this.canvas = document.getElementById('emotionalDrawingCanvas');
          if (!this.canvas) return;
          this.ctx = this.canvas.getContext('2d');
          this.setupEventListeners();
          this.clearCanvas();
        },
        
        setupEventListeners: function() {
          const self = this;
          
          // Mouse events
          this.canvas.addEventListener('mousedown', (e) => self.startDrawing(e));
          this.canvas.addEventListener('mousemove', (e) => self.draw(e));
          this.canvas.addEventListener('mouseup', () => self.stopDrawing());
          this.canvas.addEventListener('mouseout', () => self.stopDrawing());
          
          // Touch events for mobile
          this.canvas.addEventListener('touchstart', (e) => self.startDrawing(e));
          this.canvas.addEventListener('touchmove', (e) => self.draw(e));
          this.canvas.addEventListener('touchend', () => self.stopDrawing());
          
          // Color buttons in emotional drawing modal
          const emotionalColorButtons = document.querySelectorAll('#drawingModal .color-btn');
          emotionalColorButtons.forEach((btn, idx) => {
            if (idx === 0) btn.addEventListener('click', (e) => self.setColor('#FF6B6B', e.currentTarget));
            if (idx === 1) btn.addEventListener('click', (e) => self.setColor('#4ECDC4', e.currentTarget));
            if (idx === 2) btn.addEventListener('click', (e) => self.setColor('#FFE66D', e.currentTarget));
            if (idx === 3) btn.addEventListener('click', (e) => self.setColor('#95E1D3', e.currentTarget));
            if (idx === 4) btn.addEventListener('click', (e) => self.setColor('#C7CEEA', e.currentTarget));
            if (idx === 5) btn.addEventListener('click', (e) => self.setColor('#333', e.currentTarget));
          });

          const brushSizeSelect = document.getElementById('drawingBrushSize');
          if (brushSizeSelect) {
            brushSizeSelect.addEventListener('change', () => self.updateBrushSize());
          }
          const eraserBtn = document.getElementById('emotionalEraserBtn');
          if (eraserBtn) {
            eraserBtn.addEventListener('click', () => self.toggleEraser());
          }
          const clearBtn = document.getElementById('emotionalClearBtn');
          if (clearBtn) {
            clearBtn.addEventListener('click', () => self.clearCanvas());
          }
        },
        
        getMousePos: function(e) {
          const rect = this.canvas.getBoundingClientRect();
          const scaleX = this.canvas.width / rect.width;
          const scaleY = this.canvas.height / rect.height;
          
          let x, y;
          if (e.touches) {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
          } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
          }
          return { x, y };
        },
        
        startDrawing: function(e) {
          e.preventDefault();
          this.isDrawing = true;
          const pos = this.getMousePos(e);
          this.lastX = pos.x;
          this.lastY = pos.y;
          
          if (this.isEraser) {
            this.ctx.clearRect(pos.x - this.brushSize/2, pos.y - this.brushSize/2, this.brushSize, this.brushSize);
          } else {
            this.ctx.beginPath();
            this.ctx.moveTo(pos.x, pos.y);
          }
        },
        
        draw: function(e) {
          if (!this.isDrawing) return;
          e.preventDefault();
          
          const pos = this.getMousePos(e);
          
          if (this.isEraser) {
            this.eraseStroke(this.lastX, this.lastY, pos.x, pos.y);
          } else {
            this.ctx.strokeStyle = this.currentColor;
            this.ctx.lineWidth = this.brushSize;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            this.ctx.lineTo(pos.x, pos.y);
            this.ctx.stroke();
          }
          
          this.lastX = pos.x;
          this.lastY = pos.y;
        },
        
        eraseStroke: function(x0, y0, x1, y1) {
          // Create a smooth erasing stroke between two points
          const dx = x1 - x0;
          const dy = y1 - y0;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const steps = Math.ceil(distance);
          
          for (let i = 0; i <= steps; i++) {
            const t = steps > 0 ? i / steps : 0;
            const x = x0 + dx * t;
            const y = y0 + dy * t;
            this.ctx.clearRect(x - this.brushSize/2, y - this.brushSize/2, this.brushSize, this.brushSize);
          }
        },
        
        stopDrawing: function() {
          this.isDrawing = false;
          if (!this.isEraser) {
            this.ctx.closePath();
          }
        },
        
        setColor: function(color, targetBtn) {
          this.currentColor = color;
          this.isEraser = false;
          const eraserBtn = document.getElementById('emotionalEraserBtn');
          if (eraserBtn) {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
          const palette = document.querySelectorAll('#drawingModal .color-btn');
          palette.forEach(btn => {
            btn.style.borderColor = '#999';
            btn.style.borderWidth = '2px';
          });
          if (targetBtn) {
            targetBtn.style.borderColor = '#333';
            targetBtn.style.borderWidth = '3px';
          }
        },

        toggleEraser: function() {
          this.isEraser = !this.isEraser;
          const eraserBtn = document.getElementById('emotionalEraserBtn');
          if (!eraserBtn) return;
          if (this.isEraser) {
            eraserBtn.style.background = '#FF6B6B';
            eraserBtn.style.color = 'white';
          } else {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
        },
        
        updateBrushSize: function() {
          this.brushSize = parseInt(document.getElementById('drawingBrushSize').value);
        },
        
        clearCanvas: function() {
          if (!this.ctx) return;
          this.ctx.fillStyle = '#fff';
          this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          this.isEraser = false;
          const eraserBtn = document.getElementById('emotionalEraserBtn');
          if (eraserBtn) {
            eraserBtn.style.background = '#dff3f3';
            eraserBtn.style.color = '#1fa7a7';
          }
        }
      };

      // Build a 5-pointed star divided into 5 segments
      function buildDailyStar(svg, dayIndex){
        // Star points (5 outer points, 5 inner points)
        const cx = 50, cy = 50;
        const outerRadius = 45, innerRadius = 18;
        const points = [];
        for(let i = 0; i < 10; i++){
          const angle = (i * 36 - 90) * Math.PI / 180;
          const r = i % 2 === 0 ? outerRadius : innerRadius;
          points.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
        }

        // Create 5 segments, each containing 2 star points
        for(let i = 0; i < 5; i++){
          const segmentIndex = (dayIndex * 5) + i;
          const j = i * 2;
          const p1 = points[j];
          const p2 = points[(j + 1) % 10];
          const p3 = points[(j + 2) % 10];
          
          const d = `M ${cx} ${cy} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} Z`;
          
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', d);
          path.setAttribute('data-index', segmentIndex.toString());
          path.classList.add('star-segment');
          
          path.addEventListener('click', function(){
            if(!path.classList.contains('flashing')) return;
            activeStarIndex = segmentIndex;
            openStep(segmentIndex % 5);
          });
          
          svg.appendChild(path);
        }
      }

      function setActiveStarIndexFromDom(){
        const flashing = document.querySelector('.star-segment.flashing');
        if(flashing){ 
          activeStarIndex = parseInt(flashing.dataset.index || '0', 10);
          return;
        }
        const next = document.querySelector('.star-segment:not(.completed)');
        if(next){ 
          activeStarIndex = parseInt(next.dataset.index || '0', 10);
          next.classList.add('flashing');
          return;
        }
        activeStarIndex = 0;
      }

      function loadStarsFromStorage(){
        if(!starElements || !starElements.length) return;
        const count = Math.min(completedCount, starElements.length);
        starElements.forEach(function(star, index){
          if(index < count){
            star.classList.add('completed');
            star.classList.remove('flashing');
          } else {
            star.classList.remove('completed');
          }
        });
        if(count < starElements.length){
          starElements[count].classList.add('flashing');
        }
        activeStarIndex = count;
        updateCoinGlow();
      }

      function ensureDaySectionsForSegmentIndex(segmentIndex){
        if(!daysContainer) return;
        const safeIndex = Math.max(0, parseInt(segmentIndex, 10) || 0);
        const requiredDays = Math.floor(safeIndex / 5) + 1;
        let currentDays = daysContainer.querySelectorAll('.day-section').length;
        let guard = 0;

        while(currentDays < requiredDays && guard < 200){
          generateMoreDays();
          currentDays = daysContainer.querySelectorAll('.day-section').length;
          guard++;
        }
      }

      function scrollHomeToCurrentStar(){
        if(!homeScreen || !daysContainer) return;
        const targetIndex = Math.max(0, completedCount);

        ensureDaySectionsForSegmentIndex(targetIndex);
        starElements = Array.from(document.querySelectorAll('.star-segment'));
        loadStarsFromStorage();

        const target = starElements[targetIndex] || starElements[starElements.length - 1];
        if(!target) return;

        const daySection = target.closest('.day-section');
        if(!daySection) return;

        daySection.scrollIntoView({ block: 'start', behavior: 'auto' });
        const stickyOffset = 126;
        window.scrollTo({ top: Math.max(0, window.scrollY - stickyOffset), behavior: 'auto' });
      }

      function openStep(stepIndex){
        fromRedActivities = false;
        currentActivityColor = '';
        problemSolverActivityInProgress = false;
        if(stepIndex === 0){
          showScreen(checkinScreen);
          selectedCheckinFeeling = '';
          if(otherCheckinFeeling) otherCheckinFeeling.value = '';
          const reason = document.getElementById('reasonText');
          if(reason){ reason.value = ''; reason.dispatchEvent(new Event('input', { bubbles: true })); }
          checkinFeelings.forEach(function(btn){ btn.classList.remove('selected'); });
          return;
        }
        if(stepIndex === 1){
          showScreen(mindfulnessScreen);
          setMindfulnessActivity();
          return;
        }
        if(stepIndex === 2){
          showScreen(gratitudeScreen);
          return;
        }
        if(stepIndex === 3){
          showScreen(getMovingScreen);
          setMovingActivity();
          return;
        }
        if(stepIndex === 4){
          showScreen(amazingMeScreen);
          setRandomAmazingAffirmation();
          return;
        }
      }

      function advanceStar(){
        const completedIndex = activeStarIndex;
        const current = starElements[activeStarIndex];
        if(current){
          current.classList.remove('flashing');
          current.classList.add('completed');
        }
        completedCount = document.querySelectorAll('.star-segment.completed').length;
        localStorage.setItem('completedStars', completedCount.toString());
        
        // Daily completion message is shown in the celebration overlay
        
        const next = starElements[completedIndex + 1];
        if(next){
          next.classList.add('flashing');
          activeStarIndex = completedIndex + 1;
        }
        updateCoinGlow();
        if((completedIndex + 1) % 5 === 0){
          recordDailyCheckIn();
          showDailyComplete();
          return;
        }
        openStep(activeStarIndex % 5);
      }

      // Initialize daily stars
      const dailyStarSvgs = document.querySelectorAll('.daily-star');
      dailyStarSvgs.forEach(function(svg, dayIndex){
        buildDailyStar(svg, dayIndex);
      });
      starElements = Array.from(document.querySelectorAll('.star-segment'));
      loadStarsFromStorage();

      if(navSleep){ navSleep.onclick = function(){ cancelActiveQuestActivity(); cancelProblemSolverActivity(); showScreen(sleepScreen); }; }
      if(navToolbox){ navToolbox.onclick = function(){ cancelActiveQuestActivity(); cancelProblemSolverActivity(); showScreen(toolboxScreen); }; }
      
      // Toolbox Help Option Buttons
      if(helpOptionProblem){ helpOptionProblem.onclick = function(){ showScreen(helpScreen); }; }
      if(helpOptionWorry){ helpOptionWorry.onclick = function(){ showScreen(worryManager); }; }
      if(helpOptionRegulate){ helpOptionRegulate.onclick = function(){ showScreen(toolboxScreen); }; }
      if(helpOptionTools){ helpOptionTools.onclick = function(){ showScreen(toolboxScreen); }; }
      if(helpOptionSleep){ helpOptionSleep.onclick = function(){ showScreen(sleepScreen); }; }
      if(helpOptionUnsure){ helpOptionUnsure.onclick = function(){ showScreen(toolboxScreen); }; }
      if(toolboxProblemBtn){ toolboxProblemBtn.onclick = function(){ showScreen(helpScreen); }; }
      if(toolboxWorryBtn){ toolboxWorryBtn.onclick = function(){ showScreen(worryManager); }; }
      if(toolboxSleepBtn){ toolboxSleepBtn.onclick = function(){ showScreen(sleepScreen); }; }
      
      if(navPet){
        navPet.onclick = function(){
          cancelActiveQuestActivity();
          cancelProblemSolverActivity();
          try{
            openZenzyPetShop();
          }catch(e){
            console.error('navPet fallback error:', e);
            showScreen(petShop);
            if(petShop){
              petShop.style.display = 'flex';
              petShop.style.visibility = 'visible';
              petShop.style.opacity = '1';
            }
          }
        };
      }
      console.log('navmissions element:', navmissions);
      if(navmissions){ 
        navmissions.onclick = function(){ 
          console.log('navmissions clicked!');
          cancelProblemSolverActivity();
          cancelActiveQuestActivity();
          showScreen(missionsScreen); 
        }; 
        console.log('navmissions event handler attached successfully');
      } else {
        console.error('navmissions element not found');
      }
      if(navUser){
        navUser.addEventListener('click', function(e){
          try{
            cancelProblemSolverActivity();
            e.preventDefault();
            e.stopPropagation();
            const hasProfile = loadProfile();
            if(!hasProfile){
              if(initializeProfileSetup && profileSetup){
                initializeProfileSetup();
              }
              if(profileSetup){
                showScreen(profileSetup);
              }
            } else {
              if(displayProfile){
                displayProfile();
              }
              if(userProfileScreen){
                showScreen(userProfileScreen);
              }
            }
          } catch(err){
            console.error('Error in navUser click:', err);
          }
        });
      }
      if(navWorry){ navWorry.onclick = function(){ cancelProblemSolverActivity(); showScreen(worryManager); }; }
      if(navHome){ navHome.onclick = function(){ cancelActiveQuestActivity(); cancelProblemSolverActivity(); showScreen(homeScreen); }; }
      
      // Top user button handler
      console.log('userBtn element:', userBtn);
      if(userBtn){
        userBtn.addEventListener('click', function(e){
          console.log('userBtn clicked!');
          try{
            cancelProblemSolverActivity();
            e.preventDefault();
            e.stopPropagation();
            const hasProfile = loadProfile();
            if(!hasProfile){
              if(initializeProfileSetup && profileSetup){
                initializeProfileSetup();
              }
              if(profileSetup){
                showScreen(profileSetup);
              }
            } else {
              if(displayProfile){
                displayProfile();
              }
              if(userProfileScreen){
                showScreen(userProfileScreen);
              }
            }
          } catch(err){
            console.error('Error in userBtn click:', err);
          }
        });
        console.log('userBtn event handler attached successfully');
      } else {
        console.error('userBtn element not found');
      }
      
      // Profile Setup Handlers
      if(completeProfileSetup){
        completeProfileSetup.onclick = function(){
          const nickname = nicknameInput.value.trim();
          
          // Validate required fields
          if(!nickname || nickname.length < 2){
            alert('Please enter a nickname (at least 2 characters)!');
            return;
          }
          if(!selectedAvatar){
            alert('Please choose an avatar!');
            return;
          }
          
          saveProfile();
          showCelebration(function(){
            displayProfile();
            showScreen(userProfileScreen);
          });
        };
      }

      if(editProfile){
        editProfile.onclick = function(){
          initializeProfileSetup();
          const profile = loadProfile();
          if(profile){
            nicknameInput.value = profile.nickname;
            selectedAvatar = profile.avatar;
            
            // Pre-select checkboxes based on saved profile
            lovesCheckboxes.forEach(function(cb){ cb.checked = profile.loves.includes(cb.value); });
            hatesCheckboxes.forEach(function(cb){ cb.checked = profile.hates.includes(cb.value); });
            strengthsCheckboxes.forEach(function(cb){ cb.checked = profile.strengths.includes(cb.value); });
            strugglesCheckboxes.forEach(function(cb){ cb.checked = profile.struggles.includes(cb.value); });
            
            // Highlight selected avatar button
            const avatarIndex = avatarEmojis.indexOf(profile.avatar);
            if(avatarIndex >= 0){
              const selectedBtn = document.querySelector('#avatar_' + avatarIndex);
              if(selectedBtn){
                selectedBtn.style.borderColor = '#1fa7a7';
                selectedBtn.style.background = '#e0f7f7';
              }
            }
          }
          showScreen(profileSetup);
        };
      }

      if(takeMoreQuizzes){
        takeMoreQuizzes.onclick = function(){
          initializeQuizListing();
          showScreen(quizListingScreen);
        };
      }

      // END Profile Handlers

      if(completeEmotionsMatching){
        completeEmotionsMatching.onclick = function(){
          e1ActivityProgress.match = true;
          showEmotionsTriggerActivity(true);
        };
      }

      if(completeEmotionsDraw){
        completeEmotionsDraw.onclick = function(){
          e1ActivityProgress.draw = true;
          showEmotionsMatching();
        };
      }

      if(completeEmotionsNeeds){
        completeEmotionsNeeds.onclick = function(){
          e2ActivityProgress.needs = true;
          showEmotionsTriggerActivity(false);
        };
      }

      if(completeEmotionsTrigger){
        completeEmotionsTrigger.onclick = function(){
          completeEmotionsTrigger.style.display = 'none';
          if(currentEmotionsTriggerFlow === 'e1'){
            e1ActivityProgress.quiz = true;
            completeActiveQuestSegment();
            showCelebration(function(){
              if(emotionsTriggerScreen) emotionsTriggerScreen.style.display = 'none';
              showScreen(missionsScreen);
            });
            return;
          }
          e2ActivityProgress.signals = true;
          showE2CueSortActivity();
        };
      }

      if(completeEmotionsCueSort){
        completeEmotionsCueSort.onclick = function(){
          e2ActivityProgress.cues = true;
          completeActiveQuestSegment();
          showCelebration(function(){
            if(emotionsCueSortScreen) emotionsCueSortScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(completeHappiness){
        completeHappiness.onclick = function(){
          // Complete the segment that actually opened this activity. Do not
          // hard-code the Social circle's second segment: this screen can be
          // reached from different routes, and opening/completing Happiness
          // must not silently complete an unrelated Social Norms activity.
          completeActiveQuestSegment();
          showCelebration(function(){
            happinessScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(completeEmotionActivity){
        completeEmotionActivity.onclick = function(){
          if(currentEmotionActivityStep === 'feel'){
            emotionActivityProgress.feel = true;
            showEmotionActivityStep('tell');
            return;
          }
          if(currentEmotionActivityStep === 'tell'){
            emotionActivityProgress.tell = true;
            showEmotionActivityStep('body');
            return;
          }
          emotionActivityProgress.body = true;
          saveCurrentEmotionQuestResponse();
          completeActiveQuestSegment();
          showCelebration(function(){
            emotionActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(completeEmotionSummary){
        completeEmotionSummary.onclick = function(){
          showCelebration(function(){
            if(emotionSummaryScreen) emotionSummaryScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(socialNormsQuizOptions && socialNormsQuizOptions.length){
        const socialQuizQuestionIds = Array.from(new Set(Array.from(socialNormsQuizOptions).map(function(btn){
          return btn.dataset.question || 'q1';
        })));

        const updateSocialNormsQuizFeedback = function(){
          if(!socialNormsQuizFeedback) return;
          let answeredCount = 0;
          let correctCount = 0;

          socialQuizQuestionIds.forEach(function(questionId){
            const selected = Array.from(socialNormsQuizOptions).find(function(btn){
              return (btn.dataset.question || 'q1') === questionId && btn.dataset.selected === 'true';
            });

            if(selected){
              answeredCount += 1;
              if(selected.dataset.correct === 'true') correctCount += 1;
            }
          });

          if(answeredCount === 0){
            socialNormsQuizFeedback.textContent = '';
            socialNormsQuizFeedback.style.color = '#1fa7a7';
          } else if(answeredCount < socialQuizQuestionIds.length){
            socialNormsQuizFeedback.textContent = `Nice thinking. ${correctCount} of ${socialQuizQuestionIds.length} correct so far.`;
            socialNormsQuizFeedback.style.color = '#1fa7a7';
          } else if(correctCount === socialQuizQuestionIds.length){
            socialNormsQuizFeedback.textContent = 'Great work. You got all true/false answers correct.';
            socialNormsQuizFeedback.style.color = '#2e7d32';
          } else {
            socialNormsQuizFeedback.textContent = `Good effort. You got ${correctCount} of ${socialQuizQuestionIds.length} correct.`;
            socialNormsQuizFeedback.style.color = '#1fa7a7';
          }
        };

        socialNormsQuizOptions.forEach(function(option){
          option.addEventListener('click', function(){
            const questionId = this.dataset.question || 'q1';

            socialNormsQuizOptions.forEach(function(btn){
              if((btn.dataset.question || 'q1') === questionId){
                btn.dataset.selected = 'false';
                btn.setAttribute('aria-pressed', 'false');
                btn.style.outline = 'none';
                // Keep the answer key hidden until the quiz is finished.
                // Colouring every option by correctness gave the answer away.
                btn.style.background = '#fff';
                btn.style.borderColor = '#9fd6f4';
                btn.style.color = '#244';
              }
            });

            this.dataset.selected = 'true';
            this.setAttribute('aria-pressed', 'true');
            this.style.outline = '3px solid #184f73';
            updateSocialNormsQuizFeedback();
          });
        });
      }

      if(socialLessonNoNormOptions && socialLessonNoNormOptions.length){
        socialLessonNoNormOptions.forEach(function(option){
          option.addEventListener('click', function(){
            const isSelected = this.dataset.selected === 'true';
            this.dataset.selected = isSelected ? 'false' : 'true';
            const correct = this.dataset.correct === 'true';
            const groupId = this.parentElement ? this.parentElement.id : '';
            this.style.background = isSelected ? 'white' : (correct ? '#d4f4dd' : '#ffe6e6');
            this.style.borderColor = isSelected ? '#1fa7a7' : (correct ? '#4caf50' : '#ff6b6b');
            this.style.color = isSelected ? '#1fa7a7' : (correct ? '#2e7d32' : '#c62828');
            if(socialLessonFeedback){
              const positiveFeedback = groupId === 'socialLessonNoNormOptions'
                ? 'That could happen when social norms are missing.'
                : 'That could be a hidden social rule.';
              const negativeFeedback = groupId === 'socialLessonNoNormOptions'
                ? 'That is unlikely if social norms were missing.'
                : 'That is not a helpful hidden social rule.';
              socialLessonFeedback.textContent = isSelected ? '' : (correct ? positiveFeedback : negativeFeedback);
              socialLessonFeedback.style.color = correct ? '#2e7d32' : '#c62828';
            }
            if(completeSocialActivity){
              const groups = ['socialLessonReflectionOptions', 'socialLessonNoNormOptions'];
              const allAnswered = groups.every(function(id){
                const group = document.getElementById(id);
                return group && group.querySelector('[data-selected="true"]');
              });
              completeSocialActivity.style.display = allAnswered ? 'inline-block' : 'none';
              completeSocialActivity.dataset.ready = allAnswered ? 'true' : 'false';
            }
          });
        });
      }

      if(completeSocialActivity){
        completeSocialActivity.onclick = function(){
          const flow = Array.isArray(currentSocialFlow) && currentSocialFlow.length
            ? currentSocialFlow
            : ['sort', 'expected', 'unexpected'];
          const currentIdx = Math.max(0, flow.indexOf(currentSocialActivityMode));

          if(currentSocialActivityMode === 'lesson'){
            if(this.dataset.ready !== 'true') return;
            socialActivityProgress.lesson = true;
            showSocialActivityStep(flow[currentIdx + 1] || 'quiz');
            return;
          }

          if(currentSocialActivityMode === 'quiz'){
            if(!validateSocialQuizStep()) return;
            socialActivityProgress.quiz = true;
            showSocialActivityStep(flow[currentIdx + 1] || 'sort');
            return;
          }

          if(currentSocialActivityMode === 'sort'){
            if(this.dataset.ready === 'true'){
              socialActivityProgress.sort = true;
              if(flow[currentIdx + 1]){
                showSocialActivityStep(flow[currentIdx + 1]);
                return;
              }
            }
          } else if(currentSocialActivityMode === 'expected'){
            if(validateSocialSelectionStep('expected')){
              socialActivityProgress.expected = true;
              if(flow[currentIdx + 1]){
                showSocialActivityStep(flow[currentIdx + 1]);
                return;
              }
            } else {
              return;
            }
          } else if(currentSocialActivityMode === 'unexpected'){
            if(!validateSocialSelectionStep('unexpected')){
              return;
            }
            socialActivityProgress.unexpected = true;
          }

          currentSocialActivitySets = [];
          completeActiveQuestSegment();
          showCelebration(function(){
            socialActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(startFriendshipDetective){
        startFriendshipDetective.onclick = function(){
          openQuestStep('friendship', 0);
        };
      }

      if(startFeelingDetective){
        startFeelingDetective.onclick = function(){
          openQuestStep('feeling', 0);
        };
      }

      if(startCommunicationDetective){
        startCommunicationDetective.onclick = function(){
          openQuestStep('communication', 0);
        };
      }

      if(completeFriendshipActivity){
        completeFriendshipActivity.onclick = function(){
          finishCircleQuestActivity(function(){
            friendshipActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(completeFeelingActivity){
        completeFeelingActivity.onclick = function(){
          finishCircleQuestActivity(function(){
            feelingActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(completeCommunicationActivity){
        completeCommunicationActivity.onclick = function(){
          finishCircleQuestActivity(function(){
            communicationActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(startIdentityDetective){
        startIdentityDetective.onclick = function(){
          openQuestStep('identity', 0);
        };
      }

      if(completeIdentityActivity){
        completeIdentityActivity.onclick = function(){
          // Save a friendly, non-diagnostic personality reflection when the Big Five quiz is completed.
          if(activeQuestActivity && activeQuestActivity.questId === 'identity' && activeQuestActivity.index === 0 && identityActivityContent){
            const answers = Array.from(identityActivityContent.querySelectorAll('[data-question-index]')).sort((a,b) => Number(a.dataset.questionIndex) - Number(b.dataset.questionIndex));
            if(answers.length){
              const traitNames = ['Open and curious', 'Organised and thoughtful', 'Outgoing or reserved', 'People-focused or independent', 'Emotionally steady or sensitive'];
              const traitDescriptions = [
                ['You are open and curious, and enjoy exploring ideas.', 'You enjoy a mix of new ideas and familiar routines.', 'You tend to prefer practical ideas and what you already know.'],
                ['You like planning ahead and keeping things organised.', 'You balance planning with flexibility.', 'You prefer flexibility and making things up as you go.'],
                ['You often feel energised by being around people.', 'You enjoy a balance of social time and quiet time.', 'You may be more reserved and appreciate time to yourself.'],
                ['You tend to be warm, cooperative and attentive to others.', 'You balance caring about others with standing your ground.', 'You value independence and may question things before agreeing.'],
                ['You often feel calm when things get difficult.', 'Your feelings can vary depending on the situation.', 'You may feel things deeply or keep emotions private while processing them.']
              ];
              const traits = answers.map(function(el, i){
                const answer = (el.dataset.answer || '').toLowerCase();
                let band = 1;
                if(/very creative|very organized|very outgoing|very friendly|very calm/.test(answer)) band = 0;
                else if(/creative$|organized$|outgoing$|friendly$|calm$/.test(answer)) band = 0;
                else if(/very practical|very flexible|very reserved|very independent|very sensitive/.test(answer)) band = 2;
                else if(/practical$|flexible$|reserved$|independent$|sensitive$/.test(answer)) band = 2;
                return (traitNames[i] || 'Your style') + ': ' + (traitDescriptions[i] || [])[band];
              });
              // Build a short overall reflection from this child's actual answers,
              // rather than showing the same generic paragraph to everyone.
              const summaryParts = traits.map(function(trait){
                const splitAt = trait.indexOf(': ');
                return splitAt >= 0 ? trait.slice(splitAt + 2).replace(/[.!]$/, '') : trait;
              });
              // Use a readable, child-friendly summary instead of joining full clauses
              // with the awkward repeated phrase “You also”.
              const overallReflection = summaryParts.length > 1
                ? summaryParts.slice(0, -1).join('; ') + '; and ' + summaryParts[summaryParts.length - 1]
                : (summaryParts[0] || 'you have your own mix of strengths and preferences');
              const summary = 'Your answers suggest that ' + overallReflection +
                '. These are clues about your preferences, not a box you have to fit into. There are no right or wrong personality types, and you may feel differently in different situations.';
              localStorage.setItem('personality_type_result', JSON.stringify({traits: traits, summary: summary, answers: answers.map(el => ({question: el.dataset.question, answer: el.dataset.answer})), updatedAt: new Date().toISOString()}));
              displayQuizResults();
            }
          }
          finishCircleQuestActivity(function(){
            identityActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

      if(startMindsetDetective){
        startMindsetDetective.onclick = function(){
          openQuestStep('mindset', 0);
        };
      }

      if(startSensoryDetective){
        startSensoryDetective.onclick = function(){
          openQuestStep('sensory', 0);
        };
      }

      if(startThoughtDetective){
        startThoughtDetective.onclick = function(){
          openQuestStep('thought', 0);
        };
      }

      if(startConflictDetective){
        startConflictDetective.onclick = function(){
          openQuestStep('conflict', 0);
        };
      }

      if(completeMindsetActivity){
        completeMindsetActivity.onclick = function(){
          finishCircleQuestActivity(function(){
            mindsetActivityScreen.style.display = 'none';
            showScreen(missionsScreen);
          });
        };
      }

            let problemNoTimeout = null;
      // Tracks activities launched from the problem-solving distraction route.
      // These should reward the child and return to Toolbox, not daily check-in.
      let problemSolverActivityInProgress = false;
      let problemDistractionCheckIn = false;
      let problemDecisionOrigin = helpScreen;
      function cancelProblemSolverActivity(){
        // If the child navigates away before finishing the chosen regulation
        // activity, treat that route as abandoned. Otherwise a later, unrelated
        // breathing/movement exercise could incorrectly return to Toolbox.
        problemSolverActivityInProgress = false;
        problemDistractionCheckIn = false;
        fromRedActivities = false;
        currentActivityColor = '';
        clearProblemSolverAnswers();
      }
      
      try {
        localStorage.removeItem('problemSolverDraft_v1');
      } catch (error) {
        console.error('Unable to remove the old Problem Solver draft.', error);
      }

      function clearProblemSolverAnswers(){
        [problemText, problemBestActionWhy].concat(problemActionInputs, problemConsequenceInputs).forEach(function(input){
          if(input) input.value = '';
        });
        problemSolutionOptions.forEach(function(option){ option.checked = false; });
        if(problemText) problemText.dispatchEvent(new Event('input', { bubbles: true }));
        resetProblemPlanFeedback();
      }
      window.addEventListener('pagehide', clearProblemSolverAnswers);
      
      function openProblemActionsScreen(){
        resetProblemPlanFeedback();
        showScreen(problemActionsScreen);
        scheduleBubbleTextFit();
      }
      
      function openProblemDistractionScreen(){
        showScreen(problemNoScreen);
        // Randomise the three distraction options each time.
        if(problemDistractionOptions){
          const buttons = [problemChooseBreathing, problemChooseMovement, problemChoosePuzzle].filter(Boolean);
          const shuffled = shuffledCopy(buttons);
          shuffled.forEach(function(btn){ problemDistractionOptions.appendChild(btn); });
        }
      }
      
      function hideProblemHelpModal(){
        if(problemHelpModal){
          problemHelpModal.style.display = 'none';
          problemHelpModal.setAttribute('aria-hidden','true');
        }
      }
      function showProblemHelpModal(){
        if(problemHelpModal){
          problemHelpTitle.textContent = 'Did that work?';
          problemHelpChoices.style.display = 'flex';
          problemTryAgain.style.display = 'none';
          problemHelpModal.style.display = 'flex';
          problemHelpModal.setAttribute('aria-hidden','false');
          problemHelpYes.focus();
        }
      }

      function showProblemDecisionModal(origin){
        if(origin) problemDecisionOrigin = origin;
        problemDecisionModal.style.display = 'flex';
        problemDecisionModal.setAttribute('aria-hidden', 'false');
        problemYes.focus();
      }

      function hideProblemDecisionModal(){
        problemDecisionModal.style.display = 'none';
        problemDecisionModal.setAttribute('aria-hidden', 'true');
      }
      
      const shareProblemBtn = document.getElementById('shareProblemBtn');
      
      if(shareProblemBtn){
        shareProblemBtn.onclick = function(){
          if(problemText && problemText.value.trim()){
            showProblemDecisionModal(helpScreen);
          } else if(problemText){
            problemText.focus();
            problemText.placeholder = 'Write or draw a little about what is bothering you first...';
          }
        };
      }
      
      function resetProblemPlanFeedback(){ if(problemPlanFeedback) problemPlanFeedback.textContent = ''; }
      
      if(problemYes) problemYes.onclick = function(){ hideProblemDecisionModal(); openProblemActionsScreen(); };
      if(problemNo) problemNo.onclick = function(){ hideProblemDecisionModal(); openProblemDistractionScreen(); };
      if(problemDecisionCancel) problemDecisionCancel.onclick = function(){
        hideProblemDecisionModal();
        if(problemDecisionOrigin === distortionsScreen) noWorryTrap.focus();
        else shareProblemBtn.focus();
      };
      
      if(problemDistractionBackBtn) problemDistractionBackBtn.onclick = function(){ showScreen(problemDecisionOrigin); showProblemDecisionModal(); };
      if(problemPlanBackBtn) problemPlanBackBtn.onclick = function(){ showScreen(problemDecisionOrigin); showProblemDecisionModal(); };
      
      if(problemChooseBreathing) problemChooseBreathing.onclick = function(){
        problemSolverActivityInProgress = true;
        fromRedActivities = false; currentActivityColor = '';
        showScreen(mindfulnessScreen);
        setMindfulnessActivity('square');
      };
      if(problemChooseMovement) problemChooseMovement.onclick = function(){
        problemSolverActivityInProgress = true;
        fromRedActivities = false; currentActivityColor = '';
        showScreen(getMovingScreen);
        setMovingActivity();
      };
      if(problemChoosePuzzle) problemChoosePuzzle.onclick = function(){
        problemSolverActivityInProgress = true;
        fromRedActivities = false; currentActivityColor = '';
        generateRandomPuzzle();
        if(puzzleScreen){ showScreen(puzzleScreen); }
      };
      
      if(saveProblemPlanBtn){
        saveProblemPlanBtn.onclick = function(){
          const a1 = problemActionInputs[0] ? problemActionInputs[0].value.trim() : '';
          const a2 = problemActionInputs[1] ? problemActionInputs[1].value.trim() : '';
          const a3 = problemActionInputs[2] ? problemActionInputs[2].value.trim() : '';
          const why = problemBestActionWhy ? problemBestActionWhy.value.trim() : '';
          if(!a1 || !a2 || !a3){
            if(problemPlanFeedback) problemPlanFeedback.textContent = 'Try to write three possible solutions first. They can be small steps.';
            return;
          }
          if(!Array.from(problemSolutionOptions).some(function(option){ return option.checked; })){
            if(problemPlanFeedback) problemPlanFeedback.textContent = 'Choose the solution you think is most likely to work.';
            return;
          }
          if(!why){
            if(problemPlanFeedback) problemPlanFeedback.textContent = 'Now write why you chose that option.';
            return;
          }
          showProblemHelpModal();
        };
      }
      
      if(problemHelpYes){
        problemHelpYes.onclick = function(){
          hideProblemHelpModal();
          clearProblemSolverAnswers();
          showCelebration(function(){ showScreen(homeScreen); }, 50, 'Well done for working through your problem!');
        };
      }
      if(problemHelpNo){
        problemHelpNo.onclick = function(){
          problemHelpTitle.textContent = 'Try another solution. You can change your ideas or choose a different one.';
          problemHelpChoices.style.display = 'none';
          problemTryAgain.style.display = 'inline-block';
          problemTryAgain.focus();
        };
      }
      if(problemTryAgain) problemTryAgain.onclick = function(){
        hideProblemHelpModal();
        openProblemActionsScreen();
        if(problemPlanFeedback) problemPlanFeedback.textContent = 'Try another solution (you can edit what you wrote).';
        if(problemActionInputs[0]) problemActionInputs[0].focus();
      };

      document.addEventListener('keydown', function(event){
        const modal = problemDecisionModal.getAttribute('aria-hidden') === 'false'
          ? problemDecisionModal
          : (problemHelpModal.getAttribute('aria-hidden') === 'false' ? problemHelpModal : null);
        if(!modal) return;
        if(event.key === 'Escape'){
          event.preventDefault();
          if(modal === problemDecisionModal) problemDecisionCancel.click();
          else {
            hideProblemHelpModal();
            saveProblemPlanBtn.focus();
          }
        } else if(event.key === 'Tab'){
          const buttons = Array.from(modal.querySelectorAll('button')).filter(function(button){
            return !button.disabled && button.getClientRects().length > 0;
          });
          if(!buttons.length) return;
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if(event.shiftKey && document.activeElement === first){
            event.preventDefault();
            last.focus();
          } else if(!event.shiftKey && document.activeElement === last){
            event.preventDefault();
            first.focus();
          }
        }
      });
      

      if(worrySubmit){
        worrySubmit.onclick = function(){
          showScreen(distortionsScreen);
        };
      }
      if(distortionButtons && distortionButtons.length){
        distortionButtons.forEach(function(btn){
          btn.onclick = function(){
            showScreen(balancedThoughtScreen);
          };
        });
      }
      if(noWorryTrap) noWorryTrap.onclick = function(){ showProblemDecisionModal(distortionsScreen); };
      if(balancedThoughtSubmit){
        balancedThoughtSubmit.onclick = function(){
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(thermoSegments && thermoSegments.length){
        thermoSegments.forEach(function(seg){
          seg.onclick = function(){
            if(seg.dataset.label === 'Red'){ currentActivityColor = 'red'; showScreen(redActivitiesScreen); }
            if(seg.dataset.label === 'Green'){ showScreen(greenActivitiesScreen); }
            if(seg.dataset.label === 'Blue'){ showScreen(blueActivitiesScreen); }
          };
        });
      }

      if(redActivityButtons && redActivityButtons.length){
        redActivityButtons.forEach(function(btn){
          btn.onclick = function(){ showModal(redPromptModal); };
        });
      }

      if(red54321Btn){
        red54321Btn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          showScreen(grounding54321Screen);
        };
      }

      if(redHandSqueezeBtn){
        redHandSqueezeBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          if(redHandSqueezeText){
            redHandSqueezeText.value = '';
          }
          showScreen(redHandSqueezeScreen);
        };
      }

      if(deepBreathsBtn){
        deepBreathsBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          // Pick a random breathing exercise
          const breathingExercises = ['breathing', 'hotChocolate', 'square'];
          const randomExercise = breathingExercises[Math.floor(Math.random() * breathingExercises.length)];
          showScreen(mindfulnessScreen);
          setMindfulnessActivity(randomExercise);
        };
      }

      if(meditateBtn){
        meditateBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          if(meditateAfterText){
            meditateAfterText.value = '';
          }
          showScreen(meditateScreen);
          startMeditateTimer();
        };
      }

      if(visualisationBtn){
        visualisationBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          if(visualisationText){
            visualisationText.value = '';
          }
          if(visualisationSeeText){
            visualisationSeeText.value = '';
          }
          if(visualisationHearText){
            visualisationHearText.value = '';
          }
          if(visualisationSmellText){
            visualisationSmellText.value = '';
          }
          if(visualisationFeelText){
            visualisationFeelText.value = '';
          }
          if(visualisationAfterText){
            visualisationAfterText.value = '';
          }
          showScreen(visualisationScreen);
        };
      }

      if(puzzleBtn){
        puzzleBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          generateRandomPuzzle();
          showScreen(puzzleScreen);
        };
      }

      if(exerciseBtn){
        exerciseBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          showScreen(exerciseOptionScreen);
        };
      }

      if(yogaBtn){
        yogaBtn.onclick = function(){
          fromRedActivities = true;
          showScreen(yogaScreen);
        };
      }

      if(pushWallBtn){
        pushWallBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          if(pushWallAfterText){
            pushWallAfterText.value = '';
          }
          showScreen(pushWallScreen);
          startPushWallTimer();
        };
      }

      if(drawBtn){
        drawBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'red';
          showScreen(drawingScreen);
          setTimeout(() => {
            drawingApp.init();
          }, 100);
        };
      }

      function openTalkToSomebody(color){
          fromRedActivities = true;
          currentActivityColor = color;
          if(talkPersonButtons && talkPersonButtons.length){
            talkPersonButtons.forEach(function(btn){
              btn.classList.remove('selected');
            });
          }
          if(talkToSomebodyElseInput){
            talkToSomebodyElseInput.value = '';
          }
          if(talkAfterTalkingInput){
            talkAfterTalkingInput.value = '';
          }
          showScreen(talkToSomebodyScreen);
      }
      if(talkToSomebodyBtn){
        talkToSomebodyBtn.onclick = function(){ openTalkToSomebody('red'); };
      }

      if(talkPersonButtons && talkPersonButtons.length){
        talkPersonButtons.forEach(function(btn){
          btn.onclick = function(){
            talkPersonButtons.forEach(function(otherBtn){
              otherBtn.classList.remove('selected');
            });
            this.classList.add('selected');
          };
        });
      }

      if(completePuzzle){
        completePuzzle.onclick = function(){
          puzzleScreen.style.display = 'none';
          if(handleRedActivityCompletion()) return;
          if(problemSolverActivityInProgress){
            showProblemDistractionCheckIn();
            return;
          }
          showCelebration(function(){
            showScreen(homeScreen);
          }, 1000);
        };
      }

      if(completeDrawing){
        completeDrawing.onclick = function(){
          drawingScreen.style.display = 'none';
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completeTalkToSomebody){
        completeTalkToSomebody.onclick = function(){
          if(talkToSomebodyScreen){
            talkToSomebodyScreen.style.display = 'none';
          }
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completeYoga){
        completeYoga.onclick = function(){
          if(yogaScreen){
            yogaScreen.style.display = 'none';
          }
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completePushWall){
        completePushWall.onclick = function(){
          if(pushWallScreen){
            pushWallScreen.style.display = 'none';
          }
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completeMeditate){
        completeMeditate.onclick = function(){
          if(meditateScreen){
            meditateScreen.style.display = 'none';
          }
          stopMeditateTimer();
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completeVisualisation){
        completeVisualisation.onclick = function(){
          if(visualisationScreen){
            visualisationScreen.style.display = 'none';
          }
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(completeRedHandSqueeze){
        completeRedHandSqueeze.onclick = function(){
          if(redHandSqueezeScreen){
            redHandSqueezeScreen.style.display = 'none';
          }
          if(handleRedActivityCompletion()) return;
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }

      if(jumpingJacksBtn){
        jumpingJacksBtn.onclick = function(){
          showScreen(getMovingScreen);
          startTimer.style.display = 'none';
          let timeLeft = 30;
          const timerDisplay = document.getElementById('timer');
          movingPrompt.textContent = '🤸 Do 30 seconds of jumping jacks!';
          timerDisplay.textContent = timeLeft;
          movingTimerInterval = setInterval(function(){
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if(timeLeft <= 0){
              clearInterval(movingTimerInterval);
              movingTimerInterval = null;
              if(soundEnabled){
                playBeep(800, 100);
                setTimeout(function(){ playBeep(800, 100); }, 150);
                setTimeout(function(){ playBeep(800, 100); }, 300);
              }
              getMovingScreen.style.display = 'none';
              if(handleRedActivityCompletion()){
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                return;
              }
              showCelebration(function(){
                homeScreen.style.display = 'block';
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                advanceStar();
              });
            }
          }, 1000);
        };
      }

      if(danceBtn){
        danceBtn.onclick = function(){
          showScreen(getMovingScreen);
          startTimer.style.display = 'none';
          let timeLeft = 30;
          const timerDisplay = document.getElementById('timer');
          movingPrompt.textContent = '💃 Do 30 seconds of dancing!';
          timerDisplay.textContent = timeLeft;
          movingTimerInterval = setInterval(function(){
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if(timeLeft <= 0){
              clearInterval(movingTimerInterval);
              movingTimerInterval = null;
              if(soundEnabled){
                playBeep(800, 100);
                setTimeout(function(){ playBeep(800, 100); }, 150);
                setTimeout(function(){ playBeep(800, 100); }, 300);
              }
              getMovingScreen.style.display = 'none';
              if(handleRedActivityCompletion()){
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                return;
              }
              showCelebration(function(){
                homeScreen.style.display = 'block';
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                advanceStar();
              });
            }
          }, 1000);
        };
      }

      if(joggingBtn){
        joggingBtn.onclick = function(){
          showScreen(getMovingScreen);
          startTimer.style.display = 'none';
          let timeLeft = 30;
          const timerDisplay = document.getElementById('timer');
          movingPrompt.textContent = '🏃 Do 30 seconds of jogging on the spot!';
          timerDisplay.textContent = timeLeft;
          movingTimerInterval = setInterval(function(){
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if(timeLeft <= 0){
              clearInterval(movingTimerInterval);
              movingTimerInterval = null;
              if(soundEnabled){
                playBeep(800, 100);
                setTimeout(function(){ playBeep(800, 100); }, 150);
                setTimeout(function(){ playBeep(800, 100); }, 300);
              }
              getMovingScreen.style.display = 'none';
              if(handleRedActivityCompletion()){
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                return;
              }
              showCelebration(function(){
                homeScreen.style.display = 'block';
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                advanceStar();
              });
            }
          }, 1000);
        };
      }

      if(stretchBtn){
        stretchBtn.onclick = function(){
          showScreen(getMovingScreen);
          startTimer.style.display = 'none';
          let timeLeft = 30;
          const timerDisplay = document.getElementById('timer');
          movingPrompt.textContent = '🧘 Do 30 seconds of stretching!';
          timerDisplay.textContent = timeLeft;
          movingTimerInterval = setInterval(function(){
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if(timeLeft <= 0){
              clearInterval(movingTimerInterval);
              movingTimerInterval = null;
              if(soundEnabled){
                playBeep(800, 100);
                setTimeout(function(){ playBeep(800, 100); }, 150);
                setTimeout(function(){ playBeep(800, 100); }, 300);
              }
              getMovingScreen.style.display = 'none';
              if(handleRedActivityCompletion()){
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                return;
              }
              showCelebration(function(){
                homeScreen.style.display = 'block';
                timerDisplay.textContent = '60';
                startTimer.style.display = 'inline-block';
                advanceStar();
              });
            }
          }, 1000);
        };
      }

      if(redYes){
        redYes.onclick = function(){
          hideModal(redPromptModal);
          if(problemDistractionCheckIn){
            cancelProblemSolverActivity();
            showCelebration(function(){ showScreen(toolboxScreen); }, 100, 'Well done! You completed your problem-solving activity.');
            return;
          }
          showCelebration(function(){
            showScreen(homeScreen);
          });
        };
      }
      function retryRedActivity(){
        hideModal(redPromptModal);
        const fromProblem = problemDistractionCheckIn;
        problemDistractionCheckIn = false;
        showScreen(fromProblem ? problemNoScreen : redActivitiesScreen);
      }
      if(redABit){ redABit.onclick = retryRedActivity; }
      if(redNo){ redNo.onclick = retryRedActivity; }
      if(redResultOk){
        redResultOk.onclick = function(){
          const message = redResultText ? redResultText.textContent : '';
          hideModal(redResultModal);
          if(message.indexOf('Try a different activity') === 0){ showScreen(redActivitiesScreen); }
          if(message.indexOf('Well done!') === 0){ showScreen(homeScreen); }
        };
      }

      function openColorActivityScreen(screen, color){
        fromRedActivities = true;
        currentActivityColor = color;
        const reflection = screen ? screen.querySelector('[id$="Reflection"]') : null;
        if(reflection){
          reflection.style.display = 'none';
        }
        const textarea = screen ? screen.querySelector('textarea') : null;
        if(textarea){
          textarea.value = '';
        }
        showScreen(screen);
      }

      function revealColorActivityReflection(screen){
        if(!screen) return;
        const reflection = screen.querySelector('[id$="Reflection"]');
        if(reflection){
          reflection.style.display = 'block';
        }
      }

      function completeColorActivityScreen(screen){
        if(screen){ screen.style.display = 'none'; }
        if(handleRedActivityCompletion()) return;
        showCelebration(function(){
          showScreen(homeScreen);
        });
      }

      if(blueGetMovingBtn){ blueGetMovingBtn.onclick = function(){ openTalkToSomebody('blue'); }; }
      if(blueDanceSongBtn){ blueDanceSongBtn.onclick = function(){ openColorActivityScreen(blueDanceSongScreen, 'blue'); }; }
      if(blueObstacleCourseBtn){ blueObstacleCourseBtn.onclick = function(){ openColorActivityScreen(blueObstacleCourseScreen, 'blue'); }; }
      if(blueSpinAroundBtn){
        blueSpinAroundBtn.onclick = function(){
          openColorActivityScreen(blueSpinAroundScreen, 'blue');
          startBlueSpinTimer();
        };
      }
      if(blueJumpingJacksBtn){ blueJumpingJacksBtn.onclick = function(){ openColorActivityScreen(blueJumpingJacksScreen, 'blue'); }; }
      if(bluePowerPoseBtn){ bluePowerPoseBtn.onclick = function(){ openColorActivityScreen(bluePowerPoseScreen, 'blue'); }; }
      if(blueShakeOutBtn){ blueShakeOutBtn.onclick = function(){ openColorActivityScreen(blueShakeOutScreen, 'blue'); }; }
      if(blueHighKneesBtn){ blueHighKneesBtn.onclick = function(){ openColorActivityScreen(blueHighKneesScreen, 'blue'); }; }
      if(blueAnimalMovesBtn){ blueAnimalMovesBtn.onclick = function(){ openColorActivityScreen(blueAnimalMovesScreen, 'blue'); }; }
      if(blueFastFeetBtn){ blueFastFeetBtn.onclick = function(){ openColorActivityScreen(blueFastFeetScreen, 'blue'); }; }
      if(blueSleepToolsBtn){
        blueSleepToolsBtn.onclick = function(){
          showScreen(sleepScreen);
        };
      }
      if(blueProblemSolverBtn){
        blueProblemSolverBtn.onclick = function(){
          showScreen(helpScreen);
        };
      }
      if(redWorryNinjaBtn){
        redWorryNinjaBtn.onclick = function(){
          showScreen(worryManager);
        };
      }

      if(blueStartRandomExerciseBtn){
        blueStartRandomExerciseBtn.onclick = function(){
          fromRedActivities = true;
          currentActivityColor = 'blue';
          showScreen(getMovingScreen);
          setMovingActivity();
        };
      }

      [
        ['blueGetMovingScreen', 'blueGetMovingNext'],
        ['blueDanceSongScreen', 'blueDanceSongNext'],
        ['blueObstacleCourseScreen', 'blueObstacleCourseNext'],
        ['blueSpinAroundScreen', 'blueSpinAroundNext'],
        ['blueJumpingJacksScreen', 'blueJumpingJacksNext'],
        ['bluePowerPoseScreen', 'bluePowerPoseNext'],
        ['blueShakeOutScreen', 'blueShakeOutNext'],
        ['blueHighKneesScreen', 'blueHighKneesNext'],
        ['blueAnimalMovesScreen', 'blueAnimalMovesNext'],
        ['blueFastFeetScreen', 'blueFastFeetNext']
      ].forEach(function(pair){
        const screen = document.getElementById(pair[0]);
        const button = document.getElementById(pair[1]);
        if(button && screen){
          button.onclick = function(){ revealColorActivityReflection(screen); };
        }
      });

      if(completeBlueGetMoving){ completeBlueGetMoving.onclick = function(){ completeColorActivityScreen(blueGetMovingScreen); }; }
      if(completeBlueDanceSong){ completeBlueDanceSong.onclick = function(){ completeColorActivityScreen(blueDanceSongScreen); }; }
      if(completeBlueObstacleCourse){ completeBlueObstacleCourse.onclick = function(){ completeColorActivityScreen(blueObstacleCourseScreen); }; }
      if(completeBlueSpinAround){ completeBlueSpinAround.onclick = function(){ completeColorActivityScreen(blueSpinAroundScreen); }; }
      if(completeBlueJumpingJacks){ completeBlueJumpingJacks.onclick = function(){ completeColorActivityScreen(blueJumpingJacksScreen); }; }
      if(completeBluePowerPose){ completeBluePowerPose.onclick = function(){ completeColorActivityScreen(bluePowerPoseScreen); }; }
      if(completeBlueShakeOut){ completeBlueShakeOut.onclick = function(){ completeColorActivityScreen(blueShakeOutScreen); }; }
      if(completeBlueHighKnees){ completeBlueHighKnees.onclick = function(){ completeColorActivityScreen(blueHighKneesScreen); }; }
      if(completeBlueAnimalMoves){ completeBlueAnimalMoves.onclick = function(){ completeColorActivityScreen(blueAnimalMovesScreen); }; }
      if(completeBlueFastFeet){ completeBlueFastFeet.onclick = function(){ completeColorActivityScreen(blueFastFeetScreen); }; }

      if(greenShareWinBtn){ greenShareWinBtn.onclick = function(){ openColorActivityScreen(greenShareWinScreen, 'green'); }; }
      if(greenHelpSomeoneBtn){ greenHelpSomeoneBtn.onclick = function(){ openColorActivityScreen(greenHelpSomeoneScreen, 'green'); }; }
      if(greenThankYouNoteBtn){ greenThankYouNoteBtn.onclick = function(){ openColorActivityScreen(greenThankYouNoteScreen, 'green'); }; }
      if(greenDanceSongBtn){ greenDanceSongBtn.onclick = function(){ openColorActivityScreen(greenDanceSongScreen, 'green'); }; }
      if(greenKindMessageBtn){ greenKindMessageBtn.onclick = function(){ openColorActivityScreen(greenKindMessageScreen, 'green'); }; }
      if(greenNatureWalkBtn){ greenNatureWalkBtn.onclick = function(){ openColorActivityScreen(greenNatureWalkScreen, 'green'); }; }
      if(greenGratitudeListBtn){ greenGratitudeListBtn.onclick = function(){ openColorActivityScreen(greenGratitudeListScreen, 'green'); }; }
      if(greenBreathingBuddyBtn){ greenBreathingBuddyBtn.onclick = function(){ openColorActivityScreen(greenBreathingBuddyScreen, 'green'); }; }
      if(greenCelebratePersonBtn){ greenCelebratePersonBtn.onclick = function(){ openColorActivityScreen(greenCelebratePersonScreen, 'green'); }; }
      if(greenActsPlanBtn){ greenActsPlanBtn.onclick = function(){ openColorActivityScreen(greenActsPlanScreen, 'green'); }; }
      if(greenPositiveMemoryBtn){ greenPositiveMemoryBtn.onclick = function(){ openColorActivityScreen(greenPositiveMemoryScreen, 'green'); }; }
      if(greenComplimentSelfBtn){ greenComplimentSelfBtn.onclick = function(){ openColorActivityScreen(greenComplimentSelfScreen, 'green'); }; }

      [
        ['greenShareWinScreen', 'greenShareWinNext'],
        ['greenHelpSomeoneScreen', 'greenHelpSomeoneNext'],
        ['greenThankYouNoteScreen', 'greenThankYouNoteNext'],
        ['greenDanceSongScreen', 'greenDanceSongNext'],
        ['greenKindMessageScreen', 'greenKindMessageNext'],
        ['greenNatureWalkScreen', 'greenNatureWalkNext'],
        ['greenGratitudeListScreen', 'greenGratitudeListNext'],
        ['greenBreathingBuddyScreen', 'greenBreathingBuddyNext'],
        ['greenCelebratePersonScreen', 'greenCelebratePersonNext'],
        ['greenActsPlanScreen', 'greenActsPlanNext'],
        ['greenPositiveMemoryScreen', 'greenPositiveMemoryNext'],
        ['greenComplimentSelfScreen', 'greenComplimentSelfNext']
      ].forEach(function(pair){
        const screen = document.getElementById(pair[0]);
        const button = document.getElementById(pair[1]);
        if(button && screen){
          button.onclick = function(){ revealColorActivityReflection(screen); };
        }
      });

      if(completeGreenShareWin){ completeGreenShareWin.onclick = function(){ completeColorActivityScreen(greenShareWinScreen); }; }
      if(completeGreenHelpSomeone){ completeGreenHelpSomeone.onclick = function(){ completeColorActivityScreen(greenHelpSomeoneScreen); }; }
      if(completeGreenThankYouNote){ completeGreenThankYouNote.onclick = function(){ completeColorActivityScreen(greenThankYouNoteScreen); }; }
      if(completeGreenDanceSong){ completeGreenDanceSong.onclick = function(){ completeColorActivityScreen(greenDanceSongScreen); }; }
      if(completeGreenKindMessage){ completeGreenKindMessage.onclick = function(){ completeColorActivityScreen(greenKindMessageScreen); }; }
      if(completeGreenNatureWalk){ completeGreenNatureWalk.onclick = function(){ completeColorActivityScreen(greenNatureWalkScreen); }; }
      if(completeGreenGratitudeList){ completeGreenGratitudeList.onclick = function(){ completeColorActivityScreen(greenGratitudeListScreen); }; }
      if(completeGreenBreathingBuddy){ completeGreenBreathingBuddy.onclick = function(){ completeColorActivityScreen(greenBreathingBuddyScreen); }; }
      if(completeGreenCelebratePerson){ completeGreenCelebratePerson.onclick = function(){ completeColorActivityScreen(greenCelebratePersonScreen); }; }
      if(completeGreenActsPlan){ completeGreenActsPlan.onclick = function(){ completeColorActivityScreen(greenActsPlanScreen); }; }
      if(completeGreenPositiveMemory){ completeGreenPositiveMemory.onclick = function(){ completeColorActivityScreen(greenPositiveMemoryScreen); }; }
      if(completeGreenComplimentSelf){ completeGreenComplimentSelf.onclick = function(){ completeColorActivityScreen(greenComplimentSelfScreen); }; }

      if(blueYes){ 
        blueYes.onclick = function(){ 
          hideModal(bluePromptModal); 
          showCelebration(function(){
            showScreen(homeScreen);
          });
        }; 
      }
      if(blueABit){ blueABit.onclick = function(){ hideModal(bluePromptModal); showScreen(blueActivitiesScreen); }; }
      if(blueNo){ blueNo.onclick = function(){ hideModal(bluePromptModal); showScreen(blueActivitiesScreen); }; }
      if(blueResultOk){
        blueResultOk.onclick = function(){
          const message = blueResultText ? blueResultText.textContent : '';
          hideModal(blueResultModal);
          if(message.indexOf('Try a different activity') === 0){ showScreen(blueActivitiesScreen); }
          if(message.indexOf('Well done!') === 0){ showScreen(homeScreen); }
        };
      }

      console.log('Quest wheels found:', questWheels ? questWheels.length : 0);
      if(questWheels && questWheels.length){
        questWheels.forEach(function(svg){
          console.log('Building wheel for:', svg.dataset.quest);
          buildQuestWheel(svg);
        });
        console.log('Quest wheels built successfully');
      } else {
        console.error('No quest wheels found in DOM');
      }

      function buildBookQuestWheels(){
        if(!bookQuestGrid) return;
        bookQuestGrid.innerHTML = '';
        bookChapters.forEach(function(chapter){
          const card = document.createElement('div');
          card.className = 'quest-card book-quest-card';
          const wheel = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          wheel.setAttribute('viewBox', '0 0 120 120');
          wheel.setAttribute('role', 'group');
          wheel.setAttribute('aria-label', chapter.title + ' activities');
          wheel.classList.add('quest-wheel', 'book-quest-wheel');
          const stateKey = 'book_mission_' + chapter.id;
          let completeState = [];
          try { completeState = JSON.parse(localStorage.getItem(stateKey) || '[]'); } catch (error) { completeState = []; }
          if(!Array.isArray(completeState)) completeState = [];
          completeState = Array.from({ length: 10 }, function(_, index){ return completeState[index] === true; });
          const total = 10;
          completeState.length = total;
          const cx = 60, cy = 60, rOuter = 50, rInner = 32, gap = 3;
          for(let index = 0; index < total; index++){
            const start = index * (360 / total) - 90 + gap / 2;
            const end = start + (360 / total) - gap;
            const largeArc = end - start <= 180 ? 0 : 1;
            const polar = function(radius, angle){
              const radians = (Math.PI / 180) * angle;
              return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
            };
            const p1 = polar(rOuter, start), p2 = polar(rOuter, end), p3 = polar(rInner, end), p4 = polar(rInner, start);
            const segment = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            segment.setAttribute('d', `M ${p1.x} ${p1.y} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y} Z`);
            segment.setAttribute('role', 'button');
            segment.setAttribute('tabindex', '0');
            segment.setAttribute('aria-label', chapter.title + ', activity ' + (index + 1));
            segment.classList.add('quest-segment', 'book-quest-segment');
            if(completeState[index]) segment.classList.add('completed');
            if(index === completeState.indexOf(false)) segment.classList.add('flashing');
            const activityIndex = index % chapter.activities.length;
            const activityRound = Math.floor(index / chapter.activities.length);
            const openActivity = function(){
              const nextIncomplete = completeState.indexOf(false);
              if(!completeState[index] && index !== nextIncomplete) return;
              openBookActivity(chapter, index, activityIndex, activityRound, completeState[index]);
            };
            if(!completeState[index] && index !== completeState.indexOf(false)){
              segment.setAttribute('aria-disabled', 'true');
              segment.setAttribute('tabindex', '-1');
              segment.classList.add('locked');
            }
            segment.addEventListener('click', openActivity);
            segment.addEventListener('keydown', function(event){
              if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); openActivity(); }
            });
            wheel.appendChild(segment);
          }
          const title = document.createElement('div');
          title.className = 'quest-title';
          title.textContent = chapter.title;
          card.appendChild(wheel);
          card.appendChild(title);
          bookQuestGrid.appendChild(card);
        });
      }

      function getBookActivitySteps(activity, round){
        const title = activity[0];
        const prompt = activity[1];
        const options = activity[2];
        if(options){
          return [
            { type: 'choice', prompt: prompt, options: options, correct: activity[3] },
            { type: 'yesno', prompt: 'Would this choice help in a similar situation?', options: ['Yes', 'No'] },
            { type: 'text', prompt: 'Explain why you chose that answer. What might you try in real life?' }
          ];
        }
        const isDrawTask = /draw|portrait|card|sketch|colour/i.test(title + ' ' + prompt);
        const isMatchTask = /match|cards|sort|scale/i.test(title);
        const reflectionSteps = [
          { type: isDrawTask ? 'draw' : 'text', prompt: prompt },
          isMatchTask
            ? { type: 'match', prompt: 'Match each clue with the choice that fits best.', pairs: [['Body feels tense', 'A feeling may be growing'], ['Need some quiet', 'A sensory break may help'], ['Someone feels left out', 'An inclusion choice may help']] }
            : { type: 'yesno', prompt: 'Would trying this again or using this idea help you?', options: ['Yes', 'Not sure', 'No'] },
          { type: 'text', prompt: 'What is one thing you want to remember from this activity?' }
        ];
        if(round === 1){
          reflectionSteps[0] = { type: isDrawTask ? 'draw' : 'text', prompt: title + ': ' + prompt };
        }
        return reflectionSteps;
      }

      function buildBookActivityInput(step, responseWrap){
        if(step.type === 'choice' || step.type === 'yesno'){
          const choices = Array.from(step.options || []);
          const isTrueFalse = choices.length === 2 && choices.some(function(value){ return String(value).trim().toLowerCase() === 'true'; }) && choices.some(function(value){ return String(value).trim().toLowerCase() === 'false'; });
          // Shuffle ordinary answers, but keep the requested True-then-False exception.
          const orderedChoices = isTrueFalse
            ? choices.sort(function(a, b){ return String(a).toLowerCase() === 'true' ? -1 : String(b).toLowerCase() === 'true' ? 1 : 0; })
            : shuffledCopy(choices);
          orderedChoices.forEach(function(choice){
            const label = document.createElement('label');
            label.className = 'book-activity-choice';
            const input = document.createElement('input');
            // These are single-answer questions; radio buttons prevent selecting both Yes and No.
            input.type = 'radio';
            input.name = 'bookActivityChoice';
            input.value = choice;
            label.append(input, document.createTextNode(choice));
            responseWrap.appendChild(label);
          });
          return;
        }
        if(step.type === 'match'){
          const matchOptions = shuffledCopy(step.pairs.map(function(pair){ return pair[1]; }));
          step.pairs.forEach(function(pair, index){
            const row = document.createElement('div');
            row.className = 'book-match-row';
            const prompt = document.createElement('span');
            prompt.textContent = pair[0];
            const select = document.createElement('select');
            select.setAttribute('aria-label', 'Match for ' + pair[0]);
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = 'Choose a match';
            select.appendChild(placeholder);
            matchOptions.forEach(function(option){
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.textContent = option;
              select.appendChild(optionElement);
            });
            select.dataset.matchIndex = String(index);
            row.append(prompt, select);
            responseWrap.appendChild(row);
          });
          return;
        }
        if(step.type === 'draw'){
          const canvas = document.createElement('canvas');
          canvas.className = 'book-draw-canvas';
          canvas.width = 600;
          canvas.height = 300;
          canvas.setAttribute('aria-label', 'Drawing area for this activity');
          responseWrap.appendChild(canvas);
          setupBookDrawingCanvas(canvas);
          const text = document.createElement('textarea');
          text.className = 'book-activity-text';
          text.rows = 3;
          text.placeholder = 'Describe your drawing or add a few words...';
          text.setAttribute('aria-label', 'Describe your drawing');
          responseWrap.appendChild(text);
          return;
        }
        const textarea = document.createElement('textarea');
        textarea.className = 'book-activity-text';
        textarea.rows = 4;
        textarea.placeholder = 'Write a few words...';
        textarea.setAttribute('aria-label', 'Your response');
        responseWrap.appendChild(textarea);
      }

      function setupBookDrawingCanvas(canvas){
        const context = canvas.getContext('2d');
        if(!context) return;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.lineWidth = 4;
        context.lineCap = 'round';
        context.strokeStyle = '#1fa7a7';
        let drawing = false;
        canvas.addEventListener('pointerdown', function(event){
          const rect = canvas.getBoundingClientRect();
          drawing = true;
          context.beginPath();
          context.moveTo((event.clientX - rect.left) * canvas.width / rect.width, (event.clientY - rect.top) * canvas.height / rect.height);
          canvas.dataset.drawn = 'true';
          canvas.setPointerCapture(event.pointerId);
        });
        canvas.addEventListener('pointermove', function(event){
          if(!drawing) return;
          const rect = canvas.getBoundingClientRect();
          context.lineTo((event.clientX - rect.left) * canvas.width / rect.width, (event.clientY - rect.top) * canvas.height / rect.height);
          context.stroke();
        });
        canvas.addEventListener('pointerup', function(){ drawing = false; });
        canvas.addEventListener('pointercancel', function(){ drawing = false; });
      }

      function openBookActivity(chapter, wheelIndex, activityIndex, activityRound, isComplete){
        const activity = chapter.activities[activityIndex];
        const steps = getBookActivitySteps(activity, activityRound);
        let savedSteps = [];
        try { savedSteps = JSON.parse(localStorage.getItem('book_mission_' + chapter.id + '_steps_' + wheelIndex) || '[]'); } catch (error) { savedSteps = []; }
        if(!Array.isArray(savedSteps)) savedSteps = [];
        const firstUnfinishedStep = [0, 1, 2].find(function(index){ return savedSteps[index] !== true; });
        const stepIndex = typeof firstUnfinishedStep === 'number' ? firstUnfinishedStep : 0;
        bookActivityTitle.textContent = chapter.title + ' | Activity ' + (wheelIndex + 1) + ': ' + activity[0];
        bookActivityScreen.dataset.chapter = chapter.id;
        bookActivityScreen.dataset.index = String(wheelIndex);
        bookActivityScreen.dataset.round = String(activityRound);
        bookActivityScreen.dataset.step = String(stepIndex);
        bookActivityScreen.dataset.complete = isComplete ? 'true' : 'false';
        renderBookActivityStep(steps, stepIndex);
        completeBookActivityBtn.textContent = isComplete ? 'Activity completed' : stepIndex === 2 ? 'Complete activity (+50 ZP)' : 'Next activity';
        completeBookActivityBtn.disabled = Boolean(isComplete);
        showScreen(bookActivityScreen);
      }

      function renderBookActivityStep(steps, stepIndex){
        const step = steps[stepIndex];
        bookActivityProgress.textContent = 'Activity ' + (stepIndex + 1) + ' of 3';
        bookActivityPrompt.textContent = step.prompt;
        bookActivityResponse.replaceChildren();
        bookActivityFeedback.textContent = '';
        buildBookActivityInput(step, bookActivityResponse);
        completeBookActivityBtn.textContent = stepIndex === 2 ? 'Complete activity (+50 ZP)' : 'Next activity';
        completeBookActivityBtn.disabled = false;
      }

      function validateBookActivityStep(step){
        if(step.type === 'choice'){
          const selected = bookActivityResponse.querySelector('input[name="bookActivityChoice"]:checked');
          if(!selected){ bookActivityFeedback.textContent = 'Choose an answer first.'; return false; }
          if(step.correct && selected.value !== step.correct){ bookActivityFeedback.textContent = 'Not quite. Have another think and try again.'; return false; }
          return true;
        }
        if(step.type === 'yesno'){
          const selected = bookActivityResponse.querySelector('input[name="bookActivityChoice"]:checked');
          if(!selected){ bookActivityFeedback.textContent = 'Choose an answer first.'; return false; }
          return true;
        }
        if(step.type === 'match'){
          const selects = Array.from(bookActivityResponse.querySelectorAll('select'));
          if(selects.some(function(select){ return !select.value; })){ bookActivityFeedback.textContent = 'Choose a match for each clue.'; return false; }
          const answers = selects.map(function(select){ return select.value; });
          if(new Set(answers).size !== answers.length){ bookActivityFeedback.textContent = 'Use each match once.'; return false; }
          const allCorrect = selects.every(function(select){
            const pair = step.pairs[Number(select.dataset.matchIndex)];
            return pair && select.value === pair[1];
          });
          if(!allCorrect){ bookActivityFeedback.textContent = 'Some matches do not fit yet. Have another look and try again.'; return false; }
          return true;
        }
        const text = Array.from(bookActivityResponse.querySelectorAll('textarea')).map(function(field){ return field.value.trim(); }).join('');
        const hasDrawing = bookActivityResponse.querySelector('canvas') && bookActivityResponse.querySelector('canvas').dataset.drawn === 'true';
        if(text.length < 3 && !hasDrawing){ bookActivityFeedback.textContent = 'Write a few words or add something to the drawing.'; return false; }
        return true;
      }

      if(bookActivityBackBtn){
        bookActivityBackBtn.addEventListener('click', function(){ showScreen(missionsScreen); });
      }

      if(completeBookActivityBtn){
        completeBookActivityBtn.addEventListener('click', function(){
          const chapterId = bookActivityScreen.dataset.chapter;
          const wheelIndex = Number(bookActivityScreen.dataset.index);
          const activityRound = Number(bookActivityScreen.dataset.round);
          const stepIndex = Number(bookActivityScreen.dataset.step);
          const chapter = bookChapters.find(function(item){ return item.id === chapterId; });
          if(!chapter || !Number.isInteger(wheelIndex) || !Number.isInteger(stepIndex)) return;
          if(bookActivityScreen.dataset.complete === 'true') return;
          const activityIndex = wheelIndex % chapter.activities.length;
          const steps = getBookActivitySteps(chapter.activities[activityIndex], activityRound);
          if(!validateBookActivityStep(steps[stepIndex])) return;
          const stepStateKey = 'book_mission_' + chapter.id + '_steps_' + wheelIndex;
          let completedSteps = [];
          try { completedSteps = JSON.parse(localStorage.getItem(stepStateKey) || '[]'); } catch (error) { completedSteps = []; }
          if(!Array.isArray(completedSteps)) completedSteps = [];
          completedSteps[stepIndex] = true;
          localStorage.setItem(stepStateKey, JSON.stringify(completedSteps));
          if(stepIndex < 2){
            bookActivityScreen.dataset.step = String(stepIndex + 1);
            renderBookActivityStep(steps, stepIndex + 1);
            return;
          }
          const stateKey = 'book_mission_' + chapter.id;
          let completeState = [];
          try { completeState = JSON.parse(localStorage.getItem(stateKey) || '[]'); } catch (error) { completeState = []; }
          if(!Array.isArray(completeState)) completeState = [];
          completeState = Array.from({ length: 10 }, function(_, index){ return completeState[index] === true; });
          if(completeState[wheelIndex]) return;
          completeState[wheelIndex] = true;
          localStorage.setItem(stateKey, JSON.stringify(completeState));
          localStorage.removeItem(stepStateKey);
          let circleBonus = 0;
          if(completeState.every(Boolean)){
            const rewardKey = 'book_mission_' + chapter.id + '_circle_rewarded';
            if(localStorage.getItem(rewardKey) !== 'true'){
              circleBonus = 1000;
              localStorage.setItem(rewardKey, 'true');
            }
          }
          bookActivityScreen.dataset.complete = 'true';
          buildBookQuestWheels();
          bookActivityFeedback.textContent = circleBonus
            ? 'You completed every activity in this mission circle! Enjoy your bonus reward.'
            : 'Amazing work! You finished all three activities.';
          completeBookActivityBtn.textContent = 'Activity completed';
          completeBookActivityBtn.disabled = true;
          // Award immediately after completion is saved, so leaving or
          // refreshing cannot strand the child with completed progress but no ZP.
          // showCelebration handles the coin award; do not awardCoins separately.
          showCelebration(function(){
            bookActivityScreen.dataset.complete = 'false';
            showScreen(missionsScreen);
          }, 50 + circleBonus, circleBonus
            ? 'Mission complete — you earned 50 ZP and a 1,000 ZP circle bonus!'
            : 'You earned 50 ZP for completing all three activities. Well done!');
        });
      }
      buildBookQuestWheels();

      // Add flashing to Social Norm Detective title
      const questTitles = document.querySelectorAll('.quest-title');
      questTitles.forEach(function(title){
        if(title.textContent === 'Social Norm Detective'){
          title.classList.add('flashing');
        }
      });

      // feelings selection (same screen as reason input)
      checkinFeelings.forEach(function(btn){
        btn.onclick = function(){
          selectedCheckinFeeling = (btn.textContent || '').trim();
          checkinFeelings.forEach(function(otherBtn){ otherBtn.classList.remove('selected'); });
          btn.classList.add('selected');
        };
      });

      // submit reason
      submitReason.onclick = function(){
        if (!selectedCheckinFeeling && !(otherCheckinFeeling && otherCheckinFeeling.value.trim())) {
          return;
        }
        selectedCheckinFeeling = '';
        checkinFeelings.forEach(function(btn){ btn.classList.remove('selected'); });
        if(otherCheckinFeeling) otherCheckinFeeling.value = '';
        const reason = document.getElementById('reasonText');
        if(reason){ reason.value = ''; reason.dispatchEvent(new Event('input', { bubbles: true })); }
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        }, 10, 'Thank you so much for sharing 💛');
      };
      
      function startBreathingCycle(){
        stopBreathingCycle();
        stopSquareCycle();
        if(!breathingText) return;
        const generation = breathingCycleGeneration;
        breathCount = 0;
        const breatheIn = 4000;
        const hold = 2000;
        const breatheOut = 4000;
        const cycleMs = breatheIn + hold + breatheOut + hold; // 12s total
        const run = function(){
          // Breathe in phase (4s)
          breathingText.textContent = 'Breathe in';
          breathingText.classList.add('flash');
          setTimeout(function(){
            if(generation !== breathingCycleGeneration) return;
            // Hold phase (2s)
            breathingText.textContent = 'Hold';
            breathingText.classList.remove('flash');
            setTimeout(function(){
              if(generation !== breathingCycleGeneration) return;
              // Breathe out phase (4s)
              breathingText.textContent = 'Breathe out';
              breathingText.classList.add('flash');
              setTimeout(function(){
                if(generation !== breathingCycleGeneration) return;
                // Hold phase (2s)
                breathingText.textContent = 'Hold';
                breathingText.classList.remove('flash');
                setTimeout(function(){
                  if(generation !== breathingCycleGeneration) return;
                  breathCount++;
                  if(breathCount >= 5){
                    stopBreathingCycle();
                    completeBreathingActivityNow();
                  }
                }, hold);
              }, breatheOut);
            }, hold);
          }, breatheIn);
        };
        run();
        breathingTimer = setInterval(run, cycleMs);
      }

      function stopBreathingCycle(){
        breathingCycleGeneration++;
        if(breathingTimer){ clearInterval(breathingTimer); breathingTimer = null; }
        breathCount = 0;
      }

      function playBeep(frequency, duration){
        if(!soundEnabled) return;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
      }

      function playTimerAlarm(){
        if(!soundEnabled) return;
        try{
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if(!AudioCtx) return;
          const context = new AudioCtx();
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          const now = context.currentTime;
          oscillator.type = 'triangle';
          oscillator.frequency.setValueAtTime(520, now);
          oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.38);
          oscillator.frequency.exponentialRampToValueAtTime(560, now + 0.78);
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
          gain.gain.setValueAtTime(0.22, now + 0.58);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.82);
          oscillator.connect(gain);
          gain.connect(context.destination);
          oscillator.start(now);
          oscillator.stop(now + 0.84);
          setTimeout(function(){ try{ context.close(); }catch(error){} }, 1200);
        }catch(error){}
      }

      function startHotChocolateBreathing(){
        stopHotChocolateBreathing();
        if(!hotChocolateText) return;
        const generation = hotChocolateCycleGeneration;
        let count = 0;
        const breatheIn = 4000;
        const hold = 2000;
        const breatheOut = 4000;
        const cycleMs = breatheIn + hold + breatheOut + hold; // 12s total
        const run = function(){
          // Breathe in phase (4s)
          hotChocolateText.textContent = 'Hold your pretend mug. Breathe in slowly through your nose and smell the warm chocolate for 4 seconds.';
          hotChocolateText.classList.add('flash');
          setTimeout(function(){
            if(generation !== hotChocolateCycleGeneration) return;
            // Hold phase (2s)
            hotChocolateText.textContent = 'Hold.';
            hotChocolateText.classList.remove('flash');
            setTimeout(function(){
              if(generation !== hotChocolateCycleGeneration) return;
              // Breathe out phase (4s)
              hotChocolateText.textContent = 'Breathe out slowly through your mouth, as if gently blowing across the hot chocolate, for 4 seconds.';
              hotChocolateText.classList.add('flash');
              setTimeout(function(){
                if(generation !== hotChocolateCycleGeneration) return;
                // Hold phase (2s)
                hotChocolateText.textContent = 'Hold.';
                hotChocolateText.classList.remove('flash');
                setTimeout(function(){
                  if(generation !== hotChocolateCycleGeneration) return;
                  count++;
                  if(count >= 5){
                    stopHotChocolateBreathing();
                    completeBreathingActivityNow();
                  }
                }, hold);
              }, breatheOut);
            }, hold);
          }, breatheIn);
        };
        run();
        hotChocolateTimer = setInterval(run, cycleMs);
      }

      function stopHotChocolateBreathing(){
        hotChocolateCycleGeneration++;
        if(hotChocolateTimer){ clearInterval(hotChocolateTimer); hotChocolateTimer = null; }
      }

      function startSquareCycle(){
        stopSquareCycle();
        if(!squareSides || !squareSides.length) return;
        const steps = ['Breathe in for 4', 'Gently pause for 4', 'Breathe out for 4', 'Gently pause for 4'];
        let step = 0;
        const showStep = function(){
          squareSides.forEach(function(side){ side.classList.remove('active'); });
          squareSides[step].classList.add('active');
          if(breathingText) breathingText.textContent = steps[step];
          step = (step + 1) % steps.length;
        };
        showStep();
        squareTimer = setInterval(showStep, 4000);
      }

      function stopSquareCycle(){
        if(squareTimer){ clearInterval(squareTimer); squareTimer = null; }
        if(squareSides && squareSides.length){ squareSides.forEach(function(side){ side.classList.remove('active'); }); }
      }

      function stopPushWallTimer(){
        if(pushWallTimerInterval){
          clearInterval(pushWallTimerInterval);
          pushWallTimerInterval = null;
        }
      }

      function stopMeditateTimer(){
        if(meditateTimerInterval){
          clearInterval(meditateTimerInterval);
          meditateTimerInterval = null;
        }
      }

      function startPushWallTimer(){
        stopPushWallTimer();
        pushWallTimeLeft = 60;
        if(pushWallTimerDisplay){
          pushWallTimerDisplay.textContent = String(pushWallTimeLeft);
        }
        pushWallTimerInterval = setInterval(function(){
          pushWallTimeLeft--;
          if(pushWallTimerDisplay){
            pushWallTimerDisplay.textContent = String(Math.max(0, pushWallTimeLeft));
          }
          if(pushWallTimeLeft <= 0){
            stopPushWallTimer();
            if(soundEnabled){
              playBeep(800, 100);
              setTimeout(function(){ playBeep(800, 100); }, 150);
              setTimeout(function(){ playBeep(800, 100); }, 300);
            }
          }
        }, 1000);
      }

      function stopBlueSpinTimer(){
        if(blueSpinTimerInterval){
          clearInterval(blueSpinTimerInterval);
          blueSpinTimerInterval = null;
        }
      }

      function startBlueSpinTimer(){
        stopBlueSpinTimer();
        blueSpinTimeLeft = 60;
        if(blueSpinTimerDisplay){
          blueSpinTimerDisplay.textContent = String(blueSpinTimeLeft);
        }
        blueSpinTimerInterval = setInterval(function(){
          blueSpinTimeLeft--;
          if(blueSpinTimerDisplay){
            blueSpinTimerDisplay.textContent = String(Math.max(0, blueSpinTimeLeft));
          }
          if(blueSpinTimeLeft <= 0){
            stopBlueSpinTimer();
            if(soundEnabled){
              playBeep(800, 100);
              setTimeout(function(){ playBeep(800, 100); }, 150);
              setTimeout(function(){ playBeep(800, 100); }, 300);
            }
          }
        }, 1000);
      }

      function startMeditateTimer(){
        stopMeditateTimer();
        meditateTimeLeft = 60;
        if(meditateTimerDisplay){
          meditateTimerDisplay.textContent = String(meditateTimeLeft);
        }
        meditateTimerInterval = setInterval(function(){
          meditateTimeLeft--;
          if(meditateTimerDisplay){
            meditateTimerDisplay.textContent = String(Math.max(0, meditateTimeLeft));
          }
          if(meditateTimeLeft <= 0){
            stopMeditateTimer();
            if(soundEnabled){
              playBeep(800, 100);
              setTimeout(function(){ playBeep(800, 100); }, 150);
              setTimeout(function(){ playBeep(800, 100); }, 300);
            }
          }
        }, 1000);
      }

      function handleRedActivityCompletion(){
        if(!fromRedActivities) return false;
        fromRedActivities = false;
        if(currentActivityColor === 'blue'){
          showScreen(blueActivitiesScreen);
          showModal(bluePromptModal);
          return true;
        }

        function showProblemDistractionCheckIn(){
          problemSolverActivityInProgress = false;
          problemDistractionCheckIn = true;
          showScreen(problemNoScreen);
          showModal(redPromptModal);
        }
        if(currentActivityColor === 'green'){
          showCelebration(function(){
            showScreen(homeScreen);
          });
          return true;
        }
        showScreen(redActivitiesScreen);
        showModal(redPromptModal);
        return true;
      }

      const missionProgressByScreenId = {
        feelingDetectiveIntro: { label: 'Feeling Detective', step: 1, total: 2 },
        feelingActivityScreen: { label: 'Feeling Detective', step: 2, total: 2 },
        communicationDetectiveIntro: { label: 'Communication Detective', step: 1, total: 3 },
        communicationActivityScreen: { label: 'Communication Detective', step: 2, total: 3 },
        communicationResultsScreen: { label: 'Communication Detective', step: 3, total: 3 },
        identityDetectiveIntro: { label: 'Identity Detective', step: 1, total: 2 },
        identityActivityScreen: { label: 'Identity Detective', step: 2, total: 2 },
        mindsetDetectiveIntro: { label: 'Mindset Detective', step: 1, total: 2 },
        mindsetActivityScreen: { label: 'Mindset Detective', step: 2, total: 2 },
        friendshipDetectiveIntro: { label: 'Friendship Detective', step: 1, total: 2 },
        friendshipActivityScreen: { label: 'Friendship Detective', step: 2, total: 2 }
      };

      let missionProgressIndicatorEl = null;

      function ensureMissionProgressIndicator() {
        if (missionProgressIndicatorEl && missionProgressIndicatorEl.isConnected) {
          return missionProgressIndicatorEl;
        }
        const container = document.createElement('div');
        container.className = 'mission-progress-indicator';
        container.innerHTML = '' +
          '<div class="mission-progress-label" id="missionProgressLabel"></div>' +
          '<div class="mission-progress-track"><div class="mission-progress-fill" id="missionProgressFill"></div></div>';
        missionProgressIndicatorEl = container;
        return missionProgressIndicatorEl;
      }

      function updateMissionProgressIndicator(screen) {
        const indicator = ensureMissionProgressIndicator();
        const screenId = screen && screen.id ? screen.id : '';
        const progressMeta = missionProgressByScreenId[screenId];

        if (!progressMeta || !screen) {
          indicator.style.display = 'none';
          return;
        }

        const labelEl = indicator.querySelector('#missionProgressLabel');
        const fillEl = indicator.querySelector('#missionProgressFill');
        if (labelEl) {
          labelEl.textContent = progressMeta.label + ' - Step ' + progressMeta.step + ' of ' + progressMeta.total;
        }
        if (fillEl) {
          const pct = Math.max(0, Math.min(100, Math.round((progressMeta.step / progressMeta.total) * 100)));
          fillEl.style.width = pct + '%';
        }

        if (indicator.parentElement !== screen) {
          screen.insertBefore(indicator, screen.firstChild);
        }
        indicator.style.display = 'block';
      }

      function showScreen(screen){
        if(activeQuestActivity &&
          ['friendship', 'feeling', 'communication', 'identity', 'mindset', 'sensory', 'thought', 'conflict'].indexOf(activeQuestActivity.questId) >= 0 &&
          (!screen || ['friendshipActivityScreen', 'feelingActivityScreen', 'communicationActivityScreen', 'communicationResultsScreen', 'identityActivityScreen', 'mindsetActivityScreen', 'circleFollowupScreen'].indexOf(screen.id) < 0)){
          cancelActiveQuestActivity();
        }
        if(allScreens && allScreens.length){
          allScreens.forEach(function(s){ s.style.display = 'none'; });
        }
        if(screen){ 
          screen.style.display = (screen === petShop || screen === toolboxScreen) ? 'flex' : 'block';
        }
        const missionScreens = ['friendshipActivityScreen', 'feelingActivityScreen', 'communicationActivityScreen', 'identityActivityScreen', 'mindsetActivityScreen', 'circleFollowupScreen', 'socialActivityScreen', 'emotionActivityScreen', 'emotionsDrawScreen', 'emotionsMatchingScreen', 'emotionsTriggerScreen', 'emotionsNeedsScreen', 'emotionsCueSortScreen', 'emotionSummaryScreen'];
        if(activeQuestActivity && screen && missionScreens.indexOf(screen.id) >= 0 && circleSegmentTitles[activeQuestActivity.questId]){
          const heading = screen.querySelector('h1');
          if(heading) heading.textContent = circleSegmentTitles[activeQuestActivity.questId][activeQuestActivity.index];
        }
        updateMissionProgressIndicator(screen);
        updateCircleActivityTracker(screen);
        if (screen !== zenzyMiniGamesScreen) {
          clearMiniGameRuntime();
        }
        if (movingTimerInterval) {
          clearInterval(movingTimerInterval);
          movingTimerInterval = null;
        }
        stopHotChocolateBreathing();
        if (problemNoTimeout) {
          clearTimeout(problemNoTimeout);
          problemNoTimeout = null;
        }
        stopPushWallTimer();
        stopMeditateTimer();
        stopBlueSpinTimer();
        stopSquareCycle();
        stopBreathingCycle();
        scheduleBubbleTextFit();
        if(screen === homeScreen){
          setupScrollListener();
          setTimeout(scrollHomeToCurrentStar, 0);
        }
        requestAnimationFrame(updateZenzyAppearancePosition);
        saveRefreshState();
      }

      function showModal(modal){
        if(modal){ modal.style.display = 'flex'; }
        saveRefreshState();
      }

      function hideModal(modal){
        if(modal){ modal.style.display = 'none'; }
        saveRefreshState();
      }

      // PROFILE FUNCTIONS
      function initializeProfileSetup(){
        // Populate avatar grid with interactive emoji buttons
        if(avatarGrid){
          avatarGrid.innerHTML = '';
          avatarEmojis.forEach(function(emoji, idx){
            const btn = document.createElement('button');
            btn.textContent = emoji;
            btn.style.cssText = 'font-size: 26px; padding: 8px; border: 2px solid #ddd; border-radius: 8px; background: white; cursor: pointer; transition: all 0.3s;';
            btn.id = 'avatar_' + idx;
            
            // Interactive hover effects
            btn.onmouseover = function(){ 
              this.style.borderColor = '#1fa7a7';
              this.style.boxShadow = '0 0 8px rgba(31, 167, 167, 0.3)'; 
            };
            btn.onmouseout = function(){ 
              this.style.borderColor = '#ddd';
              this.style.boxShadow = 'none'; 
            };
            
            // Avatar selection handler
            btn.onclick = function(){
              // Clear previous selection
              document.querySelectorAll('#avatarGrid button').forEach(function(b){ 
                b.style.borderColor = '#ddd'; 
                b.style.background = 'white'; 
              });
              // Highlight selected avatar
              this.style.borderColor = '#1fa7a7';
              this.style.background = '#e0f7f7';
              selectedAvatar = emoji;
            };
            
            avatarGrid.appendChild(btn);
          });
        }
      }

      function saveProfile(){
        try{
          const loves = Array.from(lovesCheckboxes)
            .filter(function(cb){ return cb.checked; })
            .map(function(cb){ return cb.value; });
          if(lovesMore.value.trim()) loves.push(lovesMore.value.trim());

          const hates = Array.from(hatesCheckboxes)
            .filter(function(cb){ return cb.checked; })
            .map(function(cb){ return cb.value; });
          if(hatesMore.value.trim()) hates.push(hatesMore.value.trim());

          const strengths = Array.from(strengthsCheckboxes)
            .filter(function(cb){ return cb.checked; })
            .map(function(cb){ return cb.value; });
          if(strengthsMore.value.trim()) strengths.push(strengthsMore.value.trim());

          const struggles = Array.from(strugglesCheckboxes)
            .filter(function(cb){ return cb.checked; })
            .map(function(cb){ return cb.value; });
          if(strugglesMore.value.trim()) struggles.push(strugglesMore.value.trim());

          const profile = {
            avatar: selectedAvatar,
            nickname: nicknameInput.value.trim(),
            loves: loves,
            hates: hates,
            strengths: strengths,
            struggles: struggles
          };

          localStorage.setItem('userProfile', JSON.stringify(profile));
          updateUserButton(); // Update top header button with avatar
          return profile;
        } catch(e){
          console.error('Error saving profile:', e);
          return null;
        }
      }

      function loadProfile(){
        try{
          const raw = localStorage.getItem('userProfile');
          if(raw){
            const profile = JSON.parse(raw);
            if(profile && typeof profile === 'object' && avatarEmojis.indexOf(profile.avatar) < 0){
              profile.avatar = avatarEmojis[0];
              localStorage.setItem('userProfile', JSON.stringify(profile));
            }
            return profile;
          }
        } catch(e){
          console.error('Error loading profile:', e);
        }
        return null;
      }

      function displayProfile(){
        try{
          const profile = loadProfile();
          if(!profile) return;

          // Update profile display elements
          if(profileAvatar) profileAvatar.textContent = profile.avatar;
          if(profileNickname) profileNickname.textContent = profile.nickname;

          // Display preferences with fallback text
          if(profileLoves) profileLoves.textContent = (profile.loves && profile.loves.length) ? profile.loves.join(', ') : 'Not set';
          if(profileHates) profileHates.textContent = (profile.hates && profile.hates.length) ? profile.hates.join(', ') : 'Not set';
          if(profileStrengths) profileStrengths.textContent = (profile.strengths && profile.strengths.length) ? profile.strengths.join(', ') : 'Not set';
          if(profileStruggles) profileStruggles.textContent = (profile.struggles && profile.struggles.length) ? profile.struggles.join(', ') : 'Not set';

          displayQuizResults();
        } catch(e){
          console.error('Error displaying profile:', e);
        }
      }

      function displayQuizResults(){
        if(!quizResults) return;
        
        try{
          quizResults.innerHTML = '';
          let hasResults = false;
          
          // Check Communication Quiz result
          const commResult = localStorage.getItem('communication_result');
          if(commResult){
            hasResults = true;
            const div = document.createElement('div');
            div.style.cssText = 'padding: 12px; background: #fff; border-left: 4px solid #1fa7a7; border-radius: 4px; margin-bottom: 10px;';
            const line = document.createElement('p');
            line.style.cssText = 'margin: 0; font-weight: 600; color: #1fa7a7;';
            line.appendChild(document.createTextNode('💬 Communication Style: '));
            const value = document.createElement('span');
            value.style.color = '#333';
            // Treat saved quiz data as text, not markup. This also keeps a
            // corrupted or manually edited local result from injecting HTML.
            value.textContent = commResult;
            line.appendChild(value);
            div.appendChild(line);
            quizResults.appendChild(div);
          }

          // Display saved Big Five personality summary in My Personality.
          const personalityRaw = localStorage.getItem('personality_type_result');
          if(personalityRaw){
            try {
              const personality = JSON.parse(personalityRaw);
              hasResults = true;
              const card = document.createElement('div');
              card.style.cssText = 'padding: 14px; background: #fff; border-left: 4px solid #7b61a8; border-radius: 8px; margin-bottom: 10px;';
              const heading = document.createElement('p');
              heading.style.cssText = 'margin: 0 0 8px; font-weight: 700; color: #7b61a8;';
              heading.textContent = '✨ My Personality';
              card.appendChild(heading);
              (personality.traits || []).forEach(function(trait){
                const line = document.createElement('p');
                line.style.cssText = 'margin: 5px 0; color: #333; line-height: 1.4;';
                line.textContent = trait;
                card.appendChild(line);
              });
              if(personality.summary){
                const summary = document.createElement('p');
                summary.style.cssText = 'margin: 8px 0 0; color: #555; line-height: 1.45;';
                summary.textContent = personality.summary;
                card.appendChild(summary);
              }
              quizResults.appendChild(card);
            } catch(e) { console.warn('Could not read personality result', e); }
          }

          // Add placeholder if no quizzes completed
          if(!hasResults){
            const div = document.createElement('div');
            div.style.cssText = 'padding: 12px; background: #fff; border-left: 4px solid #ccc; border-radius: 4px; color: #999;';
            div.textContent = 'Complete quizzes to see your personality results!';
            quizResults.appendChild(div);
          }
        } catch(e){
          console.error('Error displaying quiz results:', e);
        }
      }

      function updateUserButton(){
        // Update the user button with current profile info
        try{
          const profile = loadProfile();
          if(profile && userBtnAvatar){
            userBtnAvatar.textContent = profile.avatar;
          } else if(userBtnAvatar){
            userBtnAvatar.textContent = '👤';
          }
        } catch(e){
          console.error('Error updating user button:', e);
        }
      }

      function initializeQuizListing(){
        if(!quizList) return;
        
        quizList.innerHTML = '';
        
        const quizzes = [
          { id: 'c1', name: '💬 Communication Style Quiz', desc: 'Discover your communication style!', screen: communicationDetectiveIntro },
          { id: 'identity', name: '🪪 Personality Type Quiz', desc: 'Explore your strengths and the ways you like to think and act.', screen: identityDetectiveIntro }
        ];

        quizzes.forEach(function(quiz){
          const card = document.createElement('div');
          card.style.cssText = 'background: #f0f9f9; border: 2px solid #1fa7a7; border-radius: 12px; padding: 15px; margin-bottom: 10px; cursor: pointer; transition: all 0.3s;';
          card.onmouseover = function(){ this.style.boxShadow = '0 4px 12px rgba(31, 167, 167, 0.2)'; };
          card.onmouseout = function(){ this.style.boxShadow = 'none'; };
          
          card.innerHTML = `
            <p style="margin: 0 0 5px 0; font-weight: 600; color: #1fa7a7; font-size: 15px;">${quiz.name}</p>
            <p style="margin: 0; font-size: 13px; color: #666;">${quiz.desc}</p>
          `;
          
          card.onclick = function(){
            if(quiz.screen){
              showScreen(quiz.screen);
            } else {
              showScreen(missionsScreen);
              // Scroll to and highlight the quest
            }
          };
          
          quizList.appendChild(card);
        });
      }

      let selectedAvatar = '😀';

      // END PROFILE FUNCTIONS

      function loadmissionstate(id){
        const raw = localStorage.getItem(`quest_${id}`);
        if(raw){
          try{
            const data = JSON.parse(raw);
            if(Array.isArray(data) && data.length === 10) return data;
          }catch(e){}
        }
        return new Array(10).fill(false);
      }

      function savemissionstate(id, state){
        localStorage.setItem(`quest_${id}`, JSON.stringify(state));
      }

      function updateQuestFlashing(svg, state){
        const segments = svg.querySelectorAll('.quest-segment');
        segments.forEach(function(seg){ seg.classList.remove('flashing'); });
        const nextIndex = state.indexOf(false);
        if(nextIndex >= 0 && segments[nextIndex]){
          segments[nextIndex].classList.add('flashing');
        }
      }

      function setMissionLearningText(targetEl, text){
        if(targetEl){
          targetEl.textContent = '';
          targetEl.style.display = 'none';
        }
      }

      function resetE1ActivityProgress(){
        e1ActivityProgress.draw = false;
        e1ActivityProgress.quiz = false;
        e1ActivityProgress.match = false;
      }

      function updateE1ActivityTracker(currentStep){
        const order = ['draw', 'match', 'quiz'];
        const circles = document.querySelectorAll('.e1-progress-circle');
        circles.forEach(function(circle){
          const step = circle.dataset.step || '';
          circle.classList.remove('active', 'completed');
          if(e1ActivityProgress[step]){
            circle.classList.add('completed');
          }
          if(step === currentStep){
            circle.classList.add('active');
          }
        });

        const stepIndex = Math.max(0, order.indexOf(currentStep));
        const labels = document.querySelectorAll('.e1-progress-label');
        labels.forEach(function(label){
          if(label.dataset.step){
            return;
          }
          label.textContent = 'Activity ' + (stepIndex + 1) + ' of 3';
        });
      }

      function setE1TrackerVisible(screenEl, visible){
        if(!screenEl) return;
        const trackers = screenEl.querySelectorAll('.e1-progress-tracker:not(.e2-progress-tracker)');
        trackers.forEach(function(tracker){
          tracker.style.display = visible ? '' : 'none';
        });
      }

      function setE2TrackerVisible(screenEl, visible){
        if(!screenEl) return;
        const trackers = screenEl.querySelectorAll('.e2-progress-tracker');
        trackers.forEach(function(tracker){
          tracker.style.display = visible ? '' : 'none';
        });
      }

      function resetE2ActivityProgress(){
        e2ActivityProgress.needs = false;
        e2ActivityProgress.signals = false;
        e2ActivityProgress.cues = false;
      }

      function resetEmotionActivityProgress(){
        emotionActivityProgress.feel = false;
        emotionActivityProgress.tell = false;
        emotionActivityProgress.body = false;
        currentEmotionActivityStep = 'feel';
      }

      function updateEmotionActivityTracker(currentStep){
        const order = ['feel', 'tell', 'body'];
        const circles = document.querySelectorAll('.emotion-progress-circle');
        circles.forEach(function(circle){
          const step = circle.dataset.step || '';
          circle.classList.remove('active', 'completed');
          if(emotionActivityProgress[step]){
            circle.classList.add('completed');
          }
          if(step === currentStep){
            circle.classList.add('active');
          }
        });

        const stepIndex = Math.max(0, order.indexOf(currentStep));
        const labels = document.querySelectorAll('[aria-label="Emotion activity progress"] .e1-progress-label');
        labels.forEach(function(label){
          label.textContent = 'Activity ' + (stepIndex + 1) + ' of 3';
        });
      }

      function showEmotionActivityStep(step){
        currentEmotionActivityStep = step;
        if(emotionStep1Section) emotionStep1Section.style.display = (step === 'feel') ? '' : 'none';
        if(emotionStep2Section) emotionStep2Section.style.display = (step === 'tell') ? '' : 'none';
        if(emotionStep3Section) emotionStep3Section.style.display = (step === 'body') ? '' : 'none';
        if(completeEmotionActivity){
          completeEmotionActivity.textContent = step === 'body' ? 'Done ✓' : 'Continue ✓';
        }
        updateEmotionActivityTracker(step);
      }

      function updateE2ActivityTracker(currentStep){
        const order = ['needs', 'signals', 'cues'];
        const circles = document.querySelectorAll('.e2-progress-circle');
        circles.forEach(function(circle){
          const step = circle.dataset.step || '';
          circle.classList.remove('active', 'completed');
          if(e2ActivityProgress[step]){
            circle.classList.add('completed');
          }
          if(step === currentStep){
            circle.classList.add('active');
          }
        });

        const stepIndex = Math.max(0, order.indexOf(currentStep));
        const labels = document.querySelectorAll('[aria-label="E2 activity progress"] .e1-progress-label');
        labels.forEach(function(label){
          label.textContent = 'Activity ' + (stepIndex + 1) + ' of 3';
        });
      }

      function resetSocialActivityProgress(){
        socialActivityProgress.lesson = false;
        socialActivityProgress.quiz = false;
        socialActivityProgress.sort = false;
        socialActivityProgress.expected = false;
        socialActivityProgress.unexpected = false;
        currentSocialActivityMode = currentSocialFlow[0] || 'sort';
      }

      function updateSocialMissionTracker(currentStep){
        const order = Array.isArray(currentSocialFlow) && currentSocialFlow.length
          ? currentSocialFlow
          : ['sort', 'expected', 'unexpected'];
        const circles = document.querySelectorAll('.social-activity-progress-circle');
        circles.forEach(function(circle, idx){
          const step = order[idx] || 'sort';
          circle.dataset.step = step;
          circle.classList.remove('active', 'completed');
          if(socialActivityProgress[step]){
            circle.classList.add('completed');
          }
          if(step === currentStep){
            circle.classList.add('active');
          }
        });

        const stepIndex = Math.max(0, order.indexOf(currentStep));
        const labels = document.querySelectorAll('[aria-label="Social activity progress"] .social-progress-label');
        labels.forEach(function(label){
          label.textContent = 'Activity ' + (stepIndex + 1) + ' of 3';
        });
      }

      function getCurrentSocialBehaviorItems(step){
        const stepToIndex = {
          sort: 0,
          expected: 1,
          unexpected: 2
        };
        const rawBehaviorSet = currentSocialActivitySets[stepToIndex[step]] || currentSocialActivitySets[0] || '';
        return rawBehaviorSet.split(',').map(function(s) {
          const parts = s.trim().split(':');
          return { text: (parts[0] || '').trim(), type: (parts[1] || '').trim() };
        }).filter(function(item) {
          return item.text && (item.type === 'expected' || item.type === 'unexpected');
        });
      }

      function getSocialQuizItems(){
        return [
          { id: 'time-norm', text: 'In the olden days, in many places it was expected that children spoke only after adults invited them to.', correct: 'true' },
          { id: 'culture-norm', text: 'In China, it is a common norm to offer and receive items with both hands to show respect.', correct: 'true' },
          { id: 'japan-norm', text: 'In Japan, removing shoes before entering a home is a common social norm.', correct: 'true' },
          { id: 'teacher-name-norm', text: 'Using first names with teachers is expected in every school in the world.', correct: 'false' },
          { id: 'queue-norm', text: 'In many places, waiting in a line and taking turns is a social norm.', correct: 'true' }
        ];
      }

      function renderSocialLessonStep(){
        if(socialActivityPrompt){
          socialActivityPrompt.textContent = currentSocialActivityPromptBase + ' Think about how norms vary across places and time.';
        }
        if(socialLessonFeedback){
          socialLessonFeedback.textContent = '';
          socialLessonFeedback.style.color = '#1fa7a7';
        }
        const socialLessonOptions = document.querySelectorAll('.social-lesson-option');
        if(socialLessonOptions.length){
          socialLessonOptions.forEach(function(option){
            option.dataset.selected = 'false';
            option.style.background = 'white';
            option.style.borderColor = '#1fa7a7';
            option.style.color = '#1fa7a7';
          });
        }
        if(completeSocialActivity){
          completeSocialActivity.style.display = 'none';
          completeSocialActivity.dataset.ready = 'false';
        }
      }

      function renderSocialQuizStep(){
        if(!socialQuizQuestions) return;
        currentSocialQuizAnswers = {};
        if(socialActivityPrompt){
          socialActivityPrompt.textContent = currentSocialActivityPromptBase + ' Complete this true/false quiz.';
        }
        socialQuizQuestions.innerHTML = '';
        if(socialQuizFeedback){
          socialQuizFeedback.textContent = '';
          socialQuizFeedback.style.color = '#1fa7a7';
        }
        if(completeSocialActivity){
          completeSocialActivity.style.display = 'none';
          completeSocialActivity.dataset.ready = 'false';
        }

        const quizItems = getSocialQuizItems();
        quizItems.forEach(function(item){
          const card = document.createElement('div');
          card.style.cssText = 'background:#f0f9f9; border:2px solid #b7e3e3; border-radius:10px; padding:8px;';

          const text = document.createElement('p');
          text.textContent = item.text;
          text.style.cssText = 'color:#1fa7a7; margin:0 0 8px; font-size:12px; line-height:1.4; font-weight:400;';
          card.appendChild(text);

          const options = document.createElement('div');
          options.style.cssText = 'display:flex; gap:8px; justify-content:center;';
          const feedback = document.createElement('p');
          feedback.setAttribute('aria-live', 'polite');
          feedback.style.cssText = 'min-height:18px; margin:8px 0 0; font-size:12px; font-weight:700;';

          ['true', 'false'].forEach(function(value){
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = value === 'true' ? 'True' : 'False';
            btn.dataset.correct = String(value === item.correct);
            btn.style.cssText = 'padding:8px 12px; border:2px solid #1fa7a7; border-radius:10px; background:#fff; color:#1fa7a7; text-align:center; cursor:pointer; font-size:12px; font-weight:400;';
            btn.addEventListener('click', function(){
              Array.from(options.querySelectorAll('button')).forEach(function(peer){
                const peerCorrect = peer.dataset.correct === 'true';
                peer.style.background = peerCorrect ? '#d4f4dd' : '#ffe6e6';
                peer.style.borderColor = peerCorrect ? '#4caf50' : '#ff6b6b';
                peer.style.color = peerCorrect ? '#2e7d32' : '#c62828';
                peer.style.outline = 'none';
              });
              this.style.outline = '3px solid #184f73';
              currentSocialQuizAnswers[item.id] = value;
              const isCorrect = value === item.correct;
              feedback.textContent = isCorrect ? 'Correct answer' : 'Not quite. The green answer is correct.';
              feedback.style.color = isCorrect ? '#2e7d32' : '#c62828';

              const answeredCount = Object.keys(currentSocialQuizAnswers).length;
              if(socialQuizFeedback){
                const correctCount = quizItems.filter(function(quizItem){
                  return currentSocialQuizAnswers[quizItem.id] === quizItem.correct;
                }).length;
                socialQuizFeedback.textContent = 'Answered ' + answeredCount + ' of ' + quizItems.length + ' · ' + correctCount + ' correct so far.';
              }
              if(completeSocialActivity){
                const ready = answeredCount === quizItems.length;
                completeSocialActivity.style.display = ready ? 'inline-block' : 'none';
                completeSocialActivity.dataset.ready = ready ? 'true' : 'false';
              }
            });
            options.appendChild(btn);
          });

          card.appendChild(options);
          card.appendChild(feedback);
          socialQuizQuestions.appendChild(card);
        });
      }

      function validateSocialQuizStep(){
        const quizItems = getSocialQuizItems();
        if(Object.keys(currentSocialQuizAnswers).length < quizItems.length){
          if(socialQuizFeedback){
            socialQuizFeedback.textContent = 'Answer all questions first.';
            socialQuizFeedback.style.color = '#c62828';
          }
          return false;
        }

        let correctCount = 0;
        quizItems.forEach(function(item){
          if(currentSocialQuizAnswers[item.id] === item.correct){
            correctCount += 1;
          }
        });

        if(socialQuizFeedback){
          socialQuizFeedback.textContent = 'Great work. You got ' + correctCount + ' of ' + quizItems.length + ' correct.';
          socialQuizFeedback.style.color = correctCount === quizItems.length ? '#2e7d32' : '#1fa7a7';
        }

        return true;
      }

      function buildSocialChoiceChip(text){
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.textContent = text;
        chip.dataset.selected = 'false';
        chip.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s;';
        chip.addEventListener('click', function(){
          const targetType = this.parentElement && this.parentElement.id === 'socialExpectedChoices' ? 'expected' : 'unexpected';
          const isCorrect = this.dataset.type === targetType;
          if(this.dataset.selected === 'true'){
            this.dataset.selected = 'false';
            this.style.background = 'white';
            this.style.borderColor = '#1fa7a7';
            this.style.color = '#1fa7a7';
          } else {
            this.dataset.selected = 'true';
            this.style.background = isCorrect ? '#d4f4dd' : '#ffe6e6';
            this.style.borderColor = isCorrect ? '#4caf50' : '#ff6b6b';
            this.style.color = isCorrect ? '#2e7d32' : '#c62828';
          }
          if(completeSocialActivity){
            const anySelected = Array.from(this.parentElement.querySelectorAll('button')).some(function(btn){
              return btn.dataset.selected === 'true';
            });
            completeSocialActivity.style.display = anySelected ? 'inline-block' : 'none';
          }
        });
        return chip;
      }

      function renderSocialSortStep(){
        const behaviorsToSort = document.getElementById('socialBehaviorsToSort');
        const expectedColumn = document.getElementById('expectedBehaviors');
        const unexpectedColumn = document.getElementById('unexpectedBehaviors');
        if(!behaviorsToSort || !expectedColumn || !unexpectedColumn || !completeSocialActivity) return;

        const behaviors = getCurrentSocialBehaviorItems('sort');
        const shuffled = shuffledCopy(behaviors);
        let sortedCount = 0;

        if(socialActivityPrompt){
          socialActivityPrompt.textContent = currentSocialActivityPromptBase + ' Drag each behavior into the correct group, or tap a behavior and then tap the group you want.';
        }

        behaviorsToSort.innerHTML = '';
        expectedColumn.innerHTML = '';
        unexpectedColumn.innerHTML = '';
        completeSocialActivity.style.display = 'none';
        completeSocialActivity.dataset.ready = 'false';

        expectedColumn.dataset.dropType = 'expected';
        unexpectedColumn.dataset.dropType = 'unexpected';

        function finalizeResolvedChip(chip, chosenType, isCorrect) {
          chip.dataset.sorted = 'true';
          chip.style.cursor = 'default';
          chip.draggable = false;
          chip.setAttribute('aria-pressed', 'false');
          chip.setAttribute('aria-label', chip.textContent + '. Sorted into ' + (chosenType === 'expected' ? 'Expected' : 'Unexpected') + (isCorrect ? ', correct.' : '. Try to remember the difference for next time.'));

          if(isCorrect) {
            chip.style.background = chosenType === 'expected' ? '#d4f4dd' : '#ffe6e6';
            chip.style.borderColor = chosenType === 'expected' ? '#4caf50' : '#ff6b6b';
            chip.style.color = chosenType === 'expected' ? '#2e7d32' : '#c62828';
          } else {
            chip.style.background = '#ffe6e6';
            chip.style.borderColor = '#ff6b6b';
            chip.style.color = '#c62828';
          }

          const targetColumn = chosenType === 'expected' ? expectedColumn : unexpectedColumn;
          targetColumn.appendChild(chip);

          sortedCount += 1;
          if(sortedCount === behaviors.length) {
            completeSocialActivity.style.display = 'inline-block';
            completeSocialActivity.dataset.ready = 'true';
          }
        }

        let selectedBehaviorChip = null;
        function sortBehavior(chip, chosenType) {
          if(!chip) return;
          // A drag can finish while a different chip is selected for the tap-to-sort
          // alternative. Clear stale selection so the next tap never sorts the wrong item.
          if(chip.dataset.sorted === 'true') {
            if(selectedBehaviorChip === chip) selectedBehaviorChip = null;
            return;
          }
          const correctType = chip.dataset.type;
          const isCorrect = chosenType === correctType;
          chip.style.outline = 'none';
          chip.setAttribute('aria-pressed', 'false');
          if(selectedBehaviorChip) {
            selectedBehaviorChip.style.outline = 'none';
            selectedBehaviorChip.setAttribute('aria-pressed', 'false');
          }
          selectedBehaviorChip = null;

          // An incorrect sort is a retry, not a completed item. Previously an
          // incorrect placement was moved into the column and counted towards
          // completion, allowing the activity to finish with wrong answers.
          if(!isCorrect){
            chip.style.background = '#ffe6e6';
            chip.style.borderColor = '#ff6b6b';
            chip.style.color = '#c62828';
            chip.setAttribute('aria-label', chip.textContent + '. Not quite. Try the other group.');
            if(socialActivityPrompt){
              socialActivityPrompt.textContent = currentSocialActivityPromptBase + ' Not quite — try that behavior in the other group.';
            }
            setTimeout(function(){
              if(chip.dataset.sorted !== 'true'){
                chip.style.background = 'white';
                chip.style.borderColor = '#1fa7a7';
                chip.style.color = '#1fa7a7';
                chip.setAttribute('aria-label', chip.textContent + '. Tap to select, then choose Expected or Unexpected.');
                if(socialActivityPrompt){
                  socialActivityPrompt.textContent = currentSocialActivityPromptBase + ' Drag each behavior into the correct group, or tap a behavior and then tap the group you want.';
                }
              }
            }, 1200);
            return;
          }

          finalizeResolvedChip(chip, chosenType, true);
        }

        [expectedColumn, unexpectedColumn].forEach(function(zone){
          zone.ondragover = function(e){
            e.preventDefault();
            zone.style.background = zone.dataset.dropType === 'expected' ? '#e8f7ec' : '#ffecec';
          };
          zone.ondragleave = function(){
            zone.style.background = zone.dataset.dropType === 'expected' ? '#f0fdf4' : '#fff5f5';
          };
          zone.ondrop = function(e){
            e.preventDefault();
            zone.style.background = zone.dataset.dropType === 'expected' ? '#f0fdf4' : '#fff5f5';
            const dragId = e.dataTransfer ? e.dataTransfer.getData('text/plain') : '';
            const chip = dragId ? (behaviorsToSort.querySelector('[data-drag-id="' + dragId + '"]') || expectedColumn.querySelector('[data-drag-id="' + dragId + '"]') || unexpectedColumn.querySelector('[data-drag-id="' + dragId + '"]')) : selectedBehaviorChip;
            if(chip) sortBehavior(chip, zone.dataset.dropType);
          };
          zone.onclick = function(){ if(selectedBehaviorChip) sortBehavior(selectedBehaviorChip, zone.dataset.dropType); };
          zone.setAttribute('role', 'button'); zone.setAttribute('tabindex', '0');
          zone.onkeydown = function(e){ if((e.key === 'Enter' || e.key === ' ') && selectedBehaviorChip){ e.preventDefault(); sortBehavior(selectedBehaviorChip, zone.dataset.dropType); } };
        });

        shuffled.forEach(function(behavior, index) {
          const chip = document.createElement('div');
          chip.textContent = behavior.text;
          chip.dataset.type = behavior.type;
          chip.dataset.sorted = 'false';
          chip.dataset.dragId = 'social-sort-chip-' + index;
          chip.draggable = true;
          chip.setAttribute('role', 'button');
          chip.setAttribute('tabindex', '0');
          chip.setAttribute('aria-pressed', 'false');
          chip.setAttribute('aria-label', behavior.text + '. Tap to select, then choose Expected or Unexpected.');
          chip.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 18px; cursor: grab; font-size: 13px; font-weight: 600; transition: all 0.3s; user-select: none; touch-action: manipulation;';
          function selectBehaviorChip(){
            if(chip.dataset.sorted === 'true') return;
            if(selectedBehaviorChip && selectedBehaviorChip !== chip){ selectedBehaviorChip.style.outline = 'none'; selectedBehaviorChip.setAttribute('aria-pressed', 'false'); }
            selectedBehaviorChip = selectedBehaviorChip === chip ? null : chip;
            chip.style.outline = selectedBehaviorChip === chip ? '3px solid #184f73' : 'none';
            chip.setAttribute('aria-pressed', selectedBehaviorChip === chip ? 'true' : 'false');
          }
          chip.addEventListener('click', selectBehaviorChip);
          chip.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); selectBehaviorChip(); } });
          chip.addEventListener('dragstart', function(e){
            if(this.dataset.sorted === 'true'){
              e.preventDefault();
              return;
            }
            e.dataTransfer.setData('text/plain', this.dataset.dragId || '');
            this.style.opacity = '0.6';
          });

          chip.addEventListener('dragend', function(){
            this.style.opacity = '1';
          });

          behaviorsToSort.appendChild(chip);
        });
      }

      function renderSocialSelectionStep(step){
        const isExpectedStep = step === 'expected';
        const choicesWrap = isExpectedStep ? socialExpectedChoices : socialUnexpectedChoices;
        const feedbackEl = isExpectedStep ? socialExpectedFeedback : socialUnexpectedFeedback;
        const promptEl = isExpectedStep ? socialExpectedPrompt : socialUnexpectedPrompt;
        const targetType = isExpectedStep ? 'expected' : 'unexpected';
        if(!choicesWrap || !feedbackEl || !promptEl || !completeSocialActivity) return;

        const behaviors = shuffledCopy(getCurrentSocialBehaviorItems(step));
        promptEl.textContent = currentSocialActivityPromptBase + (isExpectedStep ? ' Tap all of the expected behaviors.' : ' Tap all of the unexpected behaviors.');
        choicesWrap.innerHTML = '';
        feedbackEl.textContent = '';
        feedbackEl.style.color = '#1fa7a7';
        completeSocialActivity.style.display = 'none';
        completeSocialActivity.dataset.ready = 'false';

        behaviors.forEach(function(behavior) {
          const chip = buildSocialChoiceChip(behavior.text);
          chip.dataset.type = behavior.type;
          choicesWrap.appendChild(chip);
        });
      }

      function validateSocialSelectionStep(step){
        const isExpectedStep = step === 'expected';
        const choicesWrap = isExpectedStep ? socialExpectedChoices : socialUnexpectedChoices;
        const feedbackEl = isExpectedStep ? socialExpectedFeedback : socialUnexpectedFeedback;
        const targetType = isExpectedStep ? 'expected' : 'unexpected';
        if(!choicesWrap || !feedbackEl) return false;

        const chips = Array.from(choicesWrap.querySelectorAll('button'));
        const selected = chips.filter(function(chip){ return chip.dataset.selected === 'true'; });
        const correct = chips.filter(function(chip){ return chip.dataset.type === targetType; });
        const isCorrect = selected.length === correct.length && selected.every(function(chip){ return chip.dataset.type === targetType; });

        chips.forEach(function(chip){
          const shouldBeSelected = chip.dataset.type === targetType;
          chip.style.borderColor = shouldBeSelected ? '#4caf50' : '#ff6b6b';
          chip.style.background = (chip.dataset.selected === 'true')
            ? (shouldBeSelected ? '#d4f4dd' : '#ffe6e6')
            : 'white';
          chip.style.color = shouldBeSelected ? '#2e7d32' : '#c62828';
        });

        if(isCorrect){
          feedbackEl.textContent = 'Correct!';
          feedbackEl.style.color = '#2e7d32';
          return true;
        }

        feedbackEl.textContent = isExpectedStep
          ? 'Select all and only the expected behaviors.'
          : 'Select all and only the unexpected behaviors.';
        feedbackEl.style.color = '#c62828';
        return false;
      }

      function showSocialActivityStep(step){
        currentSocialActivityMode = step;
        if(socialLessonSection) socialLessonSection.style.display = (step === 'lesson') ? '' : 'none';
        if(socialQuizSection) socialQuizSection.style.display = (step === 'quiz') ? '' : 'none';
        if(socialStep1Section) socialStep1Section.style.display = (step === 'sort') ? '' : 'none';
        if(socialStep2Section) socialStep2Section.style.display = (step === 'expected') ? '' : 'none';
        if(socialStep3Section) socialStep3Section.style.display = (step === 'unexpected') ? '' : 'none';
        if(completeSocialActivity){
          completeSocialActivity.textContent = step === 'unexpected' ? 'Done ✓' : 'Continue ✓';
        }
        updateSocialMissionTracker(step);

        if(step === 'lesson') {
          renderSocialLessonStep();
        } else if(step === 'quiz') {
          renderSocialQuizStep();
        } else if(step === 'sort') {
          renderSocialSortStep();
        } else {
          renderSocialSelectionStep(step);
        }
      }

      function showE2NeedsActivity(){
        if(!emotionsNeedsMatchContainer || !completeEmotionsNeeds) return;
        setE2TrackerVisible(emotionsNeedsScreen, true);
        completeEmotionsNeeds.style.display = 'none';
        updateE2ActivityTracker('needs');

        const pairs = [
          { cue: 'Sweaty skin', need: 'Too hot' },
          { cue: 'Shivering', need: 'Too cold' },
          { cue: 'Tummy rumbling', need: 'Hungry' },
          { cue: 'Dry mouth', need: 'Thirsty' },
          { cue: 'Heavy eyes and yawning', need: 'Tired' },
          { cue: 'Pressure in your bladder', need: 'Need the toilet' }
        ];

        const shuffledNeeds = shuffledCopy(pairs.map(function(p){ return p.need; }));
        const shuffledPairs = shuffledCopy(pairs);
        emotionsNeedsMatchContainer.innerHTML = '';

        let selectedCue = null;
        let selectedNeed = null;
        const matched = [];

        const cuesCol = document.createElement('div');
        cuesCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';

        shuffledPairs.forEach(function(pair){
          const cueBox = document.createElement('div');
          cueBox.style.cssText = 'padding:10px 8px; background:#f0f9f9; border-radius:8px; border:2px solid #ddd; cursor:pointer; transition:all 0.3s; text-align:center; color:#1fa7a7; font-weight:400; font-size:13px; line-height:1.35; min-height:52px; display:flex; align-items:center; justify-content:center;';
          cueBox.textContent = pair.cue;
          cueBox.dataset.need = pair.need;
          cueBox.dataset.key = pair.cue;
          cueBox.addEventListener('click', function(){
            if(matched.includes(this.dataset.key)) return;
            if(selectedCue && selectedCue !== this){
              selectedCue.style.background = '#f0f9f9';
              selectedCue.style.borderColor = '#ddd';
            }
            selectedCue = this;
            this.style.background = '#fff5e1';
            this.style.borderColor = '#ffa500';
            if(selectedNeed){ checkNeedMatch(); }
          });
          cuesCol.appendChild(cueBox);
        });

        const needsCol = document.createElement('div');
        needsCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';

        shuffledNeeds.forEach(function(need){
          const needBox = document.createElement('div');
          needBox.style.cssText = 'padding:10px 8px; background:#f0f9f9; border-radius:8px; border:2px solid #ddd; cursor:pointer; transition:all 0.3s; text-align:center; color:#1fa7a7; font-weight:400; font-size:13px; min-height:52px; display:flex; align-items:center; justify-content:center;';
          needBox.textContent = need;
          needBox.dataset.need = need;
          needBox.dataset.key = need;
          needBox.addEventListener('click', function(){
            if(matched.includes(this.dataset.key)) return;
            if(selectedNeed && selectedNeed !== this){
              selectedNeed.style.background = '#f0f9f9';
              selectedNeed.style.borderColor = '#ddd';
            }
            selectedNeed = this;
            this.style.background = '#fff5e1';
            this.style.borderColor = '#ffa500';
            if(selectedCue){ checkNeedMatch(); }
          });
          needsCol.appendChild(needBox);
        });

        function checkNeedMatch(){
          if(!selectedCue || !selectedNeed) return;
          if(selectedCue.dataset.need === selectedNeed.dataset.need){
            selectedCue.style.background = '#d4f4dd';
            selectedCue.style.borderColor = '#4caf50';
            selectedNeed.style.background = '#d4f4dd';
            selectedNeed.style.borderColor = '#4caf50';
            selectedCue.style.cursor = 'default';
            selectedNeed.style.cursor = 'default';
            matched.push(selectedCue.dataset.key);
            matched.push(selectedNeed.dataset.key);
            selectedCue = null;
            selectedNeed = null;
            if(matched.length >= pairs.length * 2){
              completeEmotionsNeeds.style.display = 'inline-block';
            }
            return;
          }
          selectedCue.style.background = '#ffe6e6';
          selectedCue.style.borderColor = '#ff6b6b';
          selectedNeed.style.background = '#ffe6e6';
          selectedNeed.style.borderColor = '#ff6b6b';
          setTimeout(function(){
            if(selectedCue){
              selectedCue.style.background = '#f0f9f9';
              selectedCue.style.borderColor = '#ddd';
            }
            if(selectedNeed){
              selectedNeed.style.background = '#f0f9f9';
              selectedNeed.style.borderColor = '#ddd';
            }
            selectedCue = null;
            selectedNeed = null;
          }, 800);
        }

        emotionsNeedsMatchContainer.appendChild(cuesCol);
        emotionsNeedsMatchContainer.appendChild(needsCol);
        showScreen(emotionsNeedsScreen);
      }

      function showE2CueSortActivity(){
        if(!emotionsCueSortScreen || !emotionsCuePool || !completeEmotionsCueSort) return;
        setE2TrackerVisible(emotionsCueSortScreen, true);
        updateE2ActivityTracker('cues');
        completeEmotionsCueSort.style.display = 'none';

        const zones = Array.from(emotionsCueSortScreen.querySelectorAll('.e2-drop-zone'));
        const lists = emotionsCueSortScreen.querySelectorAll('.e2-drop-list');
        const cueFeedback = document.getElementById('emotionsCueSortFeedback');
        if(cueFeedback) cueFeedback.textContent = '';
        lists.forEach(function(list){ list.innerHTML = ''; });
        emotionsCuePool.innerHTML = '';

        const cueItems = [
          { text: 'Fast heart rate', emotion: 'angry' },
          { text: 'Shaking', emotion: 'angry' },
          { text: 'Clenched fists', emotion: 'angry' },
          { text: 'Ears buzzing', emotion: 'angry' },
          { text: 'Eyes filling with tears', emotion: 'sad' },
          { text: 'A heavy feeling in your face', emotion: 'sad' },
          { text: 'Shaking lip', emotion: 'sad' },
          { text: 'Smiling', emotion: 'happy' },
          { text: 'Light body', emotion: 'happy' },
          { text: 'Bouncy energy', emotion: 'happy' },
          { text: 'Cold fingers', emotion: 'none' },
          { text: 'Hiccups', emotion: 'none' },
          { text: 'Itchy nose', emotion: 'none' }
        ];

        // Every cue belongs somewhere: some body signals can fit an emotion,
        // while others can happen for lots of unrelated reasons.
        const requiredCorrectCount = cueItems.length;

        let placedCount = 0;
        // Shuffle body cues fairly; answer pairs elsewhere keep their own fixed order.
        const shuffledCueItems = shuffledCopy(cueItems);
        cueItems.length = 0;
        shuffledCueItems.forEach(function(item){ cueItems.push(item); });
        let selectedCueChip = null;

        cueItems.forEach(function(item, idx){
          const chip = document.createElement('div');
          chip.className = 'e2-cue-chip';
          chip.draggable = true;
          chip.style.touchAction = 'manipulation';
          chip.id = 'e2CueChip' + idx;
          chip.dataset.emotion = item.emotion;
          chip.textContent = item.text;
          chip.setAttribute('role', 'button');
          chip.setAttribute('tabindex', '0');
          chip.setAttribute('aria-label', item.text + '. Tap to select, then tap an emotion box.');
          chip.addEventListener('dragstart', function(event){ if(event.dataTransfer) event.dataTransfer.setData('text/plain', chip.id); });
          function selectCueChip(){
            if(chip.classList.contains('placed')) return;
            if(selectedCueChip && selectedCueChip !== chip) selectedCueChip.classList.remove('selected');
            selectedCueChip = selectedCueChip === chip ? null : chip;
            chip.classList.toggle('selected', selectedCueChip === chip);
          }
          chip.addEventListener('click', selectCueChip);
          chip.addEventListener('keydown', function(event){ if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); selectCueChip(); } });
          emotionsCuePool.appendChild(chip);
        });

        zones.forEach(function(zone){
          // Rebind each time the activity opens. The handlers must use this
          // round's selectedCueChip, not a stale selection from the first play.
          zone.ondragover = function(event){
            event.preventDefault();
            zone.classList.add('over');
          };
          zone.ondragleave = function(){ zone.classList.remove('over'); };
          function placeCueChip(chip){
            if(!chip || chip.classList.contains('placed')) return;
            if(chip.dataset.emotion !== (zone.dataset.emotion || '')){
              zone.classList.add('invalid');
              if(cueFeedback) cueFeedback.textContent = 'Not quite. Think about whether this clue fits that feeling, or could happen for lots of reasons.';
              setTimeout(function(){ zone.classList.remove('invalid'); }, 280);
              return;
            }
            const list = zone.querySelector('.e2-drop-list');
            if(!list) return;
            chip.classList.add('placed'); chip.classList.remove('selected'); chip.draggable = false;
            const destinationLabel = zone.querySelector('h3') ? zone.querySelector('h3').textContent : zone.dataset.emotion;
            chip.setAttribute('aria-label', chip.textContent + ', correctly placed in ' + destinationLabel + '.');
            list.appendChild(chip);
            if(cueFeedback) cueFeedback.textContent = 'That’s right — ' + chip.textContent + ' fits ' + destinationLabel.toLowerCase() + '.';
            if(selectedCueChip === chip) selectedCueChip = null;
            placedCount += 1;
            if(placedCount >= requiredCorrectCount) completeEmotionsCueSort.style.display = 'inline-block';
          }
          zone.ondrop = function(event){
            event.preventDefault(); zone.classList.remove('over');
            const chipId = event.dataTransfer ? event.dataTransfer.getData('text/plain') : '';
            placeCueChip(document.getElementById(chipId));
          };
          zone.onclick = function(){ if(selectedCueChip) placeCueChip(selectedCueChip); };
          zone.style.touchAction = 'manipulation';
          zone.setAttribute('role', 'button'); zone.setAttribute('tabindex', '0');
          zone.onkeydown = function(event){ if((event.key === 'Enter' || event.key === ' ') && selectedCueChip){ event.preventDefault(); placeCueChip(selectedCueChip); } };
        });

        showScreen(emotionsCueSortScreen);
      }

      function showEmotionsMatching(){
        setMissionLearningText(
          emotionsMatchingLearningText,
          'Learning focus: We are learning to match emotion words with faces and clues.'
        );
        if(completeEmotionsMatching){
          completeEmotionsMatching.style.display = 'none';
        }
        const emotions = [
          { label: 'Happy', emoji: '😊' },
          { label: 'Sad', emoji: '😢' },
          { label: 'Angry', emoji: '😠' },
          { label: 'Excited', emoji: '🤩' },
          { label: 'Scared', emoji: '😨' },
          { label: 'Calm', emoji: '😌' },
          { label: 'Confused', emoji: '😕' }
        ];
        
        // Shuffle emojis for matching challenge
        const shuffledEmojis = shuffledCopy(emotions);
        
        emotionsMatchingContainer.innerHTML = '';
        let selectedWord = null;
        let selectedEmoji = null;
        let matchedPairs = [];
        const needed = emotions.length;
        
        // Create left column (words)
        const wordsColumn = document.createElement('div');
        wordsColumn.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
        
        emotions.forEach((emotion, i) => {
          const wordBox = document.createElement('div');
          wordBox.style.cssText = 'padding: 12px; background: #f0f9f9; border-radius: 8px; border: 2px solid #ddd; cursor: pointer; transition: all 0.3s; text-align: center; color: #1fa7a7; font-weight: 600; min-height: 56px; display: flex; align-items: center; justify-content: center;';
          wordBox.textContent = emotion.label;
          wordBox.dataset.word = emotion.label;
          wordBox.dataset.emoji = emotion.emoji;
          
          wordBox.addEventListener('click', function() {
            if(matchedPairs.includes(this.dataset.word)) return;
            
            // Deselect previous word
            if(selectedWord && selectedWord !== this){
              selectedWord.style.background = '#f0f9f9';
              selectedWord.style.borderColor = '#ddd';
            }
            
            // Select this word
            selectedWord = this;
            this.style.background = '#fff5e1';
            this.style.borderColor = '#ffa500';
            
            // Check for match
            if(selectedEmoji){
              checkMatch();
            }
          });
          
          wordsColumn.appendChild(wordBox);
        });
        
        // Create right column (emojis)
        const emojisColumn = document.createElement('div');
        emojisColumn.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
        
        shuffledEmojis.forEach((emotion, i) => {
          const emojiBox = document.createElement('div');
          emojiBox.style.cssText = 'display: flex; align-items: center; justify-content: center; padding: 12px; background: #f0f9f9; border-radius: 8px; border: 2px solid #ddd; cursor: pointer; transition: all 0.3s; font-size: 32px; min-height: 56px;';
          emojiBox.textContent = emotion.emoji;
          emojiBox.dataset.emoji = emotion.emoji;
          emojiBox.dataset.word = emotion.label;
          
          emojiBox.addEventListener('click', function() {
            if(matchedPairs.includes(this.dataset.word)) return;
            
            // Deselect previous emoji
            if(selectedEmoji && selectedEmoji !== this){
              selectedEmoji.style.background = '#f0f9f9';
              selectedEmoji.style.borderColor = '#ddd';
            }
            
            // Select this emoji
            selectedEmoji = this;
            this.style.background = '#fff5e1';
            this.style.borderColor = '#ffa500';
            
            // Check for match
            if(selectedWord){
              checkMatch();
            }
          });
          
          emojisColumn.appendChild(emojiBox);
        });
        
        function checkMatch(){
          if(selectedWord.dataset.emoji === selectedEmoji.dataset.emoji){
            // Correct match!
            selectedWord.style.background = '#d4f4dd';
            selectedWord.style.borderColor = '#4caf50';
            selectedEmoji.style.background = '#d4f4dd';
            selectedEmoji.style.borderColor = '#4caf50';
            selectedWord.style.cursor = 'default';
            selectedEmoji.style.cursor = 'default';
            
            matchedPairs.push(selectedWord.dataset.word);
            
            selectedWord = null;
            selectedEmoji = null;
            
            if(matchedPairs.length === needed){
              completeEmotionsMatching.style.display = 'inline-block';
            }
          } else {
            // Incorrect match
            selectedWord.style.background = '#ffe6e6';
            selectedWord.style.borderColor = '#ff6b6b';
            selectedEmoji.style.background = '#ffe6e6';
            selectedEmoji.style.borderColor = '#ff6b6b';
            
            setTimeout(() => {
              if(selectedWord){
                selectedWord.style.background = '#f0f9f9';
                selectedWord.style.borderColor = '#ddd';
              }
              if(selectedEmoji){
                selectedEmoji.style.background = '#f0f9f9';
                selectedEmoji.style.borderColor = '#ddd';
              }
              selectedWord = null;
              selectedEmoji = null;
            }, 800);
          }
        }
        
        emotionsMatchingContainer.appendChild(wordsColumn);
        emotionsMatchingContainer.appendChild(emojisColumn);
        
        setE1TrackerVisible(emotionsMatchingScreen, true);
        updateE1ActivityTracker('match');
        showScreen(emotionsMatchingScreen);
      }

      function setupEmotionDrawingBoards(){
        const paletteWrap = document.getElementById('emotionDrawingPalette');
        if(!paletteWrap) return;

        const drawingState = setupEmotionDrawingBoards.state || { color: '#1e88e5' };
        setupEmotionDrawingBoards.state = drawingState;

        const colorChoices = [
          { name: 'Blue', value: '#1e88e5' },
          { name: 'Red', value: '#e53935' },
          { name: 'Green', value: '#43a047' },
          { name: 'Yellow', value: '#fdd835' },
          { name: 'Purple', value: '#8e24aa' },
          { name: 'Orange', value: '#fb8c00' },
          { name: 'Black', value: '#212121' }
        ];

        const boardConfig = [
          { canvasId: 'drawEmotionHappy', clearId: 'clearDrawEmotionHappy' },
          { canvasId: 'drawEmotionSad', clearId: 'clearDrawEmotionSad' },
          { canvasId: 'drawEmotionAngry', clearId: 'clearDrawEmotionAngry' },
          { canvasId: 'drawEmotionWorried', clearId: 'clearDrawEmotionWorried' }
        ];

        const updatePaletteButtons = function(){
          const buttons = paletteWrap.querySelectorAll('button');
          buttons.forEach(function(button){
            if(button.dataset.color === drawingState.color){
              button.style.outline = '3px solid #1fa7a7';
              button.style.transform = 'scale(1.08)';
            } else {
              button.style.outline = '1px solid #ffffff';
              button.style.transform = 'scale(1)';
            }
          });
        };

        if(paletteWrap.dataset.ready !== 'true'){
          paletteWrap.innerHTML = '';
          colorChoices.forEach(function(choice){
            const colorBtn = document.createElement('button');
            colorBtn.type = 'button';
            colorBtn.dataset.color = choice.value;
            colorBtn.setAttribute('aria-label', choice.name);
            colorBtn.title = choice.name;
            colorBtn.style.cssText = `width:26px; height:26px; border-radius:50%; border:1px solid #fff; background:${choice.value}; cursor:pointer; transition:transform 0.2s;`;
            colorBtn.addEventListener('click', function(){
              drawingState.color = choice.value;
              updatePaletteButtons();
            });
            paletteWrap.appendChild(colorBtn);
          });
          paletteWrap.dataset.ready = 'true';
        }

        updatePaletteButtons();

        boardConfig.forEach(function(config){
          const canvas = document.getElementById(config.canvasId);
          const clearBtn = document.getElementById(config.clearId);
          if(!canvas) return;
          const ctx = canvas.getContext('2d');
          if(!ctx) return;

          if(canvas.dataset.ready !== 'true'){
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            canvas.style.touchAction = 'none';

            let isDrawing = false;

            const getPosition = function(event){
              const rect = canvas.getBoundingClientRect();
              const scaleX = canvas.width / rect.width;
              const scaleY = canvas.height / rect.height;
              return {
                x: (event.clientX - rect.left) * scaleX,
                y: (event.clientY - rect.top) * scaleY
              };
            };

            const startDraw = function(event){
              isDrawing = true;
              const pos = getPosition(event);
              ctx.beginPath();
              ctx.moveTo(pos.x, pos.y);
              event.preventDefault();
            };

            const draw = function(event){
              if(!isDrawing) return;
              const pos = getPosition(event);
              ctx.strokeStyle = drawingState.color;
              ctx.lineTo(pos.x, pos.y);
              ctx.stroke();
              event.preventDefault();
            };

            const stopDraw = function(){
              if(!isDrawing) return;
              isDrawing = false;
              ctx.beginPath();
            };

            canvas.addEventListener('pointerdown', startDraw);
            canvas.addEventListener('pointermove', draw);
            canvas.addEventListener('pointerup', stopDraw);
            canvas.addEventListener('pointerleave', stopDraw);
            canvas.addEventListener('pointercancel', stopDraw);
            canvas.dataset.ready = 'true';
          }

          if(clearBtn && clearBtn.dataset.ready !== 'true'){
            clearBtn.addEventListener('click', function(){
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            });
            clearBtn.dataset.ready = 'true';
          }
        });
      }

      function showEmotionsDrawActivity(){
        setupEmotionDrawingBoards();
        setE1TrackerVisible(emotionsDrawScreen, true);
        updateE1ActivityTracker('draw');
        showScreen(document.getElementById('emotionsDrawScreen'));
      }

      function showEmotionsTriggerActivity(isE1Flow){
        const triggerSection = document.getElementById('emotionsTriggerSection');
        const triggerQuestionsContainer = document.getElementById('emotionsTriggerQuestions');
        const bodyMatchContainer = document.getElementById('emotionsBodyMatchContainer');
        const completeBtn = document.getElementById('completeEmotionsTrigger');
        const bodyIntroText = document.getElementById('emotionsBodyIntroText');
        const bodyMatchPrompt = document.getElementById('emotionsBodyMatchPrompt');
        if(!bodyMatchContainer || !completeBtn) return;
        const withinE1Flow = isE1Flow === true;
        currentEmotionsTriggerFlow = withinE1Flow ? 'e1' : 'e2';
        const titleEl = document.getElementById('emotionsTriggerTitle');
        if(titleEl){
          titleEl.textContent = withinE1Flow ? '🎯 Emotions' : '🎯 Emotion Cues';
        }
        setE1TrackerVisible(emotionsTriggerScreen, withinE1Flow);
        setE2TrackerVisible(emotionsTriggerScreen, !withinE1Flow);
        if(!withinE1Flow){
          updateE2ActivityTracker('signals');
        }
        if(triggerSection){
          triggerSection.style.display = withinE1Flow ? 'block' : 'none';
        }
        if(bodyIntroText){
          bodyIntroText.style.display = withinE1Flow ? 'none' : 'block';
        }
        if(bodyMatchPrompt){
          bodyMatchPrompt.style.display = withinE1Flow ? 'none' : 'block';
        }
        if(triggerQuestionsContainer && withinE1Flow){
          const triggerQuestions = [
            {
              prompt: 'How would you feel if you had to perform in front of the whole school?',
              options: ['😟 Nervous', '😨 Scared', '😌 Calm', '😄 Proud']
            },
            {
              prompt: 'How would you feel if your best friend forgot to invite you to play?',
              options: ['😢 Sad', '😡 Angry', '😟 Worried', '🤩 Excited']
            },
            {
              prompt: 'How would you feel if your team won right at the end?',
              options: ['🤩 Excited', '😄 Happy', '😌 Calm', '😢 Sad']
            }
          ];
          triggerQuestions.push(
            {
              prompt: 'How would you feel if you studied hard and got full marks on your test?',
              options: ['😄 Proud', '😟 Worried', '😢 Sad', '😨 Scared']
            },
            {
              prompt: 'How would you feel if you accidentally dropped and broke your favorite toy?',
              options: ['😢 Sad', '🤩 Excited', '😌 Calm', '😄 Proud']
            },
            {
              prompt: 'How would you feel if you had to move to a new school next week?',
              options: ['😟 Nervous', '😄 Happy', '🤩 Excited', '😌 Calm']
            }
          );
          let answeredQuestions = 0;
          const requiredAnswers = triggerQuestions.length;
          triggerQuestionsContainer.innerHTML = '';
          triggerQuestions.forEach(function(question){
            const questionWrap = document.createElement('div');
            questionWrap.style.cssText = 'display:flex; flex-direction:column; gap:6px; align-items:center;';
            const prompt = document.createElement('p');
            prompt.textContent = question.prompt;
            prompt.style.cssText = 'margin:0; color:#1fa7a7; font-weight:400; font-size:13px; line-height:1.4; text-align:center;';
            questionWrap.appendChild(prompt);
            const optionsWrap = document.createElement('div');
            optionsWrap.dataset.answered = 'false';
            optionsWrap.style.cssText = 'display:flex; flex-wrap:wrap; gap:8px; justify-content:center;';
            question.options.forEach(function(option){
              const btn = document.createElement('button');
              btn.type = 'button';
              btn.textContent = option;
              btn.dataset.selected = 'false';
              btn.style.cssText = 'padding:8px 12px; background:white; color:#1fa7a7; border:2px solid #1fa7a7; border-radius:20px; cursor:pointer; font-size:13px; transition:all 0.3s; white-space:nowrap;';
              btn.addEventListener('click', function(){
                const peerButtons = optionsWrap.querySelectorAll('button');
                peerButtons.forEach(function(peer){
                  peer.dataset.selected = 'false';
                  peer.style.background = 'white';
                  peer.style.color = '#1fa7a7';
                });
                this.dataset.selected = 'true';
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
                if(optionsWrap.dataset.answered !== 'true'){
                  optionsWrap.dataset.answered = 'true';
                  answeredQuestions += 1;
                  if(answeredQuestions >= requiredAnswers){
                    completeBtn.style.display = 'inline-block';
                  }
                }
              });
              optionsWrap.appendChild(btn);
            });
            questionWrap.appendChild(optionsWrap);
            triggerQuestionsContainer.appendChild(questionWrap);
          });
        } else if(triggerQuestionsContainer){
          triggerQuestionsContainer.innerHTML = '';
        }
        if(withinE1Flow){
          bodyMatchContainer.innerHTML = '';
          bodyMatchContainer.style.display = 'none';
          if(completeBtn) completeBtn.style.display = 'none';
          updateE1ActivityTracker('quiz');
          showScreen(document.getElementById('emotionsTriggerScreen'));
          return;
        }
        const pairs = [
          { sensation: '🦋 Butterflies in my tummy', emotion: 'Excited' },
          { sensation: '🔥 My face feels hot and red', emotion: 'Angry' },
          { sensation: '💧 My chest feels heavy', emotion: 'Sad' },
          { sensation: '😄 I feel light and want to bounce', emotion: 'Happy' },
          { sensation: '💓 My heart beats really fast', emotion: 'Scared' },
          { sensation: '😌 My body feels soft and relaxed', emotion: 'Calm' }
        ];
        const shuffledEmotions = shuffledCopy(pairs.map(function(p){ return p.emotion; }));
        bodyMatchContainer.innerHTML = '';
        bodyMatchContainer.style.display = 'grid';
        let selectedSensation = null;
        let selectedEmotion = null;
        let matchedPairs = [];
        completeBtn.style.display = 'none';
        const sensationsCol = document.createElement('div');
        sensationsCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
        pairs.forEach(function(pair){
          const box = document.createElement('div');
          box.style.cssText = 'padding:10px 8px; background:#f0f9f9; border-radius:8px; border:2px solid #ddd; cursor:pointer; transition:all 0.3s; text-align:center; color:#1fa7a7; font-weight:400; font-size:12px; line-height:1.35; min-height:52px; display:flex; align-items:center; justify-content:center;';
          box.textContent = pair.sensation;
          box.dataset.emotion = pair.emotion;
          box.addEventListener('click', function(){
            if(matchedPairs.includes(this.dataset.emotion)) return;
            if(selectedSensation && selectedSensation !== this){ selectedSensation.style.background='#f0f9f9'; selectedSensation.style.borderColor='#ddd'; }
            selectedSensation = this;
            this.style.background='#fff5e1'; this.style.borderColor='#ffa500';
            if(selectedEmotion){ checkBodyMatch(); }
          });
          sensationsCol.appendChild(box);
        });
        const emotionsCol = document.createElement('div');
        emotionsCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
        shuffledEmotions.forEach(function(emotion){
          const box = document.createElement('div');
          box.style.cssText = 'padding:10px 8px; background:#f0f9f9; border-radius:8px; border:2px solid #ddd; cursor:pointer; transition:all 0.3s; text-align:center; color:#1fa7a7; font-weight:400; font-size:13px; min-height:52px; display:flex; align-items:center; justify-content:center;';
          box.textContent = emotion;
          box.dataset.emotion = emotion;
          box.addEventListener('click', function(){
            if(matchedPairs.includes(this.dataset.emotion)) return;
            if(selectedEmotion && selectedEmotion !== this){ selectedEmotion.style.background='#f0f9f9'; selectedEmotion.style.borderColor='#ddd'; }
            selectedEmotion = this;
            this.style.background='#fff5e1'; this.style.borderColor='#ffa500';
            if(selectedSensation){ checkBodyMatch(); }
          });
          emotionsCol.appendChild(box);
        });
        function checkBodyMatch(){
          if(selectedSensation.dataset.emotion === selectedEmotion.dataset.emotion){
            selectedSensation.style.background='#d4f4dd'; selectedSensation.style.borderColor='#4caf50';
            selectedEmotion.style.background='#d4f4dd'; selectedEmotion.style.borderColor='#4caf50';
            selectedSensation.style.cursor='default'; selectedEmotion.style.cursor='default';
            matchedPairs.push(selectedSensation.dataset.emotion);
            selectedSensation=null; selectedEmotion=null;
            if(matchedPairs.length === pairs.length){ completeBtn.style.display='inline-block'; }
          } else {
            selectedSensation.style.background='#ffe6e6'; selectedSensation.style.borderColor='#ff6b6b';
            selectedEmotion.style.background='#ffe6e6'; selectedEmotion.style.borderColor='#ff6b6b';
            setTimeout(function(){
              if(selectedSensation){ selectedSensation.style.background='#f0f9f9'; selectedSensation.style.borderColor='#ddd'; }
              if(selectedEmotion){ selectedEmotion.style.background='#f0f9f9'; selectedEmotion.style.borderColor='#ddd'; }
              selectedSensation=null; selectedEmotion=null;
            }, 800);
          }
        }
        bodyMatchContainer.appendChild(sensationsCol);
        bodyMatchContainer.appendChild(emotionsCol);
        showScreen(document.getElementById('emotionsTriggerScreen'));
      }

      function showHappinessActivity(){
        setMissionLearningText(
          happinessLearningText,
          'Learning focus: We are noticing what helps your mood feel good.'
        );
        const happinessItems = ['👨‍👩‍👧‍👦 Family', '🧑‍🤝‍🧑 Friends', '🐾 Pets', '🎮 Games', '📚 Books'];
        
        happinessOptions.innerHTML = '';
        happinessItems.forEach(item => {
          const btn = document.createElement('button');
          btn.textContent = item;
          btn.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 20px; cursor: pointer; font-size: 14px; transition: all 0.3s;';
          
          btn.addEventListener('click', function() {
            if(this.style.background === 'rgb(31, 167, 167)'){
              this.style.background = 'white';
              this.style.color = '#1fa7a7';
            } else {
              this.style.background = '#1fa7a7';
              this.style.color = 'white';
            }
          });
          
          happinessOptions.appendChild(btn);
        });
        
        additionalHappiness.value = '';
        showScreen(happinessScreen);
      }

      function loadEmotionQuestResponses(){
        try {
          const raw = localStorage.getItem(EMOTION_SUMMARY_STORAGE_KEY);
          if (!raw) return {};
          const parsed = JSON.parse(raw);
          return parsed && typeof parsed === 'object' ? parsed : {};
        } catch (e) {
          return {};
        }
      }

      function saveEmotionQuestResponses(responses){
        try {
          localStorage.setItem(EMOTION_SUMMARY_STORAGE_KEY, JSON.stringify(responses || {}));
        } catch (e) {}
      }

      function saveCurrentEmotionQuestResponse(){
        if(!currentEmotionmissionstepKey) return;
        const selectedOptions = emotionActivityOptions
          ? Array.from(emotionActivityOptions.querySelectorAll('button'))
              .filter(function(btn){ return btn.dataset.selected === 'true'; })
              .map(function(btn){ return btn.textContent.trim(); })
          : [];
        const selectedBehaviorSuggestions = emotionBehaviorSuggestions
          ? Array.from(emotionBehaviorSuggestions.querySelectorAll('button'))
              .filter(function(btn){ return btn.dataset.selected === 'true'; })
              .map(function(btn){ return btn.textContent.trim(); })
          : [];
        const selectedBodySuggestions = emotionBodySuggestions
          ? Array.from(emotionBodySuggestions.querySelectorAll('button'))
              .filter(function(btn){ return btn.dataset.selected === 'true'; })
              .map(function(btn){ return btn.textContent.trim(); })
          : [];
        const behaviorText = additionalEmotion ? additionalEmotion.value.trim() : '';
        const combinedBehavior = [selectedBehaviorSuggestions.join(', '), behaviorText]
          .filter(function(value){ return value && value.length; })
          .join(' | ');
        const bodyOtherText = emotionBodyFeelingElse ? emotionBodyFeelingElse.value.trim() : '';
        const combinedBodyFeeling = [selectedBodySuggestions.join(', '), bodyOtherText]
          .filter(function(value){ return value && value.length; })
          .join(' | ');

        const responses = loadEmotionQuestResponses();
        responses[currentEmotionmissionstepKey] = {
          title: currentEmotionQuestTitle || currentEmotionmissionstepKey,
          selectedOptions: selectedOptions,
          anythingElse: additionalEmotionElse ? additionalEmotionElse.value.trim() : '',
          behavior: combinedBehavior,
          bodyFeeling: combinedBodyFeeling || (emotionBodyFeeling ? emotionBodyFeeling.value.trim() : '')
        };
        saveEmotionQuestResponses(responses);
      }

      function renderEmotionSummaryPage(){
        if(!emotionSummaryContent) return;
        const responses = loadEmotionQuestResponses();
        const stepKeys = ['E3','E4','E5','E6','E7','E8','E9'];

        emotionSummaryContent.innerHTML = '';

        stepKeys.forEach(function(stepKey){
          const entry = responses[stepKey] || null;
          const card = document.createElement('div');
          card.style.cssText = 'background:#f0f9f9; border:2px solid #1fa7a7; border-radius:10px; padding:10px; text-align:left;';

          const title = document.createElement('p');
          title.style.cssText = 'margin:0 0 6px; color:#1fa7a7; font-weight:700; font-size:14px;';
          title.textContent = entry && entry.title ? entry.title : stepKey;
          card.appendChild(title);

          const selected = document.createElement('p');
          selected.style.cssText = 'margin:0 0 4px; color:#1fa7a7; font-size:12px; line-height:1.35;';
          selected.textContent = 'Selected: ' + (entry && entry.selectedOptions && entry.selectedOptions.length ? entry.selectedOptions.join(', ') : '?');
          card.appendChild(selected);

          const anythingElse = document.createElement('p');
          anythingElse.style.cssText = 'margin:0 0 4px; color:#1fa7a7; font-size:12px; line-height:1.35;';
          anythingElse.textContent = 'Anything else: ' + (entry && entry.anythingElse ? entry.anythingElse : '?');
          card.appendChild(anythingElse);

          const behavior = document.createElement('p');
          behavior.style.cssText = 'margin:0 0 4px; color:#1fa7a7; font-size:12px; line-height:1.35;';
          behavior.textContent = 'How you act: ' + (entry && entry.behavior ? entry.behavior : '?');
          card.appendChild(behavior);

          const bodyFeeling = document.createElement('p');
          bodyFeeling.style.cssText = 'margin:0; color:#1fa7a7; font-size:12px; line-height:1.35;';
          bodyFeeling.textContent = 'Body feeling: ' + (entry && entry.bodyFeeling ? entry.bodyFeeling : '?');
          card.appendChild(bodyFeeling);

          emotionSummaryContent.appendChild(card);
        });
      }

      function showEmotionSummaryActivity(){
        renderEmotionSummaryPage();
        showScreen(emotionSummaryScreen);
      }

      function showEmotionActivity(stepKey, emotionType, title, optionsString){
        setMissionLearningText(
          emotionLearningText,
          'Learning focus: We are noticing what causes feelings and how feelings show in your body.'
        );
        if(emotionActivityTitle) emotionActivityTitle.textContent = title;
        if(emotionActivityPrompt) emotionActivityPrompt.textContent = `What makes you feel ${emotionType}?`;
        if(emotionAnythingElsePrompt) emotionAnythingElsePrompt.textContent = 'Anything else?';
        if(emotionBehaviorPrompt) emotionBehaviorPrompt.textContent = `How might you be able to tell somebody is ${emotionType}?`;
        if(emotionBodyPrompt) emotionBodyPrompt.textContent = `What does it feel like in your body when you feel ${emotionType}?`;
        resetEmotionActivityProgress();

        currentEmotionmissionstepKey = stepKey || '';
        currentEmotionQuestTitle = title || '';
        
        const items = shuffledCopy(optionsString.split(',').map(s => s.trim()));
        const behaviorSuggestionsByEmotion = {
          happy: ['Smiling a lot', 'Laughing', 'Chatty voice', 'Playful energy', 'Helping others', 'Open posture', 'Shouting angrily', 'Hiding because you feel frightened'],
          sad: ['Quiet voice', 'Tears', 'Looking down', 'Slow movement', 'Low eye contact', 'Wanting space', 'Bouncing with excitement', 'Boasting loudly'],
          angry: ['Loud voice', 'Frowning', 'Crossed arms', 'Stomping feet', 'Clenched jaw', 'Snappy words', 'Giggling with delight', 'Quietly daydreaming'],
          scared: ['Hiding', 'Wide eyes', 'Shaky voice', 'Staying close to someone', 'Startling easily', 'Asking for reassurance', 'Celebrating loudly', 'Strutting confidently to show off'],
          embarrassed: ['Looking away', 'Quiet voice', 'Nervous laugh', 'Blushing', 'Hiding face', 'Fidgeting', 'Stomping because you are furious', 'Cheering as if you won a prize'],
          worried: ['Fidgeting', 'Asking lots of questions', 'Pacing', 'Nail biting', 'Checking repeatedly', 'Furrowed brow', 'Relaxing with no concerns at all', 'Laughing because something is hilarious'],
          calm: ['Slow, steady voice', 'Relaxed face', 'Still body', 'Gentle movements', 'Patient waiting', 'Even breathing', 'Shouting and slamming things', 'Shaking with panic'],
          jealous: ['Crossed arms', 'Quiet mood', 'Comparing with others', 'Upset tone', 'Wanting the same thing', 'Withdrawing', 'Feeling completely unconcerned about the comparison', 'Celebrating that someone else has something you really want']
        };
        const behaviorSuggestions = shuffledCopy(behaviorSuggestionsByEmotion[emotionType] || ['Smiling', 'Quiet voice', 'Fidgeting']);
        const bodySuggestionsByEmotion = {
          happy: ['Light body', 'Warm chest', 'Big smile', 'Relaxed shoulders', 'Giggles', 'Springy steps', 'Tight fists and a hot face', 'Heavy chest and a lump in your throat'],
          sad: ['Heavy chest', 'Tired body', 'Lump in throat', 'Slow movement', 'Watery eyes', 'Slumped posture', 'Bouncy energy and wanting to jump', 'Clenched fists and a hot face'],
          angry: ['Hot face', 'Tight fists', 'Tense shoulders', 'Fast breathing', 'Clenched jaw', 'Stompy feet', 'Loose muscles and slow breathing', 'Butterflies from excited anticipation'],
          scared: ['Fast heartbeat', 'Shaky hands', 'Butterflies', 'Sweaty palms', 'Goosebumps', 'Frozen body', 'Warm relaxed muscles and steady breathing', 'Springy steps from joy'],
          embarrassed: ['Warm cheeks', 'Butterflies', 'Tight tummy', 'Avoiding eye contact', 'Nervous energy', 'Face feels hot', 'Loose shoulders and a steady heartbeat', 'Clenched fists and stomping feet'],
          worried: ['Tight tummy', 'Restless body', 'Fast heartbeat', 'Tense shoulders', 'Knot in tummy', 'Shallow breathing', 'Soft belly and relaxed muscles', 'Light bouncy energy from happiness'],
          calm: ['Slow breathing', 'Loose muscles', 'Steady heartbeat', 'Quiet body', 'Soft belly', 'Warm hands', 'Fast heartbeat and shaking hands', 'Hot face and clenched jaw'],
          jealous: ['Tight chest', 'Heavy tummy', 'Restless body', 'Tense shoulders', 'Hot face', 'Knot in tummy', 'Loose muscles and feeling settled', 'Bouncy energy because you are delighted for someone else']
        };
        const bodySuggestions = shuffledCopy(bodySuggestionsByEmotion[emotionType] || ['Butterflies', 'Heavy chest', 'Fast heartbeat']);
        
        if(emotionActivityOptions){
          emotionActivityOptions.innerHTML = '';
          shuffledCopy(items).forEach(item => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = item;
            btn.dataset.selected = 'false';
            btn.setAttribute('aria-pressed', 'false');
            btn.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 20px; cursor: pointer; font-size: 14px; transition: all 0.3s;';
            
            btn.addEventListener('click', function() {
              if(this.dataset.selected === 'true'){
                this.dataset.selected = 'false';
                this.setAttribute('aria-pressed', 'false');
                this.style.background = 'white';
                this.style.color = '#1fa7a7';
              } else {
                this.dataset.selected = 'true';
                this.setAttribute('aria-pressed', 'true');
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
              }
            });
            
            emotionActivityOptions.appendChild(btn);
          });
        }

        if(emotionBehaviorSuggestions){
          emotionBehaviorSuggestions.innerHTML = '';
          shuffledCopy(behaviorSuggestions).forEach(function(suggestion){
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.textContent = suggestion;
            chip.dataset.selected = 'false';
            chip.setAttribute('aria-pressed', 'false');
            chip.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 20px; cursor: pointer; font-size: 14px; transition: all 0.3s;';

            chip.addEventListener('click', function(){
              if(this.dataset.selected === 'true'){
                this.dataset.selected = 'false';
                this.setAttribute('aria-pressed', 'false');
                this.style.background = 'white';
                this.style.color = '#1fa7a7';
              } else {
                this.dataset.selected = 'true';
                this.setAttribute('aria-pressed', 'true');
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
              }
            });

            emotionBehaviorSuggestions.appendChild(chip);
          });
        }

        if(emotionBodySuggestions){
          emotionBodySuggestions.innerHTML = '';
          bodySuggestions.forEach(function(suggestion){
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.textContent = suggestion;
            chip.dataset.selected = 'false';
            chip.setAttribute('aria-pressed', 'false');
            chip.style.cssText = 'padding: 8px 12px; background: white; color: #1fa7a7; border: 2px solid #1fa7a7; border-radius: 20px; cursor: pointer; font-size: 14px; transition: all 0.3s; white-space: nowrap;';

            chip.addEventListener('click', function(){
              if(this.dataset.selected === 'true'){
                this.dataset.selected = 'false';
                this.setAttribute('aria-pressed', 'false');
                this.style.background = 'white';
                this.style.color = '#1fa7a7';
              } else {
                this.dataset.selected = 'true';
                this.setAttribute('aria-pressed', 'true');
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
              }

              if(emotionBodyFeeling){
                const selectedBodySuggestions = Array.from(emotionBodySuggestions.querySelectorAll('button'))
                  .filter(function(btn){ return btn.dataset.selected === 'true'; })
                  .map(function(btn){ return btn.textContent.trim(); });
                emotionBodyFeeling.value = selectedBodySuggestions.join(', ');
              }
            });

            emotionBodySuggestions.appendChild(chip);
          });
        }
        
        if(additionalEmotionElse) additionalEmotionElse.value = '';
        if(additionalEmotion) additionalEmotion.value = '';
        if(emotionBodyFeeling) emotionBodyFeeling.value = '';
        if(emotionBodyFeelingElse) emotionBodyFeelingElse.value = '';
        showEmotionActivityStep('feel');
        showScreen(emotionActivityScreen);
      }

      function showMindsetActivity(stepTitle, prompt, options, inputPrompt){
        setMissionLearningText(
          mindsetLearningText,
          'Learning focus: We are practising helpful, growth-mindset thoughts.'
        );
        if(mindsetActivityTitle) mindsetActivityTitle.textContent = `🧠 Mindset Detective - ${stepTitle}`;
        if(mindsetActivityPrompt) mindsetActivityPrompt.textContent = prompt;

        if(mindsetActivityOptions) mindsetActivityOptions.innerHTML = '';
        if(mindsetActivityInput) mindsetActivityInput.value = '';

        if(mindsetInputWrap){
          if(inputPrompt){
            mindsetInputWrap.style.display = 'block';
            if(mindsetInputLabel) mindsetInputLabel.textContent = inputPrompt;
          } else {
            mindsetInputWrap.style.display = 'none';
          }
        }

        const updateComplete = function(){
          const questions = mindsetActivityOptions ? mindsetActivityOptions.querySelectorAll('.circle-quiz-question') : [];
          const hasSelection = questions.length > 0 && Array.from(questions).every(function(question){
            return question.querySelector('button[aria-pressed="true"]');
          });
          const hasText = mindsetActivityInput ? mindsetActivityInput.value.trim().length > 0 : false;
          if(completeMindsetActivity){
            completeMindsetActivity.style.display = (hasSelection || hasText) ? 'inline-block' : 'none';
          }
        };

        if(mindsetActivityOptions && Array.isArray(options) && options.length){
          const theme = activeQuestActivity && circleFollowupThemes[activeQuestActivity.questId];
          const first = activeQuestActivity.questId === 'conflict'
            ? theme.openers[activeQuestActivity.index]
            : {question: prompt, helpful: options[0], other: options[1], third:'I am not sure yet'};
          const questions = [first].concat(theme.practice);
          const practiceThirdAnswers = activeQuestActivity.questId === 'conflict'
            ? theme.practice.map(function(question){ return question[3]; })
            : circleThirdAnswers[activeQuestActivity.questId].practice;
          renderCircleQuestions(mindsetActivityOptions, questions, updateComplete, [
            first.third || first[3]
          ].concat(practiceThirdAnswers));
        }

        if(mindsetActivityInput){
          mindsetActivityInput.oninput = updateComplete;
        }

        if(completeMindsetActivity){
          completeMindsetActivity.style.display = 'none';
        }

        updateComplete();
        showScreen(mindsetActivityScreen);
      }

      function showSocialActivity(title, prompt, behaviorsData, stepIndex){
        setMissionLearningText(
          socialLearningText,
          'Learning focus: We are learning expected and unexpected social choices.'
        );
        if(socialActivityTitle) socialActivityTitle.textContent = title || 'Social Norm Detective';
        const activitySets = Array.isArray(behaviorsData) ? behaviorsData : [behaviorsData];
        currentSocialActivitySets = activitySets.filter(function(set) {
          return typeof set === 'string' && set.trim().length > 0;
        });
        currentSocialActivityStepIndex = typeof stepIndex === 'number' ? stepIndex : 0;
        currentSocialActivityTitle = title || 'Social Norm Detective';
        currentSocialActivityPromptBase = prompt || 'Which behaviors fit here?';
        currentSocialFlow = currentSocialActivityStepIndex === 0
          ? ['lesson', 'quiz', 'sort']
          : ['sort', 'expected', 'unexpected'];
        resetSocialActivityProgress();
        showSocialActivityStep(currentSocialFlow[0]);
        showScreen(socialActivityScreen);
      }

      function showFriendshipActivity(scenariosData){
        setMissionLearningText(
          friendshipLearningText,
          'Learning focus: We are spotting healthy friendship behaviours.'
        );
        if(!friendshipScenarios) return;
        
        const completeBtn = document.getElementById('completeFriendshipActivity');
        
        // Parse scenarios - format: "scenario1:healthy, scenario2:unhealthy, ..."
        const scenarios = scenariosData.map(s => {
          const parts = s.split(':');
          return { text: parts[0].trim(), type: parts[1].trim() };
        });
        
        // Clear container
        friendshipScenarios.innerHTML = '';
        completeBtn.style.display = 'none';
        
        let answeredCount = 0;
        
        // Create scenario cards
        scenarios.forEach((scenario, index) => {
          const card = document.createElement('div');
          card.style.cssText = 'background: white; border: 2px solid #1fa7a7; border-radius: 12px; padding: 12px; position: relative;';
          
          const scenarioText = document.createElement('p');
          scenarioText.textContent = scenario.text;
          scenarioText.style.cssText = 'color: #1fa7a7; margin: 0 0 12px 0; font-size: 14px; font-weight: 600; line-height: 1.3;';
          card.appendChild(scenarioText);
          
          const buttonsDiv = document.createElement('div');
          buttonsDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px;';
          
          const healthyBtn = document.createElement('button');
          healthyBtn.textContent = '✓ Healthy';
          healthyBtn.style.cssText = 'flex: 1; padding: 10px; background: #4caf50; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s;';
          healthyBtn.dataset.answer = 'healthy';
          healthyBtn.type = 'button';
          healthyBtn.setAttribute('aria-pressed', 'false');
          
          const unhealthyBtn = document.createElement('button');
          unhealthyBtn.textContent = '✗ Unhealthy';
          unhealthyBtn.style.cssText = 'flex: 1; padding: 10px; background: #ff6b6b; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s;';
          unhealthyBtn.dataset.answer = 'unhealthy';
          unhealthyBtn.type = 'button';
          unhealthyBtn.setAttribute('aria-pressed', 'false');

          const unsureBtn = document.createElement('button');
          unsureBtn.textContent = 'Not sure';
          unsureBtn.type = 'button';
          unsureBtn.setAttribute('aria-pressed', 'false');
          unsureBtn.style.cssText = 'flex: 1; padding: 10px; background: #e8f4f4; color: #155f65; border: 2px solid #1fa7a7; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 13px;';
          const hint = document.createElement('p');
          hint.setAttribute('role', 'status');
          hint.style.cssText = 'color: #155f65; margin: 8px 0 0; font-size: 13px;';
          
          const answerQuestion = function(chosenAnswer) {
            // Once a scenario is answered correctly, ignore any further taps.
            if(healthyBtn.disabled && unhealthyBtn.disabled) return;
            const correctAnswer = scenario.type;
            const isCorrect = chosenAnswer === correctAnswer;

            if(isCorrect) {
              // Keep the selected state available to keyboard/screen-reader users.
              healthyBtn.setAttribute('aria-pressed', chosenAnswer === 'healthy' ? 'true' : 'false');
              unhealthyBtn.setAttribute('aria-pressed', chosenAnswer === 'unhealthy' ? 'true' : 'false');
              // Lock both choices only after a correct answer.
              healthyBtn.disabled = true;
              unhealthyBtn.disabled = true;
              unsureBtn.disabled = true;
              unsureBtn.setAttribute('aria-pressed', 'false');
              unsureBtn.style.background = '#e8f4f4';
              unsureBtn.style.color = '#155f65';
              hint.textContent = '';
              healthyBtn.style.cursor = 'default';
              unhealthyBtn.style.cursor = 'default';
              if(chosenAnswer === 'healthy') {
                healthyBtn.style.background = '#2e7d32';
                healthyBtn.textContent = '✓ Correct!';
              } else {
                unhealthyBtn.style.background = '#c62828';
                unhealthyBtn.textContent = '✓ Correct!';
              }
              card.style.borderColor = '#4caf50';
              card.style.background = '#d4f4dd';
              card.setAttribute('aria-label', scenario.text + ' Correctly answered: ' + correctAnswer + '.');
              answeredCount++;
              if(answeredCount === scenarios.length) {
                completeBtn.style.display = 'inline-block';
              }
            } else {
              healthyBtn.setAttribute('aria-pressed', chosenAnswer === 'healthy' ? 'true' : 'false');
              unhealthyBtn.setAttribute('aria-pressed', chosenAnswer === 'unhealthy' ? 'true' : 'false');
              unsureBtn.setAttribute('aria-pressed', 'false');
              unsureBtn.style.background = '#e8f4f4';
              unsureBtn.style.color = '#155f65';
              // Keep the correct choice available so “Try again” is genuine.
              const wrongBtn = chosenAnswer === 'healthy' ? healthyBtn : unhealthyBtn;
              wrongBtn.disabled = true;
              wrongBtn.style.background = '#ffa500';
              wrongBtn.style.cursor = 'default';
              wrongBtn.textContent = '↺ Try again';
              const correctBtn = correctAnswer === 'healthy' ? healthyBtn : unhealthyBtn;
              correctBtn.style.opacity = '1';
              correctBtn.style.outline = '3px solid #2e7d32';
              card.style.borderColor = '#ffa500';
              card.style.background = '#fff3cd';
              card.setAttribute('aria-label', scenario.text + ' Not quite. Try the other answer.');
            }
          };
          
          healthyBtn.addEventListener('click', () => answerQuestion('healthy'));
          unhealthyBtn.addEventListener('click', () => answerQuestion('unhealthy'));
          unsureBtn.addEventListener('click', function(){
            healthyBtn.setAttribute('aria-pressed', 'false');
            unhealthyBtn.setAttribute('aria-pressed', 'false');
            unsureBtn.setAttribute('aria-pressed', 'true');
            unsureBtn.style.background = '#1b7278';
            unsureBtn.style.color = 'white';
            hint.textContent = 'Think about whether the behaviour is kind and respects the other person. Then choose healthy or unhealthy.';
          });
          
          buttonsDiv.appendChild(healthyBtn);
          buttonsDiv.appendChild(unhealthyBtn);
          buttonsDiv.appendChild(unsureBtn);
          card.appendChild(buttonsDiv);
          card.appendChild(hint);
          
          friendshipScenarios.appendChild(card);
        });
        
        showScreen(friendshipActivityScreen);
      }

      function showFeelingActivity(scenariosData){
        setMissionLearningText(
          feelingLearningText,
          'Learning focus: We are practising how to notice feelings in different situations.'
        );
        if(!feelingScenario || !feelingOptions) return;
        
        const completeBtn = document.getElementById('completeFeelingActivity');
        
        const extraSituations = {
          0: ['A friend invites you to a game after you felt left out.', 'Someone accidentally spills water on your picture.', 'You find a quiet spot after a busy morning.', 'A classmate asks you to explain a game.', 'Your family changes plans for the afternoon.'],
          2: ['You are waiting to hear whether your class trip can go ahead.', 'A dog barks suddenly while you are walking past.', 'You meet the person who will help you learn a new skill.', 'The lights go out briefly during a storm.', 'You find a familiar face in a new group.'],
          3: ['A story you enjoyed comes to an end.', 'Your favourite jumper no longer fits.', 'Someone remembers a happy time you shared.', 'A planned picnic is cancelled because of rain.', 'You find a photo of a place you miss.'],
          5: ['A game piece goes missing when it is your turn.', 'A friend changes the rules without checking with you.', 'You cannot find the pencil you wanted to use.', 'A sibling interrupts your story before you finish.', 'Someone helps you repair a model that fell apart.'],
          6: ['Your class is planning a visit to a wildlife park.', 'You hear that a new playground will open nearby.', 'A surprise parcel arrives for your family.', 'You are choosing a new club to try.', 'A friend teaches you a dance move.'],
          7: ['Two people give you different directions to the same room.', 'The instructions for a craft are missing a step.', 'A friend uses a word you have not heard before.', 'Your timetable has changed without an explanation.', 'You ask someone to show you how a new game works.'],
          9: ['You discover a small note of encouragement in your bag.', 'A neighbour shows you a flower they have grown.', 'A silly joke makes your class giggle.', 'Your family plans an unexpected trip to the library.', 'A friend remembers your favourite song.']
        };
        const emotionsList = '|Happy,Sad,Angry,Scared,Calm,Worried,Excited,Confused';
        const scenarios = scenariosData.concat(extraSituations[activeQuestActivity.index].map(function(text){ return text + emotionsList; })).map(s => {
          const parts = s.split('|');
          return { 
            text: parts[0].trim(), 
            emotions: parts[1].trim().split(',').map(e => e.trim())
          };
        });
        
        completeBtn.style.display = 'none';
        
        feelingScenario.textContent = 'How would you feel? People can feel differently in the same situation, and all feelings are okay.';
        feelingOptions.innerHTML = '';
        const emotions = [
          { emoji: '😊', label: 'Happy' },
          { emoji: '😢', label: 'Sad' },
          { emoji: '😠', label: 'Angry' },
          { emoji: '😨', label: 'Scared' },
          { emoji: '😌', label: 'Calm' },
          { emoji: '😟', label: 'Worried' },
          { emoji: '🤩', label: 'Excited' },
          { emoji: '😕', label: 'Confused' }
        ];
          
        scenarios.forEach(function(scenario, idx){
          const card = document.createElement('div');
          card.className = 'circle-quiz-question';
          const question = document.createElement('p');
          question.textContent = (idx + 1) + '. ' + scenario.text;
          card.appendChild(question);
          const options = document.createElement('div');
          options.className = 'circle-quiz-options';
          Array.from(new Set(scenario.emotions.concat(['Excited', 'Confused']))).forEach(emotionLabel => {
            const emotionData = emotions.find(e => e.label.toLowerCase() === emotionLabel.toLowerCase());
            if(emotionData) {
              const btn = document.createElement('button');
              btn.type = 'button';
              btn.textContent = emotionData.emoji + ' ' + emotionData.label;
              btn.setAttribute('aria-pressed', 'false');
              btn.addEventListener('click', function() {
                options.querySelectorAll('button').forEach(function(peer){
                  peer.setAttribute('aria-pressed', String(peer === btn));
                });
                completeBtn.style.display = feelingOptions.querySelectorAll('.circle-quiz-question button[aria-pressed="true"]').length === scenarios.length ? 'inline-block' : 'none';
              });
              options.appendChild(btn);
            }
          });
          card.appendChild(options);
          feelingOptions.appendChild(card);
        });
        showScreen(feelingActivityScreen);
      }

      function showCommunicationActivity(scenariosData, styles){
        setMissionLearningText(
          communicationLearningText,
          'Learning focus: We are practising calm, respectful ways to speak and listen.'
        );
        if(!communicationScenario || !communicationOptions) return;
        
        const completeBtn = document.getElementById('completeCommunicationActivity');
        
        // Parse communication quiz: array of { question, a, b, c, feedback }
        const scenarios = scenariosData;
        
        completeBtn.style.display = 'none';
        if(communicationFeedback) communicationFeedback.style.display = 'none';
        
        const answers = new Array(scenarios.length);
        communicationScenario.textContent = 'Choose an answer for each situation.';
        communicationOptions.innerHTML = '';
        scenarios.forEach(function(scenario, idx) {
          const card = document.createElement('div');
          card.className = 'circle-quiz-question';
          const question = document.createElement('p');
          question.textContent = `${idx + 1}. ${scenario.question}`;
          card.appendChild(question);
          const options = document.createElement('div');
          options.className = 'circle-quiz-options';
          
          // Shuffle the visible order so the assertive response is not always
          // in the same position. Keep each answer's original value for scoring.
          const choices = shuffledCopy([
            { label: scenario.a, value: 'a' },
            { label: scenario.b, value: 'b' },
            { label: scenario.c, value: 'c' }
          ]);
          
          choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.setAttribute('aria-pressed', 'false');
            btn.textContent = choice.label;
            btn.style.cssText = `
              flex: 1 1 100%;
              padding: 12px;
              background: #f2f5f7;
              color: #263238;
              border: 2px solid #cbd5dc;
              border-radius: 10px;
              cursor: pointer;
              font-weight: 600;
              font-size: 13px;
              margin: 6px 0;
              white-space: normal;
              line-height: 1.3;
              transition: all 0.3s;
              text-align: left;
            `;
            
            btn.addEventListener('click', function() {
              answers[idx] = choice.value;
              options.querySelectorAll('button').forEach(function(peer){
                peer.setAttribute('aria-pressed', String(peer === btn));
              });
              completeBtn.style.display = answers.filter(Boolean).length === scenarios.length ? 'inline-block' : 'none';
            });
            options.appendChild(btn);
          });
          card.appendChild(options);
          communicationOptions.appendChild(card);
        });
        completeBtn.onclick = function(){ showCommunicationResults(answers); };
        showScreen(communicationActivityScreen);
      }

      function showCommunicationResults(answers){
        // Count answers
        const countA = answers.filter(a => a === 'a').length;
        const countB = answers.filter(a => a === 'b').length;
        const countC = answers.filter(a => a === 'c').length;
        
        let styleType = '';
        let styleEmoji = '';
        let styleDescription = '';
        const highestCount = Math.max(countA, countB, countC);
        const leadingStyles = [
          { count: countA, name: 'Passive', emoji: '🤐' },
          { count: countB, name: 'Aggressive', emoji: '😤' },
          { count: countC, name: 'Assertive', emoji: '🌟' }
        ].filter(style => style.count === highestCount);

        if(leadingStyles.length > 1){
          styleType = 'Mixed';
          styleEmoji = '🌈';
          styleDescription = `Your answers show a mix of communication styles. Different situations can bring out different ways of communicating. You can practise being clear about what you need while also respecting other people's feelings. There isn't one label that describes you in every situation.`;
        } else if(countA === highestCount){
          styleType = 'Passive';
          styleEmoji = '🤐';
          styleDescription = `You chose mostly answers that keep the peace by staying quiet or holding back. Sometimes this can make it harder to share what you think or need. You can practise finding your voice while still being kind and respectful.`;
        } else if(countB === highestCount){
          styleType = 'Aggressive';
          styleEmoji = '😤';
          styleDescription = `You chose mostly answers that express feelings strongly, but may not leave much room for other people's feelings. You can practise speaking up for yourself while also listening and being respectful.`;
        } else {
          styleType = 'Assertive';
          styleEmoji = '🌟';
          styleDescription = `You chose mostly answers that express thoughts and feelings clearly while respecting other people. This is called assertive communication. Keep practising this balanced way of speaking up for yourself.`;
        }
        
        // Save result to localStorage with error handling
        try{
          localStorage.setItem('communication_result', styleType);
        } catch(e){
          console.error('Error saving communication result:', e);
        }
        
        if(resultsMessage) resultsMessage.textContent = `${styleEmoji} You have a ${styleType} communication style!`;
        if(resultsDescription) resultsDescription.textContent = styleDescription;
        if(closeCommResults){
          closeCommResults.onclick = function(){
            finishCircleQuestActivity(function(){
              communicationResultsScreen.style.display = 'none';
              showScreen(missionsScreen);
            });
          };
        }
        
        showScreen(communicationResultsScreen);
      }

      function showIdentityActivity(title, prompt, activityType, data){
        setMissionLearningText(
          identityLearningText,
          'Learning focus: We are learning what makes you you.'
        );
        if(!identityActivityTitle || !identityActivityPrompt || !identityActivityContent) return;
        
        identityActivityTitle.textContent = '🪪 ' + title;
        identityActivityPrompt.textContent = prompt;
        identityActivityContent.innerHTML = '';
        
        const completeBtn = document.getElementById('completeIdentityActivity');
        completeBtn.style.display = 'none';
        
        if(activityType === 'quiz'){
          // Big 5 Personality Quiz
          let answeredCount = 0;
          
          data.forEach((item, idx) => {
            const parts = item.split('|');
            const question = parts[0];
            const options = parts[1].split(',');
            
            const questionDiv = document.createElement('div');
            questionDiv.style.cssText = 'margin-bottom: 20px; background: #f9f9f9; padding: 12px; border-radius: 10px;';
            
            const questionText = document.createElement('p');
            questionText.textContent = question;
            questionText.style.cssText = 'color: #1fa7a7; font-weight: 600; margin-bottom: 10px; text-align: center;';
            questionDiv.appendChild(questionText);
            
            const optionsDiv = document.createElement('div');
            optionsDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;';
            
            options.forEach((option, optIdx) => {
              const btn = document.createElement('button');
              btn.textContent = option.trim();
              btn.type = 'button';
              btn.setAttribute('aria-pressed', 'false');
              btn.style.cssText = `
                padding: 8px 12px;
                background: #dff3f3;
                color: #1fa7a7;
                border: 2px solid #1fa7a7;
                border-radius: 8px;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                transition: all 0.3s;
              `;
              
              btn.addEventListener('click', function() {
                // Mark as selected
                optionsDiv.querySelectorAll('button').forEach(b => {
                  b.style.background = '#dff3f3';
                  b.style.border = '2px solid #1fa7a7';
                  b.style.color = '#1fa7a7';
                });
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
                this.style.border = '2px solid #1fa7a7';
                // Keep the selected answer attached to its question for personalised results.
                questionDiv.dataset.questionIndex = String(idx);
                questionDiv.dataset.question = question;
                questionDiv.dataset.answer = option.trim();
                optionsDiv.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === this)));
                
                // Count distinct questions that have an answer. Using idx + 1
                // here let the final question unlock completion even when earlier
                // questions had been skipped.
                answeredCount = identityActivityContent.querySelectorAll('[data-question-index][data-answer]').length;
                if(answeredCount === data.length) {
                  completeBtn.style.display = 'inline-block';
                } else {
                  completeBtn.style.display = 'none';
                }
              });
              
              optionsDiv.appendChild(btn);
            });
            
            questionDiv.appendChild(optionsDiv);
            identityActivityContent.appendChild(questionDiv);
          });
          
        } else if(activityType === 'checkboxes'){
          // Multiple selection checkboxes
          const checkboxDiv = document.createElement('div');
          checkboxDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 16px;';
          
          data.forEach(option => {
            const chip = document.createElement('button');
            chip.textContent = option.trim();
            chip.style.cssText = `
              padding: 10px 14px;
              background: #dff3f3;
              color: #1fa7a7;
              border: 2px solid #1fa7a7;
              border-radius: 20px;
              cursor: pointer;
              font-size: 13px;
              font-weight: 600;
              transition: all 0.3s;
            `;
            chip.dataset.selected = 'false';
            
            chip.addEventListener('click', function() {
              if(this.dataset.selected === 'false') {
                this.style.background = '#1fa7a7';
                this.style.color = 'white';
                this.dataset.selected = 'true';
              } else {
                this.style.background = '#dff3f3';
                this.style.color = '#1fa7a7';
                this.dataset.selected = 'false';
              }
              
              // Show complete button after at least one selection
              const anySelected = Array.from(checkboxDiv.querySelectorAll('button')).some(b => b.dataset.selected === 'true');
              if(anySelected) {
                completeBtn.style.display = 'inline-block';
              }
            });
            
            checkboxDiv.appendChild(chip);
          });
          
          identityActivityContent.appendChild(checkboxDiv);
          
        } else if(activityType === 'ranking'){
          // Ranking activity
          const instructionP = document.createElement('p');
          instructionP.textContent = 'Drag to reorder from most to least important:';
          instructionP.style.cssText = 'color: #1fa7a7; font-weight: 600; margin-bottom: 12px; text-align: center; font-size: 13px;';
          identityActivityContent.appendChild(instructionP);
          
          const rankingList = document.createElement('div');
          rankingList.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;';
          
          data.forEach((item, idx) => {
            const rankItem = document.createElement('div');
            rankItem.textContent = (idx + 1) + '. ' + item.trim();
            rankItem.style.cssText = `
              padding: 12px;
              background: #dff3f3;
              color: #1fa7a7;
              border: 2px solid #1fa7a7;
              border-radius: 10px;
              cursor: move;
              font-weight: 600;
              text-align: center;
            `;
            rankingList.appendChild(rankItem);
          });
          
          identityActivityContent.appendChild(rankingList);
          completeBtn.style.display = 'inline-block';
          
        } else if(activityType === 'text'){
          // Text input fields
          data.forEach((question, idx) => {
            const questionDiv = document.createElement('div');
            questionDiv.style.cssText = 'margin-bottom: 16px;';
            
            const label = document.createElement('p');
            label.textContent = question.trim();
            label.style.cssText = 'color: #1fa7a7; font-weight: 600; margin-bottom: 6px; font-size: 13px;';
            questionDiv.appendChild(label);
            
            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Type your answer here...';
            textarea.style.cssText = `
              width: 100%;
              padding: 10px;
              border: 2px solid #1fa7a7;
              border-radius: 8px;
              box-sizing: border-box;
              min-height: 60px;
              resize: vertical;
              font-size: 13px;
              font-family: Arial, sans-serif;
            `;
            
            textarea.addEventListener('input', function() {
              // Show complete button if at least one field has text
              const anyFilled = Array.from(identityActivityContent.querySelectorAll('textarea')).some(t => t.value.trim().length > 0);
              if(anyFilled) {
                completeBtn.style.display = 'inline-block';
              }
            });
            
            questionDiv.appendChild(textarea);
            identityActivityContent.appendChild(questionDiv);
          });
        }
        
        showScreen(identityActivityScreen);
      }

      function buildQuestWheel(svg){
        console.log('buildQuestWheel called for:', svg);
        const questId = svg.dataset.quest || 'quest';
        const questTitle = svg.dataset.title || 'Quest';
        const state = loadmissionstate(questId);
        console.log('Quest state loaded:', state);
        const cx = 60;
        const cy = 60;
        const rOuter = 50;
        const rInner = 32;
        const total = 10;
        const gap = 3;
        for(let i = 0; i < total; i++){
          const start = i * (360 / total) - 90 + gap / 2;
          const end = start + (360 / total) - gap;
          const largeArc = end - start <= 180 ? 0 : 1;
          const polar = function(r, angle){
            const rad = (Math.PI / 180) * angle;
            return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
          };
          const p1 = polar(rOuter, start);
          const p2 = polar(rOuter, end);
          const p3 = polar(rInner, end);
          const p4 = polar(rInner, start);
          const d = [
            `M ${p1.x} ${p1.y}`,
            `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
            `L ${p3.x} ${p3.y}`,
            `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
            'Z'
          ].join(' ');
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', d);
          path.setAttribute('data-index', i.toString());
          path.setAttribute('role', 'button');
          path.setAttribute('tabindex', '0');
          path.setAttribute('aria-label', `${questTitle}: ${circleSegmentTitles[questId][i]}`);
          path.classList.add('quest-segment');
          if(state[i]) path.classList.add('completed');
          path.addEventListener('click', function(){
            showQuestDetail(questId, questTitle, i, path, state, svg);
          });
          path.addEventListener('keydown', function(e){
            if(e.key === 'Enter' || e.key === ' '){
              e.preventDefault();
              showQuestDetail(questId, questTitle, i, path, state, svg);
            }
          });
          svg.appendChild(path);
        }
        console.log(`Built ${total} segments for ${questTitle}`);
        updateQuestFlashing(svg, state);
      }

      function openQuestStep(questId, stepIndex){
        const questWheel = document.querySelector('.quest-wheel[data-quest="' + questId + '"]');
        if(!questWheel){
          showScreen(missionsScreen);
          return;
        }

        const questTitle = questWheel.dataset.title || 'Quest';
        const state = loadmissionstate(questId);
        let targetIndex = typeof stepIndex === 'number' ? stepIndex : state.indexOf(false);
        if(targetIndex < 0) targetIndex = 0;

        const targetPath = questWheel.querySelector('.quest-segment[data-index="' + targetIndex + '"]');
        if(!targetPath){
          showScreen(missionsScreen);
          return;
        }

        showQuestDetail(questId, questTitle, targetIndex, targetPath, state, questWheel);
      }

      // Keep track of the mission segment currently being worked on. Opening a
      // segment must never mark it complete or award coins; completion happens
      // only when its activity's final action is submitted.
      var activeQuestActivity = null;
      var circleActivityTrackerEl = null;
      var circleFollowupStep = 1;
      var circleFollowupComplete = null;
      var circleFollowupTopic = '';
      var circleOverviewEl = null;

      const circleOverviews = {
        friendship: 'Healthy friendships involve kindness, respect and listening to each other. Unhealthy behaviours can hurt people or ignore their boundaries.',
        feeling: 'Feelings give us clues about what is happening inside us. People can feel different things in the same situation, and all feelings are okay.',
        communication: 'Communication is how we share our thoughts and listen to others. We can speak clearly and kindly while respecting other people.',
        identity: 'Your identity includes your interests, values, strengths and the groups you belong to. Everyone is different, and people can grow and change.',
        mindset: 'A growth mindset means remembering that we can learn with practice, support and time. Mistakes can help us learn.',
        sensory: 'Our senses tell us about the world around us. People process sensory information differently: some seek certain sensations, while others may want to avoid them.',
        thought: 'Thoughts are words and ideas in our minds. Thoughts can affect feelings, but they are not always facts, so we can check them and try a balanced thought.',
        conflict: 'Everybody disagrees sometimes. We can deal with conflict calmly by listening, finding a compromise or agreeing to disagree. A trusted adult can help when needed.'
      };

      function updateCircleActivityTracker(screen){
        const supported = ['friendship', 'feeling', 'communication', 'identity', 'mindset', 'sensory', 'thought', 'conflict'];
        const screens = ['friendshipActivityScreen', 'feelingActivityScreen', 'communicationActivityScreen', 'communicationResultsScreen', 'identityActivityScreen', 'mindsetActivityScreen', 'circleFollowupScreen'];
        if(!activeQuestActivity || supported.indexOf(activeQuestActivity.questId) < 0 || !screen || screens.indexOf(screen.id) < 0){
          if(circleActivityTrackerEl) circleActivityTrackerEl.style.display = 'none';
          if(circleOverviewEl) circleOverviewEl.style.display = 'none';
          return;
        }
        if(!circleActivityTrackerEl){
          circleActivityTrackerEl = document.createElement('div');
          circleActivityTrackerEl.className = 'e1-progress-tracker';
          circleActivityTrackerEl.setAttribute('aria-label', 'Mission activity progress');
          circleActivityTrackerEl.innerHTML = '<p class="e1-progress-label" role="status" aria-live="polite"></p><div class="e1-progress-row"><div class="e1-progress-circle">1</div><div class="e1-progress-circle">2</div><div class="e1-progress-circle">3</div></div>';
        }
        const heading = screen.querySelector('h1');
        if(heading) heading.insertAdjacentElement('afterend', circleActivityTrackerEl);
        else screen.prepend(circleActivityTrackerEl);
        circleActivityTrackerEl.style.display = 'block';
        if(!circleOverviewEl){
          circleOverviewEl = document.createElement('p');
          circleOverviewEl.className = 'circle-concept-overview';
        }
        circleActivityTrackerEl.insertAdjacentElement('afterend', circleOverviewEl);
        circleOverviewEl.textContent = circleOverviews[activeQuestActivity.questId];
        circleOverviewEl.style.display = activeQuestActivity.index === 0 && circleFollowupStep === 1 && screen.id !== 'communicationResultsScreen' ? 'block' : 'none';
        circleActivityTrackerEl.querySelector('.e1-progress-label').textContent = 'Activity ' + circleFollowupStep + ' of 3';
        circleActivityTrackerEl.querySelectorAll('.e1-progress-circle').forEach(function(circle, index){
          circle.classList.toggle('completed', index + 1 < circleFollowupStep);
          circle.classList.toggle('active', index + 1 === circleFollowupStep);
          if(index + 1 === circleFollowupStep) circle.setAttribute('aria-current', 'step');
          else circle.removeAttribute('aria-current');
        });
        if(missionProgressIndicatorEl) missionProgressIndicatorEl.style.display = 'none';
      }

      const circleFollowupThemes = {
        friendship: { reflect:'What is one kind thing you could do for a friend?', quiz:[
          ['A friend wants a turn with a game. What can you do?', 'Take turns together', 'Keep every turn for yourself'],
          ['A friend says they need space. What helps?', 'Respect their space', 'Follow them after they ask you not to'],
          ['Someone new is standing alone. What could you do?', 'Invite them to join if they want', 'Tell everyone to leave them out'],
          ['You accidentally hurt a friend’s feelings. What next?', 'Apologise and ask how to make it right', 'Pretend nothing happened'],
          ['Your friend enjoys a different game. What is fair?', 'Listen to their idea too', 'Insist only your game matters']
        ] },
        feeling: { reflect:'Think about a time you had a strong feeling. What did you do? Was this the right thing, or could you have acted differently?', quiz:[
          ['A friend looks upset. What could you do?', 'Ask if they would like to talk', 'Tell them their feelings are silly'],
          ['You notice you are angry. What can help?', 'Pause and take a slow breath', 'Blame someone without listening'],
          ['Two people feel differently about the same event. Is that okay?', 'Yes, feelings can be different', 'No, everyone must feel the same'],
          ['You are worried and want support. Who could help?', 'A trusted adult', 'Nobody is allowed to help'],
          ['You feel proud of learning something. What can you do?', 'Notice and celebrate your effort', 'Hide every happy feeling']
        ] },
        communication: { reflect:'Write a kind, clear sentence you could use.', quiz:[
          ['You need your pencil back. What could you say?', 'Please may I have my pencil back?', 'Give it back right now or else!'],
          ['Someone is explaining an idea. What shows listening?', 'Let them finish before replying', 'Talk over them'],
          ['You did not hear what someone said. What helps?', 'Ask them to repeat it', 'Guess and pretend you heard'],
          ['You disagree with a friend. What can you say?', 'I see it differently; can we talk?', 'Your ideas are always wrong'],
          ['You need help with a task. What could you do?', 'Explain what you need to a trusted person', 'Expect everyone to read your mind']
        ] },
        identity: { reflect:'What is something about you that you value?', quiz:[
          ['Can people have different interests?', 'Yes, different interests are great', 'No, everyone must enjoy the same things'],
          ['You discover a new hobby. What might that mean?', 'Your interests can grow and change', 'Your interests must never change'],
          ['A classmate has a different family tradition. What helps?', 'Be curious and respectful', 'Make fun of their tradition'],
          ['You find something difficult. What is still true?', 'You have strengths and can learn', 'One difficulty defines all of you'],
          ['Who can decide which words feel right for you?', 'You can share what feels right to you', 'Someone else must choose for you']
        ] },
        mindset: { reflect:'What helpful thought could you use when learning something new?', quiz:[
          ['A puzzle is hard. What might help?', 'Try a different way or ask for help', 'Decide you can never solve puzzles'],
          ['You made a mistake while learning. What could it show?', 'There is something to learn from', 'You must stop trying forever'],
          ['A friend improves with practice. What can you notice?', 'Their effort helped them grow', 'People can never improve'],
          ['A goal feels too big. What is a useful next step?', 'Break it into smaller steps', 'Give up before starting'],
          ['You have not mastered a skill. What could you say?', 'I am still learning', 'I will never get any better']
        ], practice:[
          ['You cannot ride a bike yet. What could you try?', 'Practise with support', 'Never try any new skill'],
          ['Your first drawing looks different from your idea. What next?', 'Try another version', 'Call yourself hopeless'],
          ['A teammate learns faster than you. What can you remember?', 'People learn at different speeds', 'Everyone must learn at the same speed'],
          ['You worked hard on a task. What can you be proud of?', 'The effort you put in', 'Only being perfect']
        ] },
        sensory: { reflect:'What helps your senses feel more comfortable?', quiz:[
          ['A room is too loud for you. What could help?', 'Find a quieter space or ask for help', 'Ignore your discomfort'],
          ['A clothing label feels scratchy. What can you try?', 'Ask to remove it or choose another top', 'Keep it there even if it hurts'],
          ['Bright lights bother your eyes. What could you do?', 'Move away from the light if possible', 'Stare at the light'],
          ['Someone else likes a sound you dislike. What is true?', 'People can notice sensations differently', 'Everyone senses things the same way'],
          ['You need a movement break. What could you do?', 'Ask for a safe stretch or walk', 'Push yourself until you feel worse']
        ] },
        thought: { reflect:'Write a kind or balanced thought you could try.', quiz:[
          ['A tricky thought pops up. What could you check?', 'The facts for and against it', 'Whether it appeared first'],
          ['You think a friend is cross but do not know. What helps?', 'Ask them rather than guessing', 'Assume you know their thoughts'],
          ['One mistake makes you think you always fail. What is balanced?', 'One mistake does not describe everything', 'One mistake proves I always fail'],
          ['A worried thought feels very loud. Is it automatically a fact?', 'No, thoughts are not always facts', 'Yes, loud thoughts are always true'],
          ['A task feels overwhelming. What is a kinder thought?', 'I can take one small step', 'I must solve everything immediately']
        ], practice:[
          ['A thought says nobody likes you. What could you look for?', 'Evidence on both sides', 'Only things that support the worry'],
          ['You feel nervous about a test. What could you remind yourself?', 'I can prepare and ask for help', 'One test decides my whole future'],
          ['A friend is quiet today. What else might explain it?', 'They might be tired', 'They definitely dislike me'],
          ['What can you do when a thought feels unkind?', 'Try a gentler, realistic sentence', 'Repeat the unkind thought louder']
        ] },
        conflict: { reflect:'What calm words or action could help with a disagreement?', quiz:[
          ['Sophie uses Harper’s pencil without asking. What should Harper do?', 'Politely ask Sophie to give it back', 'Snatch it back', 'Say nothing even though Harper needs it'],
          ['Bob interrupts Tom while he is speaking. What should Tom do?', 'Politely say he was still speaking', 'Shout over Bob', 'Stop speaking and never share his idea'],
          ['Maya and Eli both want the same toy. What could Maya suggest?', 'Take turns with the toy', 'Grab it and run away', 'Hide the toy from Eli'],
          ['Ava and Sam cannot agree on a game. What could they try?', 'Choose a way to take turns choosing games', 'Make Sam play Ava’s game', 'Refuse to listen to any ideas'],
          ['A disagreement between Leo and a friend feels unsafe. What should Leo do?', 'Ask a trusted adult for help', 'Keep it secret and handle it alone', 'Threaten the friend']
        ], practice:[
          ['Mia interrupts Jay. How could Jay explain how he feels?', 'I feel upset when I am interrupted', 'You are always terrible', 'Interrupt Mia every time she talks'],
          ['Nora and Ben want different games. What is a compromise?', 'Play each game for a while', 'Only play Nora’s game', 'Hide Ben’s game'],
          ['During an argument, Luca hurts Kim’s feelings. What could Luca do?', 'Say sorry and listen to Kim', 'Pretend it did not happen', 'Blame Kim for feeling upset'],
          ['Zara and her friend like different books. What could Zara say?', 'We can like different books and still be friends', 'You must like my book', 'I will never talk to you again']
        ], openers:[
          ['Kai feels angry when a friend changes the game. What could Kai do first?', 'Pause, breathe and speak calmly', 'Shout before the friend can answer', 'Push the game off the table'],
          ['Ella keeps interrupting Ryan. What could Ryan say?', 'I feel upset when I am interrupted', 'You are always rude and annoying', 'Stop talking forever'],
          ['Amir is explaining why he is upset. What could his friend do?', 'Let Amir finish and repeat what they heard', 'Interrupt to win the argument', 'Walk away while laughing at Amir'],
          ['Grace and Ali prefer different games. What could Grace say?', 'We think differently, and that is okay', 'You must agree with me', 'I will choose without asking you'],
          ['Ruby and Theo both want to choose the game. What is a compromise?', 'Each person chooses a game for part of the time', 'Only Ruby chooses every time', 'Theo takes all the games away'],
          ['Omar prefers a blue counter and Jess prefers a green one. What could Omar do?', 'Let Jess choose a different colour', 'Argue until Jess changes her mind', 'Hide Jess’s counter']
        ] }
      };

      const circleThirdAnswers = {
        friendship: {quiz:['Stop playing together without talking','Tell them they are not allowed time alone','Laugh at them for being alone','Blame them for feeling hurt','Tell them their game is silly']},
        feeling: {quiz:['Tell everyone else about their feelings','Break something nearby','Only one person is allowed to have feelings','Keep your worry a secret even when you need help','Tell yourself your effort did not matter']},
        communication: {quiz:['Take the pencil without speaking','Walk away while they are speaking','Make fun of how they speak','Refuse to hear their view','Stay silent and hope the task finishes itself']},
        identity: {quiz:['Everyone must choose the same hobby','A new hobby erases all your other interests','Tell them their tradition is wrong','You have no strengths at all','Your classmates must decide for you']},
        mindset: {quiz:['Hide the puzzle from everyone','Pretend mistakes never happen','Say effort makes no difference','Wait for the whole goal to happen by itself','Tell yourself learning is impossible'], practice:['Say nobody can ever learn to ride','Throw away all your art supplies','Stop practising because someone else improved','Pretend you did not try']},
        sensory: {quiz:['Make the room even louder','Pull at the label until it hurts','Move closer to the bright light','Decide others are pretending','Keep moving in an unsafe place']},
        thought: {quiz:['Count how many words it has','Tell everyone you know exactly what they think','Decide you can never learn anything','Yes, every thought is a prediction','Insist that no one can help'], practice:['Ignore every kind thing anyone has said','Decide preparation can never help','Assume they are secretly angry','Tell yourself you must never have a thought']}
      };

      function renderCircleQuestions(container, questions, onChange, thirdAnswers){
        const start = Math.floor(Math.random() * 3);
        questions.forEach(function(item, index){
          const question = Array.isArray(item) ? {question:item[0], helpful:item[1], other:item[2]} : item;
          const card = document.createElement('div');
          card.className = 'circle-quiz-question';
          const text = document.createElement('p');
          text.textContent = (index + 1) + '. ' + question.question;
          card.appendChild(text);
          const options = document.createElement('div');
          options.className = 'circle-quiz-options';
          const choices = [{text:question.other, helpful:false}, {text:thirdAnswers[index], helpful:false}];
          choices.splice((start + index) % 3, 0, {text:question.helpful, helpful:true});
          choices.forEach(function(choice){
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = choice.text;
            button.dataset.helpful = String(choice.helpful);
            button.setAttribute('aria-pressed', 'false');
            button.addEventListener('click', function(){
              options.querySelectorAll('button').forEach(function(peer){
                peer.setAttribute('aria-pressed', String(peer === button));
              });
              card.classList.remove('needs-another-try');
              onChange();
            });
            options.appendChild(button);
          });
          card.appendChild(options);
          container.appendChild(card);
        });
      }

      const friendshipPerspectiveActivities = {
        1: {
          feelings: [
            'Becky steps on Taylor’s foot but does not apologise. How might Taylor feel?',
            'Maya invites Leo to join a game after he was left out. How might Leo feel?',
            'Ben laughs at Chris’s drawing. How might Chris feel?',
            'Sophie helps Amy with a tricky piece of homework. How might Amy feel?',
            'Max blames Ethan for something Ethan did not do. How might Ethan feel?'
          ],
          perspectives: [
            ['Jay says he does not like Mel’s favourite show and accidentally upsets her.', 'Jay', 'Mel'],
            ['Carl accidentally bumps into Fred but does not say sorry.', 'Carl', 'Fred'],
            ['Inez wants to show a new puzzle to Darius, who is too tired to play right now.', 'Inez', 'Darius']
          ]
        },
        4: {
          feelings: [
            'Aisha’s friend borrows her crayons without asking. How might Aisha feel?',
            'Ravi thanks Nia for listening to his idea. How might Nia feel?',
            'Jules is excited to show their painting, but their friend walks away. How might Jules feel?',
            'Zoe’s friend offers to take turns on the swing. How might Zoe feel?',
            'Sam’s friend forgets to invite him to a game. How might Sam feel?'
          ],
          perspectives: [
            ['Soraya changes the game’s rules because she finds them confusing, but Kofi wanted to keep playing.', 'Soraya', 'Kofi'],
            ['Anouk forgets to return Zain’s book before the weekend.', 'Anouk', 'Zain'],
            ['Bryn wants quiet time, while Tamsin hopes they can play together.', 'Bryn', 'Tamsin']
          ]
        },
        8: {
          feelings: [
            'Natalie invites Willow to join the team. How might Willow feel?',
            'Mateo knocks over Bennett’s tower and walks away. How might Bennett feel?',
            'Savannah listens while Kennedy talks about a worry. How might Kennedy feel?',
            'Nora chooses every game without asking her friends. How might her friend feel?',
            'A friend congratulates Theodore after he tries something difficult. How might Theodore feel?'
          ],
          perspectives: [
            ['Farah wants to join Idris’s team but feels nervous about trying a new game.', 'Farah', 'Idris'],
            ['Marnie’s model falls when Jago accidentally bumps the table.', 'Marnie', 'Jago'],
            ['Nell wants advice about a problem, but Cosmo thinks Nell wants someone to listen.', 'Nell', 'Cosmo']
          ]
        }
      };

      function showFriendshipPerspectiveActivity(step){
        const activity = friendshipPerspectiveActivities[activeQuestActivity.index];
        const screen = document.getElementById('circleFollowupScreen');
        const prompt = document.getElementById('circleFollowupPrompt');
        const choices = document.getElementById('circleFollowupChoices');
        const label = document.getElementById('circleFollowupLabel');
        const answer = document.getElementById('circleFollowupAnswer');
        const feedback = document.getElementById('circleFollowupFeedback');
        const next = document.getElementById('circleFollowupNext');
        circleFollowupStep = step;
        document.getElementById('circleFollowupTitle').textContent = '🤝 Friendship Detective';
        choices.innerHTML = '';
        feedback.textContent = '';
        label.style.display = 'none';
        answer.style.display = 'none';
        answer.value = '';
        next.disabled = false;
        next.textContent = step === 3 ? 'Finish' : 'Continue';

        if(step === 1){
          prompt.textContent = 'Good friends try to see things from their friends’ perspectives — this means looking at things from their point of view. People may feel differently in the same situation. Choose a feeling that might fit each person.';
          const feelings = ['😊 Happy', '😢 Sad', '😠 Angry', '😟 Worried', '😕 Confused', '😌 Calm'];
          activity.feelings.forEach(function(scenario, index){
            const card = document.createElement('div');
            card.className = 'circle-quiz-question';
            const question = document.createElement('p');
            question.textContent = (index + 1) + '. ' + scenario;
            card.appendChild(question);
            const options = document.createElement('div');
            options.className = 'circle-quiz-options';
            feelings.forEach(function(feeling){
              const button = document.createElement('button');
              button.type = 'button';
              button.textContent = feeling;
              button.setAttribute('aria-pressed', 'false');
              button.addEventListener('click', function(){
                options.querySelectorAll('button').forEach(function(peer){
                  peer.setAttribute('aria-pressed', String(peer === button));
                });
                feedback.textContent = '';
              });
              options.appendChild(button);
            });
            card.appendChild(options);
            choices.appendChild(card);
          });
        } else if(step === 2){
          prompt.textContent = 'Think about both people. How might each person feel? There can be different possible answers.';
          activity.perspectives.forEach(function(scenario, index){
            const card = document.createElement('div');
            card.className = 'circle-quiz-question friendship-perspective-card';
            const text = document.createElement('p');
            text.textContent = (index + 1) + '. ' + scenario[0];
            card.appendChild(text);
            scenario.slice(1).forEach(function(name, personIndex){
              const inputId = 'friendshipPerspective-' + index + '-' + personIndex;
              const fieldLabel = document.createElement('label');
              fieldLabel.htmlFor = inputId;
              fieldLabel.textContent = 'How might ' + name + ' feel?';
              const input = document.createElement('textarea');
              input.id = inputId;
              input.rows = 2;
              input.placeholder = 'Write an idea here...';
              input.addEventListener('input', function(){ feedback.textContent = ''; });
              card.appendChild(fieldLabel);
              card.appendChild(input);
            });
            choices.appendChild(card);
          });
        } else {
          prompt.textContent = 'Think about both points of view.';
          label.textContent = 'Think of a time you had a disagreement. How did you feel? How might the other person have felt? Why do you think this?';
          label.style.display = 'block';
          answer.style.display = 'block';
        }

        next.onclick = function(){
          if(step === 1 && choices.querySelectorAll('button[aria-pressed="true"]').length !== activity.feelings.length){
            feedback.textContent = 'Choose a feeling for each situation before continuing.';
            return;
          }
          if(step === 2 && Array.from(choices.querySelectorAll('textarea')).some(function(input){ return !input.value.trim(); })){
            feedback.textContent = 'Write an idea for both people in each situation before continuing.';
            return;
          }
          if(step === 3 && !answer.value.trim()){
            feedback.textContent = 'Write an idea before finishing.';
            return;
          }
          if(step < 3){
            showFriendshipPerspectiveActivity(step + 1);
            return;
          }
          next.disabled = true;
          completeActiveQuestSegment();
          showCelebration(function(){ showScreen(missionsScreen); });
        };
        showScreen(screen);
      }

      const specialMissionActivities = {
        feeling: {
          1: {
            quiz: [
              ['Imran is angry because Harry ignored him. What could he do?', 'Walk away to calm down, then talk to Harry', 'Push Harry', 'Throw things'],
              ['Mia is worried before a play. What could help?', 'Take slow breaths and talk to a trusted adult', 'Push another actor', 'Hide everyone’s costumes'],
              ['Ava feels frustrated by a puzzle. What could she try?', 'Take a break and ask for help', 'Throw the puzzle', 'Shout at a friend'],
              ['Sam feels sad after an argument. What could he do?', 'Talk to someone he trusts', 'Break his friend’s things', 'Tell himself feelings are wrong'],
              ['Leah feels overwhelmed in a noisy room. What might help?', 'Ask for a quieter space', 'Push people away', 'Make the noise louder']
            ],
            explain: [
              ['Omar feels angry when his turn is skipped. What could he do?', 'Pause and ask calmly for his turn', 'Push his friend', 'Throw the game'],
              ['Grace worries about a new activity. What could she do?', 'Ask a trusted adult for support', 'Hide the equipment', 'Tell herself she must cope alone'],
              ['Noah feels upset after losing. What could help?', 'Take a break and use kind words', 'Shout at the winner', 'Knock over the table']
            ],
            reflect: ['Jim is losing at cards and is starting to feel angry. What could he do, and why?', 'Lila feels worried about speaking in class. What could she do, and why?', 'Amir feels sad because his friend cannot play today. What could he do, and why?']
          },
          4: {
            quiz: [
              ['Tia is upset because her drawing ripped. What could she do?', 'Breathe and ask for help fixing it', 'Rip someone else’s drawing', 'Throw scissors'],
              ['Ravi feels nervous before a race. What could help?', 'Breathe slowly and talk to his coach', 'Shove another runner', 'Hide everyone’s shoes'],
              ['Zara feels angry when her brother interrupts. What could she try?', 'Pause and explain how she feels', 'Hit her brother', 'Break his toy'],
              ['Ben feels overwhelmed in a crowded room. What could he do?', 'Ask for a quieter place', 'Push through the crowd', 'Block the doorway'],
              ['Nina feels sad when plans change. What might help?', 'Talk about it and choose a comforting activity', 'Yell at a friend', 'Throw someone’s bag']
            ],
            explain: [
              ['Ella is frustrated by spelling. What could she do?', 'Take a break and ask for help', 'Tear a classmate’s book', 'Shout at the teacher'],
              ['Kai is angry after a misunderstanding. What could he try?', 'Calm down, then explain what happened', 'Push the other person', 'Spread a rumour'],
              ['Poppy worries about a new school. What could help?', 'Ask an adult what to expect', 'Hide another child’s bag', 'Decide she cannot ask questions']
            ],
            reflect: ['Aisha feels angry after someone accidentally knocks over her blocks. What could she do, and why?', 'Leo feels overwhelmed on a noisy playground. What could he do, and why?', 'Maya feels disappointed when her friend picks another game. What could she do, and why?']
          },
          8: {
            quiz: [
              ['Max feels angry because a game seems unfair. What could he do?', 'Pause and calmly explain what feels unfair', 'Throw the game pieces', 'Push another player'],
              ['Ruby worries about a dentist visit. What could help?', 'Ask an adult what will happen', 'Hide a friend’s belongings', 'Decide not to ask for help'],
              ['Finn feels sad when a friend moves away. What could he do?', 'Talk to someone and plan ways to keep in touch', 'Be mean to his friend', 'Break his friend’s picture'],
              ['Sana feels frustrated when her tower falls. What could she try?', 'Take a break and rebuild when ready', 'Knock down another tower', 'Throw blocks at someone'],
              ['Jay feels overwhelmed by bright lights. What could help?', 'Ask to move somewhere comfortable', 'Shine the light in someone’s eyes', 'Push people away']
            ],
            explain: [
              ['Lucy feels angry when her turn is skipped. What could she do?', 'Ask calmly for her turn', 'Throw the game', 'Shout in someone’s face'],
              ['Hassan worries about making a mistake. What could help?', 'Take a breath and ask for reassurance', 'Hide everyone’s work', 'Tell himself he must be perfect'],
              ['Emily feels sad when her friend is busy. What could she do?', 'Share her feelings and do something comforting', 'Insult her friend', 'Damage her friend’s things']
            ],
            reflect: ['Tom is angry because a classmate interrupted him. What could he do, and why?', 'Bea feels worried about joining a new club. What could she do, and why?', 'Freddie feels disappointed because his team lost. What could he do, and why?']
          }
        },
        conflict: {
          1: {
            quiz: [
              ['Pip pushes Craig because he won. What might happen?', 'Craig might feel hurt and Pip might get in trouble', 'Craig must let Pip win', 'Everyone automatically becomes happier'],
              ['Ava shouts over Ben during a disagreement. What might happen?', 'Ben might feel unheard', 'Ben must agree with Ava', 'The disagreement disappears immediately'],
              ['Mia apologises after interrupting Jay. What might happen?', 'Jay might feel listened to', 'Jay must forgive her straight away', 'Nobody can ever disagree again'],
              ['Leo snatches a toy from Sam. What might happen?', 'Sam might feel upset and ask for it back', 'Sam has to give Leo every toy', 'The toy becomes Leo’s'],
              ['Nia asks for help when an argument feels unsafe. What might happen?', 'A trusted adult can help them stay safe', 'Nia is never allowed to ask again', 'The adult must blame Nia']
            ],
            explain: ['A child kicks a teammate’s bag after losing a race. What consequences might follow? How might the teammate feel and what might they think?', 'One player refuses to let another explain the rules. What might happen? How might the other player feel and what might they think?', 'A child apologises after accidentally knocking over a friend’s blocks. What might happen? How might the friend feel and what might they think?']
          },
          4: {
            quiz: [
              ['Ella grabs the game because she wants the first turn. What might happen?', 'Her friend might feel upset and ask for a turn', 'Her friend must let her choose every turn', 'The rules no longer matter'],
              ['Omar listens to Zara’s idea for sharing. What might happen?', 'Zara might feel respected', 'Zara must always agree with Omar', 'They can never disagree'],
              ['Ben calls Theo a name during an argument. What might happen?', 'Theo might feel hurt and want space', 'Theo must laugh at the name', 'The argument is automatically solved'],
              ['Ruby suggests taking turns choosing a game. What might happen?', 'Both children might get a chance to choose', 'Ruby owns every game', 'Nobody can choose a game again'],
              ['Kai breaks a friend’s tower on purpose. What might happen?', 'His friend might feel sad and an adult might help repair things', 'His friend must build it for Kai', 'The tower repairs itself']
            ],
            explain: ['A child takes their partner’s paintbrush without asking. What consequences might follow? How might the partner feel and what might they think?', 'A player asks their teammate which activity they would enjoy. What might happen? How might the teammate feel and what might they think?', 'A child makes fun of a friend’s suggestion. What might happen? How might the friend feel and what might they think?']
          },
          7: {
            quiz: [
              ['Leah tells everyone a rumour about Noor after an argument. What might happen?', 'Noor might feel hurt and trust might be damaged', 'Noor must thank Leah', 'The rumour becomes true'],
              ['Tom tells an adult that an argument feels unsafe. What might happen?', 'The adult can help keep people safe', 'Tom can never ask for help again', 'Everyone must stop being friends'],
              ['Amir says sorry for knocking over Bea’s project. What might happen?', 'Bea might appreciate the apology', 'Bea must forgive him immediately', 'The project is instantly fixed'],
              ['Zoe refuses to listen to Max’s side. What might happen?', 'Max might feel frustrated or unheard', 'Max must forget his own idea', 'Their disagreement is instantly resolved'],
              ['Luca calmly asks Kim to stop interrupting. What might happen?', 'Kim might understand that Luca wants a turn to speak', 'Kim must never speak again', 'Luca wins every future argument']
            ],
            explain: ['A child shares a private message after a disagreement. What consequences might follow? How might the other person feel and what might they think?', 'A pupil offers to help repair a classmate’s model after damaging it. What might happen? How might the classmate feel and what might they think?', 'A child walks away laughing while a friend explains a problem. What might happen? How might the friend feel and what might they think?']
          }
        }
      };

      function showSpecialMissionActivity(step){
        const questId = activeQuestActivity.questId;
        const activity = specialMissionActivities[questId][activeQuestActivity.index];
        const screen = document.getElementById('circleFollowupScreen');
        const prompt = document.getElementById('circleFollowupPrompt');
        const choices = document.getElementById('circleFollowupChoices');
        const label = document.getElementById('circleFollowupLabel');
        const answer = document.getElementById('circleFollowupAnswer');
        const feedback = document.getElementById('circleFollowupFeedback');
        const next = document.getElementById('circleFollowupNext');
        circleFollowupStep = step;
        choices.innerHTML = '';
        feedback.textContent = '';
        label.style.display = 'none';
        answer.style.display = 'none';
        answer.value = '';
        next.disabled = false;
        next.textContent = step === 3 ? 'Finish' : 'Continue';
        const hasQuiz = step === 1 || (questId === 'feeling' && step === 2);
        const questions = step === 1 ? activity.quiz : activity.explain;
        if(hasQuiz){
          prompt.textContent = questId === 'feeling'
            ? (step === 1 && activeQuestActivity.index === 1
              ? 'Big feelings are okay. You can pause, take slow breaths, find a quieter place or talk to a trusted adult. When you feel calmer, you can explain what you need. Choose a safe response for each situation.'
              : 'Choose a safe way to help with each big feeling.' + (step === 2 ? ' Then explain why it might help.' : ''))
            : 'A consequence is something that might happen after an action. Choose one possible consequence in each situation.';
          renderCircleQuestions(choices, questions, function(){ feedback.textContent = ''; }, questions.map(function(item){ return item[3]; }));
        } else {
          prompt.textContent = step === 2 ? 'Think about what might happen and how the other person might feel or think.' : 'Take your time and write your ideas.';
        }
        const textQuestions = step === 2 && questId === 'conflict' ? activity.explain
          : step === 3 && questId === 'feeling' ? activity.reflect
          : step === 3 ? ['Think about a time you had an argument. What happened?', 'How did you feel?', 'How might the other person have felt?'] : [];
        if(step === 2 && questId === 'feeling'){
          choices.querySelectorAll('.circle-quiz-question').forEach(function(card, index){
            addSpecialMissionTextField(card, 'Why could this help?', 'specialWhy-' + index, feedback);
          });
        }
        textQuestions.forEach(function(question, index){
          const card = document.createElement('div');
          card.className = 'circle-quiz-question';
          addSpecialMissionTextField(card, (index + 1) + '. ' + question, 'specialText-' + index, feedback);
          choices.appendChild(card);
        });
        next.onclick = function(){
          if(hasQuiz){
            const selected = choices.querySelectorAll('button[aria-pressed="true"]');
            if(selected.length !== questions.length){ feedback.textContent = 'Choose an answer for each situation.'; return; }
            if(Array.from(selected).some(function(button){ return button.dataset.helpful !== 'true'; })){
              feedback.textContent = 'Have another think about the highlighted questions and try again.';
              choices.querySelectorAll('.circle-quiz-question').forEach(function(card){
                card.classList.toggle('needs-another-try', card.querySelector('button[aria-pressed="true"]').dataset.helpful !== 'true');
              });
              return;
            }
          }
          if(Array.from(choices.querySelectorAll('textarea')).some(function(input){ return !input.value.trim(); })){
            feedback.textContent = 'Write an idea for each question before continuing.';
            return;
          }
          if(step < 3){ showSpecialMissionActivity(step + 1); return; }
          next.disabled = true;
          completeActiveQuestSegment();
          showCelebration(function(){ showScreen(missionsScreen); });
        };
        showScreen(screen);
      }

      function addSpecialMissionTextField(card, text, id, feedback){
        card.classList.add('friendship-perspective-card');
        const label = document.createElement('label');
        const input = document.createElement('textarea');
        label.htmlFor = id;
        label.textContent = text;
        input.id = id;
        input.rows = 3;
        input.placeholder = 'Write your idea here...';
        input.addEventListener('input', function(){ feedback.textContent = ''; });
        card.appendChild(label);
        card.appendChild(input);
      }

      function showCircleFollowup(step){
        const screen = document.getElementById('circleFollowupScreen');
        const theme = activeQuestActivity && circleFollowupThemes[activeQuestActivity.questId];
        if(!screen || !theme) return;
        circleFollowupStep = step;
        document.getElementById('circleFollowupTitle').textContent = circleFollowupTopic;
        const prompt = document.getElementById('circleFollowupPrompt');
        const choices = document.getElementById('circleFollowupChoices');
        const label = document.getElementById('circleFollowupLabel');
        const answer = document.getElementById('circleFollowupAnswer');
        const feedback = document.getElementById('circleFollowupFeedback');
        const next = document.getElementById('circleFollowupNext');
        next.disabled = false;
        feedback.textContent = '';
        choices.innerHTML = '';
        if(step === 2){
          prompt.textContent = 'Choose an answer for each question.';
          label.style.display = 'none';
          answer.style.display = 'none';
          const thirdAnswers = activeQuestActivity.questId === 'conflict'
            ? theme.quiz.map(function(question){ return question[3]; })
            : circleThirdAnswers[activeQuestActivity.questId].quiz;
          renderCircleQuestions(choices, theme.quiz, function(){ feedback.textContent = ''; }, thirdAnswers);
          next.textContent = 'Continue';
        } else {
          prompt.textContent = 'Think about what you have learned.';
          label.textContent = theme.reflect;
          label.style.display = 'block';
          answer.style.display = 'block';
          answer.value = '';
          next.textContent = 'Finish';
        }
        next.onclick = function(){
          if(step === 2){
            const selected = choices.querySelectorAll('button[aria-pressed="true"]');
            if(selected.length !== theme.quiz.length){ feedback.textContent = 'Choose an answer for every question to continue.'; return; }
            if(Array.from(selected).some(function(button){ return button.dataset.helpful !== 'true'; })){
              feedback.textContent = 'Have another think about the highlighted questions and try again.';
              choices.querySelectorAll('.circle-quiz-question').forEach(function(card){
                const choice = card.querySelector('button[aria-pressed="true"]');
                card.classList.toggle('needs-another-try', choice.dataset.helpful !== 'true');
              });
              return;
            }
            showCircleFollowup(3);
            return;
          }
          if(!answer.value.trim()){ feedback.textContent = 'Write an idea before finishing.'; return; }
          next.disabled = true;
          const onComplete = circleFollowupComplete;
          circleFollowupComplete = null;
          completeActiveQuestSegment();
          showCelebration(onComplete);
        };
        showScreen(screen);
      }

      function finishCircleQuestActivity(onComplete){
        if(activeQuestActivity && circleFollowupThemes[activeQuestActivity.questId]){
          const screen = document.querySelector('.screen[style*="display: block"]');
          const heading = screen && screen.querySelector('h1');
          circleFollowupTopic = heading ? heading.textContent : 'Detective Mission';
          circleFollowupComplete = onComplete;
          showCircleFollowup(2);
          return;
        }
        completeActiveQuestSegment();
        showCelebration(onComplete);
      }

      function cancelActiveQuestActivity(){
        // Leaving a mission activity without submitting its final action is a
        // cancellation, not a completion. Clear the context so a later,
        // unrelated activity cannot accidentally complete this segment.
        activeQuestActivity = null;
        pendingQuestCelebrationReward = null;
        circleFollowupComplete = null;
      }
      function completeActiveQuestSegment(){
        if(!activeQuestActivity) return false;
        const context = activeQuestActivity;
        activeQuestActivity = null;
        const state = loadmissionstate(context.questId);
        if(!Array.isArray(state) || context.index < 0 || context.index >= state.length || state[context.index]){
          // Some legacy completion buttons always open a celebration after
          // calling this helper. Queue zero for an already-completed/invalid
          // segment so replaying it cannot fall through to showCelebration's
          // normal 10 ZP reward or accidentally pay twice.
          pendingQuestCelebrationReward = 0;
          return false;
        }
        state[context.index] = true;
        savemissionstate(context.questId, state);
        const wheel = document.querySelector('.quest-wheel[data-quest="' + context.questId + '"]');
        if(wheel){
          const segment = wheel.querySelector('.quest-segment[data-index="' + context.index + '"]');
          if(segment) segment.classList.add('completed');
          updateQuestFlashing(wheel, state);
        }
        let rewardAmount = 50;
        if(state.every(Boolean)){
          const rewardKey = `quest_${context.questId}_circle_rewarded`;
          if(localStorage.getItem(rewardKey) !== 'true'){
            rewardAmount += 1000;
            localStorage.setItem(rewardKey, 'true');
          }
        }
        // The following showCelebration call displays and awards this exact
        // amount. Do not award coins here as well.
        pendingQuestCelebrationReward = rewardAmount;
        return true;
      }

      function showQuestDetail(questId, questTitle, index, path, state, svg){
        activeQuestActivity = { questId: questId, index: index };
        circleFollowupStep = 1;
        // Route to specific activities based on quest type and index
        if(questId === 'emotions'){
          if(index === 0){
            resetE1ActivityProgress();
            showEmotionsDrawActivity();
          } else if(index === 1){
            resetE2ActivityProgress();
            showE2NeedsActivity();
          } else if(index === 2){
            showEmotionActivity('E3', 'happy', 'Happiness', '👨‍👩‍👧‍👦 Family, 🧑‍🤝‍🧑 Friends, 🐾 Pets, 🎮 Games, 📚 Books, 🎨 Art, ⚽ Sports, 🎵 Music');
          } else if(index === 3){
            showEmotionActivity('E4', 'sad', 'Sadness', '👋 Saying goodbye, 💔 Feeling left out, 📚 Not understanding something, 🫂 Missing someone, 🩹 Seeing others hurt, 📦 Losing things, 🚫 Being told no');
          } else if(index === 4){
            showEmotionActivity('E5', 'angry', 'Anger', '🙈 Being ignored, ↩️ Things not going my way, 😒 Being teased, ⚖️ Unfairness, 🔊 Loud noises, 🛑 Being interrupted, ⏰ Not having enough time');
          } else if(index === 5){
            showEmotionActivity('E6', 'scared', 'Fear', '🌙 The dark, 🎬 Scary movies, 🕷️ Spiders/bugs, 👥 Meeting new people, 🔊 Loud sounds, 💉 Doctors/needles, 🧍 Being alone, 🆕 Trying new things');
          } else if(index === 6){
            showEmotionActivity('E7', 'embarrassed', 'Embarrassment', '😳 Making a mistake in front of others, 🗣️ Saying the wrong thing, 👀 Being the center of attention, 🤦 Tripping or dropping something, ❓ Not knowing an answer, 🙈 Feeling awkward, 😂 Being laughed at');
          } else if(index === 7){
            showEmotionActivity('E8', 'worried', 'Worry', '📝 Tests, 🎤 Speaking in front of others, ❌ Making mistakes, ⏰ Being late, 💭 Disappointing others, ❓ Not knowing what to do, 🚨 Getting in trouble');
          } else if(index === 8){
            showEmotionActivity('E9', 'calm', 'Calm', '🎵 Music, 📚 Reading, 🛁 Baths, 🌿 Nature, 🐾 Pets, 🌬️ Deep breaths, 🎨 Drawing, 🤫 Quiet time');
          } else if(index === 9){
            showEmotionActivity('E10', 'jealous', 'Jealousy', '🧸 Someone else gets the toy you wanted, 🏅 Someone wins when you wanted to win, 👨‍👩‍👧 A friend spends time with someone else, 🎁 Someone gets a reward you hoped for, 🌟 Seeing someone praised, 📱 Someone has something you want, 🧑‍🤝‍🧑 Feeling left out');
          }
        } else if(questId === 'social'){
          if(index === 0){
            showSocialActivity('📘 S1 Social Norm Basics', 'In social situations, which choices are expected?', [
              '👋 Greet people politely:expected, 🙈 Ignore everyone on purpose:unexpected, 👂 Listen when others talk:expected, 🗣️ Interrupt over and over:unexpected, 💬 Use kind words:expected, 😠 Use rude words:unexpected',
              '🧍 Give personal space:expected, 🫸 Stand too close:unexpected, ❓ Ask before borrowing:expected, 🧤 Take things without asking:unexpected, 🙏 Say please and thank you:expected, 🙄 Refuse basic manners:unexpected',
              '🧠 Follow shared rules:expected, 🚫 Break rules for fun:unexpected, 🤝 Include others fairly:expected, 🚷 Leave others out on purpose:unexpected, 🧘 Stay calm in disagreements:expected, 📣 Yell to win:unexpected'
            ], index);
          } else if(index === 1){
            showSocialActivity('🧑‍🏫 S2 In Class', 'In class, which behaviors are expected?', [
              '🤫 Be quiet:expected, 📣 Shout out:unexpected, ✋ Raise hand:expected, 💬 Talk when you want:unexpected, 👂 Listen to teacher:expected, 🎮 Play games:unexpected',
              '✏️ Do your work:expected, 🏃 Run around:unexpected, 🙋 Ask for help politely:expected, 🎧 Ignore instructions:unexpected, 📚 Bring learning tools:expected, 🍬 Throw items:unexpected',
              '🪑 Stay in your seat:expected, 🚪 Leave without asking:unexpected, 🧠 Try your best:expected, 😴 Distract others:unexpected, 🗂️ Keep space tidy:expected, 🗣️ Talk over others:unexpected'
            ], index);
          } else if(index === 2){
            showSocialActivity('👋 S3 Greeting Somebody', 'When greeting somebody, which behaviors are expected?', [
              '😊 Smile and say hi:expected, 🙈 Ignore them:unexpected, 👋 Wave hello:expected, ↩️ Turn away:unexpected, 👀 Look at them:expected, 📱 Look at phone:unexpected',
              '🗣️ Use kind words:expected, 😠 Use mean words:unexpected, 🤝 Say nice to meet you:expected, 🙄 Roll your eyes:unexpected, 🙂 Friendly tone:expected, 🚶 Walk off mid-greeting:unexpected',
              '👂 Listen to response:expected, 📣 Shout in face:unexpected, 🧍 Give personal space:expected, 🫸 Push past:unexpected, 👋 Short polite goodbye:expected, 🧊 Cold silence:unexpected'
            ], index);
          } else if(index === 3){
            showSocialActivity('🍽️ S4 During Lunch', 'During lunch, which behaviors are expected?', [
              '🍴 Use utensils:expected, 🤲 Eat with hands (messy):unexpected, 🗣️ Chat with friends:expected, 📣 Yell across room:unexpected, 🧽 Clean up after:expected, 🗑️ Leave mess:unexpected',
              '💺 Stay seated:expected, 🏃 Run with food:unexpected, 🧴 Wash hands first:expected, 🍽️ Grab others food:unexpected, 🙏 Say please and thank you:expected, 😤 Complain loudly:unexpected',
              '🧃 Wait your turn in line:expected, ⏩ Cut in line:unexpected, 🧻 Use napkin:expected, 🎯 Throw food:unexpected, 🙂 Respect helpers:expected, 🙊 Make rude noises:unexpected'
            ], index);
          } else if(index === 4){
            showSocialActivity('🎲 S5 Playing Games', 'When playing games, which behaviors are expected?', [
              '🔁 Take turns:expected, 🚫 Go whenever you want:unexpected, 🏅 Be a good sport:expected, 😠 Get angry if you lose:unexpected, 👏 Congratulate others:expected, 😩 Complain a lot:unexpected',
              '📏 Follow rules:expected, 🌀 Make up rules:unexpected, 🙂 Encourage teammates:expected, 😡 Blame others:unexpected, ⏳ Wait patiently:expected, 🧨 Flip the board:unexpected',
              '🤝 Share equipment:expected, 🙅 Refuse to share:unexpected, 🔄 Ask for rematch politely:expected, 🗯️ Demand to win:unexpected, 💬 Use calm voice:expected, 📢 Trash talk:unexpected'
            ], index);
          } else if(index === 5){
            showSocialActivity('🚶 S6 In the Hallway', 'In the hallway, which behaviors are expected?', [
              '🚶 Walk:expected, 🏃 Run:unexpected, 🤫 Use quiet voice:expected, 📣 Shout:unexpected, ➡️ Stay to the right:expected, 🔀 Zigzag everywhere:unexpected',
              '💛 Be respectful:expected, 🫷 Push others:unexpected, 🚪 Hold door kindly:expected, 🚫 Slam doors:unexpected, 👀 Watch where you go:expected, 👕 Bump on purpose:unexpected',
              '📚 Carry belongings safely:expected, 🎒 Swing bag wildly:unexpected, 🧑‍🏫 Follow adult directions:expected, 🧱 Block the corridor:unexpected, 🫶 Make space for others:expected, 🗯️ Tease others:unexpected'
            ], index);
          } else if(index === 6){
            showSocialActivity('🎬 S7 At the Movies', 'At the movies, which behaviors are expected?', [
              '🤫 Be silent:expected, 💬 Talk during film:unexpected, 📵 Turn off phone:expected, 📱 Text friends:unexpected, 💺 Stay in seat:expected, 🚶 Walk around:unexpected',
              '🍿 Eat quietly:expected, 🗯️ Chew loudly:unexpected, 🧹 Keep area tidy:expected, 🗑️ Drop rubbish:unexpected, 👀 Keep feet down:expected, 🦶 Kick chair:unexpected',
              '🎟️ Wait for your row turn:expected, ⏩ Push into row:unexpected, 🌙 Keep screen dim:expected, 💡 Bright flashlight:unexpected, 🙌 Respect others space:expected, 📣 Spoil the ending:unexpected'
            ], index);
          } else if(index === 7){
            showSocialActivity('🛝 S8 At Recess', 'At recess/playground, which behaviors are expected?', [
              '🏃 Run and play:expected, ⚠️ Climb unsafely:unexpected, 🤝 Include others:expected, 🚫 Leave kids out:unexpected, 📏 Follow game rules:expected, 😤 Argue constantly:unexpected',
              '👂 Listen to adults:expected, 🙉 Ignore adults:unexpected, 🔁 Share equipment:expected, 🧸 Hog equipment:unexpected, 🆘 Ask for help when needed:expected, 👊 Solve with hitting:unexpected',
              '💬 Use kind words:expected, 🗯️ Name-call others:unexpected, 🛑 Stop when whistle blows:expected, ⛔ Keep playing anyway:unexpected, 😊 Be fair in teams:expected, 🎯 Target one child:unexpected'
            ], index);
          } else if(index === 8){
            showSocialActivity('💬 S9 In Conversation', 'In a conversation, which behaviors are expected?', [
              '👂 Listen when others talk:expected, 🛑 Interrupt constantly:unexpected, 🙂 Show interest:expected, 😒 Look bored:unexpected, 🔁 Take turns talking:expected, 🗣️ Only talk about yourself:unexpected',
              '👀 Face the person:expected, ↩️ Turn away:unexpected, ❓ Ask questions kindly:expected, 😶 Ignore replies:unexpected, 🧠 Think before speaking:expected, 📣 Speak over others:unexpected',
              '🙏 Respect different opinions:expected, 🤬 Insult opinions:unexpected, 🙂 Use polite tone:expected, 🙄 Sarcastic tone:unexpected, 🫧 Give time to answer:expected, ⏱️ Rush and pressure:unexpected'
            ], index);
          } else if(index === 9){
            showSocialActivity('🏠 S10 Visiting a Friend', 'When visiting a friend\'s house, which behaviors are expected?', [
              '🙏 Say please and thank you:expected, 😠 Demand things:unexpected, 🧸 Clean up toys:expected, 🗑️ Leave mess:unexpected, ✋ Ask before taking food:expected, 🍪 Help yourself to food:unexpected',
              '💛 Be respectful:expected, 👑 Be bossy:unexpected, 🚪 Knock before entering:expected, 🏃 Rush inside:unexpected, 🤝 Follow house rules:expected, 🚫 Refuse all rules:unexpected',
              '🪑 Sit where invited:expected, 🛋️ Jump on furniture:unexpected, 🙂 Say goodbye politely:expected, 🙃 Leave without words:unexpected, 📱 Ask before using devices:expected, 🎮 Grab and use devices:unexpected'
            ], index);
          }
        } else if(questId === 'friendship'){
          if(friendshipPerspectiveActivities[index]){
            showFriendshipPerspectiveActivity(1);
          } else if(index === 0){
            showFriendshipActivity([
              '🚫 Dave snatches a toy from Freddie.:unhealthy',
              '🤝 Emma shares her lunch with Mia.:healthy',
              '🎉 Jake invites Sam to play.:healthy',
              '🚫 Lily tells Tom he can\'t play with them.:unhealthy',
              '👂 Alex listens when Sarah talks.:healthy'
            ]);
          } else if(index === 1){
            showFriendshipActivity([
              '🚫 Ben makes fun of Chris\'s drawing.:unhealthy',
              '👏 Maya congratulates Leo on winning.:healthy',
              '🚫 Josh ignores Ryan when he asks to join.:unhealthy',
              '💛 Sophie helps Amy with homework.:healthy',
              '🚫 Max blames everything on Ethan.:unhealthy'
            ]);
          } else if(index === 2){
            showFriendshipActivity([
              '🛝 Zoe takes turns on the swing.:healthy',
              '🚫 Oscar always wants to go first.:unhealthy',
              '💬 Chloe gives Lucy a compliment.:healthy',
              '🙄 Noah rolls his eyes at Jayden.:unhealthy',
              '🖍️ Ava shares her crayons with Ella.:healthy'
            ]);
          } else if(index === 3){
            showFriendshipActivity([
              '🗣️ Liam interrupts Ruby all the time.:unhealthy',
              '👂 Ivy listens to Grace\'s ideas.:healthy',
              '💔 Mason tells Nora she\'s not good enough.:unhealthy',
              '👏 Harper cheers for Oliver.:healthy',
              '🚫 Aria pushes Violet during a game.:unhealthy'
            ]);
          } else if(index === 4){
            showFriendshipActivity([
              '🙏 Logan apologizes when he makes a mistake.:healthy',
              '🚫 Jackson never says sorry.:unhealthy',
              '💛 Wyatt asks Henry how he\'s feeling.:healthy',
              '😒 Scarlett makes fun of Penelope.:unhealthy',
              '🎲 Mila plays fair and follows the rules.:healthy'
            ]);
          } else if(index === 5){
            showFriendshipActivity([
              '📣 Carter bosses everyone around.:unhealthy',
              '🤝 Luna asks what others want to play.:healthy',
              '🚫 Eli excludes Jack on purpose.:unhealthy',
              '🌟 Bella includes everyone in the game.:healthy',
              '🧸 Hudson takes toys without asking.:unhealthy'
            ]);
          } else if(index === 6){
            showFriendshipActivity([
              '🤫 Avery tells secrets about Nova.:unhealthy',
              '🔒 Ezra keeps Caleb\'s secret safe.:healthy',
              '📣 Stella demands her way all the time.:unhealthy',
              '🙋 Hazel asks before borrowing things.:healthy',
              '🚫 Grayson hits Lincoln when he\'s upset.:unhealthy'
            ]);
          } else if(index === 7){
            showFriendshipActivity([
              '💛 Evelyn comforts Aubrey when she\'s sad.:healthy',
              '😂 Asher laughs when Nolan trips.:unhealthy',
              '🎉 Maya celebrates Isla\'s birthday.:healthy',
              '😶 Easton ignores Kinsley\'s feelings.:unhealthy',
              '🌈 Eliana encourages Josiah to try again.:healthy'
            ]);
          } else if(index === 8){
            showFriendshipActivity([
              '💥 Mateo breaks Bennett\'s things on purpose.:unhealthy',
              '🤝 Natalie asks Willow to join the team.:healthy',
              '🤥 Jaxon tells lies about Theodore.:unhealthy',
              '🛠️ Savannah helps Kennedy with a problem.:healthy',
              '🚫 Nora won\'t let anyone else have a turn.:unhealthy'
            ]);
          } else if(index === 9){
            showFriendshipActivity([
              '🤝 Levi treats everyone with respect.:healthy',
              '🗯️ Delilah calls people mean names.:unhealthy',
              '💬 Madelyn asks Wesley how his day was.:healthy',
              '😠 Elijah gets angry if things don\'t go his way.:unhealthy',
              '🌍 Aurora includes kids who are different.:healthy'
            ]);
          }
        } else if(questId === 'feeling'){
          if(specialMissionActivities.feeling[index]){
            showSpecialMissionActivity(1);
          } else if(index === 0){
            showFeelingActivity([
              'You weren\'t invited to your friend\'s birthday party.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You worked really hard on a drawing and your friend said it wasn\'t good.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your friend is playing with someone else and won\'t let you join.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 1){
            showFeelingActivity([
              'You scored the winning goal in your soccer game.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You finally learned how to do a cartwheel.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You got to pick where your family goes for dinner.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 2){
            showFeelingActivity([
              'You have a big test at school tomorrow.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You heard a loud noise in the night.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You have to give a presentation in front of the class.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 3){
            showFeelingActivity([
              'Your best friend has to move to another city.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your pet goldfish died.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You made a big mistake and got in trouble.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 4){
            showFeelingActivity([
              'You\'re sitting in a quiet library reading your favorite book.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You\'re lying in your bed with no noise around you.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You\'re drawing pictures and listening to soft music.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 5){
            showFeelingActivity([
              'Your older sibling took your toy without asking.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Someone cut in front of you in line at lunch.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your friend broke a promise they made to you.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 6){
            showFeelingActivity([
              'You\'re about to try something you\'ve never done before.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your favorite celebrity is in town and coming to your school.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You get to choose any activity to do this weekend.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 7){
            showFeelingActivity([
              'You don\'t understand something the teacher explained in class.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your friend is acting angry but won\'t tell you why.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Someone told you something that didn\'t make sense.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 8){
            showFeelingActivity([
              'You helped a younger child learn something new.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You did your chores without being asked.|Happy,Sad,Angry,Scared,Calm,Worried',
              'You made a new friend on your first day at school.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          } else if(index === 9){
            showFeelingActivity([
              'You found out you\'re going on a surprise vacation tomorrow.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Your friend did something unexpectedly kind for you.|Happy,Sad,Angry,Scared,Calm,Worried',
              'Something funny happened and everyone was laughing.|Happy,Sad,Angry,Scared,Calm,Worried'
            ]);
          }
        } else if(questId === 'communication'){
          if(index === 0){
            // Communication Quiz: C1 - 10 questions, a/b/c answers to assess communication style
            showCommunicationActivity([
              {
                question: 'Your friend is using your pen and you don\'t want them to. What do you do?',
                a: 'Keep quiet and let them use it. You don\'t want to argue.',
                b: 'Snatch it back off them and shout at them for taking it.',
                c: 'Politely ask for it back.',
                feedback: 'The most helpful approach is option C - assertive communication.'
              },
              {
                question: 'Someone keeps taking your supplies at school. What do you do?',
                a: 'Say nothing and just let them take what they want.',
                b: 'Get really angry and tell them off in front of everyone.',
                c: 'Talk to them privately and ask them to stop.',
                feedback: 'Option C is assertive - you\'re standing up for yourself respectfully.'
              },
              {
                question: 'A friend keeps telling jokes that aren\'t funny but you pretend to laugh. What should you do?',
                a: 'Continue pretending to laugh so you don\'t hurt their feelings.',
                b: 'Tell them loudly that their jokes are terrible and they\'re not funny.',
                c: 'Kindly tell them you appreciate them but not those particular jokes.',
                feedback: 'Option C is the assertive way - honest but kind.'
              },
              {
                question: 'Someone cut in front of you in line. How do you respond?',
                a: 'Say nothing and just accept it.',
                b: 'Push them out of the way aggressively.',
                c: 'Say calmly, "Excuse me, I was here first. Please go to the back of the line."',
                feedback: 'Option C shows assertive communication - you\'re standing up for yourself fairly.'
              },
              {
                question: 'Your sibling won\'t let you use the remote. What should you do?',
                a: 'Give up and don\'t say anything.',
                b: 'Grab it from them and yell at them.',
                c: 'Ask them nicely if you can take a turn.',
                feedback: 'Option C is assertive - expressing your needs respectfully.'
              },
              {
                question: 'A friend wants to play a game you don\'t like. What do you say?',
                a: 'Just say yes and go along with it even though you\'re unhappy.',
                b: 'Say "No way! That game is stupid!" loudly in front of everyone.',
                c: 'Say "I appreciate the invite, but I\'d rather play something else. Want to try my game?"',
                feedback: 'Option C is assertive - expressing your preference respectfully.'
              },
              {
                question: 'Someone did something kind for you. How do you respond?',
                a: 'Don\'t say anything about it.',
                b: 'Rudely dismiss their kindness.',
                c: 'Thank them sincerely and tell them how much it meant to you.',
                feedback: 'Option C shows good assertive communication - expressing gratitude clearly.'
              },
              {
                question: 'Your friend seems sad but won\'t tell you why. What should you do?',
                a: 'Don\'t bring it up and avoid the topic.',
                b: 'Get angry at them and demand they tell you what\'s wrong.',
                c: 'Ask gently, "Are you okay? I\'ve noticed you seem sad. Do you want to talk about it?"',
                feedback: 'Option C is assertive - you\'re showing care and respect for their feelings.'
              },
              {
                question: 'Someone is being mean to you. How do you handle it?',
                a: 'Just accept it quietly without saying anything.',
                b: 'Be mean right back and show them how it feels.',
                c: 'Tell them clearly, "It\'s hurtful when you say/do that. Please stop."',
                feedback: 'Option C is assertive - standing up for yourself while staying respectful.'
              },
              {
                question: 'You made a mistake and broken your friend\'s toy. What do you do?',
                a: 'Say nothing and hope they don\'t notice.',
                b: 'Blame them for leaving it where you could break it.',
                c: 'Tell them right away, apologize sincerely, and offer to help fix it.',
                feedback: 'Option C shows assertive, honest communication - taking responsibility respectfully.'
              }
            ]);
          } else if(index === 1){
            // C2 - 5 questions about identifying communication styles in scenarios
            showCommunicationActivity([
              {
                question: 'Billy pushes Helen out of his way when he wants to get past. What communication style is this?',
                a: 'Passive - he\'s not expressing himself.',
                b: 'Aggressive - he\'s being forceful and rude.',
                c: 'Assertive - he\'s being clear about what he wants.',
                feedback: 'Option B is correct. What could he have done better? He could have said politely, "Excuse me, I need to get past."'
              },
              {
                question: 'Emma wants to join her friends\' game but doesn\'t ask - she just stands and watches from far away. What style is this?',
                a: 'Passive - she\'s not speaking up for what she wants.',
                b: 'Aggressive - she\'s invading their space.',
                c: 'Assertive - she\'s being respectful.',
                feedback: 'Option A is correct. What could she do better? She could say, "Can I play with you guys?"'
              },
              {
                question: 'Jack loudly tells everyone that Sarah\'s drawing is terrible and she can\'t draw at all. What style is this?',
                a: 'Passive - he\'s not being honest.',
                b: 'Aggressive - he\'s being harsh and hurtful.',
                c: 'Assertive - he\'s being honest.',
                feedback: 'Option B is correct. What could be better? He could say kindly, "I\'m not sure that\'s my style of art, but you\'re working on it!"'
              },
              {
                question: 'Maya says nothing when her brother takes her pencil, even though it bothers her. What style is this?',
                a: 'Passive - she\'s not speaking up.',
                b: 'Aggressive - she\'s being mean.',
                c: 'Assertive - she\'s just being nice.',
                feedback: 'Option A is correct. What could be better? She could say, "I need that pencil. Can you use a different one?"'
              },
              {
                question: 'When Leo doesn\'t win the game, he congratulates the winners and smiles. This shows what communication?',
                a: 'Passive - he\'s just giving up.',
                b: 'Aggressive - he\'s being fake.',
                c: 'Assertive - he\'s being respectful and mature.',
                feedback: 'Option C is correct! Leo is showing good emotional regulation and good sportsmanship.'
              }
            ]);
          } else if(index === 2){
            showCommunicationActivity([
              {
                question: 'Zoe wants to ask the teacher a question but says nothing because she\'s shy. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive is correct. What could be better? Zoe could raise her hand and ask even though she\'s nervous.'
              },
              {
                question: 'Oscar tells everyone their jokes are boring and unfunny. What style is this?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What could be better? He could say, "Those jokes aren\'t really my style."'
              },
              {
                question: 'Chloe tells Lucy, "Your hairstyle looks really nice! I like how you did it." What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Chloe is expressing her positive feelings respectfully and kindly.'
              },
              {
                question: 'Noah keeps quiet when someone bumps into him on purpose, even though it hurt. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive is correct. What could be better? He could say, "That hurt. Please be careful."'
              },
              {
                question: 'Ava says, "Can I share my crayons? I love sharing with you!" What style is this?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and very positive! Ava is expressing her generosity and building friendship.'
              }
            ]);
          } else if(index === 3){
            showCommunicationActivity([
              {
                question: 'Liam talks over people constantly and never lets them finish. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What could be better? Liam should listen and wait for his turn to speak.'
              },
              {
                question: 'Ivy asks her friend, "What do you think about this idea?" and really listens. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Ivy is showing respect and valuing others\' opinions.'
              },
              {
                question: 'Mason tells Nora, "You\'re not good at anything," in front of the whole class. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive and hurtful. What could be better? Never say mean things like that to anyone.'
              },
              {
                question: 'Harper cheers loudly for Oliver when he does something well. What communication?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and wonderful! Harper is expressing encouragement and support.'
              },
              {
                question: 'Aria feels frustrated with Violet but doesn\'t say anything and stays quiet. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive is correct. What could be better? She could calmly explain what\'s bothering her.'
              }
            ]);
          } else if(index === 4){
            showCommunicationActivity([
              {
                question: 'Logan apologizes sincerely when he makes a mistake. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Taking responsibility with honesty and respect shows great communication.'
              },
              {
                question: 'Jackson keeps pretending nothing happened when he hurts someone. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive (and problematic). What could be better? He should apologize and make it right.'
              },
              {
                question: 'Wyatt gently asks his friend, "How are you feeling today?" What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and caring! Wyatt is showing genuine interest in his friend.'
              },
              {
                question: 'Scarlett laughs at Penelope\'s mistake and points it out loudly. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive and unkind. What could be better? She should be kind and keep her friend\'s dignity.'
              },
              {
                question: 'Mila plays fairly and follows the rules and encourages others to too. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Mila shows respect, honesty, and good leadership.'
              }
            ]);
          } else if(index === 5){
            showCommunicationActivity([
              {
                question: 'Carter tells everyone what to do and doesn\'t listen to their ideas. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What could be better? He should ask for others\' ideas and work together.'
              },
              {
                question: 'Luna asks, "What would you like to play?" and listens to everyone. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and inclusive! Luna shows respect and good group communication.'
              },
              {
                question: 'Eli tells Jack he can\'t play and won\'t give a reason. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive (though also rude). A better way would be to kindly explain or find a way to include Jack.'
              },
              {
                question: 'Bella makes sure everyone gets a turn and feels included. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and wonderful! This shows thoughtful, inclusive communication.'
              },
              {
                question: 'Hudson takes things without asking permission. What communication?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive (taking what isn\'t his). What could be better? He should always ask first.'
              }
            ]);
          } else if(index === 6){
            showCommunicationActivity([
              {
                question: 'Avery shares a secret about Nova that she was told in confidence. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive (and a betrayal of trust). What\'s better? Never tell someone else\'s secrets.'
              },
              {
                question: 'Ezra promises to keep Caleb\'s secret safe and he does. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and trustworthy! This shows great integrity and friendship.'
              },
              {
                question: 'Stella demands her way and gets upset if anyone disagrees. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What could be better? She should consider others\' opinions too.'
              },
              {
                question: 'Hazel asks before borrowing her friend\'s things. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! This shows respect and good communication.'
              },
              {
                question: 'Grayson hits Lincoln when he\'s upset with him. What communication?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive and harmful. What\'s better? Use words to express feelings, never violence.'
              }
            ]);
          } else if(index === 7){
            showCommunicationActivity([
              {
                question: 'Evelyn comforts Aubrey when she\'s sad and listens to her. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and compassionate! This shows emotional intelligence and good friendship.'
              },
              {
                question: 'Asher laughs at Nolan when he trips and falls. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive and unkind. What\'s better? Help him up and show you care about his feelings.'
              },
              {
                question: 'Maya makes a special birthday card for Isla and celebrates with her. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and loving! Maya is expressing care and celebrating her friend.'
              },
              {
                question: 'Easton ignores Kinsley even when she\'s clearly upset. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Passive and unkind. What\'s better? Ask if she\'s okay and show you care.'
              },
              {
                question: 'Elena tells her friend, "I\'m sorry I hurt your feelings. How can I make it right?" What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Elena is showing responsibility, honesty, and willingness to repair the relationship.'
              }
            ]);
          } else if(index === 8){
            showCommunicationActivity([
              {
                question: 'Mateo breaks Bennett\'s things on purpose because he\'s angry. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What\'s better? Express anger with words, never destroy things.'
              },
              {
                question: 'Natalie asks Willow, "Would you like to join our team?" What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and inclusive! Natalie is respectfully inviting her friend to participate.'
              },
              {
                question: 'Jaxon tells lies about Theodore to make friends laugh at him. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive, dishonest, and hurtful. What\'s better? Never lie about or mock others.'
              },
              {
                question: 'Savannah helps Kennedy solve a problem she\'s worried about. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and supportive! This shows caring, helpful communication.'
              },
              {
                question: 'Nora won\'t take turns and makes everyone play only her way. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What\'s better? Be flexible and let others choose sometimes too.'
              }
            ]);
          } else if(index === 9){
            showCommunicationActivity([
              {
                question: 'Levi treats everyone with respect and kindness. What communication style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! Levi is showing the best kind of communication - respectful and kind.'
              },
              {
                question: 'Delilah calls people mean names when she\'s frustrated. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive and hurtful. What\'s better? Express frustration without attacking others.'
              },
              {
                question: 'Madelyn genuinely asks Wesley about his day and listens. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive! This shows genuine interest and good listening skills.'
              },
              {
                question: 'Elijah gets really angry if things don\'t go his way. What communication?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Aggressive is correct. What\'s better? Accept that life doesn\'t always go your way and stay calm.'
              },
              {
                question: 'Aurora includes kids who are different and makes everyone feel welcome. What style?',
                a: 'Passive',
                b: 'Aggressive',
                c: 'Assertive',
                feedback: 'Assertive and compassionate! Aurora shows excellent inclusive and respectful communication.'
              }
            ]);
          }
        } else if(questId === 'identity'){
          if(index === 0){
            showIdentityActivity('Big 5 Personality', 'Let\'s explore the Big 5 personality traits! For each trait, think about where you are on the scale.', 'quiz', [
              'Openness (curious & creative vs. routine & practical)|Very Creative,Creative,In Between,Practical,Very Practical',
              'Conscientiousness (organized & responsible vs. spontaneous & flexible)|Very Organized,Organized,In Between,Flexible,Very Flexible',
              'Extraversion (outgoing & energetic vs. quiet & reserved)|Very Outgoing,Outgoing,In Between,Reserved,Very Reserved',
              'Agreeableness (friendly & compassionate vs. independent & skeptical)|Very Friendly,Friendly,In Between,Independent,Very Independent',
              'Emotional Stability (calm & confident vs. sensitive & nervous)|Very Calm,Calm,In Between,Sensitive,Very Sensitive'
            ]);
          } else if(index === 1){
            showIdentityActivity('Group Identity', 'What groups are you part of? We all belong to different groups that help shape who we are!', 'checkboxes', [
              '🏫 School/Class', '🏅 Sports Teams', '🎨 Art/Music Groups', '🧩 Clubs', '👨‍👩‍👧‍👦 Family', '🕊️ Religious/Cultural Groups', '🎮 Gaming Communities', '🏘️ Neighborhood', '🧑‍🤝‍🧑 Friend Groups', '✨ Other Groups'
            ]);
          } else if(index === 2){
            showIdentityActivity('Self-Concept', 'How do you see yourself? Choose words that describe you!', 'checkboxes', [
              '😊 Happy', '🧠 Smart', '💪 Strong', '😂 Funny', '🎨 Creative', '😌 Calm', '🤝 Friendly', '💛 Kind', '🎯 Focused', '✨ Unique', '⚡ Active', '🔍 Curious', '😎 Cool', '🫶 Caring', '🗣️ Expressive', '🌟 Special'
            ]);
          } else if(index === 3){
            showIdentityActivity('Personal Values', 'What\'s most important to you? Values guide our choices and actions!', 'ranking', [
              '🤝 Friendship', '👨‍👩‍👧‍👦 Family', '📚 Learning', '🏆 Success', '🎨 Creativity', '😊 Happiness', '💛 Kindness', '🫱 Honesty', '🦁 Courage', '🌟 Achievement'
            ]);
          } else if(index === 4){
            showIdentityActivity('Role Identity', 'What are your different roles? We all play many roles in life!', 'checkboxes', [
              '👧 Son/Daughter', '👫 Brother/Sister', '🎒 Student', '🤝 Friend', '🏅 Team Member', '🎨 Artist', '📚 Reader', '🎮 Gamer', '🐾 Pet Owner', '🫶 Helper', '🎭 Performer', '⭐ Leader'
            ]);
          } else if(index === 5){
            showIdentityActivity('Cultural Identity', 'What makes up your cultural identity? Culture shapes who we are!', 'text', [
              'What language(s) do you speak?',
              'What traditions or celebrations are important to you?',
              'What foods are special in your family?',
              'What stories or values come from your culture?'
            ]);
          } else if(index === 6){
            showIdentityActivity('Interests & Hobbies', 'What do you love to do? Your interests are part of your identity!', 'checkboxes', [
              '🏅 Sports', '🎨 Art', '🎵 Music', '📚 Reading', '🎮 Gaming', '🏃 Exercise', '🔬 Science', '💻 Technology', '🌿 Nature', '🐾 Animals', '🎭 Acting', '✍️ Writing', '🧱 Building', '🎤 Singing', '🍳 Cooking', '📷 Photography'
            ]);
          } else if(index === 7){
            showIdentityActivity('Strengths & Weaknesses', 'Everyone has strengths and things they\'re working on. What are yours?', 'text', [
              'What are you really good at?',
              'What do people compliment you on?',
              'What would you like to get better at?',
              'What challenges do you face?'
            ]);
          } else if(index === 8){
            showIdentityActivity('Future Self', 'Who do you want to become? Think about your future self!', 'text', [
              'What do you want to be when you grow up?',
              'What kind of person do you want to be?',
              'What skills do you want to learn?',
              'What dreams do you have?'
            ]);
          } else if(index === 9){
            showIdentityActivity('Identity Reflection', 'Let\'s reflect on everything we\'ve learned about you!', 'text', [
              'What\'s the most important thing about your identity?',
              'What makes you unique and special?',
              'What are you most proud of about yourself?',
              'How do you think others see you?'
            ]);
          }
        } else if(questId === 'mindset'){
          if(index === 0){
            showMindsetActivity('M1: Growth Mindset', 'Which thought shows a growth mindset?', [
              'I can get better with practice.',
              'I\'m just not good at this.'
            ]);
          } else if(index === 1){
            showMindsetActivity('M2: Mistakes = Learning', 'Pick the thought that helps you learn from mistakes.', [
              'Mistakes help me learn.',
              'Mistakes mean I failed.'
            ]);
          } else if(index === 2){
            showMindsetActivity('M3: The Power of Yet', 'Which sentence uses the power of "yet"?', [
              'I can\'t do this... yet.',
              'I can\'t do this.'
            ]);
          } else if(index === 3){
            showMindsetActivity('M4: Optimism vs Pessimism', 'Which is the optimistic way to explain this?', [
              'This was hard today, but I can try again tomorrow.',
              'This will always be hard for me.'
            ]);
          } else if(index === 4){
            showMindsetActivity('M5: Reframe It', 'Choose the positive reframe.', [
              'I didn\'t win, but I learned what to practice.',
              'I didn\'t win, so I\'m terrible.'
            ]);
          } else if(index === 5){
            showMindsetActivity('M6: Effort Matters', 'Which thought focuses on effort and growth?', [
              'I worked hard and improved.',
              'I\'m smart so I don\'t need to try.'
            ]);
          } else if(index === 6){
            showMindsetActivity('M7: Learn From Mistakes', 'Pick the helpful self-talk.', [
              'I can learn from this mistake.',
              'I always mess things up.'
            ]);
          } else if(index === 7){
            showMindsetActivity('M8: Optimistic Prediction', 'Choose the optimistic prediction.', [
              'If I keep practicing, I might do better next time.',
              'Nothing will ever change.'
            ]);
          } else if(index === 8){
            showMindsetActivity('M9: Spot the Positive', 'Which thought shows positive thinking?', [
              'Even though it rained, we still had fun.',
              'The day was ruined because of rain.'
            ]);
          } else if(index === 9){
            showMindsetActivity('M10: Your Own Thought', 'Write your own growth mindset thought.', [], 'Write a positive thought you can use.');
          }
        } else if(questId === 'sensory'){
          if(index === 0){
            showIdentityActivity(
              'Sensory1: Five Senses Check-In',
              'Let\'s spot what your body notices right now with all five senses!',
              'text',
              [
                '👀 Sight: What are 3 things you can see right now?',
                '👂 Hearing: What are 2 sounds you can hear?',
                '👃 Smell: Is there a smell around you? What is it?',
                '👅 Taste: Is there a taste in your mouth right now?',
                '✋ Touch: What can your hands or feet feel right now?'
              ]
            );
          } else if(index === 1){
            showIdentityActivity(
              'Sensory2: Senses in Daily Life',
              'When do your senses help you most during the day?',
              'checkboxes',
              [
                '👀 Seeing the board at school',
                '👂 Listening to instructions',
                '👃 Smelling food at lunch',
                '👅 Tasting snacks and meals',
                '✋ Feeling textures like clothes or pencils',
                '🧠 Noticing body position while sitting',
                '🌀 Noticing movement when walking or swinging'
              ]
            );
          } else if(index === 2){
            showIdentityActivity(
              'Sensory3: Things I Like',
              'Now let\'s find sensory things your body enjoys.',
              'text',
              [
                '👀 What sights make you feel happy or calm?',
                '👂 What sounds do you enjoy?',
                '👃 What smells do you like?',
                '👅 What tastes do you like?',
                '✋ What textures feel nice to touch?'
              ]
            );
          } else if(index === 3){
            showIdentityActivity(
              'Sensory4: Things I Don\'t Like',
              'Everyone has sensory dislikes. Let\'s notice yours so we can help your body.',
              'text',
              [
                '👀 What sights feel too bright or busy?',
                '👂 What sounds feel too loud or annoying?',
                '👃 What smells are too strong for you?',
                '👅 What tastes are too strong or unpleasant?',
                '✋ What textures feel uncomfortable?'
              ]
            );
          } else if(index === 4){
            showIdentityActivity(
              'Sensory5: Body Clues and Regulation',
              'How does your body tell you it needs a sensory break?',
              'checkboxes',
              [
                '😣 My body feels tense or fidgety',
                '🙉 Sounds start feeling too loud',
                '😤 I feel grumpy or overwhelmed',
                '🏃 I need to move my body a lot',
                '🫥 I feel tired or zoned out',
                '🧘 A quiet break helps me reset',
                '🎧 Headphones help me calm down',
                '🫶 Deep pressure (hug/blanket) helps me'
              ]
            );
          } else if(index === 5){
            showIdentityActivity(
              'Sensory6: Hard Times of Day',
              'Some parts of the day are tougher. Which ones are hard for your senses?',
              'checkboxes',
              [
                '🌅 Morning getting ready',
                '🚪 Arriving at school',
                '🔄 Changing activities',
                '🍽️ Lunch or cafeteria time',
                '🎒 End of school / going home',
                '🏠 Busy time after school',
                '🌙 Bedtime'
              ]
            );
          } else if(index === 6){
            showIdentityActivity(
              'Sensory7: Proprioception (Body-Position Sense)',
              'Proprioception means how your muscles and joints tell your brain where your body is. Which activities help?',
              'checkboxes',
              [
                '🧱 Wall pushes',
                '🎒 Carrying a backpack',
                '🪑 Chair push-ups',
                '🪵 Animal walks (bear/crab)',
                '🤲 Squeezing putty or a stress ball',
                '🧺 Helping carry groceries or books',
                '🛏️ Rolling up in a blanket'
              ]
            );
          } else if(index === 7){
            showIdentityActivity(
              'Sensory8: Vestibular (Movement Sense)',
              'Vestibular means your balance and movement sense. Which movement helps your body feel right?',
              'checkboxes',
              [
                '🌀 Slow spinning',
                '🤸 Rocking gently',
                '🛝 Sliding',
                '🧍 Balancing on one foot',
                '🚶 Walking breaks',
                '🪑 Gentle chair rocking',
                '⏸️ Movement breaks between tasks'
              ]
            );
          } else if(index === 8){
            showIdentityActivity(
              'Sensory9: My Sensory Toolbox',
              'Pick tools you can use when senses feel too big or too little.',
              'checkboxes',
              [
                '🎧 Headphones or ear defenders',
                '🕶️ Sunglasses/hat for bright light',
                '🧴 Nice-smelling lotion',
                '💧 Water sip break',
                '🍎 Crunchy snack break',
                '🧸 Fidget or texture toy',
                '🧘 Breathing break',
                '🏃 Movement break',
                '🫶 Deep pressure hug/blanket',
                '🗣️ Ask an adult for help'
              ]
            );
          } else if(index === 9){
            showIdentityActivity(
              'Sensory10: My Personal Sensory Plan',
              'Amazing detective work! Let\'s make your plan for tricky moments.',
              'text',
              [
                'When I feel overloaded, I can...',
                'When I feel under-alert or sleepy, I can...',
                'At hard times of day, I will try...',
                'Adults can help me by...',
                'My top 3 sensory tools are...'
              ]
            );
          }
        } else if(questId === 'thought'){
          if(index === 0){
            showMindsetActivity('Thought1: Notice the Thought', 'What is a thought?', [
              'A sentence in my mind',
              'Only something people say out loud'
            ]);
          } else if(index === 1){
            showIdentityActivity('Thought2: Thought-Feeling Link', 'What thought might match each feeling?', 'text', [
              'When I feel worried, I might be thinking...',
              'When I feel sad, I might be thinking...',
              'When I feel confident, I might be thinking...'
            ]);
          } else if(index === 2){
            showMindsetActivity('Thought3: Spot All-or-Nothing Thinking', 'Pick the balanced thought.', [
              'I made one mistake, but I can still do well.',
              'I made one mistake, so I am terrible.'
            ]);
          } else if(index === 3){
            showMindsetActivity('Thought4: Spot Catastrophizing', 'Which thought is less scary and more realistic?', [
              'This is hard, but I can handle it step by step.',
              'This is the worst thing ever and everything is ruined.'
            ]);
          } else if(index === 4){
            showMindsetActivity('Thought5: Spot Mind Reading', 'Which thought checks facts instead of guessing?', [
              'I don\'t know what they think. I can ask.',
              'They definitely hate me.'
            ]);
          } else if(index === 5){
            showMindsetActivity('Thought6: Challenge the Thought', 'What is a good detective question?', [
              'What is the evidence for and against this thought?',
              'Is this thought loud? Then it must be true.'
            ]);
          } else if(index === 6){
            showIdentityActivity('Thought7: Helpful Self-Talk', 'Write a kinder thought you can tell yourself.', 'text', [
              'Instead of "I can\'t do this", I can say...',
              'Instead of "Everyone is better than me", I can say...',
              'A brave thought I can use before something hard is...'
            ]);
          } else if(index === 7){
            showMindsetActivity('Thought8: Use the Thinking Ladder', 'What is the next-step thought?', [
              'I can\'t do it yet, but I can try one small step.',
              'I can\'t do it, so I should quit now.'
            ]);
          } else if(index === 8){
            showIdentityActivity('Thought9: Thought Detective Quiz', 'Choose which strategies help with tricky thoughts.', 'checkboxes', [
              '🕵️ Check the evidence',
              '🧘 Take 3 calm breaths first',
              '🗣️ Say one kind sentence to yourself',
              '🧠 Look for another explanation',
              '✍️ Write a balanced thought',
              '🚫 Believe every scary thought immediately'
            ]);
          } else if(index === 9){
            showIdentityActivity('Thought10: My CBT Plan', 'Build your own Thought Detective plan!', 'text', [
              'My common tricky thought is...',
              'My thinking pattern might be...',
              'Evidence against that thought is...',
              'My new balanced thought is...',
              'When I need help, I can talk to...'
            ]);
          }
        } else if(questId === 'conflict'){
          if(specialMissionActivities.conflict[index]){
            showSpecialMissionActivity(1);
          } else if(index === 0){
            showMindsetActivity('Conflict1: Pause First', 'What is the best first step in conflict?', [
              'Pause, breathe, and use a calm voice',
              'Shout quickly before they shout first'
            ]);
          } else if(index === 1){
            showMindsetActivity('Conflict2: Use "I" Statements', 'Which sentence is better?', [
              'I feel upset when I get interrupted.',
              'You are always rude and annoying.'
            ]);
          } else if(index === 2){
            showMindsetActivity('Conflict3: Listening Skills', 'What shows good listening?', [
              'Let them finish and repeat what you heard',
              'Interrupt so you win the argument'
            ]);
          } else if(index === 3){
            showMindsetActivity('Conflict4: Agree to Disagree', 'When views are different, what can you say?', [
              'We think differently, and that\'s okay.',
              'You must agree with me or you are wrong.'
            ]);
          } else if(index === 4){
            showMindsetActivity('Conflict5: Compromise', 'What is compromise?', [
              'Both people give a little to find a fair middle',
              'Only one person gets everything they want'
            ]);
          } else if(index === 5){
            showMindsetActivity('Conflict6: Letting Small Things Go', 'Which choice helps peace?', [
              'Let small things go when they are not important',
              'Argue about every tiny thing'
            ]);
          } else if(index === 6){
            showIdentityActivity('Conflict7: Triggers and Warning Signs', 'What usually starts conflict for you?', 'text', [
              'One thing that often triggers me is...',
              'My body warning sign is...',
              'A calm-down step I can use is...'
            ]);
          } else if(index === 7){
            showIdentityActivity('Conflict8: Fix-It Toolkit', 'Pick tools that help solve conflict.', 'checkboxes', [
              '🧘 Take a breathing break',
              '🗣️ Use calm words',
              '👂 Listen to understand',
              '🤝 Suggest a compromise',
              '⏳ Take a short cool-off break',
              '🙋 Ask a trusted adult for support',
              '🚫 Bring up old problems to win'
            ]);
          } else if(index === 8){
            showIdentityActivity('Conflict9: Scenario Quiz', 'How would you respond in these moments?', 'text', [
              'A friend wants a different game than you. What could you say?',
              'Someone disagrees with your opinion. How can you agree to disagree?',
              'You feel angry in an argument. What calm step will you do first?'
            ]);
          } else if(index === 9){
            showIdentityActivity('Conflict10: My Conflict Plan', 'Make your own conflict plan for next time.', 'text', [
              'When conflict starts, my first calm step is...',
              'A respectful sentence I can use is...',
              'How I can compromise is...',
              'When to let it go is...',
              'If I am stuck, I will ask help from...'
            ]);
          }
        } else {
          // Default behavior
          if(questDetailTitle) questDetailTitle.textContent = `${questTitle} - Step ${index + 1}`;
          if(questDetailText) questDetailText.textContent = `Quest activity ${index + 1}.`;
          showScreen(questDetailScreen);
        }
      }

      function setMindfulnessActivity(activityType){
        let activity;
        if(activityType){
          // Find activity matching the provided type
          activity = mindfulnessActivities.find(a => a.type === activityType);
          if(!activity) activity = mindfulnessActivities[0]; // fallback
        } else {
          // Use the normal cycling behavior
          activity = mindfulnessActivities[mindfulnessIndex % mindfulnessActivities.length];
          mindfulnessIndex = (mindfulnessIndex + 1) % mindfulnessActivities.length;
          localStorage.setItem('mindfulnessIndex', mindfulnessIndex);
        }
        currentMindfulnessType = activity.type;
        if(mindfulnessIntro) mindfulnessIntro.textContent = activity.text;
        if(mindfulnessInputField) mindfulnessInputField.value = '';
        const isSquare = activity.type === 'square';
        if(squareBreathingGuide) squareBreathingGuide.style.display = isSquare ? 'block' : 'none';
        if(mindfulnessScreen) mindfulnessScreen.classList.toggle('square-breathing-active', isSquare);

        if(activity.type === '5-4-3-2-1'){
          mindfulnessScreen.style.display = 'none';
          showScreen(grounding54321Screen);
        } else if(activity.type === 'yellow'){
          mindfulnessScreen.style.display = 'none';
          showScreen(yellowThingsScreen);
        } else if(activity.type === 'rainbow'){
          mindfulnessScreen.style.display = 'none';
          showScreen(rainbowActivityScreen);
        } else if(activity.type === 'hotChocolate'){
          mindfulnessScreen.style.display = 'none';
          showScreen(hotChocolateScreen);
          startHotChocolateBreathing();
        } else if(activity.type === 'prompt'){
          if(breathingCircle) breathingCircle.style.display = 'none';
          if(breathingSquare) breathingSquare.style.display = 'none';
          if(breathingText){ breathingText.style.display = 'none'; breathingText.classList.remove('flash'); }
          if(mindfulnessInput) mindfulnessInput.style.display = 'block';
          stopBreathingCycle();
          stopSquareCycle();
        } else if(activity.type === 'square'){
          if(breathingCircle) breathingCircle.style.display = 'none';
          if(breathingSquare) breathingSquare.style.display = 'block';
          if(breathingText){ breathingText.style.display = 'block'; breathingText.textContent = 'Follow the square'; breathingText.classList.remove('flash'); }
          if(mindfulnessInput) mindfulnessInput.style.display = 'none';
          stopBreathingCycle();
          startSquareCycle();
        } else {
          if(breathingCircle) breathingCircle.style.display = 'block';
          if(breathingSquare) breathingSquare.style.display = 'none';
          if(breathingText){ breathingText.style.display = 'block'; breathingText.textContent = 'Breathe in'; }
          if(mindfulnessInput) mindfulnessInput.style.display = 'none';
          startBreathingCycle();
        }
      }

      // complete yellow things
      completeYellow && (completeYellow.onclick = function(){
        yellowThingsScreen.style.display = 'none';
        document.getElementById('yellow1').value = '';
        document.getElementById('yellow2').value = '';
        document.getElementById('yellow3').value = '';
        document.getElementById('yellow4').value = '';
        document.getElementById('yellow5').value = '';
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      });

      // complete rainbow
      completeRainbow && (completeRainbow.onclick = function(){
        rainbowActivityScreen.style.display = 'none';
        document.getElementById('rainbow1').value = '';
        document.getElementById('rainbow2').value = '';
        document.getElementById('rainbow3').value = '';
        document.getElementById('rainbow4').value = '';
        document.getElementById('rainbow5').value = '';
        document.getElementById('rainbow6').value = '';
        document.getElementById('rainbow7').value = '';
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      });

      // Complete grounding exercise. When launched from Problem Solver,
      // finish the distraction route at the Toolbox instead of entering the
      // daily check-in or the red-activity prompt.
      completeGrounding && (completeGrounding.onclick = function(){
        if(problemSolverActivityInProgress){
          cancelProblemSolverActivity();
          grounding54321Screen.style.display = 'none';
          document.getElementById('grounding5').value = '';
          document.getElementById('grounding4').value = '';
          document.getElementById('grounding3').value = '';
          document.getElementById('grounding2').value = '';
          document.getElementById('grounding1').value = '';
          showCelebration(function(){ showScreen(toolboxScreen); }, 100, 'Well done! You completed your problem-solving activity.');
        } else if(fromRedActivities){
          fromRedActivities = false;
          grounding54321Screen.style.display = 'none';
          document.getElementById('grounding5').value = '';
          document.getElementById('grounding4').value = '';
          document.getElementById('grounding3').value = '';
          document.getElementById('grounding2').value = '';
          document.getElementById('grounding1').value = '';
          showModal(redPromptModal);
        } else {
          grounding54321Screen.style.display = 'none';
          document.getElementById('grounding5').value = '';
          document.getElementById('grounding4').value = '';
          document.getElementById('grounding3').value = '';
          document.getElementById('grounding2').value = '';
          document.getElementById('grounding1').value = '';
          showCelebration(function(){
            homeScreen.style.display='block';
            advanceStar();
          });
        }
      });

      submitGratitude && (submitGratitude.onclick = function(){
        gratitudeScreen.style.display = 'none';
        document.getElementById('gratitude1').value='';
        document.getElementById('gratitude2').value='';
        document.getElementById('gratitude3').value='';
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      });

      submitAmazing && (submitAmazing.onclick = function(){
        amazingMeScreen.style.display='none';
        document.getElementById('amazing1').value='';
        document.getElementById('amazing2').value='';
        document.getElementById('amazing3').value='';
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      });

      function setMovingActivity(){
        const text = movingActivities[movingIndex % movingActivities.length];
        movingIndex = (movingIndex + 1) % movingActivities.length;
        localStorage.setItem('movingIndex', movingIndex);
        awaitingMovementCount = false;
        if(movingPrompt) movingPrompt.textContent = text;
        if(starJumpsInputWrap) starJumpsInputWrap.style.display = 'none';
        if(starJumpsInput) {
          starJumpsInput.value = '';
          starJumpsInput.disabled = true;
        }
        if(startTimer) startTimer.textContent = 'Start';
      }

      function completeMovingActivityNow() {
        if (movingTimerInterval) {
          clearInterval(movingTimerInterval);
          movingTimerInterval = null;
        }
        if (getMovingScreen) getMovingScreen.style.display = 'none';
        const timerDisplay = document.getElementById('timer');
        if (timerDisplay) timerDisplay.textContent = '60';
        if (startTimer) startTimer.style.display = 'inline-block';
        if (startTimer) startTimer.textContent = 'Start';
        awaitingMovementCount = false;
        if (starJumpsInput) starJumpsInput.value = '';
        if (starJumpsInputWrap) starJumpsInputWrap.style.display = 'none';
        if (handleRedActivityCompletion()) return;
        if(problemSolverActivityInProgress){
          showProblemDistractionCheckIn();
          return;
        }
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      }

      function completeBreathingActivityNow() {
        stopBreathingCycle();
        stopSquareCycle();
        stopHotChocolateBreathing();
        if (mindfulnessScreen) mindfulnessScreen.style.display = 'none';
        if (hotChocolateScreen) hotChocolateScreen.style.display = 'none';
        if(handleRedActivityCompletion()) return;
        if(problemSolverActivityInProgress){
          showProblemDistractionCheckIn();
          return;
        }
        showCelebration(function(){
          homeScreen.style.display='block';
          advanceStar();
        });
      }

      const amazingAffirmations = [
        'I am proud of my progress.',
        'I can do hard things.',
        'I learn and get stronger every day.',
        'I am kind, capable, and brave.',
        'My effort matters and I am growing.'
      ];

      function setRandomAmazingAffirmation(){
        if(!amazingAffirmation) return;
        const affirmation = amazingAffirmations[Math.floor(Math.random() * amazingAffirmations.length)];
        amazingAffirmation.className = 'amazing-affirmation';
        amazingAffirmation.textContent = affirmation;
      }

      // timer
      startTimer && (startTimer.onclick = function(){
        const currentPrompt = movingPrompt ? movingPrompt.textContent : '';
        const isCountTask = /how many/i.test(currentPrompt || '');
        if (awaitingMovementCount) {
          const jumpCount = starJumpsInput ? starJumpsInput.value.trim() : '';
          if (!jumpCount || !Number.isInteger(Number(jumpCount)) || Number(jumpCount) < 0) {
            starJumpsInput && starJumpsInput.focus();
            return;
          }
          awaitingMovementCount = false;
          completeMovingActivityNow();
          return;
        }
        startTimer.style.display='none';
        let timeLeft=60;
        const timerDisplay=document.getElementById('timer');
        if (movingTimerInterval) {
          clearInterval(movingTimerInterval);
        }
        movingTimerInterval = setInterval(function(){
          timeLeft--;
          timerDisplay.textContent=timeLeft;
          
          if(timeLeft<=0){
            clearInterval(movingTimerInterval);
            movingTimerInterval = null;
            playTimerAlarm();
            if (isCountTask) {
              awaitingMovementCount = true;
              const countActivity = (currentPrompt.match(/how many\s+(.+?)\s+can you do/i) || [])[1] || 'repetitions';
              if (movingPrompt) movingPrompt.textContent = 'How many ' + countActivity + ' did you do?';
              if (timerDisplay) timerDisplay.textContent = 'Done!';
              if (starJumpsInput) {
                starJumpsInput.disabled = false;
                starJumpsInput.value = '';
                starJumpsInput.placeholder = 'How many ' + countActivity + ' did you do?';
              }
              if (starJumpsInputWrap) starJumpsInputWrap.style.display = 'block';
              startTimer.textContent = 'Done';
              startTimer.style.display = 'inline-block';
              return;
            }
            if(problemSolverActivityInProgress){
              completeMovingActivityNow();
              return;
            }
            getMovingScreen.style.display='none';
            if(handleRedActivityCompletion()){
              timerDisplay.textContent='60';
              startTimer.style.display='inline-block';
              if(starJumpsInput) starJumpsInput.value = '';
              if(starJumpsInputWrap) starJumpsInputWrap.style.display = 'none';
              return;
            }
            showCelebration(function(){
              homeScreen.style.display='block';
              timerDisplay.textContent='60';
              startTimer.style.display='inline-block';
              if(starJumpsInput) starJumpsInput.value = '';
              if(starJumpsInputWrap) starJumpsInputWrap.style.display = 'none';
              advanceStar();
            });
          }
        },1000);
      });

      if (skipGetMovingBtn) {
        skipGetMovingBtn.onclick = function() {
          completeMovingActivityNow();
        };
      }

      if (skipMindfulnessBtn) {
        skipMindfulnessBtn.onclick = function() {
          completeBreathingActivityNow();
        };
      }

      if (skipHotChocolateBtn) {
        skipHotChocolateBtn.onclick = function() {
          completeBreathingActivityNow();
        };
      }

      loadStarsFromStorage();
      setActiveStarIndexFromDom();
      
      // Load sound setting
      const savedSound = localStorage.getItem('soundEnabled');
      if(savedSound !== null){
        soundEnabled = savedSound === 'true';
        if(soundToggle) soundToggle.checked = soundEnabled;
      }

      // TEXT INPUT VALIDATION - Require 3+ characters before button can be clicked
      function validateMinLength(inputIds, buttonId, minLength = 3) {
        const button = document.getElementById(buttonId);
        if (!button) return;
        
        // Disable button initially
        button.disabled = true;
        button.style.opacity = '0.5';
        button.style.cursor = 'not-allowed';
        
        const inputs = inputIds.map(id => document.getElementById(id)).filter(el => el);
        if (inputs.length === 0) return;
        
        function checkValidation() {
          const allValid = inputs.every(input => {
            const value = input.value ? input.value.trim() : '';
            return value.length >= minLength;
          });
          
          button.disabled = !allValid;
          button.style.opacity = allValid ? '1' : '0.5';
          button.style.cursor = allValid ? 'pointer' : 'not-allowed';
        }
        
        inputs.forEach(input => {
          input.addEventListener('input', checkValidation);
          input.addEventListener('change', checkValidation);
        });
      }

      // Set up validation for all text input fields
      validateMinLength(['reasonText'], 'submitReason');
      validateMinLength(['zenzyNameInput'], 'adoptZenzyBtn', 2);
      validateMinLength(['grounding5', 'grounding4', 'grounding3', 'grounding2', 'grounding1'], 'completeGrounding');
      validateMinLength(['yellow1', 'yellow2', 'yellow3', 'yellow4', 'yellow5'], 'completeYellow');
      validateMinLength(['rainbow1', 'rainbow2', 'rainbow3', 'rainbow4', 'rainbow5', 'rainbow6', 'rainbow7'], 'completeRainbow');
      validateMinLength(['gratitude1', 'gratitude2', 'gratitude3'], 'submitGratitude');
      validateMinLength(['amazing1', 'amazing2', 'amazing3'], 'submitAmazing');
      validateMinLength(['problemText'], 'shareProblemBtn');
      validateMinLength(['worryText'], 'worrySubmit');
      validateMinLength(['balancedThoughtText'], 'balancedThoughtSubmit');

      // Show speech bubble when typing in reason text box
      const reasonText = document.getElementById('reasonText');
      const reasonSpeechBubble = document.getElementById('reasonSpeechBubble');
      if (reasonText && reasonSpeechBubble) {
        reasonText.addEventListener('input', function() {
          if (reasonText.value.trim().length > 0) {
            reasonSpeechBubble.style.display = 'block';
          } else {
            reasonSpeechBubble.style.display = 'none';
          }
        });
      }
      
      // Settings handlers
      console.log('settingsBtn element:', settingsBtn);
      console.log('settingsModal element:', settingsModal);
      if(settingsBtn){
        settingsBtn.addEventListener('click', function(e){
          console.log('settingsBtn clicked!');
          try{
            e.preventDefault();
            e.stopPropagation();
            if(settingsModal){
              showModal(settingsModal);
            } else {
              console.error('settingsModal not found');
            }
          } catch(err){
            console.error('Error in settingsBtn click:', err);
          }
        });
        console.log('settingsBtn event handler attached successfully');
      } else {
        console.error('settingsBtn element not found');
      }
      
      if(closeSettingsBtn){
        closeSettingsBtn.onclick = function(){
          hideModal(settingsModal);
        };
      }
      
      if(soundToggle){
        soundToggle.onchange = function(){
          soundEnabled = soundToggle.checked;
          localStorage.setItem('soundEnabled', soundEnabled);
        };
      }
      
      if(resetAppBtn){
        resetAppBtn.onclick = function(){
          if(confirm('Are you sure you want to reset the app? This will delete all your progress, stars, and Zen Points.')){
            localStorage.clear();
            location.reload();
          }
        };
      }
      
      if(privacyPolicyBtn){
        privacyPolicyBtn.onclick = function(){
          cancelProblemSolverActivity();
          hideModal(settingsModal);
          showScreen(privacyPolicyScreen);
        };
      }
      
      if(backFromPrivacy){
        backFromPrivacy.onclick = function(){
          showScreen(homeScreen);
        };
      }

      // INFINITE SCROLL FOR DAYS - Generate more days when scrolling
      let nextDayNumber = 6;
      const daysContainer = document.getElementById('daysContainer');
      const dailyCheckInStreakKey = 'dailyCheckInStreak';

      function getLocalDayNumber() {
        const now = new Date();
        return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
      }

      function getDailyCheckInStreak() {
        const raw = localStorage.getItem(dailyCheckInStreakKey);
        if (!raw) return { lastDay: null, count: 0, pendingRewards: 0 };
        try {
          const state = JSON.parse(raw);
          if (state && Number.isInteger(state.lastDay) && Number.isInteger(state.count) &&
              state.count >= 0 && state.count < 5 && Number.isInteger(state.pendingRewards) &&
              state.pendingRewards >= 0) return state;
        } catch (error) {
          console.error('Unable to read daily check-in streak:', error);
        }
        console.error('Invalid daily check-in streak data.');
        return null;
      }

      function updateTreasureChests(message) {
        const state = getDailyCheckInStreak();
        const today = getLocalDayNumber();
        const count = state && state.lastDay !== null && today - state.lastDay <= 1 ? state.count : 0;
        document.querySelectorAll('.day-treasure').forEach(function(chest) {
          const button = chest.querySelector('.treasure-chest');
          const status = chest.querySelector('.diamond-points');
          const available = !!state && state.pendingRewards > 0;
          button.disabled = !available;
          button.classList.toggle('pulse', available);
          button.setAttribute('aria-label', available ? 'Claim 1,000 ZP from treasure chest' : 'Treasure chest, reward not yet available');
          status.textContent = message || (state
            ? (available ? 'Tap to claim 1,000 ZP!' : count + '/5 consecutive days for 1,000 ZP')
            : 'Unable to load check-in reward.');
        });
      }

      function recordDailyCheckIn() {
        const state = getDailyCheckInStreak();
        if (!state) return;
        const today = getLocalDayNumber();
        const nextState = DailyCheckInStreak.record(state, today);
        if (nextState === state) return;
        localStorage.setItem(dailyCheckInStreakKey, JSON.stringify(nextState));
        updateTreasureChests();
      }

      if (daysContainer) {
        daysContainer.addEventListener('click', function(event) {
          const button = event.target.closest('.treasure-chest');
          if (!button || !daysContainer.contains(button)) return;
          const state = getDailyCheckInStreak();
          if (!state || state.pendingRewards < 1) {
            updateTreasureChests();
            return;
          }
          state.pendingRewards--;
          localStorage.setItem(dailyCheckInStreakKey, JSON.stringify(state));
          coins = parseInt(localStorage.getItem('coins') || '0', 10) || 0;
          awardCoins(1000);
          updateTreasureChests(state.pendingRewards ? 'Tap to claim another 1,000 ZP!' : '1,000 ZP claimed!');
        });
        updateTreasureChests();
        document.addEventListener('visibilitychange', function() {
          if (!document.hidden) updateTreasureChests();
        });
        window.addEventListener('storage', function(event) {
          if (event.key === dailyCheckInStreakKey) updateTreasureChests();
        });
      }
      
      function generateDaySection(dayNum) {
        const daySection = document.createElement('div');
        daySection.className = 'day-section';
        daySection.innerHTML = `
          <div class="day-title">Day ${dayNum}</div>
          <div class="stars">
            <svg class="daily-star" viewBox="0 0 100 100">
              <!-- Star segments will be generated by JS -->
            </svg>
          </div>
          <div class="coins-row" aria-hidden="true">
            <span class="coin">🪙</span>
            <span>100 ZP</span>
          </div>
        `;
        return daySection;
      }
      
      function generateTreasureWrap() {
        const treasureWrap = document.createElement('div');
        treasureWrap.className = 'treasure-wrap day-treasure';
        treasureWrap.setAttribute('aria-hidden', 'false');
        treasureWrap.innerHTML = `
          <button type="button" class="treasure-chest" disabled aria-label="Treasure chest, reward not yet available">
            <img src="Other%20image/Treasure%20chest.png" alt="" />
          </button>
          <div class="sparkles"></div>
          <div class="diamond-points" aria-live="polite"></div>
        `;
        return treasureWrap;
      }
      
      function generateMoreDays() {
        // Generate 5 more days when scrolling
        for (let i = 0; i < 5; i++) {
          const newDay = generateDaySection(nextDayNumber);
          daysContainer.appendChild(newDay);
          
          // Build star for the new day
          const svg = newDay.querySelector('.daily-star');
          if (svg) {
            buildDailyStar(svg, nextDayNumber - 1);
          }
          
          // Add treasure after every 5 days
          if (nextDayNumber % 5 === 0) {
            const treasure = generateTreasureWrap();
            daysContainer.appendChild(treasure);
          }
          
          nextDayNumber++;
        }
        updateTreasureChests();
      }
      
      // Listen for scroll to generate more days
      let scrollListener = null;
      function setupScrollListener() {
        if (scrollListener) return;
        scrollListener = function() {
          // Check if we've scrolled close to the bottom
          if (homeScreen && daysContainer && homeScreen.style.display !== 'none') {
            // Get the bounding rect of daysContainer
            const containerRect = daysContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If the container bottom is within 600px of the window bottom, generate more days
            if (containerRect.bottom - windowHeight < 600) {
              generateMoreDays();
              starElements = Array.from(document.querySelectorAll('.star-segment'));
              loadStarsFromStorage();
            }
          }
        };
        window.addEventListener('scroll', scrollListener);
      }
      
      // Initialize Zenzy egg page or home screen
      let zenzyStage = localStorage.getItem('zenzyStage');
      let hasShownAdoptReminderThisSession = false;
      const legacyHatched = localStorage.getItem('zenzyEggHatched');
      const legacyEggSequenceStages = ['egg', 'helping', 'adopt_ready', 'ready_collect', 'cracked_ready_hatch', 'adopting', 'hatched'];
      const shouldResetFreshStart = !localStorage.getItem('zenzyName')
        || legacyEggSequenceStages.indexOf(localStorage.getItem('zenzyStage')) >= 0
        || localStorage.getItem('zenzyHomeUnlocked') !== 'true'
        || !localStorage.getItem('zenzyCurrentRoomId')
        || localStorage.getItem('zenzyBackgroundImage') === 'Images/Backgrounds/Junkyard.png';

      if (shouldResetFreshStart) {
        localStorage.setItem('zenzyName', 'Zenzy');
        localStorage.setItem('zenzyStage', 'adopted');
        localStorage.setItem('zenzyHomeUnlocked', 'true');
        localStorage.setItem('zenzyHabitatChanged', 'true');
        localStorage.setItem('zenzyBackgroundImage', 'Images/Backgrounds/Forest%20Background.png');
        localStorage.setItem('zenzyShopViewMode', 'room');
        localStorage.setItem('zenzySpeechOverride', 'Hi! Let’s go on a day out!');
        if (!localStorage.getItem('zenzyCurrentRoomId')) {
          localStorage.setItem('zenzyCurrentRoomId', 'fresh-room');
        }
      }

      if (!localStorage.getItem('zenzyName')) {
        localStorage.setItem('zenzyName', 'Zenzy');
      }
      if (!zenzyStage && legacyHatched) {
        zenzyStage = 'adopted';
        localStorage.setItem('zenzyStage', 'adopted');
      }
      if (!zenzyStage || legacyEggSequenceStages.indexOf(zenzyStage) >= 0) {
        zenzyStage = 'adopted';
        localStorage.setItem('zenzyStage', 'adopted');
        if (localStorage.getItem('zenzyCollectionCount') === null) localStorage.setItem('zenzyCollectionCount', '1');
        if (localStorage.getItem('collectedEggCount') === null) localStorage.setItem('collectedEggCount', '0');
        if (localStorage.getItem('zenzyHomeUnlocked') === null) localStorage.setItem('zenzyHomeUnlocked', 'true');
        if (localStorage.getItem('zenzyHabitatChanged') === null) localStorage.setItem('zenzyHabitatChanged', 'true');
        if (!localStorage.getItem('zenzyBackgroundImage')) localStorage.setItem('zenzyBackgroundImage', 'Images/Backgrounds/Forest%20Background.png');
        if (localStorage.getItem('zenzyShopViewMode') === null) localStorage.setItem('zenzyShopViewMode', 'room');
        localStorage.setItem('zenzySpeechOverride', 'Hi! Let’s go on a day out!');
      }
      if (zenzyStage === 'hatched') {
        zenzyStage = 'adopted';
        localStorage.setItem('zenzyStage', 'adopted');
      }
      if (localStorage.getItem('zenzyHomeUnlocked') === null) {
        localStorage.setItem('zenzyHomeUnlocked', 'true');
      }
      if (!localStorage.getItem('zenzyBackgroundImage')) {
        localStorage.setItem('zenzyBackgroundImage', 'Images/Backgrounds/Forest%20Background.png');
      }
      if (!localStorage.getItem('zenzySpeechOverride')) {
        localStorage.setItem('zenzySpeechOverride', 'Hi! Let’s go on a day out!');
      }

      function setZenzyStage(stage) {
        zenzyStage = stage;
        localStorage.setItem('zenzyStage', stage);
        habitatTapCount = 0;
        if (stage !== 'adopted' && habitatPromptDelayTimer) {
          clearTimeout(habitatPromptDelayTimer);
          habitatPromptDelayTimer = null;
        }
        syncZenzyShopIntroState();
        updateWeeklyMissionButtonState();
      }

      function shouldPromptZenzyAdoption() {
        const currentStage = localStorage.getItem('zenzyStage') || zenzyStage;
        const hasZenzyName = !!(localStorage.getItem('zenzyName') || '').trim();
        return currentStage === 'adopted' && !hasZenzyName;
      }

      function resetZenzyHabitatModalContent() {
        if (zenzyHomeConfirmText) {
          zenzyHomeConfirmText.textContent = `Build Zenzy a room for ${ROOM_BUILD_COST_ZP} ZP?`;
        }
        if (zenzyHomeModalText) {
          zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
        }
      }

      function showZenzyNotEnoughZpModal() {
        if (zenzyHomeModalText) {
          zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
        }
        if (zenzyHomeModal) {
          showModal(zenzyHomeModal);
        }
      }

      function clearHabitatReturnGuidance() {
        localStorage.removeItem('zenzyHabitatGuideActive');
        if (dayOutSectionEl) {
          dayOutSectionEl.classList.remove('habitat-attention');
        }
        if (dayOutButtons && dayOutButtons.length) {
          dayOutButtons.forEach(function(btn) {
            btn.classList.remove('habitat-attention');
          });
        }
        if (zenzyEggHint && zenzyEggHint.textContent === HABITAT_GUIDE_TEXT) {
          zenzyEggHint.textContent = '';
          zenzyEggHint.style.display = 'none';
        }
        if (habitatGuidanceTimer) {
          clearTimeout(habitatGuidanceTimer);
          habitatGuidanceTimer = null;
        }
      }

      function scheduleColdRoomPromptAfterHabitatChange() {
        localStorage.removeItem('zenzyRoomBuildPromptActive');
        if (habitatPromptDelayTimer) {
          clearTimeout(habitatPromptDelayTimer);
        }
        habitatPromptDelayTimer = setTimeout(function() {
          habitatPromptDelayTimer = null;
          if (zenzyStage !== 'adopted' || isZenzyHomeUnlocked()) return;
          const sadIndex = zenzyEmotions.findIndex(function(emotion) {
            return emotion.id === 'sad';
          });
          if (sadIndex >= 0) {
            setZenzyEmotion(sadIndex);
          }
          localStorage.setItem('zenzyRoomBuildPromptActive', 'true');
          localStorage.setItem('zenzySpeechOverride', ROOM_BUILD_COLD_PROMPT);
          if (zenzySpeech) {
            zenzySpeech.textContent = ROOM_BUILD_COLD_PROMPT;
            requestAnimationFrame(updateZenzySpeechBubblePosition);
          }
          if (zenzyEggHint) {
            zenzyEggHint.style.display = 'block';
            zenzyEggHint.style.cursor = 'pointer';
            zenzyEggHint.textContent = ROOM_BUILD_HINT_TEXT;
          }
        }, 10000);
      }

      function showHabitatReturnGuidance(durationMs) {
        const duration = Math.max(0, parseInt(durationMs, 10) || 0);
        localStorage.setItem('zenzyHabitatGuideActive', 'true');
        if (dayOutSectionEl) {
          dayOutSectionEl.classList.remove('collapsed');
          dayOutSectionEl.classList.add('habitat-attention');
        }
        if (zenzyEggHint) {
          zenzyEggHint.style.display = 'block';
          zenzyEggHint.textContent = HABITAT_GUIDE_TEXT;
        }
        if (duration > 0) {
          if (habitatGuidanceTimer) {
            clearTimeout(habitatGuidanceTimer);
          }
          habitatGuidanceTimer = setTimeout(function() {
            clearHabitatReturnGuidance();
            syncZenzyShopIntroState();
          }, duration);
        }
      }

      function isAdoptionSpeechLocked() {
        const hasZenzyName = !!(localStorage.getItem('zenzyName') || '').trim();
        return zenzyStage === 'adopted'
          && hasZenzyName
          && localStorage.getItem('zenzyHabitatChanged') !== 'true'
          && !isZenzyHomeUnlocked();
      }

      function isHabitatThankYouSpeechActive() {
        const until = parseInt(localStorage.getItem('zenzyHabitatThankYouUntil') || '0', 10) || 0;
        return Date.now() < until;
      }

      function activateHabitatThankYouSpeech(durationMs) {
        const duration = typeof durationMs === 'number' ? durationMs : HABITAT_THANK_YOU_DURATION_MS;
        const until = Date.now() + duration;
        localStorage.setItem('zenzyHabitatThankYouUntil', String(until));
        localStorage.setItem('zenzySpeechOverride', HABITAT_THANK_YOU_PROMPT);
        if (zenzySpeech) {
          zenzySpeech.textContent = HABITAT_THANK_YOU_PROMPT;
          requestAnimationFrame(updateZenzySpeechBubblePosition);
        }
        refreshZenzySpeechLock();
      }

      function enforceAdoptionSpeechLock() {
        if (!zenzySpeech) return;
        if (isHabitatThankYouSpeechActive()) {
          if (zenzySpeech.textContent !== HABITAT_THANK_YOU_PROMPT) {
            zenzySpeech.textContent = HABITAT_THANK_YOU_PROMPT;
            localStorage.setItem('zenzySpeechOverride', HABITAT_THANK_YOU_PROMPT);
            requestAnimationFrame(updateZenzySpeechBubblePosition);
          }
          return;
        }
        if (!isAdoptionSpeechLocked()) return;
        if (zenzySpeech.textContent !== ADOPTION_HABITAT_PROMPT) {
          zenzySpeech.textContent = ADOPTION_HABITAT_PROMPT;
          localStorage.setItem('zenzySpeechOverride', ADOPTION_HABITAT_PROMPT);
          requestAnimationFrame(updateZenzySpeechBubblePosition);
        }
      }

      function refreshZenzySpeechLock() {
        if (!zenzySpeech) return;
        const shouldLockSpeech = isAdoptionSpeechLocked() || isHabitatThankYouSpeechActive();
        if (shouldLockSpeech) {
          if (!zenzySpeechLockObserver) {
            zenzySpeechLockObserver = new MutationObserver(function() {
              enforceAdoptionSpeechLock();
            });
            zenzySpeechLockObserver.observe(zenzySpeech, { childList: true, characterData: true, subtree: true });
          }
          enforceAdoptionSpeechLock();
        } else if (zenzySpeechLockObserver) {
          zenzySpeechLockObserver.disconnect();
          zenzySpeechLockObserver = null;
        }
      }

      function markZenzyHabitatChanged() {
        localStorage.setItem('zenzyHabitatChanged', 'true');
        habitatTapCount = 0;
        if (habitatPromptDelayTimer) {
          clearTimeout(habitatPromptDelayTimer);
          habitatPromptDelayTimer = null;
        }
        refreshZenzySpeechLock();
      }

      function shouldPromptZenzyHabitatByTap() {
        return zenzyStage === 'adopted'
          && !isZenzyHomeUnlocked()
          && localStorage.getItem('zenzyHabitatChanged') !== 'true';
      }

      function maybePromptZenzyHabitatChange(speechLine) {
        return;
      }

      function setShopInteractivityEnabled(enabled) {
        const shopSections = document.querySelectorAll('.shop-section');
        const shopActions = document.querySelectorAll('.shop-action');

        shopSections.forEach(function(section) {
          if (enabled) {
            section.classList.remove('disabled');
          } else {
            section.classList.add('disabled');
          }
        });

        shopActions.forEach(function(action) {
          if (enabled) {
            action.classList.remove('disabled');
            action.removeAttribute('disabled');
          } else {
            action.classList.add('disabled');
            action.setAttribute('disabled', 'disabled');
          }
        });
      }

      function maybeShowAdoptReminder(delayMs) {
        return;
      }

      function sanitizeFirstOpenZenzyState() {
        const hasSanitized = localStorage.getItem('zenzyFirstOpenSanitized') === 'true';
        if (hasSanitized) return;

        const shouldSanitize = zenzyStage === 'egg' || zenzyStage === 'adopt_ready';
        if (!shouldSanitize) {
          localStorage.setItem('zenzyFirstOpenSanitized', 'true');
          return;
        }

        localStorage.removeItem('zenzyAvatarPosition');
        localStorage.removeItem('zenzyEggPosition');
        setInventoryCounts(0, 0, { refreshShop: false });
        localStorage.setItem('zenzyFirstOpenSanitized', 'true');
      }

      function syncZenzyShopIntroState() {
        const isAdopted = zenzyStage === 'adopted';
        const hasZenzyName = !!(localStorage.getItem('zenzyName') || '').trim();
        const isAwaitingAdoption = isAdopted && !hasZenzyName;
        const isEggLike = zenzyStage === 'egg' || zenzyStage === 'helping' || zenzyStage === 'adopt_ready';
        const isReadyCollect = zenzyStage === 'ready_collect';
        const isCrackedReadyHatch = zenzyStage === 'cracked_ready_hatch';
        const showTakeHomeSpeech = isAdopted && !isZenzyHomeUnlocked();
        const showZenzySpeechBubble = isAdopted;
        const showDecorateHint = isAdopted && isZenzyHomeUnlocked() && localStorage.getItem('zenzyDecorateHintActive') === 'true';
        const isRoomBuildPromptActive = localStorage.getItem('zenzyRoomBuildPromptActive') === 'true';
        const shouldFlashHabitatSection = shouldPromptZenzyHabitatByTap();

        if (dayOutSectionEl) {
          if (shouldFlashHabitatSection) {
            dayOutSectionEl.classList.add('habitat-attention');
          } else {
            dayOutSectionEl.classList.remove('habitat-attention');
          }
        }

        if (healthStatsContainer) {
          healthStatsContainer.style.display = isAdopted ? 'block' : 'none';
        }

        if (zenzyIntroOverlay) {
          zenzyIntroOverlay.style.display = 'none';
          zenzyIntroOverlay.setAttribute('aria-hidden', 'true');
        }

        if (zenzyEggHint) {
          zenzyEggHint.style.cursor = 'default';
          const isGuidingHabitatReturn = localStorage.getItem('zenzyHabitatGuideActive') === 'true';
          if (isGuidingHabitatReturn && showTakeHomeSpeech) {
            zenzyEggHint.style.display = 'block';
            zenzyEggHint.textContent = HABITAT_GUIDE_TEXT;
          } else if (isRoomBuildPromptActive && showTakeHomeSpeech) {
            zenzyEggHint.style.display = 'block';
            zenzyEggHint.style.cursor = 'default';
            zenzyEggHint.textContent = ROOM_BUILD_HINT_TEXT;
          } else if (showDecorateHint) {
            zenzyEggHint.style.display = 'block';
            zenzyEggHint.style.cursor = 'default';
            zenzyEggHint.textContent = ZENZY_DECORATE_HINT_TEXT;
          } else 
          if ((isAdopted && !isAwaitingAdoption) || zenzyStage === 'hatching') {
            if (shouldPromptZenzyHabitatByTap()) {
              zenzyEggHint.style.display = 'block';
              zenzyEggHint.style.cursor = 'pointer';
              zenzyEggHint.textContent = HABITAT_GUIDE_TEXT;
            } else {
              zenzyEggHint.style.display = 'none';
            }
          } else {
            zenzyEggHint.style.display = 'block';
            if (isAwaitingAdoption) {
              zenzyEggHint.textContent = ZENZY_ADOPT_HINT_TEXT;
              zenzyEggHint.style.cursor = 'pointer';
            } else if (isCrackedReadyHatch) {
              zenzyEggHint.textContent = 'Tap the egg 3 times to help the zenzy hatch';
            } else {
              zenzyEggHint.textContent = 'Tap the egg 3 times to collect it';
            }
          }
        }

        if (zenzyTopStatus) {
          const showTopHatchingMessage = isCrackedReadyHatch;
          zenzyTopStatus.style.display = showTopHatchingMessage ? 'block' : 'none';
          if (showTopHatchingMessage) {
            zenzyTopStatus.textContent = 'Look, the zenzy egg is hatching!';
          }
        }

        if (zenzySpeechBubbleContainer) {
          zenzySpeechBubbleContainer.style.display = showZenzySpeechBubble ? 'flex' : 'none';
        }
        if (showZenzySpeechBubble && zenzySpeech) {
          const speechOverride = isRoomBuildPromptActive
            ? ROOM_BUILD_COLD_PROMPT
            : (isHabitatThankYouSpeechActive()
            ? HABITAT_THANK_YOU_PROMPT
            : (isAdoptionSpeechLocked() ? ADOPTION_HABITAT_PROMPT : localStorage.getItem('zenzySpeechOverride')));
          const defaultSpeech = isAwaitingAdoption ? HATCHED_GREETING_PROMPT : ADOPTION_HABITAT_PROMPT;
          const speechLine = speechOverride || defaultSpeech;
          zenzySpeech.textContent = speechLine;
          if (isHabitatThankYouSpeechActive()) {
            localStorage.setItem('zenzySpeechOverride', HABITAT_THANK_YOU_PROMPT);
          } else if (isAdoptionSpeechLocked()) {
            localStorage.setItem('zenzySpeechOverride', ADOPTION_HABITAT_PROMPT);
            if (!localStorage.getItem('zenzyAdoptionSpeechShownAt')) {
              localStorage.setItem('zenzyAdoptionSpeechShownAt', String(Date.now()));
            }
          }
          requestAnimationFrame(updateZenzySpeechBubblePosition);
          maybePromptZenzyHabitatChange(speechLine);
        }

        refreshZenzySpeechLock();

        setShopInteractivityEnabled(isAdopted);

        if (!isAdopted && zenzyAvatar) {
          zenzyAvatar.src = isCrackedReadyHatch ? 'Images/Other%20image/Cracking%20egg%201.png' : 'Images/Other%20image/Egg.png';
          zenzyAvatar.alt = isCrackedReadyHatch ? 'Cracked egg Zenzy' : 'Zenzy Egg';
          zenzyAvatar.style.left = '50%';
          zenzyAvatar.style.bottom = '0px';
          zenzyAvatar.style.transform = 'translateX(-50%)';
        }
        enforceJunkyardEggLowerPosition();
      }

      function isZenzyHomeUnlocked() {
        return localStorage.getItem('zenzyHomeUnlocked') === 'true';
      }

      function setZenzyBackgroundImage(src) {
        if (zenzyBackground) {
          zenzyBackground.src = src;
        }
        localStorage.setItem('zenzyBackgroundImage', src);
        const lowerSrc = String(src || '').toLowerCase();
        if (lowerSrc.indexOf('forest') >= 0) {
          localStorage.setItem('zenzySelectedHabitat', 'forest');
        } else if (lowerSrc.indexOf('park') >= 0) {
          localStorage.setItem('zenzySelectedHabitat', 'park');
        } else if (lowerSrc.indexOf('beach') >= 0) {
          localStorage.setItem('zenzySelectedHabitat', 'beach');
        } else if (lowerSrc.indexOf('mountain') >= 0) {
          localStorage.setItem('zenzySelectedHabitat', 'mountain');
        } else if (lowerSrc.indexOf('snowy') >= 0) {
          localStorage.setItem('zenzySelectedHabitat', 'snowy');
        } else {
          localStorage.removeItem('zenzySelectedHabitat');
        }
      }

      function updateSelectedHabitatButtonState() {
        if (!dayOutButtons || !dayOutButtons.length) return;
        const savedBg = (localStorage.getItem('zenzyBackgroundImage') || '').toLowerCase();
        let selectedHabitat = localStorage.getItem('zenzySelectedHabitat') || '';
        if (!selectedHabitat) {
          if (savedBg.indexOf('forest') >= 0) {
            selectedHabitat = 'forest';
          } else if (savedBg.indexOf('park') >= 0) {
            selectedHabitat = 'park';
          } else if (savedBg.indexOf('beach') >= 0) {
            selectedHabitat = 'beach';
          } else if (savedBg.indexOf('mountain') >= 0) {
            selectedHabitat = 'mountain';
          } else if (savedBg.indexOf('snowy') >= 0) {
            selectedHabitat = 'snowy';
          }
        }

        dayOutButtons.forEach(function(btn) {
          btn.classList.remove('selected-habitat');
          if (selectedHabitat && btn.dataset.location === selectedHabitat) {
            btn.classList.add('selected-habitat');
          }
        });
      }

      function enforceJunkyardEggLowerPosition() {
        if (!zenzyAvatar) return;
        const currentBg = (localStorage.getItem('zenzyBackgroundImage') || '').toLowerCase();
        const isJunkyardBackground = currentBg.indexOf('junkyard') >= 0;
        const isEggStage = zenzyStage !== 'adopted';
        if (!isJunkyardBackground || !isEggStage) return;

        localStorage.removeItem('zenzyAvatarPosition');
        zenzyAvatar.style.position = 'absolute';
        zenzyAvatar.style.left = '50%';
        zenzyAvatar.style.bottom = '0px';
        zenzyAvatar.style.transform = 'translateX(-50%)';
      }

      function showHomeScreen() {
        showScreen(homeScreen);
        setupScrollListener();
      }

      function updateZenzyNameDisplays() {
        const nameValue = localStorage.getItem('zenzyName') || '';
        if (petZenzyName) {
          petZenzyName.textContent = nameValue ? `Zenzy: ${nameValue}` : '';
        }
      }

      function updateHomeZenzyVisibility() {
        const isAdopted = zenzyStage === 'adopted';
        if (homeZenzyContainer) {
          homeZenzyContainer.style.display = isAdopted ? 'flex' : 'none';
        }
      }

      const newZenzyImage = 'New%20zenzy.png';

      const zenzyEmotions = [
        {
          id: 'normal',
          img: newZenzyImage,
          lines: ['I feel calm today.', 'I feel okay right now.', 'I feel steady and safe.']
        },
        {
          id: 'angry',
          img: newZenzyImage,
          lines: ['I feel angry right now.', 'I feel frustrated.', 'I need a calm moment.']
        },
        {
          id: 'sad',
          img: newZenzyImage,
          lines: ['I feel sad today.', 'I feel a bit down.', 'I need a hug.']
        },
        {
          id: 'tired',
          img: newZenzyImage,
          lines: ['I feel tired.', 'I need some rest.', 'My energy is low today.']
        }
      ];

      const eggHuntBackgrounds = [
        'Images/Backgrounds/Junkyard.png',
        'Images/Backgrounds/Forest%20Background.png',
        'Images/Backgrounds/Park%20background.png',
        'Images/Backgrounds/BEACH%20BACKGROUND.png',
        'Images/Backgrounds/MOUNTAIN%20BACKGROUND.png',
        'Images/Backgrounds/SNOWY%20BACKGROUND.png'
      ];

      let zenzyEmotionIndex = 0;

      function getEvolvedSet() {
        if (archiveEggAndEvolveFeatures) return null;
        const raw = localStorage.getItem('zenzyEvolvedSet');
        if (!raw) return null;
        try {
          const data = JSON.parse(raw);
          if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
          Object.keys(data).forEach(function(state) {
            if (typeof data[state] === 'string') {
              data[state] = newZenzyImage;
            }
          });
          return data;
        } catch (e) {
          return null;
        }
      }

      function getZenzyEvolvedStateImage(stateKey, fallbackImage) {
        const evolvedSet = getEvolvedSet();
        if (evolvedSet && evolvedSet[stateKey]) {
          return evolvedSet[stateKey];
        }
        return fallbackImage;
      }

      function setCareModalZenzyImage(imageEl, imageSrc, altText) {
        if (!imageEl || !imageSrc) return;
        imageEl.src = imageSrc;
        if (altText) {
          imageEl.alt = altText;
        }
      }

      function resolveZenzyEmotion(emotionRef) {
        if (!Array.isArray(zenzyEmotions) || !zenzyEmotions.length) {
          return { id: 'normal' };
        }

        if (typeof emotionRef === 'string' && emotionRef) {
          const emotionById = zenzyEmotions.find(function(emotion) {
            return emotion.id === emotionRef;
          });
          if (emotionById) {
            return emotionById;
          }

          const parsedIndex = parseInt(emotionRef, 10);
          if (Number.isFinite(parsedIndex) && zenzyEmotions[parsedIndex]) {
            return zenzyEmotions[parsedIndex];
          }
        }

        if (typeof emotionRef === 'number' && Number.isFinite(emotionRef) && zenzyEmotions[emotionRef]) {
          return zenzyEmotions[emotionRef];
        }

        return zenzyEmotions.find(function(emotion) {
          return emotion.id === 'normal';
        }) || zenzyEmotions[0];
      }

      function createRandomEvolvedSet() {
        if (archiveEggAndEvolveFeatures) return null;
        const evolvedSet = {
          normal: newZenzyImage,
          angry: newZenzyImage,
          sad: newZenzyImage,
          tired: newZenzyImage,
          sleep: newZenzyImage,
          eating: newZenzyImage,
          drinking: newZenzyImage,
          playing: newZenzyImage,
          art: newZenzyImage,
          reading: newZenzyImage,
          pc: newZenzyImage,
          celebration: newZenzyImage
        };

        return evolvedSet;
      }

      function getEmotionImage(emotion) {
        const evolvedSet = getEvolvedSet();
        if (evolvedSet && evolvedSet[emotion.id]) {
          return evolvedSet[emotion.id];
        }
        return emotion.img;
      }

      function setShopMessage(message, isError) {
        if (!shopMsg) return;
        shopMsg.textContent = message || '';
        shopMsg.style.color = isError ? '#ff6b6b' : '#1fa7a7';
      }

      function showInsufficientZpModal() {
        showModal(insufficientZpModal);
      }

      if (goToCheckinBtn) {
        goToCheckinBtn.onclick = function() {
          hideModal(insufficientZpModal);
          showScreen(checkinScreen);
        };
      }

      let activeMobileDrag = null;
      let mobileDragListenersBound = false;
      let activePointerDrag = null;
      const zenzyAppearanceStorageKey = 'zenzyAppearanceState';
      function getZenzyAppearance(){
        const defaults = { color: 'sky', hat: '', owned: [] };
        try {
          const saved = JSON.parse(localStorage.getItem(zenzyAppearanceStorageKey) || '{}');
          const state = Object.assign({}, defaults, saved || {});
          if (!Array.isArray(state.owned)) state.owned = [];
          return state;
        } catch (error) {
          return defaults;
        }
      }

      function saveZenzyAppearance(state){
        localStorage.setItem(zenzyAppearanceStorageKey, JSON.stringify(state));
      }

      function updateZenzyAppearancePosition(){
        const inPetShop = !!(petShop && getComputedStyle(petShop).display !== 'none');
        const updateFacePosition = function(image, face){
          if(!image || !face) return;
          const rect = image.getBoundingClientRect();
          const visible = getComputedStyle(image).display !== 'none' && rect.width > 0 && rect.height > 0 && (image === zenzyAvatar ? inPetShop : true);
          face.style.display = visible ? 'block' : 'none';
          face.style.left = (rect.left + rect.width * 0.5467) + 'px';
          face.style.top = (rect.top + rect.height * 0.5241) + 'px';
          face.style.width = Math.max(22, rect.width * 0.12) + 'px';
          face.style.height = Math.max(14, rect.height * 0.08) + 'px';
          face.style.fontSize = Math.max(12, rect.width * 0.1) + 'px';
          face.style.zIndex = image.classList.contains('celebration-zenzy') ? '92' : '31';
          if(image === zenzyAvatar){
            zenzyAvatarHat.style.display = visible ? 'block' : 'none';
            zenzyAvatarHat.style.left = (rect.left + rect.width / 2) + 'px';
            zenzyAvatarHat.style.top = (rect.top + rect.height * 0.04) + 'px';
            zenzyAvatarHat.style.fontSize = Math.max(22, rect.width * 0.34) + 'px';
          }
        };
        updateFacePosition(zenzyAvatar, zenzyAvatarFace);
        zenzyImageFaces.forEach(function(face, image){ updateFacePosition(image, face); });
      }

      function renderZenzyAppearance(){
        if (!zenzyAvatar) return;
        const state = getZenzyAppearance();
        const supportedMoods = ['happy', 'sad', 'angry', 'tired', 'worried', 'scared', 'embarrassed', 'calm', 'jealous', 'normal'];
        const petShopIsVisible = !!(petShop && getComputedStyle(petShop).display !== 'none');
        const savedMood = (localStorage.getItem('zenzyEmotionId') || localStorage.getItem('zenzyMood') || 'normal').toLowerCase();
        const petMood = supportedMoods.indexOf(savedMood) !== -1 ? savedMood : 'normal';
        zenzyAvatarFace.className = 'zenzy-avatar-face mood-' + (petShopIsVisible ? petMood : 'happy');
        zenzyAvatarHat.textContent = state.hat || '';
        const selectedColor = document.querySelector('[data-appearance-color="' + state.color + '"]');
        const tint = selectedColor && selectedColor.dataset.filter !== 'none' ? selectedColor.dataset.filter + ' ' : '';
        zenzyAvatar.style.filter = tint + 'drop-shadow(0 8px 12px rgba(0,0,0,0.2))';
        appearanceOptions.forEach(function(button){
          const type = button.hasAttribute('data-appearance-color') ? 'color' : 'hat';
          const value = type === 'color' ? button.dataset.appearanceColor : button.dataset.appearanceHat;
          const owned = state.owned.indexOf(type + ':' + value) !== -1;
          const selected = state[type] === value;
          const textNode = Array.from(button.childNodes).reverse().find(function(node){ return node.nodeType === Node.TEXT_NODE; });
          if(textNode){
            const label = button.dataset.label || textNode.nodeValue.trim().replace(/\s*\(50 ZP\)$/, '');
            button.dataset.label = label;
            textNode.nodeValue = (button.children.length ? ' ' : '') + label + (owned ? ' (Owned)' : ' (50 ZP)');
          }
          button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });
        zenzyImageFaces.forEach(function(face){
          face.className = 'zenzy-avatar-face mood-happy';
        });
        requestAnimationFrame(updateZenzyAppearancePosition);
      }

      appearanceOptions.forEach(function(button){
        button.addEventListener('click', function(){
          if(zenzyStage !== 'adopted'){
            setShopMessage('Adopt Zenzy before choosing a look.', true);
            return;
          }
          const state = getZenzyAppearance();
          const type = button.hasAttribute('data-appearance-color') ? 'color' : 'hat';
          const value = type === 'color' ? button.dataset.appearanceColor : button.dataset.appearanceHat;
          const key = type + ':' + value;
          if(state.owned.indexOf(key) === -1){
            if(!spendCoins(50)){
              showInsufficientZpModal();
              return;
            }
            state.owned.push(key);
          }
          state[type] = value;
          saveZenzyAppearance(state);
          renderZenzyAppearance();
          setShopMessage('Zenzy’s new look is ready!');
        });
      });

      if(removeZenzyHatBtn){
        removeZenzyHatBtn.addEventListener('click', function(){
          const state = getZenzyAppearance();
          state.hat = '';
          saveZenzyAppearance(state);
          renderZenzyAppearance();
        });
      }

      function normalizeZenzyImageSource(source){
        try {
          return decodeURIComponent(String(source || '')).toLowerCase();
        } catch (error) {
          return String(source || '').toLowerCase();
        }
      }

      function replaceOldZenzyArtwork(){
        document.querySelectorAll('img').forEach(function(image){
          const source = normalizeZenzyImageSource(image.getAttribute('src'));
          if(source.indexOf('images/zenzy baby/') !== -1 && source.indexOf('images/new zenzy.png') === -1){
            image.setAttribute('src', newZenzyImage);
          }
        });
        document.querySelectorAll('img').forEach(function(image){
          if(normalizeZenzyImageSource(image.getAttribute('src')).indexOf('images/new zenzy.png') === -1) return;
          if(image.dataset.facePositionBound !== 'true'){
            image.dataset.facePositionBound = 'true';
            image.addEventListener('load', function(){ requestAnimationFrame(updateZenzyAppearancePosition); });
          }
          if(image === zenzyAvatar || zenzyImageFaces.has(image)) return;
          const face = document.createElement('span');
          face.className = 'zenzy-avatar-face mood-happy';
          face.setAttribute('aria-hidden', 'true');
          face.innerHTML = '<span class="zenzy-face-mouth"></span>';
          document.body.appendChild(face);
          zenzyImageFaces.set(image, face);
        });
      }

      function ensureZenzyImageFaces(){
        document.querySelectorAll('img').forEach(function(image){
          if(normalizeZenzyImageSource(image.getAttribute('src')).indexOf('images/new zenzy.png') === -1) return;
          if(image.dataset.facePositionBound !== 'true'){
            image.dataset.facePositionBound = 'true';
            image.addEventListener('load', function(){ requestAnimationFrame(updateZenzyAppearancePosition); });
          }
          if(image === zenzyAvatar || zenzyImageFaces.has(image)) return;
          const face = document.createElement('span');
          face.className = 'zenzy-avatar-face mood-happy';
          face.setAttribute('aria-hidden', 'true');
          face.innerHTML = '<span class="zenzy-face-mouth"></span>';
          document.body.appendChild(face);
          zenzyImageFaces.set(image, face);
        });
      }

      replaceOldZenzyArtwork();
      ensureZenzyImageFaces();
      new MutationObserver(function(records){
        let avatarChanged = false;
        let anotherImageChanged = false;
        records.forEach(function(record){
          const image = record.target;
          if(image.tagName !== 'IMG') return;
          const source = image.getAttribute('src') || '';
          const normalizedSource = normalizeZenzyImageSource(source);
          if(normalizedSource.indexOf('images/zenzy baby/') !== -1 && normalizedSource.indexOf('images/new zenzy.png') === -1){
            image.setAttribute('src', newZenzyImage);
          }
          if(normalizedSource.indexOf('images/new zenzy.png') !== -1 && image !== zenzyAvatar && !zenzyImageFaces.has(image)) anotherImageChanged = true;
          if(image === zenzyAvatar) avatarChanged = true;
        });
        if(anotherImageChanged) ensureZenzyImageFaces();
        if(avatarChanged) renderZenzyAppearance();
      }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['src'] });
      window.addEventListener('resize', updateZenzyAppearancePosition);
      window.addEventListener('resize', updateZenzySpeechBubblePosition);
      window.addEventListener('scroll', updateZenzyAppearancePosition, true);
      document.addEventListener('dragover', function(){ requestAnimationFrame(updateZenzyAppearancePosition); });
      document.addEventListener('touchmove', function(){ requestAnimationFrame(updateZenzyAppearancePosition); }, { passive: true });
      document.addEventListener('drop', function(){ requestAnimationFrame(updateZenzyAppearancePosition); });
      renderZenzyAppearance();

      function getZenzyLayoutStorageSuffix() {
        const roomScoped = isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room';
        if (!roomScoped) return '__global';
        const roomId = getCurrentZenzyRoomId() || 'room-1';
        return '__' + roomId;
      }

      function getZenzyToyPositionsKey() {
        return 'zenzyToyPositions' + getZenzyLayoutStorageSuffix();
      }

      function getZenzyAvatarPositionKey() {
        return 'zenzyAvatarPosition' + getZenzyLayoutStorageSuffix();
      }

      function getStageDropPoint(clientX, clientY, dragMeta) {
        if (!zenzyStageEl) return { left: 20, bottom: 0 };
        const rect = zenzyStageEl.getBoundingClientRect();
        const wallWidth = 20;
        const dragWidth = Math.max(0, parseFloat((dragMeta && dragMeta.width) || 0) || 0);
        const dragHeight = Math.max(0, parseFloat((dragMeta && dragMeta.height) || 0) || 0);
        const centerAnchor = !!(dragMeta && dragMeta.centerAnchor);

        const pointerLocalX = clientX - rect.left;
        const pointerLocalY = clientY - rect.top;

        const dragOffsetX = parseFloat((dragMeta && dragMeta.offsetX) || 0) || 0;
        const dragOffsetY = parseFloat((dragMeta && dragMeta.offsetY) || 0) || 0;
        const left = centerAnchor ? pointerLocalX : (pointerLocalX - dragOffsetX);
        const rawTop = pointerLocalY - (centerAnchor ? dragHeight / 2 : dragOffsetY);
        const rawBottom = rect.height - (rawTop + dragHeight);

        const minLeft = centerAnchor ? (wallWidth + (dragWidth / 2)) : wallWidth;
        const maxLeft = centerAnchor
          ? Math.max(minLeft, rect.width - wallWidth - (dragWidth / 2))
          : Math.max(minLeft, rect.width - wallWidth - dragWidth);
        const clampedLeft = Math.max(minLeft, Math.min(left, maxLeft));

        const minBottom = 0;
        const floorHeight = rect.height * 0.4;
        const maxBottom = dragMeta && dragMeta.type === 'toy'
          ? Math.max(minBottom, floorHeight - dragHeight)
          : Math.max(minBottom, rect.height - dragHeight);
        const bottom = dragMeta && dragMeta.type === 'avatar'
          ? 0
          : Math.max(0, Math.min(rawBottom, maxBottom));

        return {
          left: Math.round(clampedLeft),
          bottom: Math.round(bottom)
        };
      }

      function clampZenzyStageX(clientX) {
        if (!zenzyStageEl) return 0;
        const rect = zenzyStageEl.getBoundingClientRect();
        const wallWidth = 20;
        const minX = wallWidth;
        const maxX = Math.max(minX, rect.width - wallWidth);
        const rawX = clientX - rect.left;
        return Math.max(minX, Math.min(rawX, maxX));
      }

      function bindMobileZenzyDragListeners() {
        if (mobileDragListenersBound) return;
        mobileDragListenersBound = true;

        document.addEventListener('touchmove', function(e){
          if (!activeMobileDrag || !zenzyStageEl) return;
          if (e.cancelable) e.preventDefault();
          const touch = e.touches && e.touches[0];
          if (!touch) return;
          const point = getStageDropPoint(touch.clientX, touch.clientY, activeMobileDrag);

          if ((activeMobileDrag.type === 'toy' || activeMobileDrag.type === 'avatar') && activeMobileDrag.element) {
            activeMobileDrag.element.style.position = 'absolute';
            activeMobileDrag.element.style.left = point.left + 'px';
            activeMobileDrag.element.style.bottom = point.bottom + 'px';
            if (activeMobileDrag.type === 'avatar') {
              activeMobileDrag.element.style.transform = 'translateX(-50%)';
            }
          }
        }, { passive: false });

        function endMobileDrag() {
          if (!activeMobileDrag) return;

          if (activeMobileDrag.type === 'toy' && (activeMobileDrag.toyKey || activeMobileDrag.toy)) {
            let positions = {};
            try { positions = JSON.parse(localStorage.getItem(getZenzyToyPositionsKey()) || '{}'); } catch (err) { positions = {}; }
            const movingToyKey = activeMobileDrag.toyKey || activeMobileDrag.toy;
            positions[movingToyKey] = {
              left: (activeMobileDrag.element ? activeMobileDrag.element.style.left : '20px') || '20px',
              bottom: (activeMobileDrag.element ? activeMobileDrag.element.style.bottom : '0px') || '0px'
            };
            localStorage.setItem(getZenzyToyPositionsKey(), JSON.stringify(positions));
          }

          if (activeMobileDrag.type === 'avatar' && zenzyAvatar) {
            const avatarPosition = {
              left: zenzyAvatar.style.left || '50%',
              bottom: '0px'
            };
            localStorage.setItem(getZenzyAvatarPositionKey(), JSON.stringify(avatarPosition));
            zenzyAvatar.style.opacity = '1';
            requestAnimationFrame(updateZenzySpeechBubblePosition);
          }

          if (activeMobileDrag.element) activeMobileDrag.element.classList.remove('dragging');

          activeMobileDrag = null;
        }

        document.addEventListener('touchend', endMobileDrag);
        document.addEventListener('touchcancel', endMobileDrag);
      }

      function renderZenzyToys() {
        if (!zenzyToys) return;
        bindMobileZenzyDragListeners();
        let toys = [];
        try { toys = JSON.parse(localStorage.getItem('zenzyToys') || '[]'); } catch (err) { toys = []; }
        const toyIcons = {
          ball: { emoji: '⚽', className: 'ball', img: null },
          teddy: { emoji: '🧸', className: 'teddy', img: null },
          bed: { emoji: '🛏️', className: 'bed', img: 'Furniture/Camo%20bed.png' },
          'princess-bed': { emoji: '👑', className: 'princess-bed', img: 'Furniture/Princess%20Bed.png' },
          'yellow-bed': { emoji: '🌼', className: 'yellow-bed', img: 'Furniture/Yellow%20Bed.png' },
          'cloud-sofa': { emoji: '☁️', className: 'cloud-sofa', img: 'Furniture/cloud-sofa.svg' },
          'star-bookshelf': { emoji: '⭐', className: 'star-bookshelf', img: 'Furniture/star-bookshelf.svg' },
          'rainbow-lamp': { emoji: '🌈', className: 'rainbow-lamp', img: 'Furniture/rainbow-lamp.svg' },
          'cozy-desk': { emoji: '🪑', className: 'cozy-desk', img: 'Furniture/cozy-desk.svg' },
          'plant-stand': { emoji: '🪴', className: 'plant-stand', img: 'Furniture/plant-stand.svg' },
          computer: { emoji: '💻', className: 'computer', img: 'Toys/PC.png' },
          pc: { emoji: '💻', className: 'pc', img: 'Toys/PC.png' },
          books: { emoji: '📚', className: 'books', img: 'Toys/books.png' },
          'art-supplies': { emoji: '🎨', className: 'art-supplies', img: 'Toys/Art%20supplies.png' }
        };

        function getDefaultToyPosition(toyName, duplicateIndex) {
          const variant = duplicateIndex || 0;
          const presets = {
            bed: { left: '7%', bottom: '8px' },
            'princess-bed': { left: '8%', bottom: '8px' },
            'yellow-bed': { left: '9%', bottom: '8px' },
            'cloud-sofa': { left: '66%', bottom: '10px' },
            'star-bookshelf': { left: '5%', bottom: '96px' },
            'rainbow-lamp': { left: '78%', bottom: '92px' },
            'cozy-desk': { left: '58%', bottom: '12px' },
            'plant-stand': { left: '23%', bottom: '82px' },
            computer: { left: '62%', bottom: '84px' },
            pc: { left: '62%', bottom: '84px' },
            books: { left: '14%', bottom: '70px' },
            'art-supplies': { left: '70%', bottom: '72px' },
            ball: { left: '44%', bottom: '8px' },
            teddy: { left: '35%', bottom: '10px' },
            blocks: { left: '52%', bottom: '8px' }
          };

          const fallback = {
            left: (30 + ((variant % 6) * 56)) + 'px',
            bottom: (6 + (Math.floor(variant / 6) * 10)) + 'px'
          };

          const preset = presets[toyName] || fallback;
          const horizontalNudge = variant * 24;
          const verticalNudge = Math.min(variant * 12, 48);

          if (preset.left && preset.left.indexOf('%') !== -1) {
            return {
              left: 'calc(' + preset.left + ' + ' + horizontalNudge + 'px)',
              bottom: 'calc(' + preset.bottom + ' + ' + verticalNudge + 'px)'
            };
          }

          return {
            left: (parseFloat(preset.left) + horizontalNudge) + 'px',
            bottom: (parseFloat(preset.bottom) + verticalNudge) + 'px'
          };
        }
        
        // Get saved positions
        let positions = {};
        try { positions = JSON.parse(localStorage.getItem(getZenzyToyPositionsKey()) || '{}'); } catch (err) { positions = {}; }
        if (!Object.keys(positions).length) {
          try { positions = JSON.parse(localStorage.getItem('zenzyToyPositions') || '{}'); } catch (err) { positions = {}; }
        }
        
        zenzyToys.innerHTML = '';
        const placedToyCounts = {};
        toys.forEach(function(toy, index) {
          const data = toyIcons[toy];
          if (!data) return;
          const duplicateIndex = placedToyCounts[toy] || 0;
          placedToyCounts[toy] = duplicateIndex + 1;
          const toyKey = toy + '__' + index;
          const span = document.createElement('span');
          span.className = `zenzy-toy ${data.className}`;
          span.classList.add('drag-handle-target');
          
          // Use image if available, otherwise use emoji
          if (data.img) {
            const img = document.createElement('img');
            img.src = data.img;
            img.alt = toy;
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.pointerEvents = 'none';
            span.appendChild(img);
          } else {
            span.textContent = data.emoji;
          }
          
          span.setAttribute('draggable', 'true');
          span.dataset.toy = toy;
          span.dataset.toyKey = toyKey;
          
          // Apply saved position
          const savedPosition = positions[toyKey] || positions[toy];
          span.style.position = 'absolute';
          if(savedPosition && savedPosition.left){
            span.style.left = savedPosition.left;
            span.style.bottom = savedPosition.bottom || '0px';
          } else {
            const defaultPosition = getDefaultToyPosition(toy, duplicateIndex);
            span.style.left = defaultPosition.left;
            span.style.bottom = defaultPosition.bottom;
          }
          
          // Drag start
          span.addEventListener('dragstart', function(e){
            const spanRect = span.getBoundingClientRect();
            const stageRect = zenzyStageEl ? zenzyStageEl.getBoundingClientRect() : null;
            const fallbackClientX = stageRect ? (spanRect.left + Math.min(spanRect.width / 2, Math.max(0, spanRect.width - 1))) : spanRect.left;
            const fallbackClientY = stageRect ? (spanRect.top + Math.min(spanRect.height / 2, Math.max(0, spanRect.height - 1))) : spanRect.top;
            const clientX = Number.isFinite(e.clientX) && e.clientX > 0 ? e.clientX : fallbackClientX;
            const clientY = Number.isFinite(e.clientY) && e.clientY > 0 ? e.clientY : fallbackClientY;

            activePointerDrag = {
              type: 'toy',
              toy: toy,
              toyKey: toyKey,
              element: span,
              width: spanRect.width,
              height: spanRect.height,
              offsetX: Math.max(0, clientX - spanRect.left),
              offsetY: Math.max(0, clientY - spanRect.top),
              centerAnchor: false
            };
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', toyKey);
            span.classList.add('dragging');
          });

          span.addEventListener('touchstart', function(e){
            if (e.cancelable) e.preventDefault();
            const touch = e.touches && e.touches[0];
            const spanRect = span.getBoundingClientRect();
            activeMobileDrag = {
              type: 'toy',
              toy: toy,
              toyKey: toyKey,
              element: span,
              width: spanRect.width,
              height: spanRect.height,
              offsetX: touch ? Math.max(0, touch.clientX - spanRect.left) : (spanRect.width / 2),
              offsetY: touch ? Math.max(0, touch.clientY - spanRect.top) : (spanRect.height / 2),
              centerAnchor: false
            };
          }, { passive: false });
          
          // Drag end
          span.addEventListener('dragend', function(e){
            span.classList.remove('dragging');
            activePointerDrag = null;
          });
          
          // Double-click to delete with confirmation
          span.addEventListener('dblclick', function(e){
            e.preventDefault();
            const confirmDelete = confirm(`Delete ${toy}? This cannot be undone.`);
            if(confirmDelete){
              // Remove from toys array
              if(index > -1){
                toys.splice(index, 1);
                localStorage.setItem('zenzyToys', JSON.stringify(toys));
              }
              // Remove position
              delete positions[toyKey];
              delete positions[toy];
              localStorage.setItem(getZenzyToyPositionsKey(), JSON.stringify(positions));
              // Re-render
              renderZenzyToys();
              setShopMessage('Item deleted!');
            }
          });
          
          zenzyToys.appendChild(span);
          requestAnimationFrame(function(){
            if (!zenzyStageEl || !span.isConnected) return;
            const stageRect = zenzyStageEl.getBoundingClientRect();
            const spanRect = span.getBoundingClientRect();
            if (spanRect.top >= stageRect.bottom - stageRect.height * 0.4) return;
            span.style.bottom = Math.max(0, stageRect.height * 0.4 - spanRect.height) + 'px';
            positions[toyKey] = { left: span.style.left, bottom: span.style.bottom };
            localStorage.setItem(getZenzyToyPositionsKey(), JSON.stringify(positions));
          });
        });
        
        // Setup drop zone
        if(zenzyStageEl && zenzyStageEl.dataset.toyDropBound !== 'true'){
          zenzyStageEl.dataset.toyDropBound = 'true';
          zenzyStageEl.addEventListener('dragover', function(e){
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
          });
          
          zenzyStageEl.addEventListener('drop', function(e){
            e.preventDefault();
            const droppedItem = e.dataTransfer.getData('text/plain');
            const point = getStageDropPoint(e.clientX, e.clientY, activePointerDrag);
            
            if (droppedItem === 'zenzy-egg') {
              const eggEl = document.getElementById('zenzyEggGift');
              if (eggEl) {
                eggEl.style.left = point.left + 'px';
                eggEl.style.bottom = point.bottom + 'px';
              }
              localStorage.setItem('zenzyEggPosition', JSON.stringify({ left: point.left + 'px', bottom: point.bottom + 'px' }));
              activePointerDrag = null;
              return;
            }

            if (droppedItem === 'zenzy-avatar' && zenzyAvatar) {
              zenzyAvatar.style.left = point.left + 'px';
              zenzyAvatar.style.bottom = '0px';
              zenzyAvatar.style.transform = 'translateX(-50%)';
              localStorage.setItem(getZenzyAvatarPositionKey(), JSON.stringify({ left: point.left + 'px', bottom: point.bottom + 'px' }));
              requestAnimationFrame(updateZenzySpeechBubblePosition);
              activePointerDrag = null;
              return;
            }
            
            // Save position
            positions[droppedItem] = { left: point.left + 'px', bottom: point.bottom + 'px' };
            localStorage.setItem(getZenzyToyPositionsKey(), JSON.stringify(positions));
            activePointerDrag = null;
            renderZenzyToys();
          });
        }
      }

      function enableZenzyAvatarDrag() {
        if (!zenzyAvatar || !zenzyStageEl) return;
        bindMobileZenzyDragListeners();

        const canDragAvatar = zenzyStage === 'adopted' && isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room';

        zenzyAvatar.style.position = 'absolute';
        zenzyAvatar.style.opacity = '1';
        zenzyAvatar.style.transform = 'translateX(-50%)';

        if (!canDragAvatar) {
          zenzyAvatar.style.left = '50%';
          zenzyAvatar.style.bottom = '0px';
          zenzyAvatar.setAttribute('draggable', 'false');
          zenzyAvatar.classList.remove('zenzy-avatar-draggable');
        } else {
          let savedPosition = null;
          try {
            savedPosition = JSON.parse(localStorage.getItem(getZenzyAvatarPositionKey()) || 'null');
          } catch (err) {
            savedPosition = null;
          }

          if (savedPosition && savedPosition.left) {
            zenzyAvatar.style.left = savedPosition.left;
            zenzyAvatar.style.bottom = '0px';
          } else {
            zenzyAvatar.style.left = '50%';
            zenzyAvatar.style.bottom = '0px';
          }

          zenzyAvatar.setAttribute('draggable', 'true');
          zenzyAvatar.classList.add('zenzy-avatar-draggable');

          if (zenzyAvatar.dataset.dragBound !== 'true') {
            zenzyAvatar.dataset.dragBound = 'true';
            zenzyAvatar.addEventListener('dragstart', function(e) {
              if (!(zenzyStage === 'adopted' && isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room')) {
                e.preventDefault();
                return;
              }
              const avatarRect = zenzyAvatar.getBoundingClientRect();
              const fallbackClientX = avatarRect.left + (avatarRect.width / 2);
              const fallbackClientY = avatarRect.top + (avatarRect.height / 2);
              const clientX = Number.isFinite(e.clientX) && e.clientX > 0 ? e.clientX : fallbackClientX;
              const clientY = Number.isFinite(e.clientY) && e.clientY > 0 ? e.clientY : fallbackClientY;

              activePointerDrag = {
                type: 'avatar',
                element: zenzyAvatar,
                width: avatarRect.width,
                height: avatarRect.height,
                offsetX: Math.max(0, clientX - avatarRect.left),
                offsetY: Math.max(0, clientY - avatarRect.top),
                centerAnchor: true
              };
              e.dataTransfer.effectAllowed = 'move';
              e.dataTransfer.setData('text/plain', 'zenzy-avatar');
              zenzyAvatar.style.opacity = '0.75';
            });
            zenzyAvatar.addEventListener('dragend', function() {
              zenzyAvatar.style.opacity = '1';
              activePointerDrag = null;
            });
            zenzyAvatar.addEventListener('touchstart', function(e) {
              if (!(zenzyStage === 'adopted' && isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room')) return;
              if (e.cancelable) e.preventDefault();
              const touch = e.touches && e.touches[0];
              const avatarRect = zenzyAvatar.getBoundingClientRect();
              activeMobileDrag = {
                type: 'avatar',
                element: zenzyAvatar,
                width: avatarRect.width,
                height: avatarRect.height,
                offsetX: touch ? Math.max(0, touch.clientX - avatarRect.left) : (avatarRect.width / 2),
                offsetY: touch ? Math.max(0, touch.clientY - avatarRect.top) : (avatarRect.height / 2),
                centerAnchor: true
              };
            }, { passive: false });
          }
        }

        if (activeMobileDrag && activeMobileDrag.type === 'avatar') {
          activeMobileDrag = null;
        }

        enforceJunkyardEggLowerPosition();
        requestAnimationFrame(updateZenzySpeechBubblePosition);
        requestAnimationFrame(updateZenzyDragHandlePosition);
      }

      window.addEventListener('resize', function(){
        requestAnimationFrame(updateZenzySpeechBubblePosition);
        requestAnimationFrame(updateZenzyDragHandlePosition);
        scheduleBubbleTextFit();
      });

      function enableZenzyEggDrag(eggEl) {
        if (!eggEl || !zenzyStageEl) return;
        
        // Apply saved position
        let eggPosition = {};
        try { eggPosition = JSON.parse(localStorage.getItem('zenzyEggPosition') || '{}'); } catch (err) { eggPosition = {}; }
        if (eggPosition.left && eggPosition.bottom) {
          eggEl.style.left = eggPosition.left;
          eggEl.style.bottom = eggPosition.bottom;
        }
        
        eggEl.setAttribute('draggable', 'true');
        eggEl.addEventListener('dragstart', function(e){
          const eggRect = eggEl.getBoundingClientRect();
          const fallbackClientX = eggRect.left + (eggRect.width / 2);
          const fallbackClientY = eggRect.top + (eggRect.height / 2);
          const clientX = Number.isFinite(e.clientX) && e.clientX > 0 ? e.clientX : fallbackClientX;
          const clientY = Number.isFinite(e.clientY) && e.clientY > 0 ? e.clientY : fallbackClientY;

          activePointerDrag = {
            type: 'egg',
            element: eggEl,
            width: eggRect.width,
            height: eggRect.height,
            offsetX: Math.max(0, clientX - eggRect.left),
            offsetY: Math.max(0, clientY - eggRect.top),
            centerAnchor: false
          };
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', 'zenzy-egg');
          eggEl.style.opacity = '0.7';
        }, { once: false });
        
        eggEl.addEventListener('dragend', function(){
          eggEl.style.opacity = '1';
          activePointerDrag = null;
        }, { once: false });
      }

      // Health stats management
      function initializeHealthStats() {
        const stats = {
          hunger: 100,
          thirst: 100,
          tired: 100,
          social: 100,
          activity: 100,
          stimulation: 100,
          emotional: 50 // Starts at neutral
        };
        
        try {
          const saved = JSON.parse(localStorage.getItem('zenzyHealthStats') || '{}');
          return { ...stats, ...saved };
        } catch (e) {
          return stats;
        }
      }

      function getHealthStats() {
        const defaults = initializeHealthStats();
        try {
          const saved = JSON.parse(localStorage.getItem('zenzyHealthStats') || '{}') || {};
          Object.keys(defaults).forEach(function(key){
            const value = Number(saved[key]);
            defaults[key] = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : defaults[key];
          });
          return defaults;
        } catch (e) {
          return defaults;
        }
      }

      function saveHealthStats(stats) {
        localStorage.setItem('zenzyHealthStats', JSON.stringify(stats));
      }

      function updateHealthStat(statName, delta, setDirect = false) {
        const stats = getHealthStats();
        if (setDirect) {
          // Set to specific value
          stats[statName] = Math.max(0, Math.min(100, delta));
        } else {
          // Add delta to current value
          stats[statName] = Math.max(0, Math.min(100, stats[statName] + delta));
        }
        saveHealthStats(stats);
        updateHealthBars();
      }

      function updateHealthBars() {
        const stats = getHealthStats();
        const energyLevel = Math.max(0, Math.min(100, 100 - stats.tired));
        const moodLevel = Math.max(0, Math.min(100, stats.emotional));
        
        // Update individual bars
        if (hungerBar) hungerBar.style.width = stats.hunger + '%';
        if (hungerPercent) hungerPercent.textContent = Math.round(stats.hunger) + '%';
        
        if (thirstBar) thirstBar.style.width = stats.thirst + '%';
        if (thirstPercent) thirstPercent.textContent = Math.round(stats.thirst) + '%';
        
        if (tiredBar) tiredBar.style.width = stats.tired + '%';
        if (tiredPercent) tiredPercent.textContent = Math.round(stats.tired) + '%';
        
        if (socialBar) socialBar.style.width = stats.social + '%';
        if (socialPercent) socialPercent.textContent = Math.round(stats.social) + '%';
        
        if (activityBar) activityBar.style.width = stats.activity + '%';
        if (activityPercent) activityPercent.textContent = Math.round(stats.activity) + '%';
        
        if (stimulationBar) stimulationBar.style.width = stats.stimulation + '%';
        if (stimulationPercent) stimulationPercent.textContent = Math.round(stats.stimulation) + '%';
        
        if (emotionalBar) emotionalBar.style.width = stats.emotional + '%';
        if (emotionalPercent) emotionalPercent.textContent = Math.round(stats.emotional) + '%';

        if (energyTrackerMarker) {
          energyTrackerMarker.style.left = energyLevel + '%';
          energyTrackerMarker.setAttribute('aria-valuenow', String(Math.round(energyLevel)));
        }
        if (moodTrackerMarker) {
          moodTrackerMarker.style.left = moodLevel + '%';
          moodTrackerMarker.setAttribute('aria-valuenow', String(Math.round(moodLevel)));
        }
        
        // Calculate overall health as average of all stats
        const overall = (stats.hunger + stats.thirst + stats.tired + stats.social + stats.activity + stats.stimulation + stats.emotional) / 7;
        if (overallHealthBar) overallHealthBar.style.width = overall + '%';
        if (overallHealthPercent) overallHealthPercent.textContent = Math.round(overall) + '%';
      }

      function spendCoins(cost) {
        if (coins >= cost) {
          coins -= cost;
          localStorage.setItem('coins', coins);
          if (coinCountEl) coinCountEl.textContent = coins;
          return true;
        }
        return false;
      }

      const MINI_GAME_TYPES = ['tapdash', 'memory', 'oddone'];
      const MINI_GAME_MAX_LEVEL = 10;
      let miniGameType = '';
      let miniGameProgress = { tapdash: 1, memory: 1, oddone: 1 };
      let miniGameBestScores = { tapdash: 0, memory: 0, oddone: 0 };
      let miniGameSecondsLeft = 0;
      let miniGameTicker = null;
      let miniGameTimeouts = [];
      let miniTapHits = 0;
      let miniTapTargetGoal = 0;
      let miniMemorySequence = [];
      let miniMemoryInput = [];
      let miniMemoryInteractive = false;
      let miniOddFound = 0;
      let miniOddGoal = 0;

      function loadMiniGameProgress() {
        try {
          const saved = JSON.parse(localStorage.getItem('zenzyMiniGameProgress') || '{}');
          MINI_GAME_TYPES.forEach(function(type) {
            const value = parseInt(saved[type], 10) || 1;
            miniGameProgress[type] = Math.min(MINI_GAME_MAX_LEVEL, Math.max(1, value));
          });
        } catch (e) {
          miniGameProgress = { tapdash: 1, memory: 1, oddone: 1 };
        }
      }

      function loadMiniGameBestScores() {
        try {
          const saved = JSON.parse(localStorage.getItem('zenzyMiniGameBest') || '{}');
          MINI_GAME_TYPES.forEach(function(type) {
            const value = parseInt(saved[type], 10) || 0;
            miniGameBestScores[type] = Math.max(0, value);
          });
        } catch (e) {
          miniGameBestScores = { tapdash: 0, memory: 0, oddone: 0 };
        }
      }

      function saveMiniGameBestScores() {
        localStorage.setItem('zenzyMiniGameBest', JSON.stringify(miniGameBestScores));
      }

      function saveMiniGameProgress() {
        localStorage.setItem('zenzyMiniGameProgress', JSON.stringify(miniGameProgress));
      }

      function clearMiniGameRuntime() {
        if (miniGameTicker) {
          clearInterval(miniGameTicker);
          miniGameTicker = null;
        }
        if (miniGameTimeouts.length) {
          miniGameTimeouts.forEach(function(id){ clearTimeout(id); });
          miniGameTimeouts = [];
        }
        miniMemoryInteractive = false;
      }

      function queueMiniGameTimeout(cb, ms) {
        const id = setTimeout(cb, ms);
        miniGameTimeouts.push(id);
        return id;
      }

      function updateMiniGameHud(level, target, seconds) {
        if (miniGameScoreRow) miniGameScoreRow.style.display = 'flex';
        if (miniGameLevel) miniGameLevel.textContent = String(level);
        if (miniGameTarget) miniGameTarget.textContent = String(target);
        if (miniGameTime) miniGameTime.textContent = String(seconds);
      }

      function setMiniGameStatus(text, isError) {
        if (!miniGameStatus) return;
        miniGameStatus.textContent = text || '';
        miniGameStatus.style.color = isError ? '#ff6b6b' : '#1fa7a7';
      }

      function updateMiniGameBestDisplay(type) {
        if (!miniGameBestRow || !miniGameBestScore) return;
        const best = miniGameBestScores[type] || 0;
        miniGameBestRow.style.display = 'flex';
        miniGameBestScore.textContent = String(best);
      }

      function calculateMiniGameScore(level) {
        return (level * 100) + Math.max(0, miniGameSecondsLeft) * 5;
      }

      function showMiniGameBadge(text) {
        if (!miniGameBadge) return;
        miniGameBadge.textContent = text || 'Level 10 Master!';
        miniGameBadge.style.display = 'block';
        queueMiniGameTimeout(function(){
          miniGameBadge.style.display = 'none';
        }, 1600);
      }

      function awardMiniGameLevel(level) {
        const reward = 15 + (level * 5);
        coins += reward;
        localStorage.setItem('coins', coins);
        if (coinCountEl) coinCountEl.textContent = coins;
        return reward;
      }

      function getMiniGameLevel(type) {
        return miniGameProgress[type] || 1;
      }

      function selectMiniGame(type) {
        if (!type || MINI_GAME_TYPES.indexOf(type) === -1) return;
        clearMiniGameRuntime();
        miniGameType = type;
        if (miniGameBoard) miniGameBoard.innerHTML = '';
        if (miniGameBadge) miniGameBadge.style.display = 'none';
        if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'none';
        if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'none';
        if (miniGameStartBtn) miniGameStartBtn.style.display = 'inline-block';
        const level = getMiniGameLevel(type);
        const nameMap = {
          tapdash: 'Tap Dash',
          memory: 'Memory Lights',
          oddone: 'Odd One Out'
        };
        setMiniGameStatus(nameMap[type] + ' selected. Level ' + level + ' ready!');
        updateMiniGameHud(level, 0, 0);
        updateMiniGameBestDisplay(type);
      }

      function startMiniTimer(seconds, onTimeout) {
        miniGameSecondsLeft = seconds;
        if (miniGameTime) miniGameTime.textContent = String(miniGameSecondsLeft);
        if (miniGameTicker) clearInterval(miniGameTicker);
        miniGameTicker = setInterval(function() {
          miniGameSecondsLeft -= 1;
          if (miniGameTime) miniGameTime.textContent = String(Math.max(0, miniGameSecondsLeft));
          if (miniGameSecondsLeft <= 0) {
            clearInterval(miniGameTicker);
            miniGameTicker = null;
            if (typeof onTimeout === 'function') onTimeout();
          }
        }, 1000);
      }

      function finishMiniGameLevel(success, message) {
        clearMiniGameRuntime();
        if (miniGameStartBtn) miniGameStartBtn.style.display = 'none';
        if (!miniGameType) return;
        const level = getMiniGameLevel(miniGameType);

        if (success) {
          updateHealthStat('social', MINI_GAME_SOCIAL_BOOST);
          updateHealthStat('activity', MINI_GAME_ACTIVITY_BOOST);
          const score = calculateMiniGameScore(level);
          if (score > (miniGameBestScores[miniGameType] || 0)) {
            miniGameBestScores[miniGameType] = score;
            saveMiniGameBestScores();
            updateMiniGameBestDisplay(miniGameType);
          }
          const reward = awardMiniGameLevel(level);
          if (level < MINI_GAME_MAX_LEVEL) {
            miniGameProgress[miniGameType] = level + 1;
            saveMiniGameProgress();
            if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'inline-block';
            if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'none';
            setMiniGameStatus((message || 'Level complete!') + ' +' + reward + ' ZP');
          } else {
            miniGameProgress[miniGameType] = MINI_GAME_MAX_LEVEL;
            saveMiniGameProgress();
            if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'none';
            if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'inline-block';
            setMiniGameStatus('You beat all 10 levels! +' + reward + ' ZP 🌟');
            showMiniGameBadge('Level 10 Master!');
          }
        } else {
          if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'none';
          if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'inline-block';
          setMiniGameStatus(message || 'Try again!', true);
        }
      }

      function startTapDashLevel(level) {
        if (!miniGameBoard) return;
        miniTapHits = 0;
        miniTapTargetGoal = 6 + (level * 2);
        const timeLimit = Math.max(8, 18 - level);
        updateMiniGameHud(level, miniTapTargetGoal, timeLimit);
        miniGameBoard.innerHTML = '';
        const target = document.createElement('button');
        target.className = 'mini-tap-target';
        target.type = 'button';
        target.textContent = '🎯';
        miniGameBoard.appendChild(target);

        function moveTarget() {
          const boardRect = miniGameBoard.getBoundingClientRect();
          const x = Math.max(4, Math.random() * Math.max(4, boardRect.width - 72));
          const y = Math.max(4, Math.random() * Math.max(4, boardRect.height - 72));
          target.style.left = x + 'px';
          target.style.top = y + 'px';
        }

        target.addEventListener('click', function() {
          miniTapHits += 1;
          if (miniGameTarget) miniGameTarget.textContent = (miniTapTargetGoal - miniTapHits) + ' left';
          if (miniTapHits >= miniTapTargetGoal) {
            finishMiniGameLevel(true, 'Lightning fast!');
            return;
          }
          moveTarget();
        });

        moveTarget();
        startMiniTimer(timeLimit, function() {
          finishMiniGameLevel(false, 'Time up in Tap Dash!');
        });
      }

      function startMemoryLevel(level) {
        if (!miniGameBoard) return;
        const timeLimit = Math.max(14, 24 - level);
        const sequenceLength = Math.min(11, level + 2);
        const padColors = ['teal', 'yellow', 'pink', 'blue'];
        miniMemorySequence = [];
        miniMemoryInput = [];
        miniMemoryInteractive = false;
        updateMiniGameHud(level, sequenceLength, timeLimit);
        miniGameBoard.innerHTML = '<div class="mini-memory-grid" id="miniMemoryGrid"></div>';
        const grid = document.getElementById('miniMemoryGrid');
        if (!grid) return;

        padColors.forEach(function(color, index) {
          const pad = document.createElement('button');
          pad.type = 'button';
          pad.className = 'mini-memory-pad';
          pad.dataset.color = color;
          pad.dataset.index = String(index);
          pad.addEventListener('click', function() {
            if (!miniMemoryInteractive) return;
            const selected = parseInt(pad.dataset.index, 10);
            miniMemoryInput.push(selected);
            pad.classList.add('active');
            queueMiniGameTimeout(function(){ pad.classList.remove('active'); }, 160);
            const checkIndex = miniMemoryInput.length - 1;
            if (miniMemorySequence[checkIndex] !== selected) {
              finishMiniGameLevel(false, 'Oops! Wrong pattern.');
              return;
            }
            if (miniMemoryInput.length === miniMemorySequence.length) {
              finishMiniGameLevel(true, 'Memory master!');
            }
          });
          grid.appendChild(pad);
        });

        for (let i = 0; i < sequenceLength; i++) {
          miniMemorySequence.push(Math.floor(Math.random() * 4));
        }

        let currentDelay = 450;
        miniMemorySequence.forEach(function(step) {
          queueMiniGameTimeout(function() {
            const pad = grid.querySelector('[data-index="' + step + '"]');
            if (!pad) return;
            pad.classList.add('active');
            queueMiniGameTimeout(function(){ pad.classList.remove('active'); }, 240);
          }, currentDelay);
          currentDelay += 460;
        });

        queueMiniGameTimeout(function(){
          miniMemoryInteractive = true;
          setMiniGameStatus('Now repeat the pattern!');
        }, currentDelay + 80);

        startMiniTimer(timeLimit, function() {
          finishMiniGameLevel(false, 'Time up in Memory Lights!');
        });
      }

      function renderOddOneRound(level) {
        if (!miniGameBoard) return;
        miniGameBoard.innerHTML = '';
        const grid = document.createElement('div');
        grid.className = 'mini-odd-grid';
        const cols = Math.min(6, 2 + Math.floor(level / 2));
        const rows = Math.min(5, 2 + Math.floor((level + 1) / 2));
        grid.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';
        const total = cols * rows;
        const oddIndex = Math.floor(Math.random() * total);

        for (let i = 0; i < total; i++) {
          const cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'mini-odd-cell';
          cell.textContent = i === oddIndex ? '🌟' : '⭐';
          cell.addEventListener('click', function() {
            if (i === oddIndex) {
              miniOddFound += 1;
              if (miniGameTarget) miniGameTarget.textContent = (miniOddGoal - miniOddFound) + ' left';
              if (miniOddFound >= miniOddGoal) {
                finishMiniGameLevel(true, 'Sharp eyes!');
              } else {
                renderOddOneRound(level);
              }
            } else {
              finishMiniGameLevel(false, 'Wrong one!');
            }
          });
          grid.appendChild(cell);
        }
        miniGameBoard.appendChild(grid);
      }

      function startOddOneLevel(level) {
        miniOddFound = 0;
        miniOddGoal = Math.min(8, 2 + Math.floor(level / 2));
        const timeLimit = Math.max(9, 20 - level);
        updateMiniGameHud(level, miniOddGoal, timeLimit);
        renderOddOneRound(level);
        startMiniTimer(timeLimit, function() {
          finishMiniGameLevel(false, 'Time up in Odd One Out!');
        });
      }

      function startCurrentMiniGameLevel() {
        if (!miniGameType) {
          setMiniGameStatus('Select a game first.', true);
          return;
        }
        clearMiniGameRuntime();
        if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'none';
        if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'none';
        if (miniGameStartBtn) miniGameStartBtn.style.display = 'none';
        const level = getMiniGameLevel(miniGameType);

        if (miniGameType === 'tapdash') {
          setMiniGameStatus('Tap the paw fast!');
          startTapDashLevel(level);
          return;
        }
        if (miniGameType === 'memory') {
          setMiniGameStatus('Watch closely...');
          startMemoryLevel(level);
          return;
        }
        if (miniGameType === 'oddone') {
          setMiniGameStatus('Find the odd one quickly!');
          startOddOneLevel(level);
        }
      }

      function setupMiniGames() {
        loadMiniGameProgress();
        loadMiniGameBestScores();
        if (miniTapDashBtn) miniTapDashBtn.onclick = function(){
          if (!spendCoins(50)) {
            showInsufficientZpModal();
            return;
          }
          showScreen(zenzyMiniGamesScreen);
          selectMiniGame('tapdash');
        };
        if (miniMemoryBtn) miniMemoryBtn.onclick = function(){
          if (!spendCoins(50)) {
            showInsufficientZpModal();
            return;
          }
          showScreen(zenzyMiniGamesScreen);
          selectMiniGame('memory');
        };
        if (miniOddOneBtn) miniOddOneBtn.onclick = function(){
          if (!spendCoins(50)) {
            showInsufficientZpModal();
            return;
          }
          showScreen(zenzyMiniGamesScreen);
          selectMiniGame('oddone');
        };
        if (miniGameStartBtn) miniGameStartBtn.onclick = startCurrentMiniGameLevel;
        if (miniGameNextLevelBtn) miniGameNextLevelBtn.onclick = function(){
          if (miniGameStartBtn) miniGameStartBtn.style.display = 'inline-block';
          if (miniGameNextLevelBtn) miniGameNextLevelBtn.style.display = 'none';
          startCurrentMiniGameLevel();
        };
        if (miniGameRetryBtn) miniGameRetryBtn.onclick = function(){
          if (miniGameStartBtn) miniGameStartBtn.style.display = 'inline-block';
          if (miniGameRetryBtn) miniGameRetryBtn.style.display = 'none';
          startCurrentMiniGameLevel();
        };
        if (miniGameBackBtn) miniGameBackBtn.onclick = function(){
          clearMiniGameRuntime();
          showScreen(petShop);
          requestAnimationFrame(updateZenzySpeechBubblePosition);
          requestAnimationFrame(updateZenzyDragHandlePosition);
        };
      }

      function setZenzyEmotion(index) {
        const emotion = zenzyEmotions[index % zenzyEmotions.length];
        if (!emotion) return;
        zenzyEmotionIndex = index;
        localStorage.setItem('zenzyEmotionId', emotion.id);
        if (zenzyAvatar) {
          zenzyAvatar.src = getEmotionImage(emotion);
        }
        if (zenzySpeech) {
          const lines = emotion.lines || [];
          const line = lines.length ? lines[Math.floor(Math.random() * lines.length)] : 'I feel okay.';
          zenzySpeech.textContent = line;
        }
        
        // Adjust health bars based on emotion
        if (emotion.id === 'tired') {
          // Tired emotion: set tired bar to low (25%)
          updateHealthStat('tired', 25, true);
        } else if (emotion.id === 'angry') {
          // Angry emotion: set emotional bar to red side (85%)
          updateHealthStat('emotional', 85, true);
        } else if (emotion.id === 'sad') {
          // Sad emotion: set emotional bar to blue side (25%)
          updateHealthStat('emotional', 25, true);
        } else if (emotion.id === 'normal') {
          // Normal emotion: set emotional bar to center (55%)
          updateHealthStat('emotional', 55, true);
        }
        renderZenzyAppearance();
      }

      function clearZenzyEmotionLock() {
        zenzyEmotionLockUntil = 0;
        zenzyEmotionLockMode = '';
        zenzyEmotionLockSpeech = '';
        localStorage.removeItem('zenzyEmotionLockUntil');
        localStorage.removeItem('zenzyEmotionLockMode');
        localStorage.removeItem('zenzyEmotionLockSpeech');
        if (zenzyEmotionLockTimer) {
          clearTimeout(zenzyEmotionLockTimer);
          zenzyEmotionLockTimer = null;
        }
      }

      function applyZenzyEmotionLockState() {
        if (!zenzyAvatar) return;
        if (zenzyEmotionLockMode === 'celebration') {
          zenzyAvatar.src = getZenzyEvolvedStateImage('celebration', 'New%20zenzy.png');
        } else {
          zenzyAvatar.src = getZenzyEvolvedStateImage('normal', 'New%20zenzy.png');
        }
        localStorage.setItem('zenzyMood', 'normal');
        localStorage.setItem('zenzyEmotionId', 'normal');
        if (zenzySpeech && zenzyEmotionLockSpeech) {
          zenzySpeech.textContent = zenzyEmotionLockSpeech;
          requestAnimationFrame(updateZenzySpeechBubblePosition);
        }
      }

      function scheduleZenzyEmotionUnlock() {
        if (zenzyEmotionLockTimer) {
          clearTimeout(zenzyEmotionLockTimer);
          zenzyEmotionLockTimer = null;
        }
        const waitMs = Math.max(0, zenzyEmotionLockUntil - Date.now());
        if (waitMs === 0) {
          clearZenzyEmotionLock();
          setRandomZenzyEmotion();
          return;
        }
        zenzyEmotionLockTimer = setTimeout(function() {
          clearZenzyEmotionLock();
          setRandomZenzyEmotion();
        }, waitMs + 20);
      }

      function lockZenzyEmotionState(mode, durationMs, speechText) {
        const duration = Math.max(0, parseInt(durationMs, 10) || 0);
        if (duration <= 0) return;
        zenzyEmotionLockUntil = Date.now() + duration;
        zenzyEmotionLockMode = mode === 'celebration' ? 'celebration' : 'normal';
        zenzyEmotionLockSpeech = speechText || '';
        localStorage.setItem('zenzyEmotionLockUntil', String(zenzyEmotionLockUntil));
        localStorage.setItem('zenzyEmotionLockMode', zenzyEmotionLockMode);
        localStorage.setItem('zenzyEmotionLockSpeech', zenzyEmotionLockSpeech);
        applyZenzyEmotionLockState();
        scheduleZenzyEmotionUnlock();
      }

      function isZenzyEmotionLocked() {
        return Date.now() < zenzyEmotionLockUntil;
      }

      function setRandomZenzyEmotion() {
        if (isZenzyEmotionLocked()) {
          applyZenzyEmotionLockState();
          scheduleZenzyEmotionUnlock();
          return;
        }
        let nextIndex = Math.floor(Math.random() * zenzyEmotions.length);
        if (zenzyEmotions.length > 1 && nextIndex === zenzyEmotionIndex) {
          nextIndex = (nextIndex + 1) % zenzyEmotions.length;
        }
        setZenzyEmotion(nextIndex);
      }

      // Emotional activity data - activities for cheering up and calming down based on emotion
      const emotionalActivityData = {
        normal: {
          cheerUp: [
            { name: '🎮 Play a Game', desc: 'Fun and engaging!' },
            { name: '💃 Dance to Music', desc: 'Get moving and groove!' }
          ],
          calmDown: [
            { name: '📚 Read a Story', desc: 'Relaxing and peaceful' },
            { name: '🌬️ Take Deep Breaths', desc: 'Simple and helpful' },
            { name: '✍️ Write About Your Feelings', desc: 'Express yourself' },
            { name: '🎨 Draw About How You Feel', desc: 'Creative expression' }
          ]
        },
        angry: {
          cheerUp: [
            { name: '🎨 Draw or Color', desc: 'Express your feelings' },
            { name: '🎤 Sing a Song', desc: 'Let it out!', },
            { name: '🏃 Do Some Exercises', desc: 'Release that energy' }
          ],
          calmDown: [
            { name: '🧘 Meditation', desc: 'Calm your mind' },
            { name: '🌬️ Breathing Exercise', desc: 'In and out, slowly' },
            { name: '🎵 Listen to Calm Music', desc: 'Soothe your emotions' },
            { name: '⏸️ Take a Timeout', desc: 'Just sit quietly for a bit' },
            { name: '✍️ Write About Your Feelings', desc: 'Express yourself' },
            { name: '🎨 Draw About How You Feel', desc: 'Creative expression' }
          ]
        },
        sad: {
          cheerUp: [
            { name: '🎮 Play a Game', desc: 'Have some fun!' },
            { name: '😂 Watch Something Funny', desc: 'Laugh it out' },
            { name: '💃 Dance to Upbeat Music', desc: 'Feel the beat!' },
            { name: '🎤 Sing Your Favorite Song', desc: 'Sing it loud!' }
          ],
          calmDown: [
            { name: '🤗 Snuggle Time', desc: 'Cozy and warm' },
            { name: '📚 Read a Comforting Story', desc: 'Feel better' },
            { name: '🖼️ Look at Pretty Pictures', desc: 'Inspire yourself' },
            { name: '✍️ Write About Your Feelings', desc: 'Express yourself' },
            { name: '🎨 Draw About How You Feel', desc: 'Creative expression' }
          ]
        },
        tired: {
          cheerUp: [
            { name: '🎮 Play a Fun Game', desc: 'Energize yourself' },
            { name: '💃 Dance to Upbeat Music', desc: 'Wake up with fun!' },
            { name: '🍎 Have a Healthy Snack', desc: 'Boost your energy' }
          ],
          calmDown: [
            { name: '😴 Take a Power Nap', desc: 'Rest and recharge' },
            { name: '🧘 Gentle Stretching', desc: 'Ease your body' },
            { name: '🎵 Relaxing Music', desc: 'Help yourself unwind' },
            { name: '✍️ Write About Your Feelings', desc: 'Express yourself' },
            { name: '🎨 Draw About How You Feel', desc: 'Creative expression' }
          ]
        }
      };

      // Helper function to get random items from array
      function getRandomActivities(activities, count = 3) {
        const shuffled = shuffledCopy(activities);
        return shuffled.slice(0, Math.min(count, activities.length));
      }

      function showCheerUpActivities(emotionIndex) {
        if (!cheerUpActivities) return;
        cheerUpActivities.innerHTML = '';
        
        // Get emotion ID from zenzyEmotions array
        const emotion = resolveZenzyEmotion(emotionIndex);
        const emotionId = emotion ? emotion.id : 'normal';
        setCareModalZenzyImage(cheerUpZenzyModalImage, getEmotionImage(emotion), 'Zenzy needs cheering up');
        
        // Get activities for this emotion
        const allActivities = emotionalActivityData[emotionId]?.cheerUp || emotionalActivityData['normal'].cheerUp;
        
        // Get 3 random activities
        const activities = getRandomActivities(allActivities, 3);
        
        activities.forEach((activity, idx) => {
          const btn = document.createElement('button');
          btn.className = 'submit-button shop-action';
          btn.style.display = 'flex';
          btn.style.flexDirection = 'column';
          btn.style.alignItems = 'flex-start';
          btn.style.padding = '10px';
          btn.innerHTML = `<strong>${activity.name}</strong><small style="color: #999; margin-top: 4px;">${activity.desc}</small>`;
          btn.onclick = function(e) {
            e.stopPropagation();
            performEmotionalActivity(activity.name, emotionId, 'cheerUp');
          };
          cheerUpActivities.appendChild(btn);
        });
      }

      function showCalmDownActivities(emotionIndex) {
        if (!calmDownActivities) return;
        calmDownActivities.innerHTML = '';
        
        // Get emotion ID from zenzyEmotions array
        const emotion = resolveZenzyEmotion(emotionIndex);
        const emotionId = emotion ? emotion.id : 'normal';
        setCareModalZenzyImage(calmDownZenzyModalImage, getEmotionImage(emotion), 'Zenzy needs calming down');
        
        // Get activities for this emotion
        const allActivities = emotionalActivityData[emotionId]?.calmDown || emotionalActivityData['normal'].calmDown;
        
        // Get 3 random activities
        const activities = getRandomActivities(allActivities, 3);
        
        activities.forEach((activity, idx) => {
          const btn = document.createElement('button');
          btn.className = 'submit-button shop-action';
          btn.style.display = 'flex';
          btn.style.flexDirection = 'column';
          btn.style.alignItems = 'flex-start';
          btn.style.padding = '10px';
          btn.innerHTML = `<strong>${activity.name}</strong><small style="color: #999; margin-top: 4px;">${activity.desc}</small>`;
          btn.onclick = function(e) {
            e.stopPropagation();
            performEmotionalActivity(activity.name, emotionId, 'calmDown');
          };
          calmDownActivities.appendChild(btn);
        });
      }

      function performEmotionalActivity(activityName, emotionId, activityType) {
        // Handle special activities that require additional modals
        if (activityName.includes('Write About')) {
          if (activityType === 'cheerUp') {
            hideModal(cheerUpModal);
          } else {
            hideModal(calmDownModal);
          }
          showModal(writeFeelingsModal);
          return;
        }
        
        if (activityName.includes('Draw About')) {
          if (activityType === 'cheerUp') {
            hideModal(cheerUpModal);
          } else {
            hideModal(calmDownModal);
          }
          showModal(drawingModal);
          currentActivityType = activityType;
          emotionalDrawingApp.init();
          emotionalDrawingApp.clearCanvas();
          return;
        }
        
        // Close the activity modal
        if (activityType === 'cheerUp') {
          hideModal(cheerUpModal);
        } else {
          hideModal(calmDownModal);
        }
        
        // Show result modal with loading state
        showModal(emotionalActivityResultModal);
        if (emotionalActivityTitle) {
          emotionalActivityTitle.textContent = 'Activity in progress...';
        }
        if (emotionalActivityMessage) {
          emotionalActivityMessage.textContent = activityName;
        }
        
        // After 2 seconds, show completion message
        setTimeout(() => {
          // Update emotional stat
          updateHealthStat('emotional', 25);
          
          // Show result message
          if (emotionalActivityTitle) {
            emotionalActivityTitle.textContent = '🌟 Great Job!';
          }
          
          // Create personalized message based on emotion
          let resultMsg = 'Zenzy is feeling a little better! 💛';
          if (emotionId === 'angry') {
            resultMsg = activityType === 'cheerUp' 
              ? 'Zenzy is feeling less frustrated now! 😊' 
              : 'Zenzy is calmer and more relaxed! 😌';
          } else if (emotionId === 'sad') {
            resultMsg = activityType === 'cheerUp'
              ? 'Zenzy is smiling again! 🙂'
              : 'Zenzy feels more comforted now. 🤗';
          } else if (emotionId === 'tired') {
            resultMsg = activityType === 'cheerUp'
              ? 'Zenzy feels more energized! ⚡'
              : 'Zenzy is feeling more rested. 😴';
          }
          
          if (emotionalActivityMessage) {
            emotionalActivityMessage.textContent = resultMsg;
          }
        }, 2000);
        
        // Close modal after 4 seconds total
        setTimeout(() => {
          hideModal(emotionalActivityResultModal);
          setRandomZenzyEmotion();
        }, 4500);
      }

      function setZenzyToSleep(method) {
        if (!zenzyAvatar) return;
        
        // Update health stats based on sleep method
        updateHealthStat('tired', 40);
        updateHealthStat('emotional', 20);
        if (method === 'meditate') {
          updateHealthStat('emotional', 30); // Meditation helps regulation more
        }
        
        zenzyAvatar.src = getZenzyEvolvedStateImage('sleep', getZenzyEvolvedStateImage('tired', 'New%20zenzy.png'));
        if (zenzySpeech) {
          const messages = {
            music: 'The music is so relaxing... 🎵',
            meditate: 'I feel so peaceful... 😌',
            story: 'What a lovely story... 📚'
          };
          zenzySpeech.textContent = messages[method] || 'Time for sleep... 🌙';
        }
        setShopMessage('Zenzy is sleeping peacefully!');
        
        // Return to normal emotion after 60 seconds
        setTimeout(function() {
          setRandomZenzyEmotion();
        }, 60000);
      }

      function initZenzyEmotion() {
        const mood = localStorage.getItem('zenzyMood') || 'sad';
        if (mood === 'sad') {
          const sadIndex = zenzyEmotions.findIndex(e => e.id === 'sad');
          if (sadIndex >= 0) {
            setZenzyEmotion(sadIndex);
            return;
          }
        }
        const savedId = localStorage.getItem('zenzyEmotionId');
        if (savedId) {
          const foundIndex = zenzyEmotions.findIndex(e => e.id === savedId);
          if (foundIndex >= 0) {
            setZenzyEmotion(foundIndex);
            return;
          }
        }
        setZenzyEmotion(0);
      }

      function setZenzyShelterVisibility(isHome) {
        if (zenzyWallpaper) {
          zenzyWallpaper.style.display = isHome ? 'block' : 'none';
          zenzyWallpaper.style.opacity = isHome ? '1' : '0';
        }
        if (zenzyCarpet) {
          zenzyCarpet.style.display = isHome ? 'block' : 'none';
          zenzyCarpet.style.opacity = isHome ? '1' : '0';
        }
        if (zenzyWallLeft) {
          zenzyWallLeft.style.display = isHome ? 'block' : 'none';
        }
        if (zenzyWallRight) {
          zenzyWallRight.style.display = isHome ? 'block' : 'none';
        }
        if (zenzyToys) {
          zenzyToys.style.display = isHome ? 'block' : 'none';
        }
        if (zenzyBackground) {
          // The room view uses the editable wallpaper and carpet, not the forest habitat image.
          // Keep the habitat image available only when the child switches to habitat mode.
          zenzyBackground.style.display = isHome ? 'none' : 'block';
          zenzyBackground.style.opacity = isHome ? '0' : '1';
          zenzyBackground.style.pointerEvents = isHome ? 'none' : 'auto';
          zenzyBackground.setAttribute('aria-hidden', isHome ? 'true' : 'false');
        }
        // Hide friend when not home or on day out
        const dayOut = localStorage.getItem('zenzyOnDayOut') || '';
        if(zenzyAvatarFriend){
          zenzyAvatarFriend.style.display = (dayOut === 'friend') ? 'block' : 'none';
        }
      }

      function getZenzyShopViewMode() {
        if (!isZenzyHomeUnlocked()) return 'habitat';
        return localStorage.getItem('zenzyShopViewMode') === 'habitat' ? 'habitat' : 'room';
      }

      function applyZenzyShopViewMode(mode) {
        const viewMode = mode === 'habitat' ? 'habitat' : 'room';
        if (!isZenzyHomeUnlocked()) {
          localStorage.setItem('zenzyShopViewMode', 'habitat');
          setZenzyShelterVisibility(false);
          return;
        }
        localStorage.setItem('zenzyShopViewMode', viewMode);
        setZenzyShelterVisibility(viewMode === 'room');
      }

      function toggleZenzyShopViewMode() {
        if (!isZenzyHomeUnlocked()) return;
        const nextMode = getZenzyShopViewMode() === 'room' ? 'habitat' : 'room';
        applyZenzyShopViewMode(nextMode);
        updateTakeHomeButton();
        setShopMessage(nextMode === 'room' ? 'Viewing Zenzy Room' : 'Viewing Habitat');
      }

      function getZenzyRooms() {
        let rooms = [];
        try {
          rooms = JSON.parse(localStorage.getItem('zenzyRooms') || '[]');
        } catch (err) {
          rooms = [];
        }
        if (!Array.isArray(rooms)) return [];
        return rooms.filter(function(room) {
          return room && typeof room.id === 'string';
        });
      }

      function saveZenzyRooms(rooms) {
        localStorage.setItem('zenzyRooms', JSON.stringify(rooms || []));
      }

      function getCurrentZenzyRoomId() {
        return localStorage.getItem('zenzyCurrentRoomId') || '';
      }

      function setCurrentZenzyRoomId(roomId) {
        if (!roomId) return;
        localStorage.setItem('zenzyCurrentRoomId', roomId);
      }

      function getCurrentZenzyRoom() {
        const rooms = getZenzyRooms();
        if (!rooms.length) return null;
        const currentId = getCurrentZenzyRoomId();
        const matchedRoom = rooms.find(function(room) {
          return room.id === currentId;
        });
        if (matchedRoom) return matchedRoom;
        setCurrentZenzyRoomId(rooms[0].id);
        return rooms[0];
      }

      function applyCurrentZenzyRoomToStorage() {
        const room = getCurrentZenzyRoom();
        if (!room) return;
        localStorage.setItem('zenzyWallpaper', room.wallpaper || '#f5f5f5');
        localStorage.setItem('zenzyCarpet', room.carpet || '#e2e2e2');
      }

      function updateCurrentZenzyRoomDecor(type, color) {
        const rooms = getZenzyRooms();
        if (!rooms.length) return;
        const currentId = getCurrentZenzyRoomId();
        const roomIndex = rooms.findIndex(function(room) {
          return room.id === currentId;
        });
        if (roomIndex < 0) return;
        if (type === 'wallpaper') {
          rooms[roomIndex].wallpaper = color;
        } else if (type === 'carpet') {
          rooms[roomIndex].carpet = color;
        }
        saveZenzyRooms(rooms);
      }

      function createZenzyRoom(optionalName) {
        const rooms = getZenzyRooms();
        const defaultName = `Room ${rooms.length + 1}`;
        const trimmedName = (optionalName || '').trim();
        const roomName = trimmedName || defaultName;
        const newRoom = {
          id: `room-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
          name: roomName,
          wallpaper: localStorage.getItem('zenzyWallpaper') || '#f5f5f5',
          carpet: localStorage.getItem('zenzyCarpet') || '#e2e2e2'
        };
        rooms.push(newRoom);
        saveZenzyRooms(rooms);
        setCurrentZenzyRoomId(newRoom.id);
        return newRoom;
      }

      function ensureZenzyRoomsInitialized() {
        if (!isZenzyHomeUnlocked()) return;
        const rooms = getZenzyRooms();
        if (!rooms.length) {
          createZenzyRoom('Room 1');
        } else if (!getCurrentZenzyRoomId()) {
          setCurrentZenzyRoomId(rooms[0].id);
        }
        applyCurrentZenzyRoomToStorage();
      }

      function getCurrentZenzyRoomName() {
        const room = getCurrentZenzyRoom();
        return room && room.name ? room.name : 'Room';
      }

      function updateRoomNavigationUi() {
        const homeUnlocked = isZenzyHomeUnlocked();
        const canNavigateRooms = homeUnlocked && getZenzyShopViewMode() === 'room';
        const roomCount = getZenzyRooms().length;
        const hasManyRooms = roomCount > 1;

        if (switchZenzyRoomBtn) {
          switchZenzyRoomBtn.textContent = getCurrentZenzyRoomName();
        }

        if (prevZenzyRoomBtn) {
          prevZenzyRoomBtn.style.display = homeUnlocked ? 'inline-block' : 'none';
          prevZenzyRoomBtn.classList.toggle('disabled', !(canNavigateRooms && hasManyRooms));
          if (canNavigateRooms && hasManyRooms) {
            prevZenzyRoomBtn.removeAttribute('disabled');
          } else {
            prevZenzyRoomBtn.setAttribute('disabled', 'disabled');
          }
        }

        if (nextZenzyRoomBtn) {
          nextZenzyRoomBtn.style.display = homeUnlocked ? 'inline-block' : 'none';
          nextZenzyRoomBtn.classList.toggle('disabled', !(canNavigateRooms && hasManyRooms));
          if (canNavigateRooms && hasManyRooms) {
            nextZenzyRoomBtn.removeAttribute('disabled');
          } else {
            nextZenzyRoomBtn.setAttribute('disabled', 'disabled');
          }
        }

        if (roomScrollHint) {
          roomScrollHint.style.display = canNavigateRooms && hasManyRooms ? 'block' : 'none';
        }
      }

      function cycleZenzyRoom(direction) {
        const rooms = getZenzyRooms();
        if (!rooms.length) return;
        if (rooms.length === 1) {
          setShopMessage(`Viewing ${rooms[0].name || 'Room 1'}`);
          updateRoomNavigationUi();
          return;
        }
        const currentId = getCurrentZenzyRoomId();
        let currentIndex = rooms.findIndex(function(room) {
          return room.id === currentId;
        });
        if (currentIndex < 0) currentIndex = 0;
        const delta = direction === -1 ? -1 : 1;
        const nextIndex = (currentIndex + delta + rooms.length) % rooms.length;
        setCurrentZenzyRoomId(rooms[nextIndex].id);
        applyCurrentZenzyRoomToStorage();
        applyDecor();
        applyZenzyShopViewMode('room');
        renderZenzyToys();
        enableZenzyAvatarDrag();
        updateTakeHomeButton();
        updateRoomNavigationUi();
        setShopMessage(`Viewing ${rooms[nextIndex].name || `Room ${nextIndex + 1}`}`);
      }

      function bindRoomNavigationGestures() {
        if (!zenzyStageEl || zenzyStageEl.dataset.roomNavBound === 'true') return;
        zenzyStageEl.dataset.roomNavBound = 'true';

        let touchStartX = 0;
        let touchStartY = 0;

        zenzyStageEl.addEventListener('touchstart', function(e) {
          if (!e.touches || !e.touches[0]) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }, { passive: true });

        zenzyStageEl.addEventListener('touchend', function(e) {
          if (!(isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room')) return;
          if (activeMobileDrag) return;
          const touch = e.changedTouches && e.changedTouches[0];
          if (!touch) return;
          const dx = touch.clientX - touchStartX;
          const dy = touch.clientY - touchStartY;
          if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
          cycleZenzyRoom(dx < 0 ? 1 : -1);
        });

        zenzyStageEl.addEventListener('wheel', function(e) {
          if (!(isZenzyHomeUnlocked() && getZenzyShopViewMode() === 'room')) return;
          if (Math.abs(e.deltaX) < 8 && Math.abs(e.deltaY) < 8) return;
          e.preventDefault();
          const forward = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX > 0 : e.deltaY > 0;
          cycleZenzyRoom(forward ? 1 : -1);
        }, { passive: false });
      }

      function setAdoptedZenzyState() {
        if (zenzyAvatar) {
          zenzyAvatar.src = getZenzyEvolvedStateImage('normal', 'New%20zenzy.png');
        }
        const hasZenzyName = !!(localStorage.getItem('zenzyName') || '').trim();
        if (zenzySpeech) {
          zenzySpeech.textContent = hasZenzyName
            ? (localStorage.getItem('zenzySpeechOverride') || ADOPTION_HABITAT_PROMPT)
            : HATCHED_GREETING_PROMPT;
        }
        localStorage.setItem('zenzyMood', 'normal');
        localStorage.setItem('zenzyEmotionId', 'normal');
      }

      function setZenzyCelebrating() {
        localStorage.setItem('zenzyMood', 'normal');
        if (zenzyAvatar) {
          zenzyAvatar.src = getZenzyEvolvedStateImage('celebration', 'New%20zenzy.png');
        }
        if (zenzySpeech) {
          zenzySpeech.textContent = 'Yay! Thank you for helping me!';
        }
      }

      function updateZenzyPageForStage() {
        if (!zenzyPage) return;
        if (adoptMessage) adoptMessage.textContent = '';
        if (zenzyStage === 'adopt_ready') {
          if (zenzyStatusText) zenzyStatusText.textContent = 'You earned enough ZP!';
          if (zenzyEggState) zenzyEggState.style.display = 'none';
          if (zenzySadState) zenzySadState.style.display = 'flex';
        } else {
          if (zenzyStatusText) zenzyStatusText.textContent = 'Can you help it?';
          if (zenzyEggState) zenzyEggState.style.display = 'flex';
          if (zenzySadState) zenzySadState.style.display = 'none';
        }
      }

      function initZenzyBackground() {
        const fallback = 'Images/Backgrounds/Forest%20Background.png';
        const savedBg = localStorage.getItem('zenzyBackgroundImage') || fallback;
        const bgToUse = savedBg;
        if (zenzyBackground) {
          zenzyBackground.src = bgToUse;
        }
        updateSelectedHabitatButtonState();
        enforceJunkyardEggLowerPosition();
      }

      function updateTakeHomeButton() {
        if (!takeZenzyHomeBtn) return;
        if (isZenzyHomeUnlocked()) {
          ensureZenzyRoomsInitialized();
          const mode = getZenzyShopViewMode();
          takeZenzyHomeBtn.style.display = 'inline-block';
          takeZenzyHomeBtn.textContent = mode === 'room' ? 'Build Room' : 'Room';
          takeZenzyHomeBtn.classList.remove('button-attention');
          takeZenzyHomeBtn.classList.remove('disabled');
          takeZenzyHomeBtn.removeAttribute('disabled');

          if (switchZenzyRoomBtn) {
            switchZenzyRoomBtn.style.display = 'inline-block';
            switchZenzyRoomBtn.textContent = getCurrentZenzyRoomName();
            switchZenzyRoomBtn.classList.remove('disabled');
            switchZenzyRoomBtn.removeAttribute('disabled');
          }
          if (addZenzyRoomBtn) {
            addZenzyRoomBtn.style.display = 'inline-block';
            addZenzyRoomBtn.textContent = `Build`;
            addZenzyRoomBtn.classList.remove('disabled');
            addZenzyRoomBtn.removeAttribute('disabled');
          }
          updateRoomNavigationUi();
        } else {
          const habitatChanged = localStorage.getItem('zenzyHabitatChanged') === 'true';
          takeZenzyHomeBtn.style.display = habitatChanged ? 'inline-block' : 'none';
          takeZenzyHomeBtn.textContent = `Build`;
          if (habitatChanged) {
            takeZenzyHomeBtn.classList.remove('disabled');
            takeZenzyHomeBtn.removeAttribute('disabled');
          }
          if (habitatChanged) {
            takeZenzyHomeBtn.classList.add('button-attention');
          } else {
            takeZenzyHomeBtn.classList.remove('button-attention');
          }

          if (switchZenzyRoomBtn) {
            switchZenzyRoomBtn.style.display = 'none';
            switchZenzyRoomBtn.classList.add('disabled');
            switchZenzyRoomBtn.setAttribute('disabled', 'disabled');
          }
          if (addZenzyRoomBtn) {
            addZenzyRoomBtn.style.display = 'none';
            addZenzyRoomBtn.classList.add('disabled');
            addZenzyRoomBtn.setAttribute('disabled', 'disabled');
          }
          updateRoomNavigationUi();
        }
      }

      function updateShopSectionsVisibility() {
        const homeUnlocked = isZenzyHomeUnlocked();
        const careSection = document.getElementById('careSection');
        const dayOutSection = document.getElementById('dayOutSection');
        const decorateRoomSection = document.getElementById('decorateRoomSection');
        const wallpaperSection = document.getElementById('wallpaperSection');
        const carpetSection = document.getElementById('carpetSection');
        const toysSection = document.getElementById('toysSection');
        const furnitureSection = document.getElementById('furnitureSection');
        const eggsSection = document.getElementById('eggsSection');
        const miniGamesSection = document.getElementById('miniGamesSection');
        const miniTapDashBtn = document.getElementById('miniTapDashBtn');
        const miniMemoryBtn = document.getElementById('miniMemoryBtn');
        const miniOddOneBtn = document.getElementById('miniOddOneBtn');
        const hasArtSupplies = localStorage.getItem('zenzyHasArtSupplies') === 'true';
        const hasBooks = localStorage.getItem('zenzyHasBooks') === 'true';
        const hasPC = localStorage.getItem('zenzyHasPC') === 'true';
  // Enable mini games section and buttons
  if (miniGamesSection) miniGamesSection.classList.remove('collapsed', 'disabled');
  if (miniTapDashBtn) { miniTapDashBtn.classList.remove('disabled'); miniTapDashBtn.removeAttribute('disabled'); }
  if (miniMemoryBtn) { miniMemoryBtn.classList.remove('disabled'); miniMemoryBtn.removeAttribute('disabled'); }
  if (miniOddOneBtn) { miniOddOneBtn.classList.remove('disabled'); miniOddOneBtn.removeAttribute('disabled'); }

        if (careSection) careSection.classList.remove('collapsed');
        if (dayOutSection) dayOutSection.classList.remove('collapsed');
        if (toysSection) toysSection.classList.remove('collapsed');
        if (eggsSection) eggsSection.classList.remove('collapsed');
        if (wallpaperSection) wallpaperSection.classList.remove('collapsed');
        if (carpetSection) carpetSection.classList.remove('collapsed');
        if (furnitureSection) furnitureSection.classList.remove('collapsed');
        if (decorateRoomSection) decorateRoomSection.classList.remove('toggle-enabled', 'collapsed');
        
        const displayValue = 'flex';
        if (careSection) careSection.style.display = displayValue;
        if (doArtBtn) doArtBtn.style.display = (homeUnlocked && hasArtSupplies) ? 'inline-block' : 'none';
        if (readZenzyBtn) readZenzyBtn.style.display = (homeUnlocked && hasBooks) ? 'inline-block' : 'none';
        if (playPCBtn) playPCBtn.style.display = (homeUnlocked && hasPC) ? 'inline-block' : 'none';
        if (dayOutSection) dayOutSection.style.display = displayValue;
        if (decorateRoomSection) decorateRoomSection.style.display = displayValue;
        if (wallpaperSection) wallpaperSection.style.display = displayValue;
        if (carpetSection) carpetSection.style.display = displayValue;
        if (toysSection) toysSection.style.display = displayValue;
        if (furnitureSection) furnitureSection.style.display = displayValue;
        if (eggsSection) {
          if (archiveEggAndEvolveFeatures) {
            eggsSection.style.display = 'none';
            if (searchEggBtn) searchEggBtn.style.display = 'none';
            if (combineEggBtn) combineEggBtn.style.display = 'none';
            if (evolveZenzyBtn) evolveZenzyBtn.style.display = 'none';
            if (hatchEggBtn) hatchEggBtn.style.display = 'none';
          } else {
            const eggInventory = parseInt(localStorage.getItem('collectedEggCount') || '0', 10);
            eggsSection.style.display = 'flex';
            if (eggInventoryCount) eggInventoryCount.textContent = eggInventory;
            if (combineEggBtn) combineEggBtn.style.display = (homeUnlocked && eggInventory > 0) ? 'inline-block' : 'none';
            if (hatchEggBtn) hatchEggBtn.style.display = eggInventory > 0 ? 'inline-block' : 'none';
          }
        }
        updateTakeHomeButton();
        updateSelectedHabitatButtonState();
        renderZenzyAppearance();
        
        if (!archiveEggAndEvolveFeatures && evolveZenzyBtn) {
          evolveZenzyBtn.style.display = 'inline-block';
        }
        updateWeeklyMissionButtonState();
      }

      function updateCounts() {
        const inventory = getInventoryCounts();
        syncInventoryCountDisplays(inventory.eggCount, inventory.zenzyCount);
      }

      function getInventoryCounts() {
        return {
          eggCount: parseInt(localStorage.getItem('collectedEggCount') || '0', 10),
          zenzyCount: parseInt(localStorage.getItem('zenzyCollectionCount') || '0', 10)
        };
      }

      function syncInventoryCountDisplays(eggTotal, zenzyTotal) {
        if (eggCount) eggCount.textContent = eggTotal.toString();
        if (eggInventoryCount) eggInventoryCount.textContent = eggTotal.toString();
        if (zenzyCount) zenzyCount.textContent = zenzyTotal.toString();
      }

      function setInventoryCounts(nextEggCount, nextZenzyCount, options) {
        const safeEggCount = Math.max(0, parseInt(nextEggCount, 10) || 0);
        const safeZenzyCount = Math.max(0, parseInt(nextZenzyCount, 10) || 0);
        localStorage.setItem('collectedEggCount', safeEggCount.toString());
        localStorage.setItem('zenzyCollectionCount', safeZenzyCount.toString());
        syncInventoryCountDisplays(safeEggCount, safeZenzyCount);
        if (!options || options.refreshShop !== false) {
          updateShopSectionsVisibility();
        }
        return { eggCount: safeEggCount, zenzyCount: safeZenzyCount };
      }

      function adjustInventoryCounts(deltas, options) {
        const changes = deltas || {};
        const inventory = getInventoryCounts();
        const nextEggCount = inventory.eggCount + (parseInt(changes.eggDelta, 10) || 0);
        const nextZenzyCount = inventory.zenzyCount + (parseInt(changes.zenzyDelta, 10) || 0);
        return setInventoryCounts(nextEggCount, nextZenzyCount, options);
      }

      function applyDecor() {
        const wallpaper = localStorage.getItem('zenzyWallpaper') || '#f5f5f5';
        const carpet = localStorage.getItem('zenzyCarpet') || '#e2e2e2';
        if (zenzyWallpaper) {
          zenzyWallpaper.style.background = wallpaper;
        }
        if (zenzyCarpet) {
          zenzyCarpet.style.background = carpet;
        }
      }

      function updateZenzyAfterPurchase(message) {
        if (shopMsg) shopMsg.textContent = '';
        setZenzyCelebrating();
        renderZenzyAppearance();
        setTimeout(function() {
          setRandomZenzyEmotion();
          renderZenzyAppearance();
        }, 60000);
      }

      function setEggHuntBackground(index) {
        if (archiveEggAndEvolveFeatures) return;
        const safeIndex = index % eggHuntBackgrounds.length;
        const bg = eggHuntBackgrounds[safeIndex];
        if (eggHuntBackground) {
          eggHuntBackground.src = bg;
        }
        localStorage.setItem('eggHuntIndex', safeIndex.toString());
        
        // Show egg on every 15th rotation only
        const totalVisits = parseInt(localStorage.getItem('eggHuntTotalVisits') || '0', 10);
        const isEggLocation = (totalVisits > 0 && totalVisits % 15 === 0);
        
        if (eggHuntEgg) {
          eggHuntEgg.style.display = isEggLocation ? 'block' : 'none';
        }
        if (eggHuntCollect) {
          eggHuntCollect.style.display = isEggLocation ? 'inline-block' : 'none';
        }
      }

      function playCrackingSequence(onComplete) {
        if (!zenzyEggClick) {
          if (onComplete) onComplete();
          return;
        }
        zenzyEggClick.classList.remove('hatching');
        zenzyEggClick.src = 'Images/Other%20image/Egg.png';
        setTimeout(function() {
          zenzyEggClick.src = 'Images/Cracking%20egg%201.png';
        }, 200);
        setTimeout(function() {
          zenzyEggClick.src = 'Images/Cracking%20egg%202.png';
        }, 700);
        setTimeout(function() {
          zenzyEggClick.classList.add('hatching');
        }, 900);
        setTimeout(function() {
          createZenzyHatchBurst();
        }, 1350);
        setTimeout(function() {
          zenzyEggClick.classList.remove('hatching');
          if (onComplete) onComplete();
        }, 1900);
      }

      function createZenzyHatchBurst() {
        if (!zenzyPage) return;
        const scene = zenzyPage.querySelector('.zenzy-scene');
        if (!scene) return;
        const burst = document.createElement('div');
        burst.className = 'zenzy-hatch-burst';
        scene.appendChild(burst);
        setTimeout(function() {
          burst.remove();
        }, 900);
      }

      function showDecorateArrow() {
        // Remove existing arrow if any
        hideDecorateArrow();
        
        // Create arrow element
        const arrow = document.createElement('div');
        arrow.id = 'decorateArrow';
        arrow.innerHTML = '⬇️';
        arrow.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; z-index: 100; animation: bounce-arrow 1s ease-in-out infinite; pointer-events: none;';
        document.body.appendChild(arrow);
        
        // Position it near the wallpaper section
        setTimeout(function() {
          const wallpaperSection = document.getElementById('wallpaperSection');
          if (wallpaperSection) {
            const rect = wallpaperSection.getBoundingClientRect();
            arrow.style.top = (rect.top - 60) + 'px';
            arrow.style.left = (rect.left + rect.width / 2) + 'px';
            arrow.style.transform = 'translateX(-50%)';
          }
        }, 100);
      }

      function hideDecorateArrow() {
        const arrow = document.getElementById('decorateArrow');
        if (arrow) {
          arrow.remove();
        }
      }

      updateZenzyPageForStage();
      sanitizeFirstOpenZenzyState();
      updateZenzyNameDisplays();
      updateHomeZenzyVisibility();
      initZenzyBackground();
      ensureZenzyRoomsInitialized();
      updateTakeHomeButton();
      updateRoomNavigationUi();
      updateShopSectionsVisibility();
      updateCounts();
      applyDecor();
      applyZenzyShopViewMode(getZenzyShopViewMode());
      syncZenzyShopIntroState();
      renderZenzyAppearance();
      updateWeeklyMissionButtonState();
      renderWeeklyMission();
      if (zenzyStage === 'adopted' && !isZenzyHomeUnlocked()) {
        setAdoptedZenzyState();
      } else if (zenzyStage === 'adopted') {
        initZenzyEmotion();
      }
      renderZenzyToys();
      enableZenzyAvatarDrag();
      bindRoomNavigationGestures();
      enforceJunkyardEggLowerPosition();
      initializeHealthStats();
      updateHealthBars();
      if (isZenzyEmotionLocked()) {
        applyZenzyEmotionLockState();
        scheduleZenzyEmotionUnlock();
      } else {
        clearZenzyEmotionLock();
      }

      updateCounts();
      showScreen(petShop);
      if (zenzyStage === 'adopted' && !isZenzyHomeUnlocked()) {
        enableZenzyAvatarDrag();
        updateHealthBars();
        maybeShowAdoptReminder(900);
      }

      if (zenzyStageEl) {
        zenzyStageEl.onclick = function() {
          if (zenzyStage === 'adopted' && !isZenzyHomeUnlocked()) {
            setAdoptedZenzyState();
            return;
          }
          setRandomZenzyEmotion();
        };

        let flickStartX = null;
        zenzyStageEl.addEventListener('touchstart', function(e) {
          const point = e.touches && e.touches[0];
          flickStartX = point ? point.clientX : null;
        }, { passive: true });
        zenzyStageEl.addEventListener('touchend', function(e) {
          if (!isZenzyHomeUnlocked() || flickStartX === null) return;
          const point = e.changedTouches && e.changedTouches[0];
          const endX = point ? point.clientX : flickStartX;
          const deltaX = endX - flickStartX;
          flickStartX = null;
          if (Math.abs(deltaX) >= 35) {
            toggleZenzyShopViewMode();
          }
        }, { passive: true });
      }

      if (feedZenzyBtn) {
        feedZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Thanks for the food!');
            triggerFoodFeeding();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (drinkZenzyBtn) {
        drinkZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Thanks for the drink!');
            triggerDrinking();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (playZenzyBtn) {
        playZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Play time!');
            triggerPlaying();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (doArtBtn) {
        doArtBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Art time!');
            triggerArt();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (readZenzyBtn) {
        readZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Story time!');
            triggerReading();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (playPCBtn) {
        playPCBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            updateZenzyAfterPurchase('Gaming time!');
            triggerPC();
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (sleepZenzyBtn) {
        sleepZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            setCareModalZenzyImage(sleepZenzyModalImage, getZenzyEvolvedStateImage('sleep', getZenzyEvolvedStateImage('tired', 'New%20zenzy.png')), 'Zenzy getting sleepy');
            showModal(zenzySleepModal);
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (sleepMusicOption) {
        sleepMusicOption.onclick = function() {
          hideModal(zenzySleepModal);
          setZenzyToSleep('music');
        };
      }

      if (sleepMeditateOption) {
        sleepMeditateOption.onclick = function() {
          hideModal(zenzySleepModal);
          setZenzyToSleep('meditate');
        };
      }

      if (sleepStoryOption) {
        sleepStoryOption.onclick = function() {
          hideModal(zenzySleepModal);
          setZenzyToSleep('story');
        };
      }

      if (cheerZenzyBtn) {
        cheerZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            const currentEmotion = localStorage.getItem('zenzyEmotionId') || 'normal';
            showCheerUpActivities(currentEmotion);
            showModal(cheerUpModal);
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (calmZenzyBtn) {
        calmZenzyBtn.onclick = function(e) {
          e.stopPropagation();
          if (spendCoins(50)) {
            const currentEmotion = localStorage.getItem('zenzyEmotionId') || 'normal';
            showCalmDownActivities(currentEmotion);
            showModal(calmDownModal);
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (miniGamesBtn) {
        miniGamesBtn.onclick = function(e) {
          e.stopPropagation();
          if (!spendCoins(MINI_GAME_PLAY_COST_ZP)) {
            showInsufficientZpModal();
            return;
          }
          showScreen(zenzyMiniGamesScreen);
          selectMiniGame('tapdash');
        };
      }

      if (closeCheerUpModal) {
        closeCheerUpModal.onclick = function() {
          hideModal(cheerUpModal);
        };
      }

      if (closeCalmDownModal) {
        closeCalmDownModal.onclick = function() {
          hideModal(calmDownModal);
        };
      }

      if (closeEmotionalActivityModal) {
        closeEmotionalActivityModal.onclick = function() {
          hideModal(emotionalActivityResultModal);
        };
      }

      // Write Feelings Activity
      const feelingsInput = document.getElementById('feelingsInput');
      const submitFeelings = document.getElementById('submitFeelings');
      
      if (submitFeelings) {
        submitFeelings.onclick = function() {
          hideModal(writeFeelingsModal);
          // Show result modal with loading state
          showModal(emotionalActivityResultModal);
          if (emotionalActivityTitle) {
            emotionalActivityTitle.textContent = 'Activity in progress...';
          }
          if (emotionalActivityMessage) {
            emotionalActivityMessage.textContent = '✍️ Writing about your feelings';
          }
          
          // After 2 seconds, show completion message
          setTimeout(() => {
            // Update emotional stat
            updateHealthStat('emotional', 30);
            
            // Show result message
            if (emotionalActivityTitle) {
              emotionalActivityTitle.textContent = '🌟 Great Job!';
            }
            
            if (emotionalActivityMessage) {
              emotionalActivityMessage.textContent = 'Zenzy feels better knowing you expressed yourself! 💛';
            }
          }, 2000);
          
          // Close modal after 4 seconds total
          setTimeout(() => {
            hideModal(emotionalActivityResultModal);
            setRandomZenzyEmotion();
            feelingsInput.value = ''; // Clear the input
          }, 4500);
        };
      }

      // Drawing for Feelings Activity
      const completeEmotionalDrawing = document.getElementById('completeEmotionalDrawing');
      let currentActivityType = '';
      
      if (completeEmotionalDrawing) {
        completeEmotionalDrawing.onclick = function() {
          hideModal(drawingModal);
          // Show result modal with loading state
          showModal(emotionalActivityResultModal);
          if (emotionalActivityTitle) {
            emotionalActivityTitle.textContent = 'Activity in progress...';
          }
          if (emotionalActivityMessage) {
            emotionalActivityMessage.textContent = '🎨 Drawing about your feelings';
          }
          
          // After 2 seconds, show completion message
          setTimeout(() => {
            // Update emotional stat
            updateHealthStat('emotional', 30);
            
            // Show result message
            if (emotionalActivityTitle) {
              emotionalActivityTitle.textContent = '🌟 Great Job!';
            }
            
            if (emotionalActivityMessage) {
              emotionalActivityMessage.textContent = 'Zenzy loves your beautiful expression of emotions! 🌈';
            }
          }, 2000);
          
          // Close modal after 4 seconds total
          setTimeout(() => {
            hideModal(emotionalActivityResultModal);
            setRandomZenzyEmotion();
            emotionalDrawingApp.clearCanvas(); // Clear the canvas
          }, 4500);
        };
      }

      if (goToMissionsBtn) {
        goToMissionsBtn.addEventListener('click', function(e) {
          e.preventDefault();
          hideModal(insufficientZpModal);
          beginHabitatMissionPromptFlow();
          showScreen(missionsScreen);
        });
      }

      if (goToToolboxBtn) {
        goToToolboxBtn.onclick = function() {
          hideModal(insufficientZpModal);
          showScreen(toolboxScreen);
        };
      }

      if (zenzyMissionHabitatMore) {
        zenzyMissionHabitatMore.onclick = function() {
          hideModal(zenzyMissionHabitatModal);
        };
      }

      if (zenzyMissionHabitatReturn) {
        zenzyMissionHabitatReturn.onclick = function() {
          hideModal(zenzyMissionHabitatModal);
          setHabitatMissionPromptState(false, false, 0);
          showScreen(petShop);
          syncZenzyShopIntroState();
        };
      }

      if (weeklyMissionBtn) {
        weeklyMissionBtn.onclick = function(e) {
          e.stopPropagation();
          openWeeklyMissionPage();
        };
      }

      if (weeklyMissionBackBtn) {
        weeklyMissionBackBtn.onclick = function() {
          closeWeeklyMissionPage();
        };
      }

      if (weeklyMissionDayDots && weeklyMissionDayDots.length) {
        weeklyMissionDayDots.forEach(function(dotBtn) {
          dotBtn.addEventListener('click', function() {
            const dayIndex = parseInt(dotBtn.dataset.dayIndex || '0', 10) || 0;
            const state = getWeeklyMissionState();
            if (!isWeeklyMissionDayUnlocked(state, dayIndex)) {
              return;
            }
            selectedWeeklyMissionDayIndex = Math.max(0, Math.min(6, dayIndex));
            renderWeeklyMission();
          });
        });
      }

      if (takeZenzyHomeBtn) {
        takeZenzyHomeBtn.onclick = function(e) {
          e.stopPropagation();
          if (isZenzyHomeUnlocked()) {
            toggleZenzyShopViewMode();
            renderZenzyToys();
            enableZenzyAvatarDrag();
            updateRoomNavigationUi();
            return;
          }
          if (zenzyHomeConfirmModal) {
            showModal(zenzyHomeConfirmModal);
          }
        };
      }

      if (prevZenzyRoomBtn) {
        prevZenzyRoomBtn.onclick = function(e) {
          e.stopPropagation();
          if (!isZenzyHomeUnlocked()) return;
          cycleZenzyRoom(-1);
        };
      }

      if (nextZenzyRoomBtn) {
        nextZenzyRoomBtn.onclick = function(e) {
          e.stopPropagation();
          if (!isZenzyHomeUnlocked()) return;
          cycleZenzyRoom(1);
        };
      }

      if (switchZenzyRoomBtn) {
        switchZenzyRoomBtn.onclick = function(e) {
          e.stopPropagation();
          if (!isZenzyHomeUnlocked()) return;
          cycleZenzyRoom(1);
        };
      }

      if (addZenzyRoomBtn) {
        addZenzyRoomBtn.onclick = function(e) {
          e.stopPropagation();
          if (!isZenzyHomeUnlocked()) return;
          if (!spendCoins(ROOM_BUILD_COST_ZP)) {
            showInsufficientZpModal();
            return;
          }
          const roomNumber = getZenzyRooms().length + 1;
          const enteredName = window.prompt('Name your new room:', `Room ${roomNumber}`) || '';
          createZenzyRoom(enteredName);
          applyCurrentZenzyRoomToStorage();
          applyDecor();
          applyZenzyShopViewMode('room');
          updateTakeHomeButton();
          updateRoomNavigationUi();
          updateShopSectionsVisibility();
          setShopMessage(`New room added: ${getCurrentZenzyRoomName()}`);
        };
      }

      if (zenzyHomeConfirmNo) {
        zenzyHomeConfirmNo.onclick = function() {
          hideModal(zenzyHomeConfirmModal);
          pendingHabitatChangeFlow = false;
          resetZenzyHabitatModalContent();
        };
      }

      if (zenzyHomeConfirmYes) {
        zenzyHomeConfirmYes.onclick = function() {
          if (pendingHabitatChangeFlow) {
            pendingHabitatChangeFlow = false;
            hideModal(zenzyHomeConfirmModal);
            if (zenzyHomeModalText) {
              zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
            }
            showModal(zenzyHomeModal);
            resetZenzyHabitatModalContent();
            return;
          }

          hideModal(zenzyHomeConfirmModal);
          if (spendCoins(ROOM_BUILD_COST_ZP)) {
            localStorage.setItem('zenzyHomeUnlocked', 'true');
            localStorage.setItem('zenzyDecorateHintActive', 'true');
            localStorage.removeItem('zenzyRoomBuildPromptActive');
            setHabitatMissionPromptState(false, false, 0);
            clearHabitatReturnGuidance();
            markZenzyHabitatChanged();
            const firstRoomName = window.prompt('Name your room:', 'Room 1') || '';
            createZenzyRoom(firstRoomName);
            applyCurrentZenzyRoomToStorage();
            setZenzyBackgroundImage('Images/Backgrounds/Forest%20Background.png');
            applyZenzyShopViewMode('room');
            updateTakeHomeButton();
            updateShopSectionsVisibility();
            updateWeeklyMissionButtonState();
            updateCounts();
            
            // First: celebrate and thank the user
            setZenzyCelebrating();
            if (zenzySpeech) {
              zenzySpeech.textContent = 'Thank you for helping me!';
            }
            
            // After 3 seconds: get sad and ask for room decoration
            setTimeout(function() {
              const sadIndex = zenzyEmotions.findIndex(e => e.id === 'sad');
              if (sadIndex >= 0) {
                setZenzyEmotion(sadIndex);
              }
              if (zenzySpeech) {
                zenzySpeech.textContent = 'I wish my room was cosier. Can you help me decorate?';
              }
              const decorateSection = document.getElementById('decorateRoomSection');
              if (decorateSection) {
                decorateSection.classList.remove('collapsed');
                decorateSection.classList.add('decorate-attention');
              }
              
              // Show arrow pointing to decoration sections
              showDecorateArrow();
              
              // Remove arrow after 10 seconds
              setTimeout(function() {
                hideDecorateArrow();
              }, 10000);
            }, 3000);
          } else if (zenzyHomeModal) {
            if (zenzyHomeModalText) {
              zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
            }
            showModal(zenzyHomeModal);
          }
        };
      }

      if (decorButtons && decorButtons.length) {
        decorButtons.forEach(function(btn) {
          btn.onclick = function(e) {
            e.stopPropagation();
            const type = btn.dataset.type;
            const color = btn.dataset.color;
            if (!type || !color) return;
            if (spendCoins(100)) {
              if (type === 'wallpaper') {
                localStorage.setItem('zenzyWallpaper', color);
              } else if (type === 'carpet') {
                localStorage.setItem('zenzyCarpet', color);
              }
              const decorateSection = document.getElementById('decorateRoomSection');
              if (decorateSection) {
                decorateSection.classList.remove('decorate-attention');
              }
              updateCurrentZenzyRoomDecor(type, color);
              localStorage.setItem('zenzyDecorateHintActive', 'false');
              applyDecor();
              syncZenzyShopIntroState();
              updateWeeklyMissionButtonState();
              updateZenzyAfterPurchase('The room looks cozy!');
            } else {
              showInsufficientZpModal();
            }
          };
        });
      }

      if (toyButtons && toyButtons.length) {
        toyButtons.forEach(function(btn) {
          btn.onclick = function(e) {
            e.stopPropagation();
            const toy = btn.dataset.toy || 'toy';
            const cost = parseInt(btn.dataset.cost || '0', 10);
            if (spendCoins(cost)) {
              let toys = [];
              try { toys = JSON.parse(localStorage.getItem('zenzyToys') || '[]'); } catch (err) { toys = []; }
              if (toys.indexOf(toy) === -1) {
                toys.push(toy);
                localStorage.setItem('zenzyToys', JSON.stringify(toys));
              }
              if (toy === 'art-supplies') {
                localStorage.setItem('zenzyHasArtSupplies', 'true');
                if (doArtBtn) doArtBtn.style.display = 'inline-block';
              }
              if (toy === 'books') {
                localStorage.setItem('zenzyHasBooks', 'true');
                if (readZenzyBtn) readZenzyBtn.style.display = 'inline-block';
              }
              if (toy === 'pc' || toy === 'computer') {
                localStorage.setItem('zenzyHasPC', 'true');
                if (playPCBtn) playPCBtn.style.display = 'inline-block';
              }
              renderZenzyToys();
              updateZenzyAfterPurchase('New toy! Zenzy is excited.');
            } else {
              showInsufficientZpModal();
            }
          };
        });
      }

      if (dayOutButtons && dayOutButtons.length) {
        dayOutButtons.forEach(function(btn) {
          btn.onclick = function(e) {
            e.stopPropagation();
            const location = btn.dataset.location;

            if (location === 'home') {
              localStorage.setItem('zenzyOnDayOut', '');
              applyZenzyShopViewMode('room');
              updateTakeHomeButton();
              syncZenzyShopIntroState();
              enableZenzyAvatarDrag();
              setShopMessage('Welcome home!');
              return;
            }

            const habitatCost = parseInt(btn.dataset.cost || '100', 10) || 100;
            if (!spendCoins(habitatCost)) {
                showInsufficientZpModal();
              return;
            }

            const backgroundMap = {
              forest: 'Images/Backgrounds/Forest%20Background.png',
              park: 'Images/Backgrounds/Park%20background.png',
              beach: 'Images/Backgrounds/BEACH%20BACKGROUND.png',
              mountain: 'Images/Backgrounds/MOUNTAIN%20BACKGROUND.png',
              snowy: 'Images/Backgrounds/SNOWY%20BACKGROUND.png'
            };
            const bgImage = backgroundMap[location] || 'Images/Backgrounds/Junkyard.png';

            clearHabitatReturnGuidance();
            setHabitatMissionPromptState(false, false, 0);
            markZenzyHabitatChanged();
            setZenzyBackgroundImage(bgImage);
            applyZenzyShopViewMode('habitat');
            localStorage.removeItem(getZenzyAvatarPositionKey());
            if (zenzyAvatar) {
              zenzyAvatar.style.left = '50%';
              zenzyAvatar.style.bottom = '0px';
              zenzyAvatar.style.transform = 'translateX(-50%)';
            }
            updateSelectedHabitatButtonState();
            updateHealthStat('activity', 10);
            updateHealthStat('emotional', 15);
            updateHealthStat('social', 8);
            localStorage.setItem('zenzyRoomBuildPromptActive', 'true');
            localStorage.setItem('zenzySpeechOverride', ROOM_BUILD_COLD_PROMPT);
            activateHabitatThankYouSpeech(HABITAT_THANK_YOU_DURATION_MS);
            lockZenzyEmotionState('celebration', HABITAT_THANK_YOU_DURATION_MS, HABITAT_THANK_YOU_PROMPT);
            scheduleColdRoomPromptAfterHabitatChange();
            updateTakeHomeButton();
            syncZenzyShopIntroState();
            requestAnimationFrame(updateZenzySpeechBubblePosition);
            requestAnimationFrame(updateZenzyDragHandlePosition);
            setShopMessage('New habitat unlocked!');
          };
        });
      }

      if (!archiveEggAndEvolveFeatures && searchEggBtn) {
        searchEggBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (spendCoins(500)) {
            updateZenzyAfterPurchase('Searching for eggs...');
            // Increment total visits on each search
            const totalVisits = parseInt(localStorage.getItem('eggHuntTotalVisits') || '0', 10);
            localStorage.setItem('eggHuntTotalVisits', (totalVisits + 1).toString());
            const savedIndex = parseInt(localStorage.getItem('eggHuntIndex') || '0', 10) || 0;
            setEggHuntBackground(savedIndex);
            showScreen(eggHuntScreen);
          } else {
            showInsufficientZpModal();
          }
        });
      }

      if (!archiveEggAndEvolveFeatures && evolveZenzyBtn) {
        evolveZenzyBtn.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (spendCoins(1000)) {
            const evolvedSet = createRandomEvolvedSet();
            localStorage.setItem('zenzyEvolvedSet', JSON.stringify(evolvedSet));
            if (zenzyAvatar) {
              zenzyAvatar.src = evolvedSet.normal || zenzyAvatar.src;
            }
            setZenzyCelebrating();
            setTimeout(function() {
              setRandomZenzyEmotion();
              requestAnimationFrame(updateZenzyDragHandlePosition);
            }, 1200);
            setShopMessage('Zenzy evolved permanently!');
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (!archiveEggAndEvolveFeatures && combineEggBtn) {
        combineEggBtn.onclick = function(e) {
          e.stopPropagation();
          const inventory = getInventoryCounts();
          if (inventory.eggCount <= 0) {
            setShopMessage('No eggs available.', true);
            return;
          }
          
          // Use one egg to power up current zenzy
          const updatedInventory = adjustInventoryCounts({ eggDelta: -1, zenzyDelta: 0 });
          const newEggCount = updatedInventory.eggCount;

          // Place egg with Zenzy in the room
          if (zenzyStageEl) {
            const existingEgg = document.getElementById('zenzyEggGift');
            if (existingEgg) existingEgg.remove();
            const eggImg = document.createElement('img');
            eggImg.id = 'zenzyEggGift';
            eggImg.src = 'Images/Other%20image/Egg.png';
            eggImg.alt = 'Zenzy egg';
            eggImg.style.position = 'absolute';
            eggImg.style.width = '60px';
            eggImg.style.height = 'auto';
            eggImg.style.left = '62%';
            eggImg.style.bottom = '18px';
            eggImg.style.zIndex = '18';
            eggImg.style.pointerEvents = 'none';
            zenzyStageEl.appendChild(eggImg);
            eggImg.style.pointerEvents = 'auto';
            enableZenzyEggDrag(eggImg);
          }
          
          // Show celebration
          showCelebration('Egg combined with Zenzy! Zenzy is now more powerful! ✨');
          
          // Hide buttons if no eggs left
          if (newEggCount === 0) {
            if (combineEggBtn) combineEggBtn.style.display = 'none';
            if (hatchEggBtn) hatchEggBtn.style.display = 'none';
          }
        };
      }

      if (!archiveEggAndEvolveFeatures && hatchEggBtn) {
        hatchEggBtn.onclick = function(e) {
          e.stopPropagation();
          const inventory = getInventoryCounts();
          if (inventory.eggCount <= 0) {
            setShopMessage('No eggs available.', true);
            return;
          }
          
          if (spendCoins(10000)) {
            // Use one egg to hatch a new zenzy
            const updatedInventory = adjustInventoryCounts({ eggDelta: -1, zenzyDelta: 1 });
            const newEggCount = updatedInventory.eggCount;
            const newZenzyCount = updatedInventory.zenzyCount;

            if (zenzyHatchingText) zenzyHatchingText.textContent = 'Your egg is hatching!';
            if (zenzyHatchingImageModal) {
              zenzyHatchingImageModal.src = 'Images/Other%20image/Egg.png';
            }
            if (zenzyHatchingModal) showModal(zenzyHatchingModal);

            setTimeout(function() {
              if (zenzyHatchingImageModal) {
                zenzyHatchingImageModal.src = 'Images/Other%20image/Cracking%20egg%201.png';
              }
            }, 900);

            setTimeout(function() {
              if (zenzyHatchingImageModal) {
                zenzyHatchingImageModal.src = 'New%20zenzy.png';
              }
            }, 1800);

            setTimeout(function() {
              if (zenzyHatchingImageModal) {
                zenzyHatchingImageModal.src = 'New%20zenzy.png';
              }
            }, 2800);

            setTimeout(function() {
              if (zenzyHatchingModal) hideModal(zenzyHatchingModal);
              addBabyZenzyToStage();
              showScreen(petShop);
              showCelebration('A new baby Zenzy hatched! You now have ' + newZenzyCount + ' Zenzies! 🐣');
            }, 3600);
            
            // Hide buttons if no eggs left
            if (newEggCount === 0) {
              if (combineEggBtn) combineEggBtn.style.display = 'none';
              if (hatchEggBtn) hatchEggBtn.style.display = 'none';
            }
          } else {
            showInsufficientZpModal();
          }
        };
      }

      if (!archiveEggAndEvolveFeatures && eggHuntNext) {
        eggHuntNext.onclick = function() {
          const current = parseInt(localStorage.getItem('eggHuntIndex') || '0', 10) || 0;
          const nextIndex = (current + 1) % eggHuntBackgrounds.length;
          
          // Increment total visits counter
          const totalVisits = parseInt(localStorage.getItem('eggHuntTotalVisits') || '0', 10);
          localStorage.setItem('eggHuntTotalVisits', (totalVisits + 1).toString());
          
          setEggHuntBackground(nextIndex);
        };
      }

      if (!archiveEggAndEvolveFeatures && eggHuntCollect) {
        eggHuntCollect.onclick = function() {
          // Award coins for collecting egg
          awardCoins(500);
          
          // Track collected egg in localStorage
          adjustInventoryCounts({ eggDelta: 1, zenzyDelta: 0 });
          if (eggHuntEgg) eggHuntEgg.style.display = 'none';
          if (eggHuntCollect) eggHuntCollect.style.display = 'none';
          showCelebration(function(){
            showScreen(petShop);
          }, 20, 'Congratulations! You found a Zenzy egg!');
        };
      }

      if (!archiveEggAndEvolveFeatures && zenzyEggClick) {
        zenzyEggClick.onclick = function() {
          zenzyEggTapCount += 1;
          if (zenzyEggTapCount < 3) return;
          zenzyEggTapCount = 0;
          showModal(zenzyHelpModal);
        };
      }

      if (zenzyAvatar) {
        zenzyAvatar.addEventListener('click', function(e) {
          if (!archiveEggAndEvolveFeatures && (zenzyStage === 'egg' || zenzyStage === 'helping' || zenzyStage === 'adopt_ready')) {
            e.stopPropagation();
            zenzyEggTapCount += 1;
            if (zenzyEggTapCount < 3) return;
            zenzyEggTapCount = 0;
            showModal(zenzyHelpModal);
            return;
          }
          if (!archiveEggAndEvolveFeatures && zenzyStage === 'ready_collect') {
            e.stopPropagation();
            readyCollectTapCount += 1;
            if (readyCollectTapCount >= 3) {
              readyCollectTapCount = 0;
              showModal(zenzyCollectedModal);
            }
            return;
          }
          if (!archiveEggAndEvolveFeatures && shouldPromptZenzyAdoption()) {
            e.stopPropagation();
            readyCollectTapCount = 0;
            showModal(zenzyAdoptConfirmModal);
            return;
          }
          if (shouldPromptZenzyHabitatByTap()) {
            e.stopPropagation();
            if ((parseInt(localStorage.getItem('coins') || '0', 10) || 0) < ROOM_BUILD_COST_ZP) {
              if (zenzyHomeModalText) {
                zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
              }
              showModal(zenzyHomeModal);
            } else {
              setShopMessage(`You have enough ZP! Tap Build Room (${ROOM_BUILD_COST_ZP} ZP) below.`);
            }
            return;
          }
          if (!archiveEggAndEvolveFeatures && zenzyStage === 'cracked_ready_hatch') {
            e.stopPropagation();
            zenzyEggTapCount += 1;
            if (zenzyEggTapCount < 3) return;
            zenzyEggTapCount = 0;
            startZenzyShopHatchingSequence();
          }
        });
      }

      if (!archiveEggAndEvolveFeatures && zenzyEggHint) {
        zenzyEggHint.addEventListener('click', function(e) {
          if (!shouldPromptZenzyAdoption()) return;
          e.preventDefault();
          e.stopPropagation();
          showModal(zenzyAdoptConfirmModal);
        });
      }

      if (!archiveEggAndEvolveFeatures && zenzyHelpNo) {
        zenzyHelpNo.onclick = function() {
          hideModal(zenzyHelpModal);
        };
      }

      if (!archiveEggAndEvolveFeatures && zenzyHelpYes) {
        zenzyHelpYes.onclick = function() {
          hideModal(zenzyHelpModal);
          setZenzyStage('helping');
          goToDailyCheckinFromEgg();
        };
      }

      if (!archiveEggAndEvolveFeatures && zenzyCollectedOk) {
        zenzyCollectedOk.onclick = function() {
          if (!spendCoins(ZENZY_EGG_COLLECT_COST_ZP)) {
            hideModal(zenzyCollectedModal);
            if (zenzyHomeModalText) {
              zenzyHomeModalText.textContent = 'Not enough ZP. Complete Missions or Use Toolbox to earn ZP.';
            }
            showModal(zenzyHomeModal);
            return;
          }
          hideModal(zenzyCollectedModal);
          adjustInventoryCounts({ eggDelta: 1, zenzyDelta: 0 });
          setZenzyStage('cracked_ready_hatch');
          syncZenzyShopIntroState();
        };
      }

      if (!archiveEggAndEvolveFeatures && zenzyHelpInfoOk) {
        zenzyHelpInfoOk.onclick = function() {
          hideModal(zenzyHelpInfo);
          goToDailyCheckinFromEgg();
        };
      }

      function goToDailyCheckinFromEgg() {
        if (petShop) petShop.style.display = 'none';
        if (homeScreen) homeScreen.style.display = 'none';
        if (reasonScreen) reasonScreen.style.display = 'none';
        if (mindfulnessScreen) mindfulnessScreen.style.display = 'none';
        if (gratitudeScreen) gratitudeScreen.style.display = 'none';
        if (getMovingScreen) getMovingScreen.style.display = 'none';
        if (amazingMeScreen) amazingMeScreen.style.display = 'none';
        showScreen(checkinScreen);
      }

      if (zenzyHomeModalOk) {
        zenzyHomeModalOk.onclick = function() {
          hideModal(zenzyHomeModal);
          resetZenzyHabitatModalContent();
          beginHabitatMissionPromptFlow();
          showScreen(toolboxScreen);
        };
      }

      if (zenzyHomeModalMissions) {
        zenzyHomeModalMissions.onclick = function() {
          hideModal(zenzyHomeModal);
          resetZenzyHabitatModalContent();
          beginHabitatMissionPromptFlow();
          showScreen(missionsScreen);
        };
      }

      if (!archiveEggAndEvolveFeatures && collectZenzyBtn) {
        collectZenzyBtn.onclick = function() {
          if (!spendCoins(ZENZY_EGG_COLLECT_COST_ZP)) {
            if (zenzyHelpInfo) showModal(zenzyHelpInfo);
            return;
          }
          // Show celebration first
          showCelebration(function() {
            // After celebration, show hatching message
            if (zenzyHatchingModal) {
              showModal(zenzyHatchingModal);
            }
            
            // Wait 2 seconds, then start hatching sequence
            setTimeout(function() {
              if (zenzyHatchingModal) {
                hideModal(zenzyHatchingModal);
              }
              setZenzyStage('adopting');
              if (adoptMessage) adoptMessage.textContent = '';
              if (zenzyStatusText) zenzyStatusText.textContent = 'It is hatching...';
              if (zenzyEggState) zenzyEggState.style.display = 'flex';
              if (zenzySadState) zenzySadState.style.display = 'none';
              showScreen(zenzyPage);
              playCrackingSequence(function() {
                showScreen(petAdoptionScreen);
              });
            }, 2000);
          }, 0, `-${ZENZY_EGG_COLLECT_COST_ZP} ZP`);
        };
      }

      if (!archiveEggAndEvolveFeatures && adoptZenzyBtn) {
        adoptZenzyBtn.onclick = function() {
          const nameValue = zenzyNameInput ? zenzyNameInput.value.trim() : '';
          if (nameValue.length < 2) {
            if (adoptMessage) {
              adoptMessage.textContent = 'Please enter a name with at least 2 letters.';
            }
            return;
          }
          if (adoptMessage) {
            adoptMessage.textContent = '';
          }
          localStorage.setItem('zenzyName', nameValue);
          localStorage.setItem('zenzyHomeUnlocked', 'false');
          localStorage.setItem('zenzyHabitatChanged', 'false');
          localStorage.setItem('zenzyHabitatPromptShown', 'false');
          setHabitatMissionPromptState(false, false, 0);
          clearHabitatReturnGuidance();
          localStorage.removeItem('zenzyAdoptionSpeechShownAt');
          setZenzyBackgroundImage('Images/Backgrounds/Junkyard.png');
          updateSelectedHabitatButtonState();
          setZenzyStage('adopted');
          localStorage.setItem('zenzyShopViewMode', 'habitat');
          localStorage.setItem('zenzySpeechOverride', ADOPTION_HABITAT_PROMPT);
          setAdoptedZenzyState();
          applyZenzyShopViewMode('habitat');
          updateZenzyNameDisplays();
          updateHomeZenzyVisibility();
          updateTakeHomeButton();
          updateShopSectionsVisibility();
          updateCounts();
          enableZenzyAvatarDrag();
          updateHealthBars();
          syncZenzyShopIntroState();
          refreshZenzySpeechLock();
          // Show Zenzy in junkyard with only Take Zenzy home option
          showScreen(petShop);
          renderZenzyAppearance();
        };
      }

      if (!archiveEggAndEvolveFeatures && zenzyAdoptYes) {
        zenzyAdoptYes.onclick = function() {
          hideModal(zenzyAdoptConfirmModal);
          showScreen(petAdoptionScreen);
        };
      }

      // Initialize exzenzyble shop sections
      function setupShopSectionToggles() {
        const decorateSection = document.getElementById('decorateRoomSection');
        if (!decorateSection) return;
        decorateSection.classList.remove('toggle-enabled', 'collapsed');
      }
      setupMiniGames();
      setupShopSectionToggles();
      openZenzyPetShop();
      restoreRefreshState(savedRefreshState);
      refreshStateReady = true;
      saveRefreshState();

      function saveRefreshState(){
        if(!refreshStateReady) return;
        const screen = Array.from(allScreens).find(function(item){
          return window.getComputedStyle(item).display !== 'none';
        });
        if(!screen || !screen.id) return;
        const privateProblemScreen = screen === helpScreen || screen === problemActionsScreen || problemSolverActivityInProgress;
        const fields = [];
        if(!privateProblemScreen){
          screen.querySelectorAll('input[id], textarea[id], select[id]').forEach(function(input){
            if(input.type === 'password' || input.type === 'file') return;
            fields.push({ id: input.id, value: input.value, checked: input.checked });
          });
        }
        const selected = Array.from(screen.querySelectorAll('button.selected, button[aria-pressed="true"]')).map(function(button){
          const card = button.closest('.circle-quiz-question');
          const cards = screen.querySelectorAll('.circle-quiz-question');
          return { id: button.id, text: button.textContent.trim(), card: card ? Array.from(cards).indexOf(card) : -1 };
        });
        const modal = [redPromptModal, bluePromptModal].find(function(item){
          return item && window.getComputedStyle(item).display !== 'none';
        });
        const state = {
          screen: screen.id, fields: fields, selected: selected,
          color: currentActivityColor, fromColor: fromRedActivities,
          fromProblem: problemSolverActivityInProgress,
          problemCheckIn: problemDistractionCheckIn,
          decisionOrigin: problemDecisionOrigin === distortionsScreen ? 'distortionsScreen' : 'help',
          mindfulness: currentMindfulnessType,
          movingPrompt: movingPrompt ? movingPrompt.textContent : '',
          quest: activeQuestActivity ? { questId: activeQuestActivity.questId, index: activeQuestActivity.index, step: circleFollowupStep } : null,
          modal: modal ? modal.id : ''
        };
        try { sessionStorage.setItem(refreshStateKey, JSON.stringify(state)); }
        catch(error){ console.error('Unable to save the session view.', error); }
      }

      function restoreRefreshState(state){
        if(!state || typeof state.screen !== 'string') return;
        const target = document.getElementById(state.screen);
        if(!target || !target.classList.contains('screen')) return;
        fromRedActivities = state.fromColor === true;
        currentActivityColor = ['red', 'blue', 'green'].indexOf(state.color) >= 0 ? state.color : '';
        problemSolverActivityInProgress = state.fromProblem === true;
        problemDistractionCheckIn = state.problemCheckIn === true;
        problemDecisionOrigin = state.decisionOrigin === 'distortionsScreen' ? distortionsScreen : helpScreen;
        if(state.quest && circleSegmentTitles[state.quest.questId] && Number.isInteger(state.quest.index) && state.quest.index >= 0 && state.quest.index < 10){
          openQuestStep(state.quest.questId, state.quest.index);
          if(state.screen === 'circleFollowupScreen' && state.quest.step > 1){
            if(state.quest.questId === 'friendship' && friendshipPerspectiveActivities[state.quest.index]) showFriendshipPerspectiveActivity(state.quest.step);
            else if(specialMissionActivities[state.quest.questId] && specialMissionActivities[state.quest.questId][state.quest.index]) showSpecialMissionActivity(state.quest.step);
            else if(circleFollowupThemes[state.quest.questId]) showCircleFollowup(state.quest.step);
          }
        } else {
          showScreen(target);
          if(target === mindfulnessScreen || target === hotChocolateScreen){
            setMindfulnessActivity(state.mindfulness || (target === hotChocolateScreen ? 'hotChocolate' : 'breathing'));
          } else if(target === puzzleScreen){
            generateRandomPuzzle();
          } else if(target === getMovingScreen){
            if(movingPrompt && typeof state.movingPrompt === 'string' && state.movingPrompt) movingPrompt.textContent = state.movingPrompt;
            else setMovingActivity();
          }
        }
        const visible = Array.from(allScreens).find(function(item){ return window.getComputedStyle(item).display !== 'none'; });
        if(visible && Array.isArray(state.fields)){
          state.fields.forEach(function(field){
            const input = document.getElementById(field.id);
            if(!input || !visible.contains(input)) return;
            if(input.type === 'checkbox' || input.type === 'radio') input.checked = !!field.checked;
            else input.value = field.value;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
          });
        }
        if(visible && Array.isArray(state.selected)){
          state.selected.forEach(function(saved){
            const cards = visible.querySelectorAll('.circle-quiz-question');
            const scope = saved.card >= 0 && cards[saved.card] ? cards[saved.card] : visible;
            const button = saved.id ? document.getElementById(saved.id) : Array.from(scope.querySelectorAll('button')).find(function(item){ return item.textContent.trim() === saved.text; });
            if(button && visible.contains(button) && !button.disabled) button.click();
          });
        }
        if(state.modal === 'redPromptModal') showModal(redPromptModal);
        else if(state.modal === 'bluePromptModal') showModal(bluePromptModal);
      }

      document.addEventListener('input', saveRefreshState);
      document.addEventListener('change', saveRefreshState);
      document.addEventListener('click', function(){ setTimeout(saveRefreshState, 0); });
      window.addEventListener('pagehide', function(){
        saveRefreshState();
        if(movingTimerInterval){ clearInterval(movingTimerInterval); movingTimerInterval = null; }
        stopHotChocolateBreathing();
        stopBreathingCycle();
        stopSquareCycle();
        stopPushWallTimer();
        stopMeditateTimer();
        stopBlueSpinTimer();
      });
    });
