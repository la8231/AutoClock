var startHourInput = document.getElementById('startHourInput');
var startMinuteInput = document.getElementById('startMinuteInput');
function getDate() {
    return new Date();
}
function setStartTime() {
   if(startHourInput.value < getDate().getHours()) {
       turnLightOn();
   } else if (startHourInput.value == getDate().getHours()) {
        if (startMinuteInput.value <= getDate().getMinutes()) {
            turnLightOn();
        }
   }
}  
function turnLightOn() {
    document.getElementById('indicator').className = 'lightOn';
    document.getElementById('indicator').innerHTML = 'Lyset er tændt';
}
function turnLightOff() {
    document.getElementById('indicator').className = 'lightOff';
    document.getElementById('indicator').innerHTML = 'Lyset er slukket';
}
