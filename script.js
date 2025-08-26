// =================================================================================
// 퀴즈 데이터 (2024년 8월 25일 업데이트)
// =================================================================================
const quizData = [
    // 1라운드: 시편에 대하여 (8문제)
    { // 0
        type: 'multiple-choice', 
        question: "시편 중 예수님의 십자가 고난과 실제적인 연관이 있는 시는 몇 편입니까?", 
        options: ["시편 12편", "시편 22편", "시편 33편", "시편 43편"], 
        answerIndex: 1, 
        hint: "엘리 엘리 라마 사박다니",
        youtube: "Ivp6Tb3pc24"
    },
    { // 1
        bonus: true, 
        question: "'마스길'이란 히브리어는 무슨 뜻입니까?", 
        answer: "교훈 또는 교훈시", 
        hint: "시편 32편의 표제를 참고하세요.",
        youtube: "lYM5nQwuZ90"
    },
    { // 2
        bonus: true, 
        question: "시편은 모두 몇 권, 몇 편으로 구성되어 있습니까?", 
        answer: "5권, 150편", 
        hint: "모세오경과 관련이 있습니다.",
        youtube: "C-DXVoQOnW8"
    },
    { // 3
        question: "성경 전체 가운데 가장 짧은 장은 어디입니까?", 
        answer: "시편 117편", 
        hint: "단 2절로 되어있습니다.",
        youtube: "B5kV3pk_7_s"
    },
    { // 4
        type: 'multiple-choice', 
        question: "다음 중 시편의 저자가 아닌 사람은 누구입니까?", 
        options: ["다윗", "엘리사", "모세", "솔로몬"], 
        answerIndex: 1, 
        hint: "열왕기하에 등장하는 선지자입니다.",
        youtube: "8cVZ-S3Z4-4"
    },
    { // 5
        bonus: true, 
        question: "할렐루야로 시작하여 할렐루야로 끝나는 '할렐루야 시'는 몇 개입니까?", 
        answer: "8개", 
        hint: "시편 106, 113, 135, 146-150편",
        youtube: "5zB7GuYv1Qk"
    },
    { // 6
        type: 'multiple-choice', 
        question: "시편 46편에 세 차례 반복되어 등장하는 구절은?", 
        options: ["만군의 여호와께서 우리와 함께 하시니", "새벽에 하나님이 도우시리로다", "너희는 가만히 있어 내가 하나님 됨을 알지어다", "하나님은 온 땅의 왕이시라"], 
        answerIndex: 0, 
        hint: "야곱의 하나님은 우리의 피난처시로다",
        youtube: "ElYObIDOUoM"
    },
    { // 7
        bonus: true, 
        question: "'할렐루야'의 뜻은 무엇입니까?", 
        answer: "여호와를 찬양하라", 
        hint: "시편의 마지막 편(150편)의 주제입니다.",
        youtube: "CeHkhgQdyGI"
    },

    // 2라운드: 우리를 향하여 (11문제)
    { // 8
        type: 'multiple-choice', 
        question: "광야에서 이스라엘 백성이 하나님을 시험하였던 장소와 관련 없는 것은?", 
        options: ["르비딤", "양식", "므리바", "맛사"], 
        answerIndex: 1, 
        hint: "시편 95편 8-9절",
        youtube: "rndS3FU-Qso"
    },
    { // 9
        bonus: true, 
        question: "다음은 악인의 운명에 관한 말씀입니다.<span class='context'>빈칸에 들어갈 말을 순서대로 말하세요.</span><span class='quote'>\"바람에 나는 (  )와 같고 (  )을 견디지 못하며\n(  )들의 모임에 들지 못하며 그 길은 (  )할 것이다\"</span>", 
        answer: "겨, 심판, 의인, 망", 
        hint: "시편 1편",
        youtube: "PrpqHpHTW3Q"
    },
    { // 10
        type: 'multiple-choice', 
        question: "다윗은 속이고 아첨하는 악인의 목구멍이 마치 무엇과 같다고 했습니까?", 
        options: ["용암을 내뿜는 화산", "오물을 쏟아내는 하수구", "열린 무덤", "독을 내뿜는 거미줄"], 
        answerIndex: 2, 
        hint: "시편 5편 9절",
        youtube: "FINEjhf4tN8"
    },
    { // 11
        type: 'multiple-choice', 
        question: "시편 9편에서 시인이 원하지 않는 것은 무엇입니까?", 
        options: ["하나님의 공의", "하나님 없는 인생들의 승리", "원수의 멸망", "이방 나라들의 심판"], 
        answerIndex: 1, 
        hint: "시편 9편 19절",
        youtube: "_zxVFaOS6Rg"
    },
    { // 12
        type: 'multiple-choice', 
        question: "악인들이 스스로 자랑하는 것은 무엇입니까?", 
        options: ["자기의 죄악이 드러나지 않을 것임", "자신의 연약함", "자신의 의로움", "악을 거절함"], 
        answerIndex: 0, 
        hint: "시편 36편 2절",
        youtube: "1M3IusEoXt8"
    },
    { // 13
        type: 'multiple-choice', 
        question: "행악자들에 대하여 불평하지 말아야 할 이유는?", 
        options: ["악인의 보복을 받을까봐", "남의 일에 간섭할 필요가 없기에", "악인의 번영은 일시적이기 때문에", "사람은 자신의 운명대로 사는 것이므로"], 
        answerIndex: 2, 
        hint: "시편 37편 1-2절",
        youtube: "NATmz9TGpdk"
    },
    { // 14
        question: "빈칸에 들어갈 말은?<span class='quote'>\"사람은 존귀하나 장구하지 못함이여 (         ) 같도다\"</span>", 
        answer: "멸망하는 짐승", 
        hint: "시편 49편 20절",
        youtube: "ISHuuFoLQbU"
    },
    { // 15
        question: "다윗이 밧세바와 동침한 후 지은 회개의 시는 시편 몇 편입니까?", 
        answer: "시편 51편", 
        hint: "시편의 표제에 기록되어 있습니다.",
        youtube: "XCw-swDk9Bs"
    },
    { // 16
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 궁정에서의 한 날이 다른 곳에서의 천 날보다 나음즉 악인의 장막에 사는 것보다 내 하나님의 성전 (   )로 있는 것이 좋사오니\"</span>", 
        answer: "문지기", 
        hint: "시편 84편 10절",
        youtube: "a4eUJNLjxjw"
    },
    { // 17
        bonus: true, 
        question: "빈칸을 순서대로 채우세요.<span class='quote'>\"우리의 연수가 칠십이요 강건하면 팔십이라도 그 연수의 자랑은 (  )와 (  )뿐이요 신속히 가니 우리가 (  )가나이다...우리에게 우리의 날 (  )함을 가르치사 지혜로운 마음을 얻게 하소서\"</span>", 
        answer: "수고, 슬픔, 날아, 계수", 
        hint: "시편 90편 10, 12절",
        youtube: "KWltmGAN3eY"
    },
    { // 18
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )은/는 장사의 수중의 화살 같으니\"</span>", 
        options: ["거짓된 혀", "젊은 자의 자식", "노인의 지혜", "부자의 재물"], 
        answerIndex: 1, 
        hint: "시편 127편 4절",
        youtube: "CYS9IxsR7P4"
    },

    // 3라운드: 하나님을 향하여 (10문제)
    { // 19
        type: 'multiple-choice', 
        question: "다윗은 기도할 때 어디를 향하여 손을 들고 기도하였습니까?", 
        options: ["하늘", "산", "주의 지성소", "궁전"], 
        answerIndex: 2, 
        hint: "시편 28편 2절",
        youtube: "wkdkMxGVOKQ"
    },
    { // 20
        question: "다윗이 대적들로부터 조롱당할 때 하나님께 고백한 내용입니다.<span class='context'>빈칸에 들어갈 말은 무엇입니까?</span><span class='quote'>\"여호와여 주는 나의 (  )시요 나의 (  )이시요\n나의 머리를 드시는 자이시니이다\"</span>", 
        answer: "방패, 영광", 
        hint: "시편 3편 3절",
        youtube: "R_Xu2ir5qqI"
    },
    { // 21
        type: 'multiple-choice', 
        question: "다음 번호에 해당하는 낱말 중 틀린 것은?<span class='quote'>\"여호와는 나의 (1)이시요 나의 (2)시요...\n내가 그 안에 피할 나의 바위시요 나의 (3)시요\n나의 (4)이시요 나의 산성이시로다\"</span>", 
        options: ["(1) 반석", "(2) 요새", "(3) 창", "(4) 구원의 뿔"], 
        answerIndex: 2, 
        hint: "시편 18편 2절",
        youtube: "jrfwR4i53w4"
    },
    { // 22
        bonus: true, 
        type: 'matching', 
        question: "하나님의 말씀에 대한 명칭과 그 기능을 연결하세요.", 
        answer: '1-ㄴ, 2-ㄷ, 3-ㄱ, 4-ㄹ', 
        hint: "시편 19편 7-8절",
        youtube: "StRI2O-dT50",
        matchingData: { 
            left: ['1. 여호와의 율법', '2. 여호와의 증거', '3. 여호와의 교훈', '4. 여호와의 계명'], 
            right: ['ㄱ. 마음을 기쁘게 함', 'ㄴ. 영혼을 소성시킴', 'ㄷ. 우둔한 자로 지혜롭게 함', 'ㄹ. 눈을 밝게 함'], 
            connections: [1, 2, 0, 3] 
        } 
    },
    { // 23
        type: 'multiple-choice', 
        question: "나머지 셋과 공통된 의미를 지닌 표현이 아닌 것은?", 
        options: ["거룩한 산", "하나님의 요새", "시온 산", "하나님의 성"], 
        answerIndex: 1, 
        hint: "시편 48편",
        youtube: "i0AgENR1FhM"
    },
    { // 24
        type: 'multiple-choice', 
        question: "하나님이 구하시는 제사는 다음 중 어느 것입니까?", 
        options: ["연약한 심령", "값비싼 번제", "상한 심령", "자신의 의"], 
        answerIndex: 2, 
        hint: "시편 51편 17절",
        youtube: "zkVzW3zGl3A"
    },
    { // 25
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )이 생명보다 나으므로\n내 입술이 주를 찬양할 것이라\"</span>", 
        options: ["골수와 기름진 것", "주의 인자하심", "탈취한 물건을 나누는 것", "주님의 권능"], 
        answerIndex: 1, 
        hint: "시편 63편 3절",
        youtube: "u1Zk32exTvg"
    },
    { // 26
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 권능의 날에 주의 백성이 거룩한 옷을 입고\n즐겁게 헌신하니 (         ) 같은\n주의 청년들이 주께 나오는도다\"</span>", 
        answer: "새벽 이슬", 
        hint: "시편 110편 3절",
        youtube: "QXhsA621WZA"
    },
    { // 27
        bonus: true, 
        question: "하나님의 지존하심을 나타내는 말씀입니다.<span class='context'>빈칸을 순서대로 채우세요.</span><span class='quote'>\"높은 곳에 앉으셨으나 (   ) 낮추사\n천지를 살피시고 (   ) 자를 먼지 더미에서 일으키시며\n궁핍한 자를 (   ) 더미에서 들어 세워...\"</span>", 
        answer: "스스로, 가난한, 거름", 
        hint: "시편 113편 5-7절",
        youtube: "AEf_pX52Z-0"
    },
    { // 28
        type: 'multiple-choice', 
        question: "주의 말씀에 대한 비유로 사용된 표현이 아닌 것은?", 
        options: ["등", "정금", "꿀", "소금"], 
        answerIndex: 3, 
        hint: "시편 119편",
        youtube: "cGUz6ByIxxw"
    }
];

