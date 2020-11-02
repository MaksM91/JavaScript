var days = document.getElementById('day');
var hours = document.getElementById('hour');
var minutes = document.getElementById('minute');
var seconds = document.getElementById('second');

const newYear = '1 Jan 2021';

function countdown() {
    const current = new Date();
    const newYearDate = new Date(newYear);
    var delta = Math.round((newYearDate - current)/1000);
    
    var curDays = Math.floor(delta/86400);
    var curHours = Math.floor(delta/3600%24);
    var curMins = Math.floor(delta/60%60);
    var curSecs = Math.floor(delta%60);

    days.innerHTML = curDays;
    if (curHours <= 9) {
        hours.innerHTML = '0' + curHours;
    } else {
        hours.innerHTML = curHours;
    };
    if (curMins <= 9) {
        minutes.innerHTML = '0' + curMins;
    } else {
        minutes.innerHTML = curMins;
    };
    if (curSecs <= 9) {
        seconds.innerHTML = '0' + curSecs;
    } else {
        seconds.innerHTML = curSecs;
    }
    
}; 


countdown();

setInterval(countdown,1000);
