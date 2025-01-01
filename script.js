const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.pop-info');
const continueBtn = document.querySelector('.continue-btn');
const exitBtn = document.querySelector('.exit-btn');
const quizInfo = document.querySelector('.quiz');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}

continueBtn.onclick = () => {
    popupInfo.classList.remove('active');
    quizInfo.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
}