// =================================================================================
// 라운드 구성 데이터 (2024년 8월 25일 업데이트)
// =================================================================================
const rounds = [
    { 
        title: "1라운드: 시편에 대하여", 
        description: "시편 자체의 구성, 특징, 배경 지식, 그리고 시편에 대한 기본적인 이해를 묻는 질문들입니다.", 
        questionIndices: [0, 1, 2, 3, 4, 5, 6, 7] // 8문제
    },
    { 
        title: "2라운드: 우리를 향하여", 
        description: "시편을 통해 배우는 인간의 삶, 회개, 죄, 운명, 지혜 등 '우리'의 내면과 삶의 태도에 대한 내용을 다룹니다.", 
        questionIndices: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] // 11문제
    },
    { 
        title: "3라운드: 하나님을 향하여", 
        description: "시편에 나타난 하나님의 성품, 이름, 속성, 하나님을 향한 우리의 고백과 찬양, 그리고 우리의 신앙적 태도를 다룹니다.", 
        questionIndices: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28] // 10문제
    }
];

// =================================================================================
// 라운드 완료 문구 (2024년 8월 25일 업데이트)
// =================================================================================
const roundPhrases = [
    "내잔이넘치나이다", 
    "주께서나와함께하심이라", 
    "여호와는나의목자시니"
];


// 상태 변수
let currentQuestionIndex = -1;
let currentRoundIndex = 0;
let teamScores = [0, 0, 0, 0];
let teamNames = ['1팀', '2팀', '3팀', '4팀'];
let incorrectAttempts = 0;
let currentYouTubeUrl = null;
let youtubeLoadTimeout;
let hasAnswerBeenRevealed = false;

// 게임 상태 관리
let gameState = {
    isGameStarted: false,
    savedTeamNames: ['1팀', '2팀', '3팀', '4팀'],
    savedTeamScores: [0, 0, 0, 0],
    currentScreen: 'start',
    roundStates: [
        { completedCount: 0, flippedCards: [] },
        { completedCount: 0, flippedCards: [] },
        { completedCount: 0, flippedCards: [] }
    ]
};

// 점수 입력 관련 변수
let selectedTeam = null;
let selectedScore = null;

// DOM 요소 변수
let startScreen, roundIntro, gameScreen, quizModal, questionView, answerView, answerBtn, questionViewBtn, feedbackModal, feedbackText;

// 초기화 함수
function init() {
    startScreen = document.getElementById('start-screen');
    roundIntro = document.getElementById('round-intro');
    gameScreen = document.getElementById('game-screen');
    quizModal = document.getElementById('quiz-modal');
    questionView = document.getElementById('question-view');
    answerView = document.getElementById('answer-view');
    answerBtn = document.getElementById('answer-btn');
    questionViewBtn = document.getElementById('question-view-btn');
    feedbackModal = document.getElementById('feedback-modal');
    feedbackText = document.getElementById('feedback-text');

    setupEventListeners();
    
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    roundIntro.classList.add('hidden');
    gameState.currentScreen = 'start';
}

