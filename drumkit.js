
window.addEventListener('keydown', function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return; //"if no audio, then it returns which means execution of the function is stopped"
	audio.currentTime = 0; //Makes it so the sound gets repeated faster
	audio.play();
	console.log(key);
	key.classList.add('playing');
});

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip if it's not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));








