import {PomodoroTimer} from "../services/timer.js";

const timer = new PomodoroTimer(50);
const time = document.getElementById("time");

function format(seconds) {
    const min = Math.floor(seconds/60);
    const sec = seconds % 60;

    return `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

time.textContent = format(timer.remaining);
document.getElementById("start").addEventListener("click", ()=>{
    timer.start((seconds)=> {
        time.textContent = format(seconds);
    });
});

document.getElementById("pause").addEventListener("click", ()=>{
    timer.pause();
});

document.getElementById("stop").addEventListener("click", ()=>{
    timer.stop();
    time.textContent = format(timer.remaining);
});