// ✨ 사운드 재생 함수 수정: 매번 새로운 synth 인스턴스 생성
function playSound(notes, duration, synthType = 'Synth') {
    if (typeof Tone === 'undefined') return;
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    
    const synth = new Tone[synthType]().toDestination();
    const now = Tone.now();

    if (Array.isArray(notes)) {
        notes.forEach((note, i) => {
            synth.triggerAttackRelease(note, duration, now + i * 0.1);
        });
    } else {
        synth.triggerAttackRelease(notes, duration, now);
    }
    
    setTimeout(() => {
        if (synth) synth.dispose();
    }, (Array.isArray(notes) ? notes.length : 1) * 100 + 500);
}

const playFlipSound = () => playSound("G5", "16n");
const playCorrectSound = () => playSound(["C5", "E5", "G5"], "16n");
const playIncorrectSound = () => playSound(["A3", "E3"], "16n");
const playRoundStartSound = () => playSound(["C4", "E4", "G4"], "8n");

// ✨ 특별 보너스 사운드 효과
function playSpecialBonusSound() {
    if (typeof Tone === 'undefined') return;
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }

    const now = Tone.now();
    
    // 1. 메인 멜로디 (상승하는 아르페지오)
    const melodySynth = new Tone.Synth({
        oscillator: { type: 'fatsawtooth' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.2 }
    }).toDestination();
    const melodyNotes = ["C5", "E5", "G5", "C6", "E6", "G6", "C7"];
    melodyNotes.forEach((note, i) => {
        melodySynth.triggerAttackRelease(note, "16n", now + i * 0.1);
    });

    // 2. 벨 효과음 (마무리 악센트)
    const bellSynth = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.005, decay: 0.3, sustain: 0.1, release: 1 }
    }).toDestination();
    bellSynth.triggerAttackRelease("G7", "8n", now + melodyNotes.length * 0.1);

    setTimeout(() => {
        if (melodySynth) melodySynth.dispose();
        if (bellSynth) bellSynth.dispose();
    }, 1500);
}


// 이벤트 리스너 설정
function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('round-start-btn').addEventListener('click', startRound);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('next-round-btn').addEventListener('click', nextRound);
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    document.getElementById('show-score-status-btn').addEventListener('click', showScoreStatusModal);
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'youtube-btn') {
            toggleYoutube();
        }
    });
    answerBtn.addEventListener('click', showAnswerWithScoreInput);
    questionViewBtn.addEventListener('click', showQuestionView);
    quizModal.addEventListener('click', (e) => { if (e.target === quizModal) closeModal(); });
    feedbackModal.addEventListener('click', (e) => { if (e.target === feedbackModal) hideFeedback(); });
    document.addEventListener('keydown', handleKeyPress);
}

