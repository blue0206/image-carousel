import './style.css';

const CarouselSlider = function(){
    const imageReel = document.querySelector('.images');

    const next = () => {
        let initialPosition = parseInt(imageReel.style.getPropertyValue('left'));
        let newPosition = initialPosition - 100;
        imageReel.style.setProperty('left', `${newPosition}%`);
    };

    const previous = () => {
        let initialPosition = parseInt(imageReel.style.getPropertyValue('left'));
        let newPosition = initialPosition + 100;
        imageReel.style.setProperty('left', `${newPosition}%`);
    };

    return { next, previous };
}();