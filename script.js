const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.pop-info');
const continueBtn = document.querySelector('.continue-btn');
const exitBtn = document.querySelector('.exit-btn');
const quizInfo = document.querySelector('.quiz');
const quizBorder = document.querySelector('.quiz-border');
const nextBtn = document.querySelector('.next-btn');
const questionInfo = document.querySelector('.question');
const optionsInfo = document.querySelector('.options');

const questions [
    {
	question: "What is the approximate cruising altitude of most commercial aircraft?",
	options: ["A. 10 000 ft", "B. 30 000 ft", "C. 50 000 ft", "D. 70 000 ft"],
	correctAnswer: "B",
    },

    {
	question: "What aircraft is the world's largest passenger aircraft?",
	options: ["A. Boeing 747", "B. Airbus A380", "C. Concorde", "D. Boeing 777"],
	correctAnswer: "B",
    },

    {
	question: "What does the black box in an aircraft record?",
	options: ["A. Speed", "B. Altitude", "C. Flight data and cockpit audio", "D. Passenger details"],
	correctAnswer: "C",
    },

    {
	question: "What is the primary function of an aircraft's wing flaps?",
	options: ["A. Increase speed", "B. Reduce noise", "Stabilize flight", "D. Assist during takeoff and landing"],
	correctAnswer: "D",
    },

    {
	question: "What is the role of the rudder in an aircraft?",
	options: ["A. Control yaw", "B. Control pitch", "C. Control roll", "D. Increase speed"],
	correctAnswer: "A",
    },
];


let questionCount = 0;
let score = 0;

function displayQuestion(index) {
    const questionData = question[Index];
    questionInfo.textContent = questionInfo.question;
    optionsInfo.innerHTML = "";

    questionInfo.options.forEach((optionText, i) => {
	const option = document.createElement("div");
	option.className = "option";
	option.innerHTML = `<span>${optionText}</span>`;
	option.onclick = () => selectOption(option, questionInfo.correctAnswer);
	optionsElement.appendChild(option);
    });

    questionNumberData.textContent = `${index + 1} of ${questions.length} questions`;
}

function selectOption(option, correctAnswer) {
    const selectedOption = option.textContent.trim().charAt(0);
    if (selectedOption === correctAnswer) {
	score++;
	headerScoreElement.textContent = `Score ${score} / ${questions.length}`;
    }

    nextBtn.disabled = false;
}

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}

continueBtn.onclick = () => {
    popupInfo.classList.remove('active');
    quizInfo.classList.add('active');
    displayQuestion(questionCount);
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
}

nextBtn.onclick = () => {
    questionCount++;
    if (questionCount < questions.length) {
	nextBtn.disabled = true;
    } else {
	quizInfo.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is ${score} / ${questions.length}.</p>`;
    }
};