// 게임 시작
function startGame() { 
    if (typeof Tone !== 'undefined' && Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    const inputs = document.querySelectorAll('.team-name-input'); 
    inputs.forEach((input, index) => { if (input.value.trim()) teamNames[index] = input.value.trim(); }); 
    
    saveGameState();
    gameState.isGameStarted = true;
    
    teamScores = [0, 0, 0, 0]; 
    currentRoundIndex = 0; 
    startScreen.classList.add('hidden'); 
    showRoundIntro(); 
}

// 라운드 소개 화면 표시
function showRoundIntro() { 
    const round = rounds[currentRoundIndex]; 
    document.getElementById('round-title').textContent = round.title; 
    document.getElementById('round-description').innerHTML = round.description;
    roundIntro.classList.remove('hidden'); 
    gameScreen.classList.add('hidden'); 
    gameState.currentScreen = 'roundIntro';
}

// 라운드 시작
function startRound() { 
    try { playRoundStartSound(); } catch (error) { console.error("라운드 시작 사운드 재생 오류:", error); } 
    roundIntro.classList.add('hidden'); 
    gameScreen.classList.remove('hidden'); 
    gameState.currentScreen = 'game';
    
    setupRound();
}

// 다음 라운드로 이동
function nextRound() { 
    saveCurrentRoundState();
    
    if (currentRoundIndex < rounds.length - 1) { 
        currentRoundIndex++; 
        showRoundIntro(); 
    } else { 
        showFinalRanking(); 
    } 
}

// 게임 초기화
function resetGame() { 
    if (confirm('게임을 초기화하시겠습니까?')) location.reload(); 
}

// 라운드 설정
function setupRound() { 
    const round = rounds[currentRoundIndex]; 
    const quizGrid = document.getElementById('quiz-grid'); 
    const progressContainer = document.getElementById('round-progress-container'); 
    
    quizGrid.innerHTML = ''; 
    progressContainer.innerHTML = ''; 
    
    rounds.forEach((_, index) => { 
        const bookmark = document.createElement('button'); 
        bookmark.className = 'bookmark'; 
        bookmark.textContent = `${index + 1} 라운드`; 
        
        const roundState = gameState.roundStates[index];
        if (roundState && roundState.completedCount === rounds[index].questionIndices.length) {
            bookmark.classList.add('completed');
        }
        
        if (index === currentRoundIndex) {
            bookmark.classList.add('active');
        }
        
        bookmark.addEventListener('click', () => switchToRound(index));
        progressContainer.appendChild(bookmark); 
    }); 
    
    document.getElementById('next-round-btn').classList.add('hidden'); 
    
    round.questionIndices.forEach((qIndex, localIndex) => { 
        const data = quizData[qIndex]; 
        if (!data) return; 
        const card = createQuizCard(qIndex, localIndex, data); 
        quizGrid.appendChild(card); 
    }); 

    restoreRoundState(currentRoundIndex);
}

// 퀴즈 카드 생성
function createQuizCard(qIndex, localIndex, data) { 
    const card = document.createElement('div'); 
    card.className = 'quiz-card'; 
    card.dataset.index = qIndex; 
    card.innerHTML = `<div class="quiz-card-inner"><div class="quiz-card-face quiz-card-front ${data.bonus ? 'bonus' : ''}"><span class="card-number">${localIndex + 1}</span></div><div class="quiz-card-face quiz-card-back"></div></div>`; 
    
    card.addEventListener('click', () => { 
        if (card.classList.contains('flipped')) {
            openQuizModalWithScoreInput(qIndex);
            return;
        }

        try { playFlipSound(); } catch (e) { console.error(e); }
        card.classList.add('flipped');
        
        if (data.bonus) {
            const animation = document.createElement('div');
            animation.className = 'bonus-animation-fullscreen';
            // ✨ SVG 인라인 코드로 순금 면류관 구현
            animation.innerHTML = `
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="gold_grad_crown" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style="stop-color:rgb(255,255,224);stop-opacity:1" />
                            <stop offset="50%" style="stop-color:rgb(255,215,0);stop-opacity:1" />
                            <stop offset="100%" style="stop-color:rgb(184,134,11);stop-opacity:1" />
                        </radialGradient>
                        <filter id="glow_crown">
                            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <g style="filter:url(#glow_crown);">
                        <path d="M 30 150 L 170 150 L 170 120 L 30 120 Z" fill="url(#gold_grad_crown)" stroke="#8B4513" stroke-width="4"/>
                        <path d="M 30 120 L 40 50 L 100 90 L 160 50 L 170 120 Z" fill="url(#gold_grad_crown)" stroke="#8B4513" stroke-width="4"/>
                        <circle cx="40" cy="50" r="12" fill="#E41B17" stroke="#800000" stroke-width="2"/>
                        <circle cx="100" cy="90" r="15" fill="#4876FF" stroke="#000080" stroke-width="2"/>
                        <circle cx="160" cy="50" r="12" fill="#52D017" stroke="#008000" stroke-width="2"/>
                        <circle cx="70" cy="135" r="8" fill="#FFD700" stroke="#B8860B" stroke-width="1.5"/>
                        <circle cx="100" cy="135" r="8" fill="#FFD700" stroke="#B8860B" stroke-width="1.5"/>
                        <circle cx="130" cy="135" r="8" fill="#FFD700" stroke="#B8860B" stroke-width="1.5"/>
                    </g>
                </svg>`;
            document.body.appendChild(animation);

            try { playSpecialBonusSound(); } catch (e) { console.error(e); }
            
            setTimeout(() => animation.remove(), 1500);
            
            setTimeout(() => {
                openQuizModalWithScoreInput(qIndex);
            }, 1500);
        } else {
            openQuizModalWithScoreInput(qIndex);
        }

        const currentState = gameState.roundStates[currentRoundIndex];
        if (!currentState.flippedCards.includes(qIndex)) {
            currentState.flippedCards.push(qIndex);
        }
        currentState.completedCount = currentState.flippedCards.length;
        
        const phrase = roundPhrases[currentRoundIndex]; 
        const round = rounds[currentRoundIndex]; 
        const charIndex = round.questionIndices.indexOf(qIndex);

        if (phrase && charIndex >= 0 && charIndex < phrase.length) { 
            card.querySelector('.quiz-card-back').textContent = phrase[charIndex]; 
        } 
        
        updateNextRoundButton();
    }); 
    return card; 
}


// 퀴즈 모달 열기
function openQuizModalWithScoreInput(index) {
    currentQuestionIndex = index;
    incorrectAttempts = 0;
    hasAnswerBeenRevealed = false;
    const data = quizData[index];
    
    resetModal();
    initializeScoreInputInModal();
    addScoreInputToModal();
    
    const questionNumberLabel = getQuestionNumberLabel(index);
    document.getElementById('modal-question-title').textContent = `문제 ${questionNumberLabel}`;
    
    document.getElementById('question-text').innerHTML = data.question;
    const answerText = data.answer || (data.options ? data.options[data.answerIndex] : '');
    document.getElementById('answer-text').textContent = answerText;
    
    if (data.hint) {
        document.getElementById('hint-text').textContent = data.hint;
        document.getElementById('hint-btn').classList.remove('hidden');
    } else {
        document.getElementById('hint-btn').classList.add('hidden');
    }
    
    const youtubeBtn = document.getElementById('youtube-btn');
    if (data.youtube) {
        currentYouTubeUrl = getYouTubeEmbedUrl(data.youtube);
        if (youtubeBtn) youtubeBtn.classList.remove('hidden');
    } else {
        currentYouTubeUrl = null;
        if (youtubeBtn) youtubeBtn.classList.add('hidden');
    }
    
    if (data.type === 'multiple-choice') {
        renderOptions(data);
        answerBtn.style.display = 'none';
    } else if (data.type === 'matching') {
        renderMatchingQuestion(data.matchingData);
        answerBtn.style.display = 'block';
    } else {
        answerBtn.style.display = 'block';
    }
    quizModal.classList.remove('hidden');
}

// 문제 번호 라벨 반환 함수 (N-N 형식)
function getQuestionNumberLabel(questionIndex) {
    for (let i = 0; i < rounds.length; i++) {
        const questionPosition = rounds[i].questionIndices.indexOf(questionIndex);
        if (questionPosition !== -1) {
            return `${i + 1}-${questionPosition + 1}`;
        }
    }
    return 'N/A';
}

// 모달 초기화
function resetModal() {
    document.getElementById('hint-box').classList.remove('show');
    document.getElementById('youtube-container').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('youtube-player').src = 'about:blank';
    document.getElementById('matching-question-container').innerHTML = '';
    document.getElementById('matching-question-container').classList.add('hidden');
    clearTimeout(youtubeLoadTimeout);
    const scoreInputBox = document.getElementById('score-input-box');
    if (scoreInputBox) scoreInputBox.classList.remove('show');
    const scoreInputBtn = document.getElementById('score-input-btn');
    if (scoreInputBtn) scoreInputBtn.classList.add('hidden');
    questionView.classList.remove('hidden', 'fade-out');
    answerView.classList.add('hidden', 'fade-out');
    answerBtn.classList.remove('hidden');
    answerBtn.style.display = 'block';
    questionViewBtn.classList.add('hidden');
    document.getElementById('answer-display').classList.remove('hidden');
}

// 모달 닫기
function closeModal() {
    quizModal.classList.add('hidden');
    document.getElementById('youtube-player').src = 'about:blank';
    resetModal();
}

// 힌트 표시
function showHint() {
    const isAnswerViewVisible = !answerView.classList.contains('hidden');
    
    if (isAnswerViewVisible) {
        showQuestionView();
        setTimeout(() => {
            document.getElementById('hint-box').classList.add('show');
        }, 100);
    } else {
        document.getElementById('hint-box').classList.toggle('show');
    }
}

// 정답 공개
function showAnswerWithScoreInput() { 
    hasAnswerBeenRevealed = true;
    const data = quizData[currentQuestionIndex]; 
    questionView.classList.add('fade-out'); 
    answerBtn.style.display = 'none';
    
    setTimeout(() => { 
        questionView.classList.add('hidden'); 
        answerView.classList.remove('hidden', 'fade-out'); 
        document.getElementById('hint-box').classList.remove('show'); 
        const scoreInputBtn = document.getElementById('score-input-btn'); 
        if (scoreInputBtn) scoreInputBtn.classList.remove('hidden'); 
        if (data.type === 'matching') { 
            questionViewBtn.classList.add('hidden');
            questionView.classList.remove('hidden', 'fade-out'); 
            document.getElementById('answer-display').classList.add('hidden'); 
            drawMatchingAnswerLines(data.matchingData); 
        } else { 
            questionViewBtn.classList.remove('hidden');
            document.getElementById('answer-display').classList.remove('hidden'); 
        } 
    }, 400); 
}

// 문제 보기로 전환
function showQuestionView() { 
    const data = quizData[currentQuestionIndex]; 
    answerView.classList.add('fade-out'); 
    questionViewBtn.classList.add('hidden'); 
    const scoreInputBtn = document.getElementById('score-input-btn'); 
    if (scoreInputBtn) scoreInputBtn.classList.add('hidden'); 
    hideScoreInput(); 
    if (data && data.type === 'matching') { 
        const oldSvg = document.querySelector('#matching-question-container svg'); 
        if (oldSvg) oldSvg.remove(); 
    } 
    setTimeout(() => { 
        answerView.classList.add('hidden'); 
        questionView.classList.remove('hidden', 'fade-out'); 
        if (!hasAnswerBeenRevealed) {
             answerBtn.style.display = 'block';
        }
    }, 400); 
}

// 객관식 옵션 렌더링
function renderOptions(data) { 
    const container = document.getElementById('options-container'); 
    container.innerHTML = ''; 
    data.options.forEach((option, index) => { 
        const button = document.createElement('button'); 
        button.className = 'option-btn'; 
        button.textContent = option; 
        button.dataset.index = index; 
        button.addEventListener('click', () => checkAnswer(button, index, data.answerIndex)); 
        container.appendChild(button); 
    }); 
}

// 객관식 정답 확인
function checkAnswer(button, selectedIndex, correctIndex) { 
    const isCorrect = selectedIndex === correctIndex; 
    if (isCorrect) { 
        try { playCorrectSound(); } catch (e) { console.error(e); } 
        button.classList.add('correct'); 
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true); 
        showFeedback(true, true); 
        showScoreInputButton(); 
    } else { 
        button.disabled = true; 
        try { playIncorrectSound(); } catch (e) { console.error(e); } 
        button.classList.add('incorrect'); 
        incorrectAttempts++; 
        showFeedback(false);
        if (incorrectAttempts >= 3) { 
            document.querySelectorAll('.option-btn').forEach(btn => { 
                btn.disabled = true; 
                if (parseInt(btn.dataset.index) === correctIndex) btn.classList.add('correct'); 
            }); 
            showScoreInputButton(); 
        } 
    } 
}

