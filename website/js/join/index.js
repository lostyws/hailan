require('{plugins}/artDialog/6.0.2/ui-dialog.css');
require('{plugins}/swiper/3.1.7/swiper.css');
require('{website}/css/join/index.css');

require('{public}/js/base.js');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');


// var swiper = new Swiper('.container-banner .swiper-container', {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     parallax: true,
//     speed: 600,
// });
// 
$('.recruit-info-list').on('click', '.js-applyfor', function() {
	var recruitItemDom = $(this).parents('.recruit-item').eq(0);
	var recruitContainerDom = recruitItemDom.find('.recruit-container');
	if(recruitItemDom && recruitItemDom.hasClass('active')){
		recruitContainerDom.slideDown();
		recruitItemDom.removeClass('active');
	}else{
		recruitContainerDom.slideUp();
		recruitItemDom.addClass('active');
	}
});