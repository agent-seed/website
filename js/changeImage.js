function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function changeBackground() {
    root.style.setProperty('--background', 'url(pictures/' + randomNumber(22) + '.JPG' + ');');
}