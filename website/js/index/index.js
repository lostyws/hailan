require('{website}/css/index/index.css');
require('{plugins}/swiper/3.1.7/swiper.css');

require('{public}/js/base.js');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');

new Swiper('.js-banner-top', {
    // pagination: '.swiper-pagination',
    // paginationClickable: '.swiper-pagination',
    nextButton: '.button-next',
    prevButton: '.button-prev',
    loop: true,
    // height: 825,
    autoplay: 5000,
    effect: 'fade',

});
new Swiper('.js-banner-right', {
    pagination: '.swiper-pagination-right',
    paginationClickable: '.swiper-pagination-right',
    loop: true,
    autoplay: 5000,
    // height: 395,
    // effect: 'fade',

});
new Swiper('.js-banner-left', {
    pagination: '.rectangle-pagination',
    paginationClickable: '.rectangle-pagination',
    loop: true,
    autoplay: 5000,
    // height: 395,

});

