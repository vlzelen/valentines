function moveRandomEl(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 40 + 30) + '%'; // Range between 30% and 70%
    elm.style.left = Math.floor(Math.random() * 40 + 30) + '%'; // Range between 30% and 70%
}


const moveRandom = document.querySelector('#move-random');

moveRandom.addEventListener("click", function(e) {
    moveRandomEl(e.target);
});