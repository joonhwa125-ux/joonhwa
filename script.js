// Quiz Data with YouTube Links
const quizData = [
    { 
        bonus: true, 
        question: "다음은 악인의 운명에 관한 말씀입니다.<span class='context'>빈칸에 들어갈 말을 순서대로 말하세요.</span><span class='quote'>\"바람에 나는 (  )와 같고 (  )을 견디지 못하며\n(  )들의 모임에 들지 못하며 그 길은 (  )할 것이다\"</span>", 
        answer: "겨, 심판, 의인, 망", 
        hint: "시편 1편",
        youtube: "PrpqHpHTW3Q"
    },
    { 
        question: "다윗이 대적들로부터 조롱당할 때 하나님께 고백한 내용입니다.<span class='context'>빈칸에 들어갈 말은 무엇입니까?</span><span class='quote'>\"여호와여 주는 나의 (  )시요 나의 (  )이시요\n나의 머리를 드시는 자이시니이다\"</span>", 
        answer: "방패, 영광", 
        hint: "시편 3편",
        youtube: "R_Xu2ir5qqI"
    },
    { 
        type: 'multiple-choice', 
        question: "다윗은 속이고 아첨하는 악인의 목구멍이\n마치 무엇과 같다고 했습니까?", 
        options: ["용암을 내뿜는 화산", "오물을 쏟아내는 하수구", "열린 무덤", "독을 내뿜는 거미줄"], 
        answerIndex: 2, 
        hint: "시편 5편",
        youtube: "FINEjhf4tN8"
    },
    { 
        type: 'multiple-choice', 
        question: "시편 9편에서 시인이 원하지 않는 것은 무엇입니까?", 
        options: ["하나님의 공의", "하나님 없는 인생들의 승리", "원수의 멸망", "이방 나라들의 심판"], 
        answerIndex: 1, 
        hint: "시편 9편",
        youtube: "_zxVFaOS6Rg"
    },
    { 
        type: 'multiple-choice', 
        question: "다음 번호에 해당하는 낱말 중 틀린 것은?<span class='quote'>\"여호와는 나의 (1)이시요 나의 (2)시요...\n내가 그 안에 피할 나의 바위시오 나의 (3)시요\n나의 (4)이시요 나의 산성이시로다\"</span>", 
        options: ["(1) 반석", "(2) 요새", "(3) 창", "(4) 구원의 뿔"], 
        answerIndex: 2, 
        hint: "시편 18편",
        youtube: "jrfwR4i53w4"
    },
    { 
        bonus: true, 
        type: 'matching', 
        question: "하나님의 말씀에 대한 명칭과 그 기능을 연결하세요.", 
        answer: '1-ㄴ, 2-ㄷ, 3-ㄱ, 4-ㄹ', 
        hint: "시편 19편",
        youtube: "StRI2O-dT50",
        matchingData: { 
            left: ['1. 여호와의 율법', '2. 여호와의 증거', '3. 여호와의 교훈', '4. 여호와의 계명'], 
            right: ['ㄱ. 마음을 기쁘게 함', 'ㄴ. 영혼을 소성시킴', 'ㄷ. 우둔한 자로 지혜롭게 함', 'ㄹ. 눈을 밝게 함'], 
            connections: [1, 2, 0, 3] 
        } 
    },
    { 
        type: 'multiple-choice', 
        question: "시편 중 예수님의 십자가 고난과\n실제적인 연관이 있는 시는 몇 편입니까?", 
        options: ["시편 12편", "시편 22편", "시편 33편", "시편 43편"], 
        answerIndex: 1, 
        hint: "엘리 엘리 라마 사박다니",
        youtube: "Ivp6Tb3pc24"
    },
    { 
        type: 'multiple-choice', 
        question: "다윗은 기도할 때 어디를 향하여\n손을 들고 기도하였습니까?", 
        options: ["하늘", "산", "주의 지성소", "궁전"], 
        answerIndex: 2, 
        hint: "시편 28편",
        youtube: "wkdkMxGVOKQ"
    },
    { 
        type: 'multiple-choice', 
        question: "악인들이 스스로 자랑하는 것은 무엇입니까?", 
        options: ["자기의 죄악이 드러나지 않을 것임", "자신의 연약함", "자신의 의로움", "악을 거절함"], 
        answerIndex: 0, 
        hint: "시편 36편",
        youtube: "1M3IusEoXt8"
    },
    { 
        type: 'multiple-choice', 
        question: "행악자들에 대하여 불평하지 말아야 할 이유는?", 
        options: ["악인의 보복을 받을까봐", "남의 일에 간섭할 필요가 없기에", "악인의 번영은 일시적이기 때문에", "사람은 자신의 운명대로 사는 것이므로"], 
        answerIndex: 2, 
        hint: "시편 37편",
        youtube: "NATmz9TGpdk"
    },
    { 
        bonus: true, 
        question: "'마스길'이란 히브리어는 무슨 뜻입니까?", 
        answer: "교훈, 교훈시", 
        hint: "시편 32편",
        youtube: "lYM5nQwuZ90"
    },
    { 
        type: 'multiple-choice', 
        question: "시편 46편에 세 차례 반복되어 등장하는 구절은?", 
        options: ["만군의 여호와께서 우리와 함께 하시니", "새벽에 하나님이 도우시리로다", "너희는 가만히 있어 내가 하나님 됨을 알지어다", "하나님은 온 땅의 왕이시라"], 
        answerIndex: 0, 
        hint: "시편 46편",
        youtube: "ElYObIDOUoM"
    },
    { 
        type: 'multiple-choice', 
        question: "나머지 셋과 공통된 의미를 지닌 표현이 아닌 것은?", 
        options: ["거룩한 산", "하나님의 요새", "시온 산", "하나님의 성"], 
        answerIndex: 1, 
        hint: "시편 48편",
        youtube: "i0AgENR1FhM"
    },
    { 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"사람은 존귀하나 장구하지 못함이여\n(         ) 같도다\"</span>", 
        answer: "멸망하는 짐승", 
        hint: "시편 49편",
        youtube: "ISHuuFoLQbU"
    },
    { 
        question: "다윗이 밧세바와 동침한 후 지은\n회개의 시는 시편 몇 편입니까?", 
        answer: "시편 51편", 
        hint: "시편의 표제에 기록되어 있습니다.",
        youtube: "XCw-swDk9Bs"
    },
    { 
        type: 'multiple-choice', 
        question: "하나님이 구하시는 제사는 다음 중 어느 것입니까?", 
        options: ["연약한 심령", "값비싼 번제", "상한 심령", "자신의 의"], 
        answerIndex: 2, 
        hint: "시편 51편",
        youtube: "zkVzW3zGl3A"
    },
    { 
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )이 생명보다 나으므로\n내 입술이 주를 찬양할 것이라\"</span>", 
        options: ["골수와 기름진 것", "주의 인자하심", "탈취한 물건을 나누는 것", "주님의 권능"], 
        answerIndex: 1, 
        hint: "시편 63편",
        youtube: "u1Zk32exTvg"
    },
    { 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 궁정에서의 한 날이 다른 곳에서의 천 날보다 나음즉\n악인의 장막에 사는 것보다\n내 하나님의 성전 (   )로 있는 것이 좋사오니\"</span>", 
        answer: "문지기", 
        hint: "시편 84편",
        youtube: "a4eUJNLjxjw"
    },
    { 
        bonus: true, 
        question: "빈칸을 순서대로 채우세요.<span class='quote'>\"우리의 연수가 칠십이요 강건하면 팔십이라도\n그 연수의 자랑은 (  )와 (  )뿐이요\n신속히 가니 우리가 (  )가나이다...\n우리에게 우리의 날 (  )함을 가르치사\n지혜로운 마음을 얻게 하소서\"</span>", 
        answer: "수고, 슬픔, 날아, 계수", 
        hint: "시편 90편",
        youtube: "KWltmGAN3eY"
    },
    { 
        type: 'multiple-choice', 
        question: "광야에서 이스라엘 백성이 하나님을 시험하였던\n장소와 관련 없는 것은?", 
        options: ["르비딤", "양식", "므리바", "맛사"], 
        answerIndex: 1, 
        hint: "시편 95편",
        youtube: "rndS3FU-Qso"
    },
    { 
        bonus: true, 
        question: "시편은 모두 몇 권, 몇 편으로 구성되어 있습니까?", 
        answer: "5권, 150편", 
        hint: "모세오경",
        youtube: "C-DXVoQOnW8"
    },
    { 
        bonus: true, 
        question: "'할렐루야'의 뜻은 무엇입니까?", 
        answer: "여호와를 찬양하라", 
        hint: "시편 111편",
        youtube: "CeHkhgQdyGI"
    },
    { 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 권능의 날에 주의 백성이 거룩한 옷을 입고\n즐겁게 헌신하니 (         ) 같은\n주의 청년들이 주께 나오는도다\"</span>", 
        answer: "새벽 이슬", 
        hint: "시편 110편",
        youtube: "QXhsA621WZA"
    },
    { 
        bonus: true, 
        question: "하나님의 지존하심을 나타내는 말씀입니다.<span class='context'>빈칸을 순서대로 채우세요.</span><span class='quote'>\"높은 곳에 앉으셨으나 (   ) 낮추사\n천지를 살피시고 (   ) 자를 먼지 더미에서 일으키시며\n궁핍한 자를 (   ) 더미에서 들어 세워...\"</span>", 
        answer: "스스로, 가난한, 거름", 
        hint: "시편 113편",
        youtube: "AEf_pX52Z-0"
    },
    { 
        question: "성경 전체 가운데 가장 짧은 장은 어디입니까?", 
        answer: "시편 117편", 
        hint: "이 2절로 되어있습니다.",
        youtube: "B5kV3pk_7_s"
    },
    { 
        type: 'multiple-choice', 
        question: "주의 말씀에 대한 비유로 사용된 표현이 아닌 것은?", 
        options: ["등", "정금", "꿀", "소금"], 
        answerIndex: 3, 
        hint: "시편 119편",
        youtube: "cGUz6ByIxxw"
    },
    { 
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )은/는 장사의 수중의 화살 같으니\"</span>", 
        options: ["거짓된 혀", "젊은 자의 자식", "노인의 지혜", "부자의 재물"], 
        answerIndex: 1, 
        hint: "시편 127편",
        youtube: "CYS9IxsR7P4"
    },
    { 
        type: 'multiple-choice', 
        question: "다음 중 시편의 저자가 아닌 사람은 누구입니까?", 
        options: ["다윗", "엘리사", "모세", "솔로몬"], 
        answerIndex: 1, 
        hint: "",
        youtube: "8cVZ-S3Z4-4"
    },
    { 
        bonus: true, 
        question: "할렐루야로 시작하여 할렐루야로 끝나는\n'할렐루야 시'는 이 몇 개입니까?", 
        answer: "8개", 
        hint: "시편 106, 113, 135, 146, 147, 148, 149, 150편",
        youtube: "5zB7GuYv1Qk"
    }
];

