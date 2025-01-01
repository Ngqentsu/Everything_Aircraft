const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.pop-info');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}
