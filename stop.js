let min = 00;
let secs = 00;

let getMinutes = document.querySelector(".minutes")
let getSeconds = document.querySelector(".seconds")
let startBtn = document.querySelector(".startbtn")
let stopBtn = document.querySelector(".stopbtn")
let restartBtn = document.querySelector(".restartbtn")
let timming;

startBtn.addEventListener("click", () =>{
 timming=setInterval(startTime, 1000);
         
})
stopBtn.addEventListener("click", () =>{
    clearInterval(timming);
  })
  restartBtn.addEventListener("click", () =>{
    clearInterval(timming)
    min ="00";
    secs="00";
    getMinutes.innerHTML= min;
    getSeconds.innerHTML = secs;
  })
function startTime(){
    min++;
    if(min<=9){
        getMinutes.innerHTML="0" + min; 

    }
    if(min>9){
        getMinutes.innerHTML= min;

    }
    if(min>60){
        secs++; 
        getSeconds.innerHTML = "0"+secs;
        min = 0;
        getMinutes.innerHTML = "0" + 0;
    }
    if(secs >9){
     getSeconds.innerHTML =secs;   
    }
}

