/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}

function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	var li = document.createElement("li");
	var ul = document.getElementById("playlist");
	if (songName == "") {
		alert("Enter a song name");	
	} else {		
		li.innerHTML = songName;
		ul.appendChild(li);
	}
}