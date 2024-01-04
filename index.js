const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
function greet(){
    console.log("hello");
}
let interval;
startButton.addEventListener("click", function(){
    interval = setInterval(greet,2000);
});
stopButton.addEventListener("click", function(){
    clearInterval(interval);
});