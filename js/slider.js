let offset = 0;
const sliderline = document.querySelector('.slider-line');

document.querySelector('.button-slider-next').addEventListener('click', function(){
    offset = offset + 256;
});