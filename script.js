
let seconds = 00;
let tens = 00;
let appendSeconds = document.querySelector("#seconds");
let appendTens = document.querySelector("#tens");
let btnStart = document.querySelector("#start");
let btnPause = document.querySelector("#pause");
let btnReset = document.querySelector("#reset");
let interval;

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;

        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

btnStart.onclick = function() {
    interval = setInterval(startTimer, 10);
};

btnPause.onclick = function() {
    clearInterval(interval);
};

btnReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
};