// YouTube 비디오 ID를 추출하여 임베드 URL을 생성하는 함수
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

// 라운드 구성 데이터
const rounds = [
    { 
        title: "1라운드: 하나님을 향하여", 
        description: "하나님의 성품, 말씀, 그리고 우리와의 관계에 대한 질문들을 통해<br>하나님이 어떤 분이신지 알아봅시다.", 
        questionIndices: [1, 11, 12, 16, 23, 4, 5, 25, 15, 21, 22] 
    },
    { 
        title: "2라운드: 우리를 향하여", 
        description: "의인과 악인의 삶, 그리고 성도의 지혜에 대한 질문들을 통해 시편이 우리의 삶에 어떻게 적용되는지 살펴봅시다.", 
        questionIndices: [0, 2, 3, 8, 9, 13, 14, 18, 17, 26] 
    },
    { 
        title: "3라운드: 시편에 대하여", 
        description: "시편의 저자, 역사적 배경, 구조 등 시편 자체에 대한 흥미로운 사실들을 알아봅시다.", 
        questionIndices: [6, 7, 19, 27, 10, 20, 24, 28] 
    }
];

const roundPhrases = ["주께서나와함께하심이라", "여호와는나의목자시니", "내잔이넘치나이다"];

// 상태 변수
let currentQuestionIndex = -1;
let currentRoundIndex = 0;
// let completedQuestionsInRound = 0; // 💥 REMOVED: Replaced by gameState
let teamScores = [0, 0, 0, 0];
let teamNames = ['1팀', '2팀', '3팀', '4팀'];
let incorrectAttempts = 0;
// let completedQuestionsHistory = []; // 💥 REMOVED: Replaced by gameState
let synth;
let currentYouTubeUrl = null;
let youtubeLoadTimeout;

