var size = document.querySelector('.slider').clientWidth;

var transferSlider = document.querySelector('.slider-container-banner');

var fullImg = transferSlider.querySelectorAll('.slider-img');

var max = size * fullImg.length;

max -= size;

var transfer = 0;

function nextSlider() {
    if (transfer < max) {

        transfer += size;
    } else {
        transfer = 0;
    }
    transferSlider.style.marginLeft = '-' + transfer + 'px';
}

function prevSlider() {

    if (transfer == 0) {
        transfer = max;
    } else {
        transfer -= size;
    }
    transferSlider.style.marginLeft = '-' + transfer + 'px';
}

setInterval(nextSlider, 5000)
