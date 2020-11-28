
var snare = document.querySelector(`div[data-key="74"]`);

snare.addEventListener('keydown', playSound, false {

    function playSound(e) {
        if (e.keycode == "74") {
            snare.play();
        }
    }
})






