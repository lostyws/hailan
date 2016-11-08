require('{website}/css/estate/index.css');
require('{plugins}/swiper/3.1.7/swiper.css');

require('{public}/js/base.js');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');

new Swiper('.js-media-serive', {
    // pagination: '.swiper-pagination',
    // paginationClickable: '.swiper-pagination',
    nextButton: '.button-next',
    prevButton: '.button-prev',
    loop: true,
    height: 523,
    autoplay: 5000,
    effect: 'fade',

});
// slidesPerView: 3,
new Swiper('.business-container .swiper-container', {
    // pagination: '.swiper-pagination',
    // paginationClickable: '.swiper-pagination',
    nextButton: '.button-next',
    prevButton: '.button-prev',
    slidesPerView: 2,
    loop: true,
    height: 523,
    autoplay: 5000,
    

});
