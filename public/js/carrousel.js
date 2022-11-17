// 1 : Select Carousel Element
const carouselHome = document.getElementById('carousel-content');
// console.log(carouselHome);
    // Output : Return the HTML section with this id : carousel-products-home

// 2 : Get Array of Element include in #carousel-content & Lenght(in number of element) of carousel element and set it to a variable
const productBoxElements = Array.from(carouselHome.children);
// console.log(carouselHomeArray);
    // Output : Return an array of each element in the HTML section with the id carousel-content
const carouselHomeLength = carouselHome.children.length;
// console.log(carouselHomeLength);
    // Output : Number of children in carousel

// 3 : Get the width of the carousel element
let allProductBoxWidth = [];
productBoxElements.forEach(productBoxItem => {
    let productBoxWidth = productBoxItem.offsetWidth + 40;
    allProductBoxWidth.push(productBoxWidth);
});
// console.log(allProductBoxWidth);
    // Output : Number of pixels without margin ==> Array of width of each element in the carousel (in number of pixels)

// 4 : Animation of carousel :
// Select buttons to control carousel
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Add an Eventlistener to change the scroll position of the carousel element
prevBtn.addEventListener('click', () => {
    carouselHome.scrollLeft -= 340;

});

nextBtn.addEventListener('click', () => {
    carouselHome.scrollLeft += 340;
});