// 점수 입력 버튼 표시
function showScoreInputButton() { 
    if (!document.getElementById('score-input-btn')) addScoreInputToModal(); 
    const scoreInputBtn = document.getElementById('score-input-btn'); 
    if (scoreInputBtn) scoreInputBtn.classList.remove('hidden'); 
}

// 피드백 표시
function showFeedback(isCorrect, triggerConfetti = false) { 
    feedbackText.textContent = isCorrect ? "정답입니다!" : "아쉬워요"; 
    feedbackText.style.color = isCorrect ? 'var(--success)' : 'var(--error)'; 
    
    if (isCorrect && triggerConfetti && typeof confetti === 'function') { 
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } }); 
    }
    
    feedbackModal.classList.remove('hidden'); 
    setTimeout(hideFeedback, 1500); 
}

function hideFeedback() { 
    feedbackModal.classList.add('hidden'); 
}

// 짝짓기 문제 렌더링
function renderMatchingQuestion(data) { 
    const container = document.getElementById('matching-question-container'); 
    container.innerHTML = `<div class="matching-container"><div class="matching-column">${data.left.map(item => `<div class="matching-item">${item}</div>`).join('')}</div><div class="matching-column">${data.right.map(item => `<div class="matching-item">${item}</div>`).join('')}</div></div>`; 
    container.classList.remove('hidden'); 
}

// 짝짓기 정답 라인 그리기
function drawMatchingAnswerLines(data) { 
    const container = document.getElementById('matching-question-container'); 
    const oldSvg = container.querySelector('svg'); 
    if (oldSvg) oldSvg.remove(); 
    requestAnimationFrame(() => { 
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
        svg.setAttribute('class', 'absolute top-0 left-0 w-full h-full pointer-events-none'); 
        container.appendChild(svg); 
        const containerRect = container.getBoundingClientRect(); 
        data.connections.forEach((rightIndex, leftIndex) => { 
            const leftEl = container.querySelectorAll('.matching-column')[0].children[leftIndex]; 
            const rightEl = container.querySelectorAll('.matching-column')[1].children[rightIndex]; 
            if (leftEl && rightEl) { 
                const leftRect = leftEl.getBoundingClientRect(); 
                const rightRect = rightEl.getBoundingClientRect(); 
                const x1 = leftRect.right - containerRect.left; 
                const y1 = leftRect.top - containerRect.top + leftRect.height / 2; 
                const x2 = rightRect.left - containerRect.left; 
                const y2 = rightRect.top - containerRect.top + rightRect.height / 2; 
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line"); 
                line.setAttribute('x1', x1); line.setAttribute('y1', y1); 
                line.setAttribute('x2', x2); line.setAttribute('y2', y2); 
                line.setAttribute('class', 'connecting-line'); 
                svg.appendChild(line); 
            } 
        }); 
    }); 
}

// 점수 입력 사이드바 생성
function createScoreInputSidebar() { 
    const scoreInputHTML = `<div id="score-input-box" class="score-input-box"><div class="score-input-title">🏆 점수 입력</div><div class="team-selection mb-4"><div class="selection-label">승리 팀 선택:</div><div class="team-buttons">${teamNames.map((name, index) => `<button class="team-select-btn" data-team="${index}">${name}</button>`).join('')}</div></div><div class="score-selection mb-4"><div class="selection-label">획득 점수:</div><div class="score-buttons">${[1, 2, 3, 4, 5].map(score => `<button class="score-select-btn" data-score="${score}">${score}점</button>`).join('')}</div></div><div class="score-input-actions"><button id="apply-score-btn" class="apply-score-btn" disabled>점수 적용</button><button id="cancel-score-btn" class="cancel-score-btn">취소</button></div><div class="current-selection mt-4"><div id="selection-display" class="selection-display">팀과 점수를 선택해주세요</div></div></div>`; 
    document.getElementById('hint-box').insertAdjacentHTML('afterend', scoreInputHTML); 
}

function setupScoreInputEvents() { 
    document.querySelectorAll('.team-select-btn').forEach(btn => btn.addEventListener('click', e => { 
        document.querySelectorAll('.team-select-btn').forEach(b => b.classList.remove('selected')); 
        e.target.classList.add('selected'); 
        selectedTeam = parseInt(e.target.dataset.team); 
        updateSelectionDisplay(); 
        checkApplyButtonState(); 
    })); 
    document.querySelectorAll('.score-select-btn').forEach(btn => btn.addEventListener('click', e => { 
        document.querySelectorAll('.score-select-btn').forEach(b => b.classList.remove('selected')); 
        e.target.classList.add('selected'); 
        selectedScore = parseInt(e.target.dataset.score); 
        updateSelectionDisplay(); 
        checkApplyButtonState(); 
    })); 
    document.getElementById('apply-score-btn').addEventListener('click', applySelectedScore); 
    document.getElementById('cancel-score-btn').addEventListener('click', hideScoreInput); 
}

function updateSelectionDisplay() { 
    const display = document.getElementById('selection-display'); 
    if (selectedTeam !== null && selectedScore !== null) { 
        display.innerHTML = `<div class="selected-info"><strong>${teamNames[selectedTeam]}</strong>에게 <strong>${selectedScore}점</strong> 부여</div>`; 
        display.classList.add('has-selection'); 
    } else if (selectedTeam !== null) { 
        display.innerHTML = `<strong>${teamNames[selectedTeam]}</strong> 선택됨 - 점수를 선택하세요`; 
        display.classList.remove('has-selection'); 
    } else if (selectedScore !== null) { 
        display.innerHTML = `<strong>${selectedScore}점</strong> 선택됨 - 팀을 선택하세요`; 
        display.classList.remove('has-selection'); 
    } else { 
        display.innerHTML = '팀과 점수를 선택해주세요'; 
        display.classList.remove('has-selection'); 
    } 
}

function checkApplyButtonState() { 
    document.getElementById('apply-score-btn').disabled = !(selectedTeam !== null && selectedScore !== null); 
}

function applySelectedScore() { 
    if (selectedTeam !== null && selectedScore !== null) { 
        teamScores[selectedTeam] += selectedScore; 
        try { playCorrectSound(); } catch (e) { console.error(e); } 
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); 
        showScoreAppliedFeedback(); 
        hideScoreInput(); 
    } 
}

