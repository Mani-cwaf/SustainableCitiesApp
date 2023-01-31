const backgroundMusic = document.querySelector(`audio`)

backgroundMusic.loop = true;
backgroundMusic.play();
let volume = 0;

const getSettings = () => {
    window.electron.getSettings().then((value) => {
        volume = value;
    })
    return volume;
}

setInterval(() => {
    backgroundMusic.volume = getSettings() / 10;
}, 50);