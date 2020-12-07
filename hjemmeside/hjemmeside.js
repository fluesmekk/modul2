




//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    
    
    
    `;
}

//model 

function selectTasks(parameter) {
    if (parameter == 1) {

    }
}

function playSong(value) {
    var songDiv = document.getElementById('songDiv')
    if (value == 'hyperPop') {
        songDiv.innerHTML = `
        <audio id="myAudio" class="audio" controls>
        <source src="HyperPop.wav" type="audio/wav">
        </audio>
        `;

    } else if (value == 'lofi') {
        songDiv.innerHTML = `
        <audio id="myAudio"  class="audio"controls>
        <source src="lofi.wav" type="audio/wav">
        </audio>
        `;
    }
}

function reDirect(value) {
    if (value == 'oblig1') {
        window.open("https://github.com/fluesmekk/oblig1");
    } else if (value == 'oblig2') {
        window.open("https://github.com/fluesmekk/oblig2/")
    }
}