function showScoreAppliedFeedback() { 
    const feedback = document.createElement('div'); 
    feedback.className = 'score-feedback'; 
    feedback.innerHTML = `<div class="score-feedback-content">✅ ${teamNames[selectedTeam]}에게 ${selectedScore}점이 추가되었습니다!</div>`; 
    document.body.appendChild(feedback); 
    setTimeout(() => feedback.remove(), 3000); 
}

function showScoreInput() { 
    const data = quizData[currentQuestionIndex];
    
    if (data && data.type === 'matching') {
        const oldSvg = document.querySelector('#matching-question-container svg');
        if (oldSvg) oldSvg.remove();
        
        answerView.classList.add('hidden');
        questionView.classList.remove('hidden');
        answerBtn.style.display = 'none';
        questionViewBtn.classList.add('hidden');
    }
    
    selectedTeam = null; 
    selectedScore = null; 
    document.querySelectorAll('.team-select-btn, .score-select-btn').forEach(btn => btn.classList.remove('selected')); 
    document.getElementById('score-input-box').classList.add('show'); 
    updateSelectionDisplay(); 
    checkApplyButtonState(); 
}

function hideScoreInput() { 
    const scoreInputBox = document.getElementById('score-input-box'); 
    if (scoreInputBox) scoreInputBox.classList.remove('show'); 
    selectedTeam = null; 
    selectedScore = null; 
}

function initializeScoreInputInModal() { 
    const existing = document.getElementById('score-input-box'); 
    if (existing) existing.remove(); 
    createScoreInputSidebar(); 
    setupScoreInputEvents(); 
}

function addScoreInputToModal() { 
    const existing = document.getElementById('score-input-btn'); 
    if (existing) existing.remove(); 
    const scoreInputBtn = document.createElement('button'); 
    scoreInputBtn.id = 'score-input-btn'; 
    scoreInputBtn.className = 'btn-3d btn-score hidden'; 
    scoreInputBtn.textContent = '점수 입력'; 
    scoreInputBtn.addEventListener('click', showScoreInput); 
    document.getElementById('hint-btn').insertAdjacentElement('afterend', scoreInputBtn); 
}

// 점수 현황 모달
function showScoreStatusModal() { 
    const teamRankings = teamNames.map((name, index) => ({ name, score: teamScores[index], index })).sort((a, b) => b.score - a.score); 
    const modal = document.createElement('div'); 
    modal.className = 'modal-overlay'; 
    modal.id = 'score-status-modal'; 
    const completedCount = gameState.roundStates[currentRoundIndex].completedCount || 0;
    modal.innerHTML = `
        <div class="modal-content score-status-modal">
            <div class="modal-header flex justify-between items-center">
                <h2 class="text-3xl font-bold">📊 현재 점수 현황</h2>
                <button onclick="closeScoreStatusModal()" class="text-white text-4xl">&times;</button>
            </div>
            <div class="modal-body p-6">
                <div class="mb-6"><strong>${rounds[currentRoundIndex].title}</strong> (${completedCount}/${rounds[currentRoundIndex].questionIndices.length} 완료)</div>
                <div class="score-status-container">
                    <h3 class="ranking-title">🏆 현재 순위</h3>
                    <div class="ranking-grid">
                        <div class="ranking-list">${teamRankings.map((team, rank) => createRankingItemHTML(team, rank)).join('')}</div>
                        <div class="score-toggle-container">
                            <button class="score-toggle-btn" onclick="toggleScoreAdjustment()">
                                ⚡ 추가 점수 입력
                            </button>
                        </div>
                    </div>
                    <div id="score-adjustment-content" class="score-adjustment-content">
                        <div class="score-adjustment-grid">${teamNames.map((name, index) => `
                            <div class="score-adjustment-card team-color-${index + 1}">
                                <div class="team-adjustment-header">
                                    <div class="team-adjustment-name">${name}</div>
                                    <div class="team-adjustment-buttons">
                                        <button class="score-adjustment-btn minus-btn" onclick="adjustTeamScore(${index}, -1)">-1</button>
                                        <button class="score-adjustment-btn plus-btn" onclick="adjustTeamScore(${index}, 1)">+1</button>
                                    </div>
                                </div>
                                <div class="current-score">현재: <span id="adjustment-score-${index}">${teamScores[index]}</span>점</div>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>`; 
    document.body.appendChild(modal); 
    modal.addEventListener('click', e => { if (e.target === modal) closeScoreStatusModal(); }); 
}

function createRankingItemHTML(team, rank) {
    return `
        <div class="ranking-item-compact rank-${rank + 1}">
            <div class="rank-badge">${rank + 1}위</div>
            <div class="team-info-compact">
                <div class="team-name-compact team-color-${team.index + 1}">${team.name}</div>
                <div class="team-score-compact" id="modal-score-${team.index}">${team.score}점</div>
            </div>
            <div class="rank-icon">${getRankEmoji(rank + 1)}</div>
        </div>`;
}

function adjustTeamScore(teamIndex, adjustment) { 
    if (teamScores[teamIndex] + adjustment < 0) return; 
    teamScores[teamIndex] += adjustment; 
    updateModalScoresAndRankings(); 
    try { playSound(adjustment > 0 ? "C5" : "A3", "16n"); } catch (e) { console.error(e); } 
}

function updateModalScoresAndRankings() { 
    teamScores.forEach((score, index) => { 
        const modalScoreEl = document.getElementById(`modal-score-${index}`); 
        const adjustmentScoreEl = document.getElementById(`adjustment-score-${index}`); 
        if(modalScoreEl) modalScoreEl.textContent = `${score}점`; 
        if(adjustmentScoreEl) adjustmentScoreEl.textContent = score; 
    }); 
    const teamRankings = teamNames.map((name, index) => ({ name, score: teamScores[index], index })).sort((a, b) => b.score - a.score); 
    const rankingList = document.querySelector('.ranking-list'); 
    if(rankingList) {
        rankingList.innerHTML = teamRankings.map((team, rank) => createRankingItemHTML(team, rank)).join('');
    }
}

function closeScoreStatusModal() { 
    const modal = document.getElementById('score-status-modal'); 
    if (modal) modal.remove(); 
}

function toggleScoreAdjustment() {
    const content = document.getElementById('score-adjustment-content');
    content.classList.toggle('expanded');
}

function getRankEmoji(rank) { 
    return ['🥇', '🥈', '🥉'][rank - 1] || '🎯'; 
}

// 라운드 전환
function switchToRound(targetRoundIndex) {
    if (targetRoundIndex === currentRoundIndex && gameState.currentScreen === 'game') return;

    if (gameState.currentScreen === 'game') {
        saveCurrentRoundState();
    }

    currentRoundIndex = targetRoundIndex;

    if (gameState.currentScreen !== 'game') {
        roundIntro.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        gameState.currentScreen = 'game';
    }
    
    setupRound(); 
}

// 현재 라운드 상태 저장
function saveCurrentRoundState() {
    if (currentRoundIndex < 0 || currentRoundIndex >= gameState.roundStates.length) return;
    
    const flippedCardIndices = Array.from(document.querySelectorAll('#quiz-grid .quiz-card.flipped'))
                                    .map(card => parseInt(card.dataset.index));

    const currentState = gameState.roundStates[currentRoundIndex];
    currentState.flippedCards = flippedCardIndices;
    currentState.completedCount = flippedCardIndices.length;
}

// 라운드 상태 복원
function restoreRoundState(roundIndex) {
    const roundState = gameState.roundStates[roundIndex];
    if (!roundState || !roundState.flippedCards || roundState.flippedCards.length === 0) {
        updateNextRoundButton();
        return;
    }

    const quizGrid = document.getElementById('quiz-grid');
    const phrase = roundPhrases[roundIndex];
    const round = rounds[roundIndex];

    roundState.flippedCards.forEach(qIndex => {
        const card = quizGrid.querySelector(`[data-index="${qIndex}"]`);
        if (card && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            
            const charIndex = round.questionIndices.indexOf(qIndex);
            if (phrase && charIndex >= 0 && charIndex < phrase.length) {
                const backElement = card.querySelector('.quiz-card-back');
                if (backElement) backElement.textContent = phrase[charIndex];
            }
        }
    });

    updateNextRoundButton();
}

// 다음 라운드 버튼 업데이트
function updateNextRoundButton() {
    const round = rounds[currentRoundIndex];
    const completedCount = gameState.roundStates[currentRoundIndex].completedCount || 0;

    const nextBtn = document.getElementById('next-round-btn');
    if (completedCount === round.questionIndices.length) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = currentRoundIndex < rounds.length - 1 ? '다음 라운드' : '퀴즈 종료!';
    } else {
        nextBtn.classList.add('hidden');
    }
}

// 게임 상태 저장
function saveGameState() {
    gameState.savedTeamNames = [...teamNames];
    gameState.savedTeamScores = [...teamScores];
}

// 최종 순위 표시
function showFinalRanking() { 
    const teamRankings = teamNames.map((name, index) => ({ name, score: teamScores[index] })).sort((a, b) => b.score - a.score); 
    const modal = document.createElement('div'); 
    modal.className = 'modal-overlay'; 
    modal.id = 'final-ranking-modal'; 
    modal.innerHTML = `
        <div class="modal-content ranking-modal">
            <div class="modal-header flex justify-between items-center">
                <h2 class="text-4xl font-bold">🏆 최종 순위 발표 🏆</h2>
                <button onclick="closeFinalRankingModal()" class="text-white text-4xl hover:text-gray-300 transition">&times;</button>
            </div>
            <div class="modal-body p-8">
                <div class="ranking-container">${teamRankings.map((team, rank) => `
                    <div class="ranking-item-compact rank-${rank + 1}" data-rank="${rank + 1}">
                        <div class="rank-badge">${getRankEmoji(rank + 1)} ${rank + 1}위</div>
                        <div class="team-info-compact">
                            <div class="team-name-compact">${team.name}</div>
                            <div class="team-score-compact">${team.score}점</div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
            <div class="p-6 text-center"><button onclick="resetGame()" class="btn-3d">새 게임 시작</button></div>
        </div>`; 
    document.body.appendChild(modal); 
    setTimeout(() => { if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 90, origin: { y: 0.4 } }); }, 500); 
}

