const StartButton = document.getElementById("start-quiz-btn");
const landingSection = document.getElementById("landing");
const quizContainer = document.getElementById("quiz-container");
const quizElement = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");

function showQuestions () {
    const questions = questions[CurrentQuestionIndex];
    quizElement.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="options">
      ${question.options
        .map(
          (option, index) => `
        <button onclick="checkAnswer(${index})">
          <strong>${optionLabels[index]}.</strong> ${option}
        </button>
      `
        )
        .join("")}
    </div>
  `;
}

function checkAnswer(selectedIndex) {
    const questions = questions[CurrentQuestionIndex];
    const allOptions = quizElement.querySelectAll("button");
    allOptions.forEach((btn, index) => {
	button.disabled = true;
	if (index === questions.correctAnswer) {
	    btn.style.backgroundColor = "#28a745";
	} else if (index == selected Index) {
	    btn.style.backgroundColor = "#dc3545";
	}
});

    nextButton.style.display = "block";
}

startButton.addEventListener("click", () => {
  landingSection.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.style.display = "none";
  } else {
    quizElement.innerHTML = `<div class="question">Quiz Completed!</div>`;
    nextButton.style.display = "none";
  }
});