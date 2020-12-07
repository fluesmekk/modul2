




//view

//model 


function playSong(value) {
    var songDiv = document.getElementById('songDiv')
    if (value == 'hyperPop') {
        songDiv.innerHTML = `
        <audio id="myAudio" class="audio" controls>
        <source src="musikk/HyperPop.wav" type="audio/wav">
        </audio>
        `;

    } else if (value == 'lofi') {
        songDiv.innerHTML = `
        <audio id="myAudio"  class="audio"controls>
        <source src="musikk/lofi.wav" type="audio/wav">
        </audio>
        `;
    }
}
