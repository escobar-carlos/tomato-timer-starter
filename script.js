let updateTimerDisplay = (minutes, seconds) => {
    let timeLeft = document.querySelector('#time-left');

    let paddedMinutes = minutes.toString().padStart(2, '0');
    let paddedSeconds = seconds.toString().padStart(2, '0');
    timeLeft.textContent = `${paddedMinutes}:${paddedSeconds}`;
}

let timerId;

let startTimer = (duration) => {
    
    clearInterval(timerId);
    
    timerId = setInterval(() => {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        
        updateTimerDisplay(minutes, seconds);

        if (duration <= 0) {
            clearInterval(timerId);
        } else {
            duration--;
        }
    }, 1000);
}

let startStudySession = () => {
    studyButton.addEventListener('click', () => {
        startTimer(25 * 60);

        studySessionCount = document.querySelector('#study-count');
        studySessionCount.innerHTML = Number(studySessionCount.textContent) + 1;
    })
}

let startBreakSession = () => {
    breakButton.addEventListener('click', () => {
        startTimer(5 * 60);

        breakSessionCount = document.querySelector('#break-count');
        breakSessionCount.innerHTML = Number(breakSessionCount.textContent) + 1;
    })
}

studyButton = document.querySelector('#study-btn');
breakButton = document.querySelector('#break-btn');

startStudySession();
startBreakSession();