require('{plugins}/artDialog/6.0.2/ui-dialog.css');
require('{plugins}/swiper/3.1.7/swiper.css');
require('{website}/css/index/index.css');

require('{public}/js/base.js');


require('{plugins}/artDialog/6.0.2/dialog');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');
var ZeroClipboard = require('{plugins}/ZeroClipboard.js');
var sharetpl = require('{website}/tpl/share.hbs');

new Swiper('.js-banner-top', {
    // pagination: '.swiper-pagination',
    // paginationClickable: '.swiper-pagination',
    nextButton: '.button-prev',
    prevButton: '.button-next',
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


