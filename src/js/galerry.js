const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slide = document.querySelectorAll('.slide-image');
const circleArea = document.querySelector('.circle-area');


let currentSlideIndex = 0;
const paginationCircle = [];

function createElement(tag, className) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
}

function createPaginationCircle() {
    const divForCirclePagination = createElement('div', 'pagination-circle')
    circleArea.appendChild(divForCirclePagination);
    paginationCircle.push(divForCirclePagination);
}

function addPagination() {
    slide.forEach(createPaginationCircle);
    paginationCircle[0].classList.add('active');
    paginationCircle.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlide(index));
    })

}

function removeActiveClass() {
    paginationCircle[currentSlideIndex].classList.remove('active');
}

function addActiveClass() {
    paginationCircle[currentSlideIndex].classList.add('active')
}

function showSlide() {
    slide[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slide[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slide.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slide.length - 1;
    }
    changeSlide(newSlideIndex);
}

function init() {
    addPagination();
    arrowLeft.addEventListener('click', previousSlide);
    arrowRight.addEventListener('click', nextSlide);
}

init();