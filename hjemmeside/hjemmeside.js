




//view

//model 
var audio;
var volumeLevel = 0.5;

function play(value) {
    audio = new Audio(`${value}`);
}
function playMusic() {
    audio.volume = volumeLevel;
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

