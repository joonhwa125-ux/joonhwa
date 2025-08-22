// Quiz Data with YouTube Links - 모든 URL을 embed 형식으로 수정
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
        youtube: "3dZ8hq5d7HI"
    },
    { 
        type: 'multiple-choice', 
        question: "다윗은 속이고 아첨하는 악인의 목구멍이\n마치 무엇과 같다고 했습니까?", 
        options: ["용암을 내뿜는 화산", "오물을 쏟아내는 하수구", "열린 무덤", "독을 내뿜는 거미줄"], 
        answerIndex: 2, 
        hint: "시편 5편",
        youtube: "VKiMRJNGlng"
    },
    { 
        type: 'multiple-choice', 
        question: "시편 9편에서 시인이 원하지 않는 것은 무엇입니까?", 
        options: ["하나님의 공의", "하나님 없는 인생들의 승리", "원수의 멸망", "이방 나라들의 심판"], 
        answerIndex: 1, 
        hint: "시편 9편",
        youtube: "RBmg0hQh8nQ"
    },
    { 
        type: 'multiple-choice', 
        question: "다음 번호에 해당하는 낱말 중 틀린 것은?<span class='quote'>\"여호와는 나의 (1)이시요 나의 (2)시요...\n내가 그 안에 피할 나의 바위시오 나의 (3)시요\n나의 (4)이시요 나의 산성이시로다\"</span>", 
        options: ["(1) 반석", "(2) 요새", "(3) 창", "(4) 구원의 뿔"], 
        answerIndex: 2, 
        hint: "시편 18편",
        youtube: "fvKM6MZniNA"
    },
    { 
        bonus: true, 
        type: 'matching', 
        question: "하나님의 말씀에 대한 명칭과 그 기능을 연결하세요.", 
        answer: '1-ㄴ, 2-ㄷ, 3-ㄱ, 4-ㄹ', 
        hint: "시편 19편",
        youtube: "BzpBqaRurFk",
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
        hint: "엘리 엘리 라마 사막다니",
        youtube: "9qQ5KKzAGVw"
    },
    { 
        type: 'multiple-choice', 
        question: "다윗은 기도할 때 어디를 향하여\n손을 들고 기도하였습니까?", 
        options: ["하늘", "산", "주의 지성소", "궁전"], 
        answerIndex: 2, 
        hint: "시편 28편",
        youtube: "VlB4m5v3gTI"
    },
    { 
        type: 'multiple-choice', 
        question: "악인들이 스스로 자랑하는 것은 무엇입니까?", 
        options: ["자기의 죄악이 드러나지 않을 것임", "자신의 연약함", "자신의 의로움", "악을 거절함"], 
        answerIndex: 0, 
        hint: "시편 36편",
        youtube: "vfF5Y3aT1Wc"
    },
    { 
        type: 'multiple-choice', 
        question: "행악자들에 대하여 불평하지 말아야 할 이유는?", 
        options: ["악인의 보복을 받을까봐", "남의 일에 간섭할 필요가 없기에", "악인의 번영은 일시적이기 때문에", "사람은 자신의 운명대로 사는 것이므로"], 
        answerIndex: 2, 
        hint: "시편 37편",
        youtube: "o_3oBc5Zcss"
    },
    { 
        bonus: true, 
        question: "'마스길'이란 히브리어는 무슨 뜻입니까?", 
        answer: "교훈, 교훈시", 
        hint: "시편 32편",
        youtube: "DXDGE_lRI0E"
    },
    { 
        type: 'multiple-choice', 
        question: "시편 46편에 세 차례 반복되어 등장하는 구절은?", 
        options: ["만군의 여호와께서 우리와 함께 하시니", "새벽에 하나님이 도우시리로다", "너희는 가만히 있어 내가 하나님 됨을 알지어다", "하나님은 온 땅의 왕이시라"], 
        answerIndex: 0, 
        hint: "시편 46편",
        youtube: "kNMUur0mJTQ"
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
        youtube: "L6tC9BWKe3o"
    },
    { 
        question: "다윗이 밧세바와 동침한 후 지은\n회개의 시는 시편 몇 편입니까?", 
        answer: "시편 51편", 
        hint: "시편의 표제에 기록되어 있습니다.",
        youtube: "E1BciSW9nwM"
    },
    { 
        type: 'multiple-choice', 
        question: "하나님이 구하시는 제사는 다음 중 어느 것입니까?", 
        options: ["연약한 심령", "값비싼 번제", "상한 심령", "자신의 의"], 
        answerIndex: 2, 
        hint: "시편 51편",
        youtube: "FJO_vTKEwD4"
    },
    { 
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )이 생명보다 나으므로\n내 입술이 주를 찬양할 것이라\"</span>", 
        options: ["골수와 기름진 것", "주의 인자하심", "탈취한 물건을 나누는 것", "주님의 권능"], 
        answerIndex: 1, 
        hint: "시편 63편",
        youtube: "e4XqJdgXF_Q"
    },
    { 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 궁정에서의 한 날이 다른 곳에서의 천 날보다 나음즉\n악인의 장막에 사는 것보다\n내 하나님의 성전 (   )로 있는 것이 좋사오니\"</span>", 
        answer: "문지기", 
        hint: "시편 84편",
        youtube: "jkQAJZNxXD8"
    },
    { 
        bonus: true, 
        question: "빈칸을 순서대로 채우세요.<span class='quote'>\"우리의 연수가 칠십이요 강건하면 팔십이라도\n그 연수의 자랑은 (  )와 (  )뿐이요\n신속히 가니 우리가 (  )가나이다...\n우리에게 우리의 날 (  )함을 가르치사\n지혜로운 마음을 얻게 하소서\"</span>", 
        answer: "수고, 슬픔, 날아가, 계수", 
        hint: "시편 90편",
        youtube: "pQELN4VQ9Vg"
    },
    { 
        type: 'multiple-choice', 
        question: "광야에서 이스라엘 백성이 하나님을 시험하였던\n장소와 관련 없는 것은?", 
        options: ["르비딤", "양식", "므리바", "맛사"], 
        answerIndex: 1, 
        hint: "시편 95편",
        youtube: "K2Mfq6gn5NI"
    },
    { 
        bonus: true, 
        question: "시편은 모두 몇 권, 몇 편으로 구성되어 있습니까?", 
        answer: "5권, 150편", 
        hint: "모세오경",
        youtube: "j9phNEaPrv8"
    },
    { 
        bonus: true, 
        question: "'할렐루야'의 뜻은 무엇입니까?", 
        answer: "여호와를 찬양하라", 
        hint: "시편 111편",
        youtube: "LcBNZmz1tOI"
    },
    { 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"주의 권능의 날에 주의 백성이 거룩한 옷을 입고\n즐겁게 헌신하니 (         ) 같은\n주의 청년들이 주께 나오는도다\"</span>", 
        answer: "새벽 이슬", 
        hint: "시편 110편",
        youtube: "dUrLqDBLzqA"
    },
    { 
        bonus: true, 
        question: "하나님의 지존하심을 나타내는 말씀입니다.<span class='context'>빈칸을 순서대로 채우세요.</span><span class='quote'>\"높은 곳에 앉으셨으나 (   ) 낮추사\n천지를 살피시고 (   ) 자를 먼지 더미에서 일으키시며\n궁핍한 자를 (   ) 더미에서 들어 세워...\"</span>", 
        answer: "스스로, 가난한, 거름", 
        hint: "시편 113편",
        youtube: "3F50tC4T4AM"
    },
    { 
        question: "성경 전체 가운데 가장 짧은 장은 어디입니까?", 
        answer: "시편 117편", 
        hint: "이 2절로 되어있습니다.",
        youtube: "xQwnH8th_fs"
    },
    { 
        type: 'multiple-choice', 
        question: "주의 말씀에 대한 비유로 사용된 표현이 아닌 것은?", 
        options: ["등", "정금", "꿀", "소금"], 
        answerIndex: 3, 
        hint: "시편 119편",
        youtube: "Wc5EHhS7eHw"
    },
    { 
        type: 'multiple-choice', 
        question: "빈칸에 들어갈 말은?<span class='quote'>\"(         )은/는 장사의 수중의 화살 같으니\"</span>", 
        options: ["거짓된 혀", "젊은 자의 자식", "노인의 지혜", "부자의 재물"], 
        answerIndex: 1, 
        hint: "시편 127편",
        youtube: "3qA_HvF5UXo"
    },
    { 
        type: 'multiple-choice', 
        question: "다음 중 시편의 저자가 아닌 사람은 누구입니까?", 
        options: ["다윗", "엘리사", "모세", "솔로몬"], 
        answerIndex: 1, 
        hint: "",
        youtube: "j9phNEaPrv8"
    },
    { 
        bonus: true, 
        question: "할렐루야로 시작하여 할렐루야로 끝나는\n'할렐루야 시'는 이 몇 개입니까?", 
        answer: "8개", 
        hint: "시편 106, 113, 135, 146, 147, 148, 149, 150편",
        youtube: "Kkr9uyd-3iA"
    }
];

