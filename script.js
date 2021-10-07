const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
console.log(slidesCount);
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        console.log(activeSlideIndex);
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
            console.log(activeSlideIndex);
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        console.log('asi b4 ' + activeSlideIndex);
        console.log('slides count ' + slidesCount);
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
            console.log('asi after ' +activeSlideIndex);
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}