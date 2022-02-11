function  generateTime() {
    var hour_minute = randomHour() + ":" + randomMinute();
    document.getElementById("random_time").innerHTML = hour_minute;
}

function randomHour() {
    var hour = Math.floor(Math.random() * 24) + 1;
    if (hour < 10) {
        hour = "0" + hour.toString();
    } else {
        hour = hour.toString();
    }
    return hour;
}

function randomMinute() {
    var minute = Math.floor(Math.random() * 60) + 1;
    if (minute < 10) {
        minute = "0" + minute.toString();
    } else {
        minute = minute.toString();
    }
    return minute;
}