// 게임 상태 관리 - 라운드별 상태 저장
let gameState = {
    isGameStarted: false,
    savedTeamNames: ['1팀', '2팀', '3팀', '4팀'],
    savedTeamScores: [0, 0, 0, 0],
    currentScreen: 'start', // 'start', 'roundIntro', 'game'
    roundStates: [
        { completedCount: 0, flippedCards: [] },
        { completedCount: 0, flippedCards: [] },
        { completedCount: 0, flippedCards: [] }
    ]
};

// 점수 입력 관련 변수
let selectedTeam = null;
let selectedScore = null;

// 상태 저장 및 복원 함수
function saveGameState() {
    gameState.savedTeamNames = [...teamNames];
    gameState.savedTeamScores = [...teamScores];
}

function restoreGameState() {
    teamNames = [...gameState.savedTeamNames];
    teamScores = [...gameState.savedTeamScores];
}

// 현재 라운드 상태 저장 (수정됨)
function saveCurrentRoundState() {
    if (currentRoundIndex < 0 || currentRoundIndex >= gameState.roundStates.length) return;
    
    // 1. 현재 DOM에서 플립된 카드들의 인덱스를 가져옵니다.
    const flippedCardIndices = Array.from(document.querySelectorAll('#quiz-grid .quiz-card.flipped'))
                                    .map(card => parseInt(card.dataset.index));

    // 2. gameState에 직접 저장합니다.
    const currentState = gameState.roundStates[currentRoundIndex];
    currentState.flippedCards = flippedCardIndices;
    currentState.completedCount = flippedCardIndices.length; // 완료된 문제 수는 플립된 카드 수와 동일합니다.

    console.log(`[Save] Round ${currentRoundIndex + 1} state saved. Flipped cards:`, currentState.flippedCards);
}

