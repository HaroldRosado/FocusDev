const time = document.getElementById("time");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

start.addEventListener("click", ()=>{
    console.log("Inicio");
});

pause.addEventListener("click", ()=>{
    console.log("Pausar");
});

stop.addEventListener("click", ()=>{
    console.log("Detener")
});