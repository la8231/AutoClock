var startTime = 0;
console.log(startTime);
function increaset () {
  startTime += 1;
  console.log(startTime);
}

function decreaset() {
    startTime -= 1;
    console.log(startTime);
}
// Start time & increase

var StartMinute = 0;
console.log(StartMinute);
function IncreaseM() {
    StartMinute += 1;
    console.log(StartMinute);
}

function decreaseM() {
    StartMinute -= 1;
    console.log(StartMinute);
}
// Start Minute & increase og decreaase

var SlutTime = 0;
console.log(SlutTime);
function increaseST() {
    SlutTime +=1;
    console.log(SlutTime);
}

var SlutMinute = 0;
console.log(SlutMinute);
function increateSM() {
    SlutMinute += 1;
    console.log(SlutMinute);
}

function decreaseSM() {
    SlutMinute -= 1;
    console.log(SlutMinute);
}
// Slut minute & Increase og Decrease



function timeFunction() {
    var d = new Date()
    var n = d.getHours();
}
function MinuteFunction() {
    var d = new Date()
    var n = d.getMinutes()
}
// Hentning af tidspunkt fra computer

if(startTime == timeFunction && StartMinute == MinuteFunction ) {
    console.log('Light is on')
} else {
}

if(SlutTime == timeFunction && SlutMinute == MinuteFunction) {
    console.log('Light is shut off')
} else {
}
