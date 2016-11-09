
require('{plugins}/swiper/3.1.7/swiper.css');
require('{plugins}/artDialog/6.0.2/ui-dialog.css');
require('{website}/css/estate/index.css');




require('{plugins}/artDialog/6.0.2/dialog');
require('{public}/js/base.js');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');
var ZeroClipboard = require('{plugins}/ZeroClipboard.js');
var sharetpl = require('{website}/tpl/share.hbs');

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
    nextButton: '.js-button-next',
    prevButton: '.js-button-prev',
    slidesPerView: 2,//一屏显示两页
    slidesPerGroup: 2, //一次滚动两页
    loop: true,
    height: 523,
    autoplay: 5000,


});
new Swiper('.container-review .swiper-container', {

    scrollbar:'.swiper-scrollbar',
    scrollbarHide : false,
    scrollbarDraggable : true ,
    scrollbarSnapOnRelease : true ,
    slidesPerView: 3,//一屏显示两页
    slidesPerGroup: 1, //一次滚动两页
    loop: true,
    autoplay: 3000,


});
$('.container-footer').on('click', '.js-share-hailan', function() {
    var $param = location.href;
    new dialog({
        title: "分享",
        dialogClass:'share-dialog',

        content: sharetpl($param)
    }).showModal();
    // new ZeroClipboard( document.getElementById("btnCopy"));

})
