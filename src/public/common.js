const home = () => {
    window.location.assign('../home/index.html')
}

const popupClose = () => {
    document.querySelector('.popup').dataset.active = 'false';
    document.querySelector('.popup-title').innerHTML = '';
    document.querySelector('.popup-content').innerHTML = '';
    document.querySelector('.popup-close').innerHTML = 'Close';
}