function closeFinalRankingModal() {
    const modal = document.getElementById('final-ranking-modal');
    if (modal) modal.remove();
}

// YouTube 관련 함수들
function getYouTubeEmbedUrl(videoInput) {
    if (!videoInput) return null;
    let videoId = null;
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
    ];
    for (const pattern of patterns) {
        const match = videoInput.match(pattern);
        if (match && match[1]) {
            videoId = match[1];
            break;
        }
    }
    if (!videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoInput.trim())) {
        videoId = videoInput.trim();
    }
    if (!videoId) {
        console.error('유효한 YouTube 비디오 ID를 추출할 수 없습니다:', videoInput);
        return null;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;
}

function toggleYoutube() {
    const youtubeContainer = document.getElementById('youtube-container');
    const isHidden = youtubeContainer.classList.toggle('hidden');
    if (!isHidden && currentYouTubeUrl) {
        const youtubePlayer = document.getElementById('youtube-player');
        if (youtubePlayer.src.includes('blank') || youtubePlayer.src === '') {
            loadYouTubeVideo();
        }
    } else if (isHidden) {
        document.getElementById('youtube-player').src = 'about:blank';
    }
}

function loadYouTubeVideo() {
    const youtubePlayer = document.getElementById('youtube-player');
    if (!currentYouTubeUrl) return;
    
    youtubePlayer.src = currentYouTubeUrl;
}

// 키보드 단축키
function handleKeyPress(e) { 
    if (quizModal.classList.contains('hidden')) return; 
    const keyMap = { h: 'hint-btn', a: 'answer-btn', q: 'question-view-btn', s: 'score-input-btn' }; 
    const btn = document.getElementById(keyMap[e.key.toLowerCase()]); 
    if (btn && btn.style.display !== 'none' && !btn.classList.contains('hidden')) btn.click(); 
    if (e.key === 'Escape') closeModal(); 
}