// 라운드 상태 복원 (수정됨)
function restoreRoundState(roundIndex) {
    const roundState = gameState.roundStates[roundIndex];
    if (!roundState || !roundState.flippedCards || roundState.flippedCards.length === 0) {
        console.log(`[Restore] No state to restore for Round ${roundIndex + 1}.`);
        updateNextRoundButton(); // 복원할 게 없어도 다음 라운드 버튼 상태는 확인해야 함
        return; // 복원할 상태가 없으면 종료
    }

    console.log(`[Restore] Restoring state for Round ${roundIndex + 1}. Flipped cards:`, roundState.flippedCards);

    const quizGrid = document.getElementById('quiz-grid');
    const phrase = roundPhrases[roundIndex];
    const round = rounds[roundIndex];

    // 저장된 '플립된 카드 인덱스' 목록을 순회하며 복원
    roundState.flippedCards.forEach(qIndex => {
        const card = quizGrid.querySelector(`[data-index="${qIndex}"]`);
        if (card && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            
            // 카드 뒷면에 글자 표시
            const sortedIndices = [...round.questionIndices].sort((a, b) => a - b);
            const charIndex = sortedIndices.indexOf(qIndex);
            if (phrase && charIndex >= 0 && charIndex < phrase.length) {
                const backElement = card.querySelector('.quiz-card-back');
                if (backElement) backElement.textContent = phrase[charIndex];
            }
        }
    });

    // 다음 라운드 버튼 상태 업데이트
    updateNextRoundButton();
}

