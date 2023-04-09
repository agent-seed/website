function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function changeBackground() {
    let root = document.documentElement;
    background =  'url(/imgs/dark.png), ' + 'url(/pictures/' + randomNumber(22) + '.JPG' + ');';
    // document.getElementsByTagName('body').style.backgroundImage(background);
    root.style.setProperty('--background', background)
}
