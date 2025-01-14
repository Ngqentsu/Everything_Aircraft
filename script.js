const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.pop-info');
const continueBtn = document.querySelector('.continue-btn');
const exitBtn = document.querySelector('.exit-btn');
const quizInfo = document.querySelector('.quiz');
const quizBorder = document.querySelector('.quiz-border');
const nextBtn = document.querySelector('.next-btn');
const questionInfo = document.querySelector('.question');
const optionsInfo = document.querySelector('.options');
const questionNumberData = document.querySelector('.question-number');
const headerScoreElement = document.querySelector('.header-score');
const landing = document.querySelector('.landing');
const backBtn = document.querySelector('.back-btn');

const questions = [
    {
        question: "What is the approximate cruising altitude of most commercial aircraft?",
        options: [
            "A. 10 000 ft",
            "B. 30 000 ft",
            "C. 50 000 ft",
            "D. 70 000 ft"
        ],
        correctAnswer: "B",
    },
    {
        question: "What aircraft is the world's largest passenger aircraft?",
        options: [
            "A. Boeing 747",
            "B. Airbus A380",
            "C. Concorde",
            "D. Boeing 777"
        ],
        correctAnswer: "B",
    },
    {
        question: "What does the black box in an aircraft record?",
        options: [
            "A. Speed",
            "B. Altitude",
            "C. Flight data and cockpit audio",
            "D. Passenger details"
        ],
        correctAnswer: "C",
    },
    {
        question: "True or False: The rudder controls the pitch of an aircraft.",
        options: [
            "A. True",
            "B. False"
        ],
        correctAnswer: "B",
    },
    {
        question: "What is the primary function of an aircraft's wing flaps?",
        options: [
            "A. Increase speed",
            "B. Reduce noise",
            "C. Stabilize flight",
            "D. Assist during takeoff and landing"
        ],
        correctAnswer: "D",
    },
    {
        question: "What is the main purpose of the altimeter in an aircraft?",
        options: [
            "A. Measure airspeed",
            "B. Measure altitude",
            "C. Measure fuel levels",
            "D. Measure pressure"
        ],
        correctAnswer: "B",
    },
    {
        question: "Fill in the blank: The ______ engine is commonly used in modern jet aircraft.",
        options: [
            "A. Turbojet",
            "B. Rocket",
            "C. Piston",
            "D. Steam"
        ],
        correctAnswer: "A",
    },
    {
        question: "Which country developed the Concorde supersonic passenger jet?",
        options: [
            "A. USA",
            "B. France and UK",
            "C. Russia",
            "D. Germany"
        ],
        correctAnswer: "B",
    },
    {
        question: "What type of aircraft component is the aileron?",
        options: [
            "A. Engine part",
            "B. Landing gear",
            "C. Control surface",
            "D. Cabin equipment"
        ],
        correctAnswer: "C",
    },
    {
        question: "What is the primary function of an aircraft's autopilot system?",
        options: [
            "A. Takeoff and landing",
            "B. Emergency recovery",
            "C. Assist the pilot in maintaining stable flight",
            "D. Navigation planning"
        ],
        correctAnswer: "C",
    },
    {
        question: "True or False: The Airbus A380 can carry over 800 passengers in an all-economy configuration.",
        options: [
            "A. True",
            "B. False"
        ],
        correctAnswer: "A",
    },
    {
        question: "Fill in the blank: The ______ is a device used to measure the speed of an aircraft relative to the air.",
        options: [
            "A. Altimeter",
            "B. Airspeed indicator",
            "C. Gyroscope",
            "D. Black box"
        ],
        correctAnswer: "B",
    },
    {
        question: "Which of the following aircraft holds the record for the fastest manned flight?",
        options: [
            "A. Concorde",
            "B. SR-71 Blackbird",
            "C. Lockheed Martin X-15",
            "D. Space Shuttle"
        ],
        correctAnswer: "C",
    },
    {
        question: "True or False: The primary purpose of spoilers on an aircraft is to increase lift during flight.",
        options: [
            "A. True",
            "B. False"
        ],
        correctAnswer: "B",
    },
    {
        question: "Fill in the blank: The process of reducing speed and descending for landing is known as the ______ phase.",
        options: [
            "A. Climb",
            "B. Cruise",
            "C. Descent",
            "D. Landing"
        ],
        correctAnswer: "C",
    }
];

let questionCount = 0;
let score = 0;
const userAnswers = Array(questions.length).fill(null);

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    landing.classList.add('active');
};

backBtn.onclick = () => {
    if (questionCount > 0) {
	questionCount--;
	displayQuestion(questionCount);
    }
};

function displayQuestion(index) {
    const questionData = questions[index];
    questionInfo.textContent = questionData.question;
    optionsInfo.innerHTML = "";

    questionData.options.forEach((optionText) => {
        const option = document.createElement("div");
        option.className = "option";
        option.innerHTML = `<span>${optionText}</span>`;

	const selectedAnswer = userAnswers[index];
	if (selectedAnswer) {
	    if (optionText.startsWith(selectedAnswer)) {
		option.classList.add(selectedAnswer === questionData.correctAnswer ? 'correct' : 'incorrect');
	    }
	    option.onclick = null;
	} else {
            option.onclick = () => selectOption(option, questionData.correctAnswer, index);
	}
	
        optionsInfo.appendChild(option);
    });

    questionNumberData.textContent = `${index + 1} of ${questions.length} questions`;
    headerScoreElement.textContent = `Score ${score} / ${questions.length}`;
    
    nextBtn.disabled = !userAnswers[index];

    if (index === 0) {
	backBtn.disabled = true;
	backBtn.style.opacity = "0.5";
	backBtn.style.cursor = "not-allowed";
    } else {
	backBtn.disabled = false;
	backBtn.style.opacity = "1";
	backBtn.style.cursor = "pointer";
    }
};

function selectOption(option, correctAnswer, index) {
    const selectedOption = option.textContent.trim().charAt(0);
    userAnswers[index] = selectedOption;

    const allOptions = optionsInfo.querySelectorAll('.option');
    allOptions.forEach(opt => opt.onclick = null);
    
    if (selectedOption === correctAnswer) {
        score++;
	option.classList.add('correct');
    }else {
	option.classList.add('incorrect');

	const correctOption = [...allOptions].find(opt => opt.textContent.trim().startsWith(correctAnswer));
	correctOption.classList.add('correct');
    }
    headerScoreElement.textContent = `Score ${score} / ${questions.length}`;
    nextBtn.disabled = false;
};

const restartQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    displayQuestion(currentQuestionIndex);
};

document.getElementById("restartQuizButton").addEventListener("click", restartQuiz);

nextBtn.onclick = () => {
    questionCount++;
    if (questionCount < questions.length) {
        displayQuestion(questionCount);
    } else {
        quizInfo.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your final score is ${score} / ${questions.length}.</p>
            <button class="restart-btn">Restart Quiz</button>
        `;
        document.querySelector('.restart-btn').onclick = restartQuiz;
    }
};

continueBtn.onclick = () => {
    popupInfo.classList.remove('active');
    quizInfo.classList.add('active');
    displayQuestion(questionCount);
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
};

backBtn.disabled = true;
backBtn.style.opacity = "0.5";
backBtn.style.cursor = "not-allowed";
