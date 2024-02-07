const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const continueBtn = document.querySelector('#continue');
const restartBtn = document.querySelector('#restart');
const timeUI = document.querySelector('.time');
const milesecUI = document.querySelector('.milesecond');
let hour = 0, minutes = 0, second = 0, 
    milesecond = 0, permission = 0;

let number;
const time = () => {
    milesecond += 4;
    if(milesecond === 1000) {
        milesecond = 0;
        second += 1;
        if(second === 60) {
            second = 0;
            minutes += 1;
            if(minutes === 60) {
                minutes = 0;
                hour += 1;
            }
        }
    }
    const hourr =  hour < 10 ? "0" + hour.toString() : hour;
    const mins =  minutes < 10 ? "0" + minutes.toString() : minutes; 
    const sec =  second < 10 ? "0" + second.toString() : second; 
    const milesec =  milesecond < 10 ? "00" + milesecond.toString() : milesecond; 
    timeUI.textContent = hourr + " : " + mins + " : " + sec;
    milesecUI.textContent = milesec;
}

startBtn.addEventListener('click', ()=>{
    permission = 1;
    startBtn.setAttribute("disabled", "");
    number = setInterval(time,1);
});

pauseBtn.addEventListener('click', ()=>{
    clearInterval(number);
    startBtn.removeAttribute("disabled");
});

continueBtn.addEventListener('click', ()=>{
    if(permission !== 0) {
        clearInterval(number);
        number = setInterval(time,1);
    } else {
        console.log("invalid!");
    }
});

restartBtn.addEventListener('click', ()=>{
    permission = 0;
    clearInterval(number);
    startBtn.removeAttribute("disabled");
    hour = 0, minutes = 0, second = 0, milesecond = 0;
    timeUI.textContent = "00 : 00 : 00";
    milesecUI.textContent = "000";
});