//Defining variables for time
let seconds = 0;
let minutes = 0;
let hours = 0;

//Defining variables for display

let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

let interval = null;

//Hold status
let status = "stopped";
let statusGreen = "unset";
let statusYellow = "unset";
let statusRed = "unset";

const times_rec = [];

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    //string value to add leading 0 to values
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    //display time
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

    document.getElementById("time_history").innerHTML = times_rec.join("<br>");
}

function startStop() {
    if (status === "stopped") {
        //start stopwatch
        interval = window.setInterval(stopWatch, 1000)
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Resume";

        status = "stopped";

    }

    if (status === "stopped") {
        times_rec.push(displayHours + ":" + displayMinutes + ":" + displaySeconds);
    }
}

function reset1() {
    window.clearInterval(interval);
    seconds = 00;
    minutes = 00;
    hours = 00;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.querySelector("body").style.background = "#FFFFFF";
    status = "stopped";
    statusGreen = "unset";
    statusYellow = "unset";
    statusRed = "unset";
}

function reset2() {
    window.clearInterval(interval);
    seconds = 00;
    minutes = 00;
    hours = 00;
    document.getElementById("time_history").innerHTML = "00:00:00";
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.querySelector("body").style.background = "#FFFFFF";
    status = "stopped";
    statusGreen = "unset";
    statusYellow = "unset";
    statusRed = "unset";
    times_rec.length = 0;
}

function green() {
    if (statusGreen === "unset") {
        document.querySelector("body").style.background = "#00FF00";
        statusGreen = "set";
        statusYellow = "unset";
        statusRed = "unset";
    }
    else {
        document.querySelector("body").style.background = "#FFFFFF";
        statusGreen = "unset";
    }

}

function yellow() {
    if (statusYellow === "unset") {
        document.querySelector("body").style.background = "#FFFF00";
        statusYellow = "set";
        statusGreen = "unset";
        statusRed = "unset";
    }
    else {
        document.querySelector("body").style.background = "#FFFFFF";
        statusYellow = "unset";
    }

}

function red() {
    if (statusRed === "unset") {
        document.querySelector("body").style.background = "#FF0000";
        statusRed = "set";
        statusGreen = "unset";
        statusYellow = "unset";
    }
    else {
        document.querySelector("body").style.background = "#FFFFFF";
        statusRed = "unset";
    }

}