// 강화된 유튜브 URL 처리 함수
function getYouTubeEmbedUrl(videoInput) {
    if (!videoInput) return null;
    
    console.log('YouTube URL 처리 시작:', videoInput);
    
    let videoId = '';
    
    try {
        // 1. 이미 embed URL인 경우
        if (videoInput.includes('embed/')) {
            videoId = videoInput.split('embed/')[1].split('?')[0].split('/')[0];
        }
        // 2. watch?v= 형식 처리 (가장 일반적)
        else if (videoInput.includes('watch?v=')) {
            try {
                const url = new URL(videoInput);
                videoId = url.searchParams.get('v');
            } catch {
                // URL 파싱 실패 시 정규표현식 사용
                const match = videoInput.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
                videoId = match ? match[1] : null;
            }
        }
        // 3. youtu.be 단축 URL
        else if (videoInput.includes('youtu.be/')) {
            videoId = videoInput.split('youtu.be/')[1].split('?')[0].split('&')[0].split('/')[0];
        }
        // 4. YouTube Shorts URL
        else if (videoInput.includes('youtube.com/shorts/')) {
            videoId = videoInput.split('shorts/')[1].split('?')[0].split('/')[0];
        }
        // 5. 순수 비디오 ID (11자리 영숫자)
        else if (/^[a-zA-Z0-9_-]{11}$/.test(videoInput.trim())) {
            videoId = videoInput.trim();
        }
        // 6. 마지막 시도: URL에서 11자리 패턴 찾기
        else {
            const match = videoInput.match(/[a-zA-Z0-9_-]{11}/);
            videoId = match ? match[0] : null;
        }
        
        // 비디오 ID 검증
        if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            console.error('유효하지 않은 YouTube 비디오 ID:', videoId, '원본:', videoInput);
            return null;
        }
        
        console.log('추출된 비디오 ID:', videoId);
        
        // 여러 백업 URL 생성 시도
        const embedUrls = [
            // 기본 embed URL
            `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`,
            // nocookie 도메인 사용
            `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`,
            // 최소한의 파라미터
            `https://www.youtube.com/embed/${videoId}?autoplay=0`,
            // 파라미터 없는 순수 URL
            `https://www.youtube.com/embed/${videoId}`
        ];
        
        console.log('생성된 embed URLs:', embedUrls);
        return embedUrls;
        
    } catch (error) {
        console.error('YouTube URL 파싱 중 오류:', error, videoInput);
        return null;
    }
}

const rounds = [
    { 
        title: "1라운드: 하나님을 향하여", 
        description: "하나님의 성품, 말씀, 그리고 우리와의 관계에 대한 질문들을 통해 하나님이 어떤 분이신지 알아봅니다.", 
        questionIndices: [1, 11, 12, 16, 23, 4, 5, 25, 15, 21, 22] 
    },
    { 
        title: "2라운드: 우리를 향하여", 
        description: "의인과 악인의 삶, 그리고 성도의 지혜에 대한 질문들을 통해 시편이 우리의 삶에 어떻게 적용되는지 살펴봅니다.", 
        questionIndices: [0, 2, 3, 8, 9, 13, 14, 18, 17, 26] 
    },
    { 
        title: "3라운드: 시편에 대하여", 
        description: "시편의 저자, 역사적 배경, 구조 등 시편 자체에 대한 흥미로운 사실들을 알아봅니다.", 
        questionIndices: [6, 7, 19, 27, 10, 20, 24, 28] 
    }
];

const roundPhrases = [
    "주께서나와함께하심이라", // 11자
    "여호와는나의목자시니", // 10자
    "내잔이넘치나이다"      // 8자
];

// State Variables
let currentQuestionIndex = -1;
let currentRoundIndex = 0;
let completedQuestionsInRound = 0;
let teamScores = [0, 0, 0, 0];
let teamNames = ['1팀', '2팀', '3팀', '4팀'];
let incorrectAttempts = 0;
let completedQuestionsHistory = [];
let synth;

