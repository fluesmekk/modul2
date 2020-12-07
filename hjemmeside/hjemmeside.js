


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


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

function playSong (parameter) {
    if (parameter == 1) {
        document.getElementById('songDiv').innerHTML = `
        <audio controls>
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>
        
        `
    }
}