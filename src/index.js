import './style.css';

const CarouselSlider = function(){
    const imageReel = document.querySelector('.images');

    const next = () => {
        let imageWidth = imageReel.querySelector("img").width;
        let currentPosition = parseInt(window.getComputedStyle(imageReel).getPropertyValue('left'));
        let newPosition = 0;
        if (currentPosition > (imageWidth * -4))
        {
            newPosition = currentPosition - imageWidth;
        }
        imageReel.style.left = `${newPosition}px`;
    };

    const previous = () => {
        let imageWidth = imageReel.querySelector("img").width;
        let currentPosition = parseInt(window.getComputedStyle(imageReel).getPropertyValue('left'));
        let newPosition = -4 * imageWidth;
        if (currentPosition != 0)
        {
            newPosition = currentPosition + imageWidth;
        }
        imageReel.style.left = `${newPosition}px`;
    };

    return { next, previous };
}();