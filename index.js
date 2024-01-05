let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

// let body = document.querySelector("body");

function changeBgColor() {
    document.querySelector("body").style.backgroundColor = `rgb(${randomNumber()}, ${255 - randomNumber()}, ${255 - randomNumber()})`;
}

let interval;

startButton.addEventListener("click", function() {
    interval = setInterval(changeBgColor, 2000);
});

stopButton.addEventListener("click", function() {
    clearInterval(interval);
});
















