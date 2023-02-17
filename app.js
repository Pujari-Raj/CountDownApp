// Gathering all elements

let userinput = document.querySelector(".userinput");
let startcountbtn = document.querySelector(".start-btn");
let timercount = document.querySelector(".timer-container");
let hrs = document.querySelector(".hours");
let mins = document.querySelector(".minutes");
let secs = document.querySelector(".seconds");

// initializing timer values and function
let countDown = 0;
let starttime = 0;
let displaytimer = null;

startcountbtn.addEventListener('click', (element) => {
    element.preventDefault();

    //console.log("uservalue-"+userinput.value);

    countDown = parseInt(userinput.value);
    
    // alerting user if buttons is pressed before entering value
    if(userinput.value == ""){
        alert('enter value to start timer');
    }

    if(countDown>0){
        starttime = Math.ceil(Date.now() / 1000);
        displaytimer = setInterval(updateTimer, 1);
    }
});


function updateTimer() {
    //console.log('function called!!');
    const current = Math.ceil(Date.now() / 1000);
    
    const remainingtime = countDown- current + starttime;
    const timeValue = getTimeValue(remainingtime);


    hrs.innerHTML = ('00'+timeValue.hours).substr(-2);
    mins.innerHTML = ('00'+timeValue.minutes).substr(-2);
    secs.innerHTML = ('00'+timeValue.seconds).substr(-2);
    
    if(remainingtime <=0)
    {
        clearInterval(displaytimer);
        alert("Timeup");
        timercount.classList.remove("last-five");
    }

    if(timeValue.seconds == 05){
        console.log('inside if');
        timercount.classList.add("last-five");
    }
}

function getTimeValue(referencetime) {
    //console.log('function called!!');

    const hours = parseInt(referencetime / 3600);
    const minutes = parseInt((referencetime - hours * 3600) / 60);
    const seconds = referencetime - hours * 3600 - minutes * 60;
    
    console.log(hours, minutes, seconds);
    return {hours, minutes, seconds};
}