// 점수 입력 관련 변수
let selectedTeam = null;
let selectedScore = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const roundIntro = document.getElementById('round-intro');
const gameScreen = document.getElementById('game-screen');
const quizModal = document.getElementById('quiz-modal');
const questionView = document.getElementById('question-view');
const answerView = document.getElementById('answer-view');
const answerBtn = document.getElementById('answer-btn');
const questionViewBtn = document.getElementById('question-view-btn');
const feedbackModal = document.getElementById('feedback-modal');
const feedbackText = document.getElementById('feedback-text');

// Initialize
function init() {
    setupEventListeners();
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    roundIntro.classList.add('hidden');
}

// Sound Functions
function initializeAudio() {
    if (typeof Tone !== 'undefined' && !synth) {
        synth = new Tone.Synth().toDestination();
    }
    if (typeof Tone !== 'undefined' && Tone.context.state !== 'running') {
        Tone.context.resume();
    }
}

const playSound = (note, duration) => {
    if (synth) {
        synth.triggerAttackRelease(note, duration);
    }
};

const playFlipSound = () => playSound("G5", "16n");
const playCorrectSound = () => {
    if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("C5", "16n", now);
        synth.triggerAttackRelease("E5", "16n", now + 0.1);
        synth.triggerAttackRelease("G5", "16n", now + 0.2);
    }
};
const playIncorrectSound = () => {
    if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("A3", "16n", now);
        synth.triggerAttackRelease("E5", "16n", now + 0.1);
    }
};
const playRoundStartSound = () => {
    if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("C4", "8n", now);
        synth.triggerAttackRelease("E4", "8n", now + 0.15);
        synth.triggerAttackRelease("G4", "8n", now + 0.3);
    }
};

// Event Listeners
function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('round-start-btn').addEventListener('click', startRound);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('next-round-btn').addEventListener('click', nextRound);
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    
    // 수정된 함수 연결
    answerBtn.addEventListener('click', showAnswerWithScoreInput);
    questionViewBtn.addEventListener('click', showQuestionView);
    document.getElementById('youtube-btn').addEventListener('click', toggleYoutube);
    
    quizModal.addEventListener('click', (e) => {
        if (e.target === quizModal) closeModal();
    });
    feedbackModal.addEventListener('click', (e) => {
        if (e.target === feedbackModal) hideFeedback();
    });

    document.getElementById('bgm-toggle-btn').addEventListener('click', toggleBGM);
    document.addEventListener('keydown', handleKeyPress);
}

// Game Flow
function startGame() {
    try {
        initializeAudio();
    } catch (error) {
        console.error("사운드 초기화 중 오류가 발생했습니다:", error);
    }
    
    const inputs = document.querySelectorAll('.team-name-input');
    inputs.forEach((input, index) => {
        if (input.value.trim()) {
            teamNames[index] = input.value.trim();
        }
    });

    teamScores = [0, 0, 0, 0];
    currentRoundIndex = 0;
    completedQuestionsHistory = [];
    startScreen.classList.add('hidden');
    showRoundIntro();
}

function showRoundIntro() {
    const round = rounds[currentRoundIndex];
    document.getElementById('round-title').textContent = round.title;
    document.getElementById('round-description').textContent = round.description;
    roundIntro.classList.remove('hidden');
    gameScreen.classList.add('hidden');
}

function startRound() {
    try {
        playRoundStartSound();
    } catch (error) {
        console.error("라운드 시작 사운드 재생 오류:", error);
    }
    roundIntro.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    setupRoundWithHiddenScoreboard();
}

function nextRound() {
    if (currentRoundIndex < rounds.length - 1) {
        currentRoundIndex++;
        showRoundIntro();
    } else {
        // 모든 라운드 종료 - 순위 발표
        showFinalRanking();
    }
}

function resetGame() {
    if (confirm('게임을 초기화하시겠습니까?')) {
        currentRoundIndex = 0;
        teamScores = [0, 0, 0, 0];
        completedQuestionsHistory = [];
        
        // 점수 현황 버튼 제거
        const scoreStatusBtn = document.getElementById('show-score-status-btn');
        if (scoreStatusBtn) {
            scoreStatusBtn.parentElement.remove();
        }
        
        // 점수판 다시 표시
        const scoreBoard = document.getElementById('score-board');
        scoreBoard.style.display = 'grid';
        
        gameScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }
}

// Round and Board Setup
function setupRoundWithHiddenScoreboard() {
    const round = rounds[currentRoundIndex];
    const quizGrid = document.getElementById('quiz-grid');
    const progressContainer = document.getElementById('round-progress-container');
    
    quizGrid.innerHTML = '';
    progressContainer.innerHTML = '';
    completedQuestionsInRound = 0;
    
    // 라운드 진행 상황 표시
    rounds.forEach((_, index) => {
        const bookmark = document.createElement('div');
        bookmark.className = 'bookmark';
        bookmark.textContent = `${index + 1} 라운드`;
        if (index < currentRoundIndex) {
            bookmark.classList.add('completed');
        } else if (index === currentRoundIndex) {
            bookmark.classList.add('active');
        }
        progressContainer.appendChild(bookmark);
    });
    
    document.getElementById('next-round-btn').classList.add('hidden');
    
    const sortedIndices = [...round.questionIndices].sort((a, b) => a - b);

    // 퀴즈 카드 생성
    sortedIndices.forEach((qIndex, localIndex) => {
        const data = quizData[qIndex];
        if (!data) return;
        
        const card = createQuizCard(qIndex, localIndex, data);
        quizGrid.appendChild(card);
    });
    
    // 점수판 숨기고 버튼 추가 (한 번만 실행)
    if (!document.getElementById('show-score-status-btn')) {
        hideScoreboardAndAddButton();
    }
}