// 다음 라운드 버튼 상태 업데이트 (수정됨)
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

// DOM 요소 변수
let startScreen, roundIntro, gameScreen, quizModal, questionView, answerView, answerBtn, questionViewBtn, feedbackModal, feedbackText;

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

// 사운드 초기화 및 재생 함수
function initializeAudio() { 
    if (typeof Tone !== 'undefined' && !synth) { 
        synth = new Tone.Synth().toDestination(); 
    } 
    if (typeof Tone !== 'undefined' && Tone.context.state !== 'running') { 
        Tone.context.resume(); 
    } 
}
const playSound = (note, duration) => { if (synth) synth.triggerAttackRelease(note, duration); };
const playFlipSound = () => playSound("G5", "16n");
const playCorrectSound = () => { if (synth) { const now = Tone.now(); synth.triggerAttackRelease("C5", "16n", now); synth.triggerAttackRelease("E5", "16n", now + 0.1); synth.triggerAttackRelease("G5", "16n", now + 0.2); } };
const playIncorrectSound = () => { if (synth) { const now = Tone.now(); synth.triggerAttackRelease("A3", "16n", now); synth.triggerAttackRelease("E3", "16n", now + 0.1); } };
const playRoundStartSound = () => { if (synth) { const now = Tone.now(); synth.triggerAttackRelease("C4", "8n", now); synth.triggerAttackRelease("E4", "8n", now + 0.15); synth.triggerAttackRelease("G4", "8n", now + 0.3); } };

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
    try { initializeAudio(); } catch (error) { console.error("사운드 초기화 중 오류:", error); } 
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
    
    setupRoundWithHiddenScoreboard();
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

// 라운드 설정 (점수판 숨김 처리 포함) - 수정됨
function setupRoundWithHiddenScoreboard() { 
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
    
    const sortedIndices = [...round.questionIndices].sort((a, b) => a - b); 
    sortedIndices.forEach((qIndex, localIndex) => { 
        const data = quizData[qIndex]; 
        if (!data) return; 
        const card = createQuizCard(qIndex, localIndex, data); 
        quizGrid.appendChild(card); 
    }); 

    // ★★★ DOM 생성이 끝난 직후, 해당 라운드의 상태를 즉시 복원합니다. ★★★
    restoreRoundState(currentRoundIndex);
    
    hideScoreboardAndAddButton(); 
}

// 퀴즈 카드 DOM 요소 생성 (수정됨)
function createQuizCard(qIndex, localIndex, data) { 
    const card = document.createElement('div'); 
    card.className = 'quiz-card'; 
    card.dataset.index = qIndex; 
    card.innerHTML = `<div class="quiz-card-inner"><div class="quiz-card-face quiz-card-front ${data.bonus ? 'bonus' : ''}"><span class="card-number">${localIndex + 1}</span></div><div class="quiz-card-face quiz-card-back"></div></div>`; 
    
    card.addEventListener('click', () => { 
        openQuizModalWithScoreInput(qIndex); 
        
        if (card.classList.contains('flipped')) { 
            return; 
        }
        
        try { playFlipSound(); } catch (e) { console.error(e); } 
        
        card.classList.add('flipped'); 
        
        // ★★★ 전역 변수 대신 gameState를 직접 업데이트 ★★★
        const currentState = gameState.roundStates[currentRoundIndex];
        if (!currentState.flippedCards.includes(qIndex)) {
            currentState.flippedCards.push(qIndex);
        }
        currentState.completedCount = currentState.flippedCards.length;
        
        console.log(`[Click] Card ${qIndex} flipped. Round ${currentRoundIndex + 1} completed count: ${currentState.completedCount}`);
        
        const phrase = roundPhrases[currentRoundIndex]; 
        const round = rounds[currentRoundIndex]; 
        const sortedIndices = [...round.questionIndices].sort((a, b) => a - b); 
        const charIndex = sortedIndices.indexOf(qIndex); 
        if (phrase && charIndex >= 0 && charIndex < phrase.length) { 
            card.querySelector('.quiz-card-back').textContent = phrase[charIndex]; 
        } 
        
        updateNextRoundButton();
    }); 
    return card; 
}


// 점수판 숨기고 '점수 현황 보기' 버튼을 header에 추가
function hideScoreboardAndAddButton() { 
    const scoreBoard = document.getElementById('score-board'); 
    scoreBoard.style.display = 'none'; 
}

// 퀴즈 모달 열기 (점수 입력 기능 포함)
function openQuizModalWithScoreInput(index) {
    currentQuestionIndex = index;
    incorrectAttempts = 0;
    const data = quizData[index];
    
    resetModal();
    initializeScoreInputInModal();
    addScoreInputToModal();
    
    const questionNumber = getQuestionNumber(index);
    document.getElementById('question-number').textContent = questionNumber;
    
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

// 문제 번호를 라운드-순서 형식으로 반환하는 함수
function getQuestionNumber(questionIndex) {
    for (let roundIndex = 0; roundIndex < rounds.length; roundIndex++) {
        const round = rounds[roundIndex];
        const questionPosition = round.questionIndices.indexOf(questionIndex);
        if (questionPosition !== -1) {
            const completedCount = gameState.roundStates[roundIndex].completedCount || 0;
            return `${roundIndex + 1} 라운드 (${completedCount}/${round.questionIndices.length})`;
        }
    }
    return questionIndex + 1;
}

// YouTube 영상 로드
function loadYouTubeVideo() {
    const youtubePlayer = document.getElementById('youtube-player');
    if (!currentYouTubeUrl) {
        showYouTubeError();
        return;
    }
    showYouTubeLoading();
    let isLoaded = false;
    youtubePlayer.onload = function() {
        if(isLoaded) return;
        isLoaded = true;
        clearTimeout(youtubeLoadTimeout);
        hideYouTubeLoading();
        console.log('YouTube 영상 로드 완료');
    };
    youtubeLoadTimeout = setTimeout(() => {
        if(isLoaded) return;
        isLoaded = true;
        hideYouTubeLoading();
        showYouTubeError();
        console.warn('YouTube 영상 로드 타임아웃');
    }, 8000);
    youtubePlayer.src = currentYouTubeUrl;
}

// YouTube 로딩/오류 UI 함수들
function showYouTubeLoading() { 
    hideYouTubeError(); 
    const container = document.getElementById('youtube-container'); 
    const existingLoader = document.getElementById('youtube-loader');
    if (existingLoader) existingLoader.remove();
    const loader = document.createElement('div'); 
    loader.id = 'youtube-loader'; 
    loader.className = 'youtube-loader'; 
    loader.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">영상을 불러오는 중...</div>';
    container.appendChild(loader); 
    document.getElementById('youtube-player').src = 'about:blank'; 
}
function hideYouTubeLoading() { 
    clearTimeout(youtubeLoadTimeout);
    const loader = document.getElementById('youtube-loader'); 
    if (loader) loader.remove(); 
}
function showYouTubeError() { 
    hideYouTubeLoading(); 
    const container = document.getElementById('youtube-container'); 
    const existingError = document.getElementById('youtube-error');
    if (existingError) existingError.remove();
    const videoId = currentYouTubeUrl ? currentYouTubeUrl.match(/embed\/([a-zA-Z0-9_-]{11})/)?.[1] || 'N/A' : 'N/A';
    const errorDiv = document.createElement('div'); 
    errorDiv.id = 'youtube-error'; 
    errorDiv.className = 'youtube-error'; 
    errorDiv.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: #fee; border: 1px solid #fcc; border-radius: 8px; color: #c66;">
            <p style="margin-bottom: 1rem;">⚠️ 영상을 불러올 수 없습니다</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="retryYouTube()" style="padding: 0.5rem 1rem; background: #4a90e2; color: white; border: none; border-radius: 4px; cursor: pointer;">🔄 다시 시도</button>
                <button onclick="openYouTubeDirectly()" style="padding: 0.5rem 1rem; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">🎬 YouTube에서 보기</button>
                <button onclick="copyYouTubeLink()" style="padding: 0.5rem 1rem; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">📋 링크 복사</button>
            </div>
            <small style="display: block; margin-top: 0.5rem; opacity: 0.7;">비디오 ID: ${videoId}</small>
        </div>
    `; 
    container.appendChild(errorDiv); 
}
function hideYouTubeError() { 
    const error = document.getElementById('youtube-error'); 
    if (error) error.remove(); 
}
function retryYouTube() { 
    hideYouTubeError(); 
    loadYouTubeVideo(); 
}
function openYouTubeDirectly() { 
    if (currentYouTubeUrl) {
        const videoId = currentYouTubeUrl.match(/embed\/([a-zA-Z0-9_-]{11})/)?.[1];
        if (videoId) {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        }
    }
}
function copyYouTubeLink() { 
    if (currentYouTubeUrl) {
        const videoId = currentYouTubeUrl.match(/embed\/([a-zA-Z0-9_-]{11})/)?.[1];
        if (videoId) {
            const url = `https://www.youtube.com/watch?v=${videoId}`;
            navigator.clipboard.writeText(url).then(() => {
                alert('링크가 복사되었습니다!');
            }).catch(() => {
                prompt('링크를 수동으로 복사하세요:', url);
            });
        }
    }
}

