document.addEventListener("DOMContentLoaded", () => {
const mainBody = document.body;
const alertMsg = document.querySelector(' .alertMsg');
const timerVal = document.querySelector(' .selection');
const start = document.querySelector(".start_btn");
const restart = document.querySelector(".restart_btn");
const timerText = document.querySelector(".timer_text");
const timerHeader = document.querySelector(".timer")
let timeLeft = 0;
let counterKey = [];
let sessionStatus = "inactive";

// Event listener to change on selection
timerVal.addEventListener("change", () => {
         timeLeft = timerVal.value;
         timerText.innerText = `${timeLeft}:00 mins`;
         timeLeft = timeLeft*60;
});

// Function to start timer and change session states
function startTimer(time) {
    if(sessionStatus != "inactive" && sessionStatus != "completed"){
        start.style.display = "none";
        timerVal.style.display = "none";
    }

    const countDown = setInterval(() => {
        time--;
    const min = Math.floor(time/60);
    const sec = Math.floor(time%60);
    timerText.innerText = `${min<10 ? '0':''}${min}:${sec<10?'0':''}${sec}`;
        if(time<=0 || time < 1) {
            clearInterval(countDown);
        }
        if(timerText.innerText === "00:00") {
            sessionStatus = "completed";
            timerHeader.innerHTML = "You did great!!";
            restart.style.display = 'block';
        }
    }, 1000)
    counterKey.push(countDown);
    
}
// To detect mouse movement
function onMove() {
    if(sessionStatus === "active") {
        counterKey.forEach(key => {
            clearInterval(key);
        });
        timeLeft = timerVal.value;
        timerText.innerText = `${timeLeft}:00`;
        timeLeft = timeLeft*60;
        alertMsg.innerText = "Relax, go out for a walk or pet your dog";
        startTimer(timeLeft);
    }
}

// chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tab.id},
//         function: () => {
//             const pageListener = document.body;
//             pageListener.addEventListener("mousemove", () => {
//             const test = document.createElement("div");
//             test.id = "testID";
//             test.style.width = '1000px';
//             test.innerText = "working!!";
//             test.style.backgroundColor = "black";
//             document.body.appendChild(test);
//             });
//         }, // files or function, both do not work.
//       })
//   })

mainBody.addEventListener("mousemove", onMove);

restart.addEventListener("click", () => {
    location.href = "popup.html";
})

// Hiding restart button
if(sessionStatus === "inactive" || sessionStatus === "active") {
    restart.style.display = 'none';
}
// Start counter button
start.addEventListener("click", () => {
    sessionStatus = "active";
    timerHeader.innerHTML = "Sit back and Relax";
    startTimer(timeLeft);
});
});


  