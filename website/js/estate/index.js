
require('{plugins}/swiper/3.1.7/swiper.css');
require('{plugins}/artDialog/6.0.2/ui-dialog.css');
require('{plugins}/layer/skin/default/layer.css');
require('{website}/css/estate/index.css');



require('{plugins}/layer/layer');
require('{plugins}/artDialog/6.0.2/dialog');
require('{public}/js/base.js');
var Swiper = require('{plugins}/swiper/3.1.7/swiper.js');
var ZeroClipboard = require('{plugins}/ZeroClipboard.js');
var sharetpl = require('{website}/tpl/share.hbs');
var photostpl = require('{website}/tpl/photos.hbs');
var photosPagetpl = require('{website}/tpl/photosPage.hbs');

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

var galleryTop = new Swiper('.js-businessitem', {
    nextButton: '.button-next',
    prevButton: '.button-prev',
    spaceBetween: 10,
});
var galleryThumbs = new Swiper('.js-gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;



var photosJson = {
    title: "", //相册标题
    id: 123, //相册id
    start: 0, //初始显示的图片序号，默认0
    data: [   //相册包含的图片，数组格式
        {
          alt: "图片名",
          pid: 666, //图片id
          src: "", //原图地址
          thumb: "" //缩略图地址
        }
    ]
}
// 业务布局
$(document).on('click', '.js-business-layout', function() {
    var ajaxBackData = [{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    }]
    photosJson.data = ajaxBackData;

    // layer.photos({
    //     photos: photosJson,
    //     area: ['1000px', '580px'],

    //     // anim: 6 //0-6的选择，指定弹出图片动画类型，默认随机
    // });
    layer.open({
        type: 1,
        title: false, //不显示标题
        area: ['1000px', '580px'],
        content: photostpl(photosJson), //捕获的元素
        cancel: function() {
            
        },
        success: function(layero, index){
            new Swiper('.js-photos', {
                
                nextButton: '.button-next',
                prevButton: '.button-prev',
                loop: true,
                
                autoplay: 5000,
               

            });
        }
    });
})
// 经典回顾
$(document).on('click', '.js-classic-review', function() {
    var ajaxBackData = [{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    }]
    photosJson.data = ajaxBackData;

    // layer.photos({
    //     photos: photosJson,
    //     area: ['1000px', '580px'],

    //     // anim: 6 //0-6的选择，指定弹出图片动画类型，默认随机
    // });
    layer.open({
        type: 1,
        title: false, //不显示标题
        area: ['1000px', '580px'],
        content: photostpl(photosJson), //捕获的元素
        cancel: function() {
            
        },
        success: function(layero, index){
            new Swiper('.js-photos', {
                
                nextButton: '.button-next',
                prevButton: '.button-prev',
                loop: true,
                autoplay: 5000,
               

            });
        }
    });
})

var photosPageJson = {
    
    html: '',    //自定义的html，显示在层右侧
    tab: function(obj){}, //图片切换操作的回调，obj返回了图片pid和name
    json: { //您服务端接口需严格按照下述格式返回
        "status": 1,    //请求的状态，1表示成功，其它表示失败
        "msg": "",  //状态提示语
        "title": "",    //相册标题
        "id": 11,    //相册id
        "start": 0, //初始显示的图片序号，默认0
        "data": [   //相册包含的图片，数组格式
            {
                "name": "", //图片名
                "pid": 11, //图片id
                "src": "", //原图地址
                "thumb": "", //缩略图地址
                "area": [638, 851] //原图宽高
            }
        ]
    },
    page: { //直接获取页面指定区域的图片，他与上述异步不可共存，只能择用其一。
        parent: '',  //图片的父元素选择器，如'#imsbox',
        start: 0, //初始显示的图片序号，默认0
        title: '' //相册标题
    }
}
// 服务案例
$(document).on('click', '.js-service-case', function() {
    var ajaxBackData = [{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    },{
        src:'http://localhost:4001/website/images/estate/b1.jpg'
    }]
    photosPageJson.html = '这里传入自定义的html，也可以不传';
    photosPageJson.json.data =  ajaxBackData

    // layer.photos(photosPageJson);

    photosJson.data = ajaxBackData;
    var contentDom = photosPagetpl(photosJson);
    console.log(contentDom)
    
    layer.open({
        type: 1,
        title: false, //不显示标题
        area: ['1000px', '670px'],
        content: photosPagetpl(photosJson), //捕获的元素
        cancel: function() {
            
        },
        success: function(layero, index){
            new Swiper('.js-photos-page', {
                
                nextButton: '.button-next',
                prevButton: '.button-prev',
                loop: true,
                
                autoplay: 5000,
               

            });
        }
    });
})