// 모달 초기화
function resetModal() {
    document.getElementById('hint-box').classList.remove('show');
    document.getElementById('youtube-container').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('youtube-player').src = 'about:blank';
    document.getElementById('matching-question-container').innerHTML = '';
    document.getElementById('matching-question-container').classList.add('hidden');
    hideYouTubeLoading();
    hideYouTubeError();
    clearTimeout(youtubeLoadTimeout);
    const scoreInputBox = document.getElementById('score-input-box');
    if (scoreInputBox) scoreInputBox.classList.remove('show');
    const scoreInputBtn = document.getElementById('score-input-btn');
    if (scoreInputBtn) scoreInputBtn.classList.add('hidden');
    questionView.classList.remove('hidden', 'fade-out');
    answerView.classList.add('hidden', 'fade-out');
    answerBtn.classList.remove('hidden');
    questionViewBtn.classList.add('hidden');
    document.getElementById('answer-display').classList.remove('hidden');
}

// 모달 닫기
function closeModal() {
    quizModal.classList.add('hidden');
    document.getElementById('youtube-player').src = 'about:blank';
    resetModal();
}

// 힌트 표시/숨기기
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

// YouTube 영상 표시/숨기기
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
        hideYouTubeLoading();
        hideYouTubeError();
    }
}

