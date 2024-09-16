import './style.css';

const CarouselSlider = function(){
    const imageReel = document.querySelector('.images');
    const navDots = document.querySelectorAll(".dot");

    let currentImageIndex = 0;
    let lastImageIndex = 4;

    const next = () => {
        if (currentImageIndex == lastImageIndex)
        {
            currentImageIndex = 0;
            imageReel.style.left = `-${fetchImageWidth() * currentImageIndex}px`;
            highlightNavDot(currentImageIndex);
        }
        else
        {
            imageReel.style.left = `-${fetchImageWidth() * (++currentImageIndex)}px`;
            highlightNavDot(currentImageIndex);
        }
    };

    const previous = () => {
        if (currentImageIndex == 0)
        {
            imageReel.style.left = `-${fetchImageWidth() * lastImageIndex}px`;
            currentImageIndex = lastImageIndex;
            highlightNavDot(currentImageIndex);
        }
        else
        {
            imageReel.style.left = `-${fetchImageWidth() * --currentImageIndex}px`;
            highlightNavDot(currentImageIndex);
        }
    };

    const highlightNavDot = (index) => {
        for (let i=0; i<5; i++)
        {
            if (i == index)
            {
                navDots[i].classList.add('visible');
            }
            else
            {
                navDots[i].classList.remove('visible');
            }
        }
    };

    const fetchImageWidth = () => imageReel.querySelector('img').width;

    return { next, previous };
}();

const SliderBtn = function() {
    const nextButton = document.querySelector('.carousel-next');
    const previousButton = document.querySelector('.carousel-previous');
    
    nextButton.addEventListener('click', () => {
        CarouselSlider.next();
    });
    
    previousButton.addEventListener('click', () => {
        CarouselSlider.previous();
    });
}();