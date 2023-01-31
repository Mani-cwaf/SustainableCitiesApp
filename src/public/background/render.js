const backgroundMusic = document.querySelector(`audio`)

backgroundMusic.loop = true;
backgroundMusic.play();

setInterval(() => {
    console.log(getSettings());
    backgroundMusic.volume = window.electron.getSettings();
}, 1000);