// 십자말 퀴즈 설정
function setupCrossword() {
    const puzzleData = [
        { id: 1, word: "여호와", clue: "'스스로 계신 자'라는 뜻을 가진 하나님의 고유한 이름입니다.", orientation: 'horizontal', start: [0, 0] },
        { id: 2, word: "이스라엘", clue: "야곱이 하나님과 겨루어 이긴 후에 받은 새 이름이며, 그의 후손으로 이루어진 민족을 가리킵니다.", orientation: 'horizontal', start: [1, 5] },
        { id: 3, word: "나단", clue: "다윗 왕 시대의 선지자로, 다윗의 죄를 책망하고 하나님의 뜻을 전했습니다.", orientation: 'horizontal', start: [2, 2] },
        { id: 4, word: "아옐렛샤할", clue: "시편 22편의 표제로, '새벽의 암사슴'이라는 뜻을 가진 음악 용어입니다.", orientation: 'horizontal', start: [4, 0] },
        { id: 5, word: "예루살렘", clue: "다윗 왕이 수도로 삼은 곳이며, 하나님의 성전이 세워졌던 거룩한 도시입니다.", orientation: 'horizontal', start: [6, 3] },
        { id: 6, word: "시편", clue: "구약성경에 포함된 150편의 시와 찬양, 기도의 모음집입니다.", orientation: 'horizontal', start: [7, 0] },
        { id: 7, word: "의인", clue: "하나님 앞에서 올바르고 정의롭게 사는 사람을 뜻합니다.", orientation: 'horizontal', start: [8, 7] },
        { id: 8, word: "여둔둔", clue: "다윗 시대의 레위인 성가대 지휘자 중 한 명으로, 시편 표제에 그의 이름이 언급됩니다.", orientation: 'vertical', start: [0, 0] },
        { id: 9, word: "마스길", clue: "시편의 표제 중 하나로, '교훈' 또는 '지혜의 시'를 의미합니다.", orientation: 'vertical', start: [0, 6] },
        { id: 10, word: "엘리", clue: "'나의 하나님'이라는 뜻으로, 예수님께서 십자가에서 외치신 말씀(시편 22편)에 나오는 단어입니다.", orientation: 'vertical', start: [1, 8] },
        { id: 11, word: "나사렛", clue: "예수님께서 어린 시절을 보내신 갈릴리 지방의 한 동네입니다.", orientation: 'vertical', start: [2, 2] },
        { id: 12, word: "아삽", clue: "다윗 시대의 레위인 성가대 지휘자 중 한 명으로, 그의 이름으로 된 시편이 여러 편 있습니다.", orientation: 'vertical', start: [4, 0] },
        { id: 13, word: "할렐루야", clue: "'주님을 찬양하라'는 뜻을 가진 히브리어 감탄사입니다.", orientation: 'vertical', start: [4, 4] },
        { id: 14, word: "시온", clue: "원래 예루살렘의 언덕을 가리켰으나, 상징적으로 하나님의 거처 또는 하나님의 백성을 의미합니다.", orientation: 'vertical', start: [7, 0] },
        { id: 15, word: "죄인", clue: "하나님의 뜻을 따르지 않고 죄를 지은 사람을 가리키는 말입니다.", orientation: 'vertical', start: [7, 8] }
    ];

    const GRID_ROWS = 9;
    const GRID_COLS = 9;
    const grid = document.getElementById('crossword-grid');
    const modal = document.getElementById('clue-modal');
    const clueText = document.getElementById('clue-text');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const closeBtn = document.getElementById('close-crossword-modal-btn');
    const choiceButtons = document.getElementById('choice-buttons');
    let currentWord = null;
    const cells = [];

    function initializeGrid() {
        if (!grid) return;
        grid.innerHTML = '';
        
        const cellSize = window.innerWidth < 400 ? 35 : (window.innerWidth < 600 ? 42 : 55);
        grid.style.gridTemplateRows = `repeat(${GRID_ROWS}, ${cellSize}px)`;
        grid.style.gridTemplateColumns = `repeat(${GRID_COLS}, ${cellSize}px)`;

        for (let r = 0; r < GRID_ROWS; r++) {
            cells[r] = [];
            for (let c = 0; c < GRID_COLS; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell empty';
                grid.appendChild(cell);
                cells[r][c] = cell;
            }
        }
    }

    function populateGrid() {
        puzzleData.forEach(wordData => {
            const { word, orientation, start, id } = wordData;
            const [startRow, startCol] = start;
            for (let i = 0; i < word.length; i++) {
                let r = startRow, c = startCol;
                if (orientation === 'horizontal') c += i; else r += i;
                if (r < GRID_ROWS && c < GRID_COLS) {
                    const cell = cells[r][c];
                    cell.classList.remove('empty');
                    cell.classList.add('word-cell');
                    cell.dataset.char = word[i];
                    if (!cell.dataset.words) cell.dataset.words = '';
                    cell.dataset.words += `${id},`;
                    if (i === 0) {
                        cell.innerHTML = `<span class="number">${id}</span>`;
                    }
                }
            }
        });
    }

    function handleCellClick(e) {
        const cell = e.target.closest('.word-cell');
        if (!cell) return;
        document.querySelectorAll('.cell.highlight').forEach(c => c.classList.remove('highlight'));

        const cellIndex = Array.from(grid.children).indexOf(cell);
        const row = Math.floor(cellIndex / GRID_COLS);
        const col = cellIndex % GRID_COLS;

        const wordsAtThisPosition = [];
        puzzleData.forEach(wordData => {
            const { word, orientation, start, id } = wordData;
            const [startRow, startCol] = start;
            
            for (let i = 0; i < word.length; i++) {
                let checkRow = startRow;
                let checkCol = startCol;
                
                if (orientation === 'horizontal') {
                    checkCol += i;
                } else {
                    checkRow += i;
                }
                
                if (checkRow === row && checkCol === col) {
                    wordsAtThisPosition.push({ id, orientation });
                    break;
                }
            }
        });

        const horizontalWords = wordsAtThisPosition.filter(w => w.orientation === 'horizontal');
        const verticalWords = wordsAtThisPosition.filter(w => w.orientation === 'vertical');
        const isIntersection = horizontalWords.length > 0 && verticalWords.length > 0;

        if (isIntersection) {
            clueText.innerHTML = '어떤 문제를 푸시겠어요?';
            document.getElementById('main-buttons').classList.add('hidden');
            choiceButtons.classList.remove('hidden');
            choiceButtons.innerHTML = '';
            
            wordsAtThisPosition.forEach(({ id }) => {
                const wordData = puzzleData.find(w => w.id == id);
                const button = document.createElement('button');
                button.textContent = `${wordData.id}번 (${wordData.orientation === 'horizontal' ? '가로' : '세로'})`;
                button.onclick = () => {
                    showClueForWord(wordData);
                };
                choiceButtons.appendChild(button);
            });
            modal.classList.remove('hidden');
        } else {
            if (wordsAtThisPosition.length > 0) {
                const wordData = puzzleData.find(w => w.id == wordsAtThisPosition[0].id);
                if (wordData) showClueForWord(wordData);
            }
        }
    }

    function showClueForWord(wordData) {
        document.getElementById('main-buttons').classList.remove('hidden');
        choiceButtons.classList.add('hidden');
        choiceButtons.innerHTML = '';
        
        currentWord = wordData;
        if (currentWord) {
            highlightWordCells(currentWord);
            clueText.textContent = `${currentWord.id}. ${currentWord.clue}`;
            modal.classList.remove('hidden');
        }
    }
    
    function highlightWordCells({ word, orientation, start }) {
        for (let i = 0; i < word.length; i++) {
            let r = start[0], c = start[1];
            if (orientation === 'horizontal') c += i; else r += i;
            if (r < GRID_ROWS && c < GRID_COLS) cells[r][c].classList.add('highlight');
        }
    }

    function revealAnswer() {
        if (!currentWord) return;
        const { word, orientation, start } = currentWord;
        for (let i = 0; i < word.length; i++) {
            let r = start[0], c = start[1];
            if (orientation === 'horizontal') c += i; else r += i;
            if (r < GRID_ROWS && c < GRID_COLS) {
                const cell = cells[r][c];
                const numberHTML = cell.querySelector('.number')?.outerHTML || '';
                cell.innerHTML = numberHTML + cell.dataset.char;
                cell.classList.add('correct');
                cell.classList.remove('highlight');
            }
        }
        closeModal();
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.querySelectorAll('.cell.highlight').forEach(c => c.classList.remove('highlight'));
        currentWord = null;
        choiceButtons.innerHTML = '';
        choiceButtons.classList.add('hidden');
        document.getElementById('main-buttons').classList.remove('hidden');
    }

    if (grid) {
        grid.addEventListener('click', handleCellClick);
        showAnswerBtn.addEventListener('click', revealAnswer);
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        initializeGrid();
        populateGrid();
        window.addEventListener('resize', initializeGrid);
    }
}

// 전역 함수 노출
window.closeScoreStatusModal = closeScoreStatusModal;
window.showScoreStatusModal = showScoreStatusModal;
window.adjustTeamScore = adjustTeamScore;
window.toggleScoreAdjustment = toggleScoreAdjustment;
window.closeFinalRankingModal = closeFinalRankingModal;

// DOM 로딩 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupCrossword();

    const startScreen = document.getElementById('start-screen');
    const crosswordScreen = document.getElementById('crossword-screen');
    
    document.getElementById('show-crossword-btn').addEventListener('click', () => {
        startScreen.classList.add('hidden');
        crosswordScreen.classList.remove('hidden');
    });

    document.getElementById('back-to-start-btn').addEventListener('click', () => {
        crosswordScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    });
});