// 퀴즈 카드 생성
function createQuizCard(qIndex, localIndex, data) {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.dataset.index = qIndex;
    
    card.innerHTML = `
        <div class="quiz-card-inner">
            <div class="quiz-card-face quiz-card-front ${data.bonus ? 'bonus' : ''}">
                <span class="card-number">${localIndex + 1}</span>
            </div>
            <div class="quiz-card-face quiz-card-back"></div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        try {
            playFlipSound();
        } catch (error) {
            console.error("카드 뒤집기 사운드 재생 오류:", error);
        }
        // 수정된 함수 호출
        openQuizModalWithScoreInput(qIndex);
        
        if (!completedQuestionsHistory.includes(qIndex)) {
            completedQuestionsHistory.push(qIndex);
            card.classList.add('flipped');
            completedQuestionsInRound++;

            const phrase = roundPhrases[currentRoundIndex];
            const round = rounds[currentRoundIndex];
            const sortedIndices = [...round.questionIndices].sort((a, b) => a - b);
            const charIndex = sortedIndices.indexOf(qIndex);
            
            if(phrase && charIndex < phrase.length) {
                const char = phrase[charIndex];
                const cardBack = card.querySelector('.quiz-card-back');
                cardBack.textContent = char;
            }
            
            if (completedQuestionsInRound === round.questionIndices.length) {
                const nextBtn = document.getElementById('next-round-btn');
                nextBtn.classList.remove('hidden');
                nextBtn.textContent = currentRoundIndex < rounds.length - 1 ? '다음 라운드' : '퀴즈 종료!';
            }
        }
    });
    
    return card;
}

// 게임 화면에서 점수판 숨기고 버튼으로 대체
function hideScoreboardAndAddButton() {
    // 기존 점수판 숨기기
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.style.display = 'none';
    
    // 점수 현황 보기 버튼 추가
    const scoreButtonContainer = document.createElement('div');
    scoreButtonContainer.className = 'text-center mb-8';
    scoreButtonContainer.innerHTML = `
        <button id="show-score-status-btn" class="btn-3d">
            📊 점수 현황 보기
        </button>
    `;
    
    // 버튼을 next-round-btn 앞에 추가
    const nextRoundBtn = document.getElementById('next-round-btn').parentElement;
    nextRoundBtn.insertAdjacentElement('beforebegin', scoreButtonContainer);
    
    // 버튼 이벤트 추가
    document.getElementById('show-score-status-btn').addEventListener('click', showScoreStatusModal);
}

// Modal Logic
function openQuizModalWithScoreInput(index) {
    currentQuestionIndex = index;
    incorrectAttempts = 0;
    const data = quizData[index];
    
    resetModal();
    
    // 점수 입력 시스템 초기화
    initializeScoreInputInModal();
    addScoreInputToModal();
    
    document.getElementById('question-number').textContent = index + 1;
    document.getElementById('question-text').innerHTML = data.question;
    
    const answerText = data.answer || (data.options ? data.options[data.answerIndex] : '');
    document.getElementById('answer-text').textContent = answerText;
    
    if (data.hint) {
        document.getElementById('hint-text').textContent = data.hint;
    }
    
    // 유튜브 관련 개선된 부분
    const youtubeBtn = document.getElementById('youtube-btn');
    const youtubePlayer = document.getElementById('youtube-player');
    
    if (data.youtube) {
        const embedUrls = getYouTubeEmbedUrl(data.youtube);
        if (embedUrls && embedUrls.length > 0) {
            // 전역 변수에 URL 목록 저장 (재시도용)
            currentYouTubeUrls = embedUrls;
            
            // 로딩 상태 표시
            showYouTubeLoading();
            
            // 순차적으로 URL 시도
            tryYouTubeUrls(embedUrls, 0);
            
            youtubeBtn.classList.remove('hidden');
        } else {
            console.warn('YouTube URL 처리 실패:', data.youtube);
            currentYouTubeUrls = null;
            youtubeBtn.classList.add('hidden');
        }
    } else {
        youtubeBtn.classList.add('hidden');
        youtubePlayer.src = '';
        currentYouTubeUrls = null;
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

// YouTube URL들을 순차적으로 시도하는 함수
function tryYouTubeUrls(urls, index) {
    if (index >= urls.length) {
        console.error('모든 YouTube URL 시도 실패');
        hideYouTubeLoading();
        showYouTubeError();
        return;
    }
    
    const youtubePlayer = document.getElementById('youtube-player');
    const currentUrl = urls[index];
    
    console.log(`YouTube URL 시도 ${index + 1}/${urls.length}:`, currentUrl);
    
    // 이전 이벤트 리스너 제거
    youtubePlayer.onload = null;
    youtubePlayer.onerror = null;
    
    // 로드 성공 처리
    youtubePlayer.onload = function() {
        console.log('YouTube 영상 로드 성공:', currentUrl);
        hideYouTubeLoading();
        
        // 실제로 콘텐츠가 로드되었는지 확인
        setTimeout(() => {
            try {
                // iframe이 실제로 콘텐츠를 로드했는지 간접적으로 확인
                if (youtubePlayer.contentWindow) {
                    console.log('YouTube 콘텐츠 확인 완료');
                }
            } catch (e) {
                // 크로스 오리진 제한으로 에러가 날 수 있지만 정상
                console.log('YouTube 로드 완료 (CORS 제한)');
            }
        }, 1000);
    };
    
    // 로드 실패 처리
    youtubePlayer.onerror = function() {
        console.warn(`YouTube URL 실패 ${index + 1}/${urls.length}:`, currentUrl);
        
        // 다음 URL 시도
        setTimeout(() => {
            tryYouTubeUrls(urls, index + 1);
        }, 500);
    };
    
    // 타임아웃 설정 (각 URL당 8초)
    const timeoutId = setTimeout(() => {
        console.warn(`YouTube URL 타임아웃 ${index + 1}/${urls.length}:`, currentUrl);
        
        // 다음 URL 시도
        tryYouTubeUrls(urls, index + 1);
    }, 8000);
    
    // 성공 시 타임아웃 취소
    const originalOnload = youtubePlayer.onload;
    youtubePlayer.onload = function() {
        clearTimeout(timeoutId);
        if (originalOnload) originalOnload();
    };
    
    // URL 설정
    youtubePlayer.src = currentUrl;
}

// 수동 재시도를 위한 전역 변수
let currentYouTubeUrls = null;

// 유튜브 로딩 상태 표시
function showYouTubeLoading() {
    const youtubeContainer = document.getElementById('youtube-container');
    const existingLoader = youtubeContainer.querySelector('.youtube-loader');
    
    // 기존 로더가 없으면 생성
    if (!existingLoader) {
        const loader = document.createElement('div');
        loader.className = 'youtube-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="spinner"></div>
                <span>영상을 불러오는 중...</span>
            </div>
        `;
        youtubeContainer.appendChild(loader);
    }
}

// 유튜브 로딩 상태 숨김
function hideYouTubeLoading() {
    const loader = document.querySelector('.youtube-loader');
    if (loader) {
        loader.remove();
    }
}

// 개선된 유튜브 에러 처리 함수
function showYouTubeError() {
    const youtubeContainer = document.getElementById('youtube-container');
    const youtubePlayer = document.getElementById('youtube-player');
    
    // 기존 에러 메시지 제거
    const existingError = youtubeContainer.querySelector('.youtube-error');
    if (existingError) {
        existingError.remove();
    }
    
    youtubePlayer.style.display = 'none';
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'youtube-error';
    errorMessage.innerHTML = `
        <div class="error-content">
            <div class="error-icon">⚠️</div>
            <div class="error-text">
                <div class="error-title">영상을 불러올 수 없습니다</div>
                <div class="error-subtitle">네트워크 연결을 확인하거나 잠시 후 다시 시도해보세요</div>
            </div>
            <div class="error-actions">
                <button onclick="retryYouTube()" class="retry-btn">다시 시도</button>
                <button onclick="skipYouTube()" class="skip-btn">건너뛰기</button>
                <button onclick="openYouTubeDirectly()" class="direct-btn">직접 열기</button>
            </div>
        </div>
    `;
    
    youtubeContainer.appendChild(errorMessage);
}