// 정답 공개 및 점수 입력 버튼 표시
function showAnswerWithScoreInput() { 
    const data = quizData[currentQuestionIndex]; 
    questionView.classList.add('fade-out'); 
    answerBtn.classList.add('hidden'); 
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
        answerBtn.classList.remove('hidden'); 
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

// 정답/오답 피드백 표시
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

// 짝짓기 문제 정답 라인 그리기
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

// --- 점수 입력 관련 함수들 ---
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
        answerBtn.classList.remove('hidden');
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

// --- 점수 현황판 모달 관련 함수들 ---
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

function adjustTeamScore(teamIndex, adjustment) { 
    if (teamScores[teamIndex] + adjustment < 0) return; 
    teamScores[teamIndex] += adjustment; 
    updateModalScoresAndRankings(); 
    try { playSound(adjustment > 0 ? "C5" : "A3", "16n"); } catch (e) { console.error(e); } 
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
    return ['🥇', '🥈', '🥉'][rank - 1] || '🏿'; 
}

/**
 * 지정된 라운드로 게임 화면을 전환하는 함수 (수정됨)
 * @param {number} targetRoundIndex - 이동할 라운드의 인덱스
 */
function switchToRound(targetRoundIndex) {
    if (targetRoundIndex === currentRoundIndex && gameState.currentScreen === 'game') return;

    console.log(`[Switching] Round ${currentRoundIndex + 1} -> ${targetRoundIndex + 1}`);

    // 1. (가장 중요) 현재 라운드의 진행 상태를 "먼저" 저장합니다.
    if (gameState.currentScreen === 'game') {
        saveCurrentRoundState();
    }

    // 2. 현재 라운드 인덱스를 목표 라운드로 변경합니다.
    currentRoundIndex = targetRoundIndex;

    // 3. 게임 화면이 표시되어 있지 않으면 표시
    if (gameState.currentScreen !== 'game') {
        roundIntro.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        gameState.currentScreen = 'game';
    }
    
    // 4. 새 라운드 화면을 설정하고, 저장된 상태를 즉시 복원합니다.
    setupRoundWithHiddenScoreboard(); 
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

// 키보드 단축키 처리
function handleKeyPress(e) { 
    if (quizModal.classList.contains('hidden')) return; 
    const keyMap = { h: 'hint-btn', a: 'answer-btn', q: 'question-view-btn', s: 'score-input-btn' }; 
    const btn = document.getElementById(keyMap[e.key.toLowerCase()]); 
    if (btn && !btn.classList.contains('hidden')) btn.click(); 
    if (e.key === 'Escape') closeModal(); 
}

// --- 십자말 퀴즈 통합 로직 (수정됨) ---
function setupCrossword() {
    const puzzleData = [
        { id: 1, word: "여호와", clue: "'스스로 계신 자'라는 뜻을 가진 하나님의 고유한 이름입니다.", orientation: 'horizontal', start: [0, 0] },
        { id: 2, word: "이스라엘", clue: "야곱이 하나님과 겨루어 이긴 후에 받은 새 이름이며, 그의 후손으로 이루어진 민족을 가리킵니다.", orientation: 'horizontal', start: [1, 5] },
        { id: 3, word: "나단", clue: "다윗 왕 시대의 선지자로, 다윗의 죄를 책망하고 하나님의 뜻을 전했습니다.", orientation: 'horizontal', start: [2, 2] },
        { id: 4, word: "아옐렛샤할", clue: "시편 22편의 표제로, '새벽의 암사슴'이라는 뜻을 가진 음악 용어입니다.", orientation: 'horizontal', start: [4, 0] },
        { id: 5, word: "예루살렘", clue: "다윗 왕이 수도로 삼은 곳이며, 하나님의 성전이 세워졌던 거룩한 도시입니다.", orientation: 'horizontal', start: [6, 3] },
        { id: 6, word: "시편", clue: "구약성경에 포함된 150편의 시와 찬양, 기도의 모음집입니다.", orientation: 'horizontal', start: [7, 0] },
        { id: 7, word: "의인", clue: "하나님 앞에서 올바르고 정의롭게 사는 사람을 뜻합니다.", orientation: 'horizontal', start: [8, 7] },
        { id: 8, word: "여두둔", clue: "다윗 시대의 레위인 성가대 지휘자 중 한 명으로, 시편 표제에 그의 이름이 언급됩니다.", orientation: 'vertical', start: [0, 0] },
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
window.retryYouTube = retryYouTube;
window.openYouTubeDirectly = openYouTubeDirectly;
window.copyYouTubeLink = copyYouTubeLink;

// DOM 로딩 완료 후 스크립트 초기화
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
