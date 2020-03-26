var stt = timeFunction;
// Start time

var stm = MinuteFunction;
// start minute

var slt;
// slut time

var slm;

var stto;
var sttn;
// Start time op / ned

var stmo;
var stmn;
// Start Minute op / ned

var slto;
var sltn;
// Slut time op / Ned

var slmo;
var slmn;
// SLut Minute Op / ned


function timeFunction() {
    var d = new Date()
    var n = d.getHours();
}
function MinuteFunction() {
    var d = new Date()
    var n = d.getMinutes()
}

if(stt == timeFunction && stm == MinuteFunction ) {
    console.log('Hello')
} else {
}



/* if(StartT == Gh && StartM == Gm) {
    lights = true
} else {
}

if(lights == true){
    console.log('Lights are on')
} else {
    console.log('Lights are off')
}

*/