// 개선된 유튜브 재시도 함수
function retryYouTube() {
    const youtubePlayer = document.getElementById('youtube-player');
    const youtubeContainer = document.getElementById('youtube-container');
    
    // 에러 메시지와 로더 제거
    const errorMessage = youtubeContainer.querySelector('.youtube-error');
    const loader = youtubeContainer.querySelector('.youtube-loader');
    
    if (errorMessage) errorMessage.remove();
    if (loader) loader.remove();
    
    // 플레이어 다시 표시
    youtubePlayer.style.display = 'block';
    youtubePlayer.src = ''; // 기존 src 초기화
    
    if (currentYouTubeUrls && currentYouTubeUrls.length > 0) {
        console.log('YouTube 재시도 시작');
        showYouTubeLoading();
        
        // 다시 처음부터 모든 URL 시도
        setTimeout(() => {
            tryYouTubeUrls(currentYouTubeUrls, 0);
        }, 500);
    } else {
        console.error('재시도할 YouTube URL이 없습니다');
        showYouTubeError();
    }
}

// 유튜브 건너뛰기 함수
function skipYouTube() {
    const youtubeContainer = document.getElementById('youtube-container');
    const errorMessage = youtubeContainer.querySelector('.youtube-error');
    
    if (errorMessage) {
        errorMessage.remove();
    }
    
    // 컨테이너 숨기기
    youtubeContainer.classList.add('hidden');
    
    // 피드백 표시
    const feedback = document.createElement('div');
    feedback.className = 'youtube-skip-feedback';
    feedback.textContent = '영상을 건너뛰었습니다';
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// YouTube 직접 열기 함수 (새로운 기능)
function openYouTubeDirectly() {
    const data = quizData[currentQuestionIndex];
    if (data && data.youtube && currentYouTubeUrls && currentYouTubeUrls.length > 0) {
        // 원본 YouTube URL 생성
        let originalUrl = '';
        
        if (data.youtube.includes('youtube.com') || data.youtube.includes('youtu.be')) {
            originalUrl = data.youtube;
        } else {
            // 비디오 ID만 있는 경우
            const videoId = data.youtube.length === 11 ? data.youtube : 
                           currentYouTubeUrls[0].split('embed/')[1].split('?')[0];
            originalUrl = `https://www.youtube.com/watch?v=${videoId}`;
        }
        
        // 새 창에서 YouTube 열기
        window.open(originalUrl, '_blank', 'noopener,noreferrer');
        
        // 건너뛰기 처리
        skipYouTube();
    }
}

function resetModal() {
    document.getElementById('hint-box').classList.remove('show');
    document.getElementById('youtube-container').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('youtube-player').src = '';
    document.getElementById('matching-question-container').innerHTML = '';
    document.getElementById('matching-question-container').classList.add('hidden');
    
    // 유튜브 관련 요소들 정리
    const youtubeContainer = document.getElementById('youtube-container');
    const errorMessage = youtubeContainer.querySelector('.youtube-error');
    const loader = youtubeContainer.querySelector('.youtube-loader');
    const youtubePlayer = document.getElementById('youtube-player');
    
    if (errorMessage) errorMessage.remove();
    if (loader) loader.remove();
    youtubePlayer.style.display = 'block'; // 플레이어 다시 표시
    
    // YouTube URL 목록 초기화
    currentYouTubeUrls = null;
    
    // 점수 입력 사이드바 숨기기
    const scoreInputBox = document.getElementById('score-input-box');
    if (scoreInputBox) {
        scoreInputBox.classList.remove('show');
    }
    
    // 점수 입력 버튼 숨기기
    const scoreInputBtn = document.getElementById('score-input-btn');
    if (scoreInputBtn) {
        scoreInputBtn.classList.add('hidden');
    }
    
    const oldSvg = document.querySelector('#matching-question-container svg');
    if(oldSvg) oldSvg.remove();

    questionView.classList.remove('hidden', 'fade-out');
    answerView.classList.add('hidden', 'fade-out');
    answerBtn.classList.remove('hidden');
    questionViewBtn.classList.add('hidden');
    document.getElementById('answer-display').classList.remove('hidden');
}

function closeModal() {
    quizModal.classList.add('hidden');
    resetModal();
}

// Hint and Answer Views
function showHint() {
    const hintBox = document.getElementById('hint-box');
    hintBox.classList.toggle('show');
}

function toggleYoutube() {
    const youtubeContainer = document.getElementById('youtube-container');
    youtubeContainer.classList.toggle('hidden');
}

function showAnswerWithScoreInput() {
    const data = quizData[currentQuestionIndex];
    
    questionView.classList.add('fade-out');
    answerBtn.classList.add('hidden');

    setTimeout(() => {
        questionView.classList.add('hidden');
        answerView.classList.remove('hidden', 'fade-out');
        questionViewBtn.classList.remove('hidden');
        document.getElementById('hint-box').classList.remove('show');
        
        // 점수 입력 버튼 표시
        const scoreInputBtn = document.getElementById('score-input-btn');
        if (scoreInputBtn) {
            scoreInputBtn.classList.remove('hidden');
        }

        if (data.type === 'matching') {
            questionView.classList.remove('hidden', 'fade-out');
            document.getElementById('answer-display').classList.add('hidden');
            drawMatchingAnswerLines(data.matchingData);
        } else {
            document.getElementById('answer-display').classList.remove('hidden');
        }
    }, 400);
}

function showQuestionView() {
    const data = quizData[currentQuestionIndex];
    
    answerView.classList.add('fade-out');
    questionViewBtn.classList.add('hidden');
    
    // 점수 입력 버튼도 숨기기
    const scoreInputBtn = document.getElementById('score-input-btn');
    if (scoreInputBtn) {
        scoreInputBtn.classList.add('hidden');
    }
    
    // 점수 입력 사이드바도 숨기기
    hideScoreInput();

    // 매칭 문제의 정답 라인 제거 (깨끗한 문제 화면으로)
    if (data && data.type === 'matching') {
        const oldSvg = document.querySelector('#matching-question-container svg');
        if(oldSvg) oldSvg.remove();
    }

    setTimeout(() => {
        answerView.classList.add('hidden');
        questionView.classList.remove('hidden', 'fade-out');
        answerBtn.classList.remove('hidden');
    }, 400);
}

// Option and Answer Checking
function renderOptions(data) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    data.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.index = index;
        
        button.addEventListener('click', () => {
            checkAnswer(button, index, data.answerIndex);
        });
        
        container.appendChild(button);
    });
}

