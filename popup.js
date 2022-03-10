document.addEventListener("DOMContentLoaded", () => {
const timerVal = document.querySelector(' .selection');
const start = document.querySelector(".start_btn");
const timerText = document.querySelector(".timer_text");
let timeLeft = 0;
timerVal.addEventListener("change", () => {
         timeLeft = timerVal.value;
         timerText.innerText = `${timeLeft}:00`;
         timeLeft = timeLeft*60;
});


function displayTime(second) {
    const min = Math.floor(second/60);
    const sec = Math.floor(second%60);
    timerText.innerText = `${min<10 ? '0':''}${min}:${sec<10?'0':''}${sec}`;
}

// Start counter button
start.addEventListener("click", () => {
   const countDown = setInterval(() => {
        timeLeft--;
        displayTime(timeLeft);
        if(timeLeft<=0 || timeLeft < 1) {
            clearInterval(countDown);
        }
    }, 1000)
    if(start.innerText === "Start"){
    start.innerText = "Stop";
    }
    else {
        start.innerText = "Start";
    }
});

});


  