function checkAnswer(button, selectedIndex, correctIndex) {
    const isCorrect = selectedIndex === correctIndex;
    button.disabled = true;
    
    if (isCorrect) {
        try {
            playCorrectSound();
        } catch (error) {
            console.error("정답 사운드 재생 오류:", error);
        }
        button.classList.add('correct');
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
        showFeedback(true, true);
        
        // 정답 시 점수 입력 버튼 표시
        showScoreInputButton();
        
    } else {
        try {
            playIncorrectSound();
        } catch (error) {
            console.error("오답 사운드 재생 오류:", error);
        }
        button.classList.add('incorrect');
        incorrectAttempts++;
        showFeedback(false);
        
        if (incorrectAttempts >= 3) {
            // 3번 틀렸을 때 정답 표시 및 점수 입력 버튼 표시
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.disabled = true;
                if (parseInt(btn.dataset.index) === correctIndex) {
                    btn.classList.add('correct');
                }
            });
            
            // 3번 오답 시에도 점수 입력 버튼 표시
            showScoreInputButton();
        }
    }
}

// 점수 입력 버튼을 표시하는 함수
function showScoreInputButton() {
    // 점수 입력 버튼이 없다면 생성
    if (!document.getElementById('score-input-btn')) {
        addScoreInputToModal();
    }
    
    // 점수 입력 버튼 표시
    const scoreInputBtn = document.getElementById('score-input-btn');
    if (scoreInputBtn) {
        scoreInputBtn.classList.remove('hidden');
    }
}

function showFeedback(isCorrect, triggerConfetti = false) {
    if (isCorrect) {
        feedbackText.textContent = "정답입니다. 축하해요!";
        feedbackText.style.color = 'var(--success)';
        if (triggerConfetti && typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
        }
    } else {
        feedbackText.textContent = "아쉽지만 다음 기회에";
        feedbackText.style.color = 'var(--error)';
    }
    feedbackModal.classList.remove('hidden');
    setTimeout(hideFeedback, 1500);
}

function hideFeedback() {
    feedbackModal.classList.add('hidden');
}

// Matching Question Specific Functions
function renderMatchingQuestion(data) {
    const container = document.getElementById('matching-question-container');
    container.innerHTML = `
        <div class="matching-container">
            <div class="matching-column">
                ${data.left.map(item => `<div class="matching-item">${item}</div>`).join('')}
            </div>
            <div class="matching-column">
                ${data.right.map(item => `<div class="matching-item">${item}</div>`).join('')}
            </div>
        </div>
    `;
    container.classList.remove('hidden');
}

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

                const x1 = (leftRect.right - containerRect.left);
                const y1 = (leftRect.top - containerRect.top) + leftRect.height / 2;
                const x2 = (rightRect.left - containerRect.left);
                const y2 = (rightRect.top - containerRect.top) + rightRect.height / 2;

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('class', 'connecting-line');
                svg.appendChild(line);
            }
        });
    });
}

// 점수 입력 시스템
// HTML에 추가할 점수 입력 사이드바 (힌트박스 다음에 추가)
function createScoreInputSidebar() {
    const modalMainContent = document.getElementById('modal-main-content');
    
    // 점수 입력 사이드바 HTML 생성
    const scoreInputHTML = `
        <div id="score-input-box" class="score-input-box">
            <div class="score-input-title">🏆 점수 입력</div>
            
            <div class="team-selection mb-4">
                <div class="selection-label">승리 팀 선택:</div>
                <div class="team-buttons">
                    ${teamNames.map((name, index) => `
                        <button class="team-select-btn" data-team="${index}">
                            ${name}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="score-selection mb-4">
                <div class="selection-label">획득 점수:</div>
                <div class="score-buttons">
                    ${[1, 2, 3, 4, 5].map(score => `
                        <button class="score-select-btn" data-score="${score}">
                            ${score}점
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="score-input-actions">
                <button id="apply-score-btn" class="apply-score-btn" disabled>
                    점수 적용
                </button>
                <button id="cancel-score-btn" class="cancel-score-btn">
                    취소
                </button>
            </div>
            
            <div class="current-selection mt-4">
                <div id="selection-display" class="selection-display">
                    팀과 점수를 선택해주세요
                </div>
            </div>
        </div>
    `;
    
    // 기존 힌트박스 다음에 추가
    const hintBox = document.getElementById('hint-box');
    hintBox.insertAdjacentHTML('afterend', scoreInputHTML);
}

// 점수 입력 버튼 이벤트 설정
function setupScoreInputEvents() {
    // 팀 선택 버튼 이벤트
    document.querySelectorAll('.team-select-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 기존 선택 제거
            document.querySelectorAll('.team-select-btn').forEach(b => b.classList.remove('selected'));
            
            // 새 선택 적용
            e.target.classList.add('selected');
            selectedTeam = parseInt(e.target.dataset.team);
            updateSelectionDisplay();
            checkApplyButtonState();
        });
    });
    
    // 점수 선택 버튼 이벤트
    document.querySelectorAll('.score-select-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 기존 선택 제거
            document.querySelectorAll('.score-select-btn').forEach(b => b.classList.remove('selected'));
            
            // 새 선택 적용
            e.target.classList.add('selected');
            selectedScore = parseInt(e.target.dataset.score);
            updateSelectionDisplay();
            checkApplyButtonState();
        });
    });
    
    // 점수 적용 버튼
    document.getElementById('apply-score-btn').addEventListener('click', applySelectedScore);
    
    // 취소 버튼
    document.getElementById('cancel-score-btn').addEventListener('click', hideScoreInput);
}

// 선택 상태 표시 업데이트
function updateSelectionDisplay() {
    const display = document.getElementById('selection-display');
    
    if (selectedTeam !== null && selectedScore !== null) {
        display.innerHTML = `
            <div class="selected-info">
                <strong>${teamNames[selectedTeam]}</strong>에게 
                <strong>${selectedScore}점</strong> 부여
            </div>
        `;
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

// 적용 버튼 활성화 체크
function checkApplyButtonState() {
    const applyBtn = document.getElementById('apply-score-btn');
    applyBtn.disabled = !(selectedTeam !== null && selectedScore !== null);
}

// 선택한 점수 적용
function applySelectedScore() {
    if (selectedTeam !== null && selectedScore !== null) {
        // 점수 추가
        teamScores[selectedTeam] += selectedScore;
        
        // 효과음 재생
        try {
            playCorrectSound();
        } catch (error) {
            console.error("점수 적용 사운드 재생 오류:", error);
        }
        
        // 콘페티 효과
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
        
        // 피드백 표시
        showScoreAppliedFeedback();
        
        // 사이드바 숨기기
        hideScoreInput();
    }
}

// 점수 적용 피드백
function showScoreAppliedFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'score-feedback';
    feedback.innerHTML = `
        <div class="score-feedback-content">
            ✅ ${teamNames[selectedTeam]}에게 ${selectedScore}점이 추가되었습니다!
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// 점수 입력 사이드바 표시
function showScoreInput() {
    // 선택 초기화
    selectedTeam = null;
    selectedScore = null;
    
    // 기존 선택 제거
    document.querySelectorAll('.team-select-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.score-select-btn').forEach(btn => btn.classList.remove('selected'));
    
    // 매칭 문제의 경우 정답 라인 제거 (깨끗한 문제 화면 표시)
    const data = quizData[currentQuestionIndex];
    if (data && data.type === 'matching') {
        const oldSvg = document.querySelector('#matching-question-container svg');
        if(oldSvg) oldSvg.remove();
    }
    
    // 사이드바 표시
    document.getElementById('score-input-box').classList.add('show');
    updateSelectionDisplay();
    checkApplyButtonState();
}

// 점수 입력 사이드바 숨기기
function hideScoreInput() {
    const scoreInputBox = document.getElementById('score-input-box');
    if (scoreInputBox) {
        scoreInputBox.classList.remove('show');
    }
    selectedTeam = null;
    selectedScore = null;
}

// 모달 열때 점수 입력 사이드바 초기화
function initializeScoreInputInModal() {
    // 기존 점수 입력 박스가 있으면 제거
    const existingScoreBox = document.getElementById('score-input-box');
    if (existingScoreBox) {
        existingScoreBox.remove();
    }
    
    // 새로 생성
    createScoreInputSidebar();
    setupScoreInputEvents();
}

// 점수 입력 버튼을 모달에 추가
function addScoreInputToModal() {
    // 답안 공개 후에만 점수 입력 버튼 표시
    const scoreInputBtn = document.createElement('button');
    scoreInputBtn.id = 'score-input-btn';
    scoreInputBtn.className = 'btn-3d btn-score hidden';
    scoreInputBtn.textContent = '점수 입력';
    scoreInputBtn.addEventListener('click', showScoreInput);
    
    // 힌트 버튼 옆에 추가
    const hintBtn = document.getElementById('hint-btn');
    hintBtn.insertAdjacentElement('afterend', scoreInputBtn);
}

// 점수 현황 모달 표시
function showScoreStatusModal() {
    // 현재 순위 계산
    const teamRankings = teamNames.map((name, index) => ({
        name: name,
        score: teamScores[index],
        index: index,
        teamNumber: index + 1
    })).sort((a, b) => b.score - a.score);
    
    // 모달 생성
    const scoreModal = document.createElement('div');
    scoreModal.className = 'modal-overlay';
    scoreModal.id = 'score-status-modal';
    
    const modalHTML = `
        <div class="modal-content score-status-modal">
            <div class="modal-header flex justify-between items-center">
                <h2 class="text-3xl font-bold">📊 현재 점수 현황</h2>
                <button onclick="closeScoreStatusModal()" class="text-white text-4xl hover:text-gray-300 transition">
                    ×
                </button>
            </div>
            
            <div class="modal-body p-6">
                <!-- 라운드 정보 -->
                <div class="round-info mb-6">
                    <div class="current-round">
                        현재: <strong>${rounds[currentRoundIndex].title}</strong>
                    </div>
                    <div class="progress-info">
                        진행 상황: ${completedQuestionsInRound}/${rounds[currentRoundIndex].questionIndices.length} 문제 완료
                    </div>
                </div>
                
                <!-- 현재 순위 -->
                <div class="current-rankings mb-4">
                    <h3 class="ranking-title">🏆 현재 순위</h3>
                    <div class="ranking-list">
                        ${teamRankings.map((team, rank) => `
                            <div class="ranking-item-compact rank-${rank + 1}">
                                <div class="rank-badge">${rank + 1}위</div>
                                <div class="team-info-compact">
                                    <div class="team-name-compact team-color-${team.teamNumber}">${team.name}</div>
                                    <div class="team-score-compact" id="modal-score-${team.index}">${team.score}점</div>
                                </div>
                                <div class="rank-icon">${getRankEmoji(rank + 1)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- 점수 조정 기능 -->
                <div class="score-adjustment">
                    <h3 class="section-title">⚡ 추가 점수 입력</h3>
                    
                    <div class="score-adjustment-grid">
                        ${teamNames.map((name, index) => `
                            <div class="score-adjustment-card team-color-${index + 1}">
                                <div class="team-adjustment-header">
                                    <div class="team-adjustment-name">${name}</div>
                                    <div class="team-adjustment-buttons">
                                        <button class="score-adjustment-btn minus-btn" onclick="adjustTeamScore(${index}, -1)">
                                            -1
                                        </button>
                                        <button class="score-adjustment-btn plus-btn" onclick="adjustTeamScore(${index}, 1)">
                                            +1
                                        </button>
                                    </div>
                                </div>
                                <div class="current-score">현재: <span id="adjustment-score-${index}">${teamScores[index]}</span>점</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    scoreModal.innerHTML = modalHTML;
    document.body.appendChild(scoreModal);
    
    // 클릭 외부 영역으로 닫기
    scoreModal.addEventListener('click', (e) => {
        if (e.target === scoreModal) {
            closeScoreStatusModal();
        }
    });
}

// 팀 점수 조정 함수
function adjustTeamScore(teamIndex, adjustment) {
    // 점수가 음수가 되지 않도록 체크
    if (teamScores[teamIndex] + adjustment < 0) {
        return;
    }
    
    // 점수 조정
    teamScores[teamIndex] += adjustment;
    
    // 모달 내 점수 업데이트
    const modalScoreElement = document.getElementById(`modal-score-${teamIndex}`);
    const adjustmentScoreElement = document.getElementById(`adjustment-score-${teamIndex}`);
    
    if (modalScoreElement) {
        modalScoreElement.textContent = `${teamScores[teamIndex]}점`;
    }
    if (adjustmentScoreElement) {
        adjustmentScoreElement.textContent = teamScores[teamIndex];
    }
    
    // 순위 업데이트 (모달 내)
    updateModalRankings();
    
    // 효과음 재생
    try {
        if (adjustment > 0) {
            playCorrectSound();
        } else {
            playSound("D4", "8n"); // 낮은 톤의 소리
        }
    } catch (error) {
        console.error("점수 조정 사운드 재생 오류:", error);
    }
    
    // 간단한 시각적 피드백
    showScoreAdjustmentFeedback(teamIndex, adjustment);
}

// 모달 내 순위 업데이트
function updateModalRankings() {
    // 새로운 순위 계산
    const teamRankings = teamNames.map((name, index) => ({
        name: name,
        score: teamScores[index],
        index: index,
        teamNumber: index + 1
    })).sort((a, b) => b.score - a.score);
    
    // 순위 리스트 업데이트
    const rankingList = document.querySelector('.ranking-list');
    if (rankingList) {
        rankingList.innerHTML = teamRankings.map((team, rank) => `
            <div class="ranking-item-compact rank-${rank + 1}">
                <div class="rank-badge">${rank + 1}위</div>
                <div class="team-info-compact">
                    <div class="team-name-compact team-color-${team.teamNumber}">${team.name}</div>
                    <div class="team-score-compact" id="modal-score-${team.index}">${team.score}점</div>
                </div>
                <div class="rank-icon">${getRankEmoji(rank + 1)}</div>
            </div>
        `).join('');
    }
}

// 점수 조정 피드백
function showScoreAdjustmentFeedback(teamIndex, adjustment) {
    const adjustmentCard = document.querySelector(`.score-adjustment-card:nth-child(${teamIndex + 1})`);
    if (adjustmentCard) {
        adjustmentCard.classList.add(adjustment > 0 ? 'score-increase' : 'score-decrease');
        
        setTimeout(() => {
            adjustmentCard.classList.remove('score-increase', 'score-decrease');
        }, 500);
    }
}

// 점수 현황 모달 닫기
function closeScoreStatusModal() {
    const modal = document.getElementById('score-status-modal');
    if (modal) {
        modal.remove();
    }
}

function getRankEmoji(rank) {
    switch(rank) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return '🏅';
    }
}

// 최종 순위 발표
function showFinalRanking() {
    // 팀별 점수로 순위 계산
    const teamRankings = teamNames.map((name, index) => ({
        name: name,
        score: teamScores[index],
        index: index + 1
    })).sort((a, b) => b.score - a.score);
    
    // 순위 모달 생성
    const rankingModal = document.createElement('div');
    rankingModal.className = 'modal-overlay';
    rankingModal.id = 'final-ranking-modal';
    
    const rankingHTML = `
        <div class="modal-content ranking-modal">
            <div class="modal-header text-center">
                <h2 class="text-4xl font-bold">🏆 최종 순위 발표 🏆</h2>
            </div>
            
            <div class="modal-body p-8">
                <div class="ranking-container">
                    ${teamRankings.map((team, rank) => `
                        <div class="ranking-item-compact rank-${rank + 1}" data-rank="${rank + 1}">
                            <div class="rank-badge">
                                ${getRankEmoji(rank + 1)} ${rank + 1}위
                            </div>
                            <div class="team-info-compact">
                                <div class="team-name-compact">${team.name}</div>
                                <div class="team-score-compact">${team.score}점</div>
                            </div>
                            <div class="rank-icon">
                                ${getRankDecoration(rank + 1)}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="ranking-stats mt-8">
                    <h3 class="text-2xl font-bold mb-4">📊 게임 통계</h3>
                    <div class="stats-row">
                        <div class="stat-box">
                            <div class="stat-number">${teamRankings[0].score}</div>
                            <div class="stat-label">최고 점수</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number">${completedQuestionsHistory.length}</div>
                            <div class="stat-label">이 문제 수</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number">${Math.round(teamScores.reduce((a, b) => a + b, 0) / 4)}</div>
                            <div class="stat-label">평균 점수</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number">${teamRankings[0].name}</div>
                            <div class="stat-label">우승팀</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="p-6 bg-black bg-opacity-10 text-center">
                <button onclick="closeFinalRanking()" class="btn-3d">
                    게임 종료
                </button>
                <button onclick="resetGame()" class="btn-3d ml-4">
                    새 게임 시작
                </button>
            </div>
        </div>
    `;
    
    rankingModal.innerHTML = rankingHTML;
    document.body.appendChild(rankingModal);
    
    // 우승 콘페티 효과
    setTimeout(() => {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 300,
                spread: 90,
                origin: { y: 0.4 },
                colors: ['#FFD700', '#FFA500', '#FF6347']
            });
        }
    }, 500);
}

function getRankDecoration(rank) {
    switch(rank) {
        case 1: return '👑';
        case 2: return '⭐';
        case 3: return '🎖️';
        default: return '💫';
    }
}

function closeFinalRanking() {
    const modal = document.getElementById('final-ranking-modal');
    if (modal) {
        modal.remove();
    }
}

// BGM & Keyboard Functions
function toggleBGM() {
    const bgmPlayer = document.getElementById('bgm-player');
    const bgmToggleBtn = document.getElementById('bgm-toggle-btn');
    const isBGMPlaying = !bgmPlayer.paused;

    if (isBGMPlaying) {
        bgmPlayer.pause();
        bgmToggleBtn.innerHTML = '▶';
    } else {
        bgmPlayer.play().catch(error => console.log("BGM 자동 재생이 차단되었습니다."));
        bgmToggleBtn.innerHTML = '⏸';
    }
}

function handleKeyPress(e) {
    if (quizModal.classList.contains('hidden')) return;

    switch(e.key.toLowerCase()) {
        case 'h':
            document.getElementById('hint-btn').click();
            break;
        case 'a':
            if (!answerBtn.classList.contains('hidden')) answerBtn.click();
            break;
        case 'q':
            if (!questionViewBtn.classList.contains('hidden')) questionViewBtn.click();
            break;
        case 's':
            // 점수 입력 단축키 추가
            const scoreInputBtn = document.getElementById('score-input-btn');
            if (scoreInputBtn && !scoreInputBtn.classList.contains('hidden')) {
                scoreInputBtn.click();
            }
            break;
        case 'escape':
            closeModal();
            break;
    }
}

// 전역 함수로 노출 (HTML에서 onclick으로 사용)
window.closeScoreStatusModal = closeScoreStatusModal;
window.showScoreStatusModal = showScoreStatusModal;
window.closeFinalRanking = closeFinalRanking;
window.adjustTeamScore = adjustTeamScore;
window.retryYouTube = retryYouTube;
window.skipYouTube = skipYouTube;
window.openYouTubeDirectly = openYouTubeDirectly;

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
