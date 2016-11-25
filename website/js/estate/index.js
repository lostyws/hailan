
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
    // effect: 'fade',

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
    prevButton: '.button-next',
    nextButton: '.button-prev',
    slidesPerView: 1,
    // initialSlide:3,
    // loop: true,
});
var galleryThumbs = new Swiper('.js-gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    // touchRatio: 0.1,
    // initialSlide:3,
    // loop: true,
    slideToClickedSlide: true,
    onInit: function(swiper){
      //Swiper初始化了
      //alert(swiper.activeIndex);提示Swiper的当前索引
        // console.log($('.js-gallery-thumbs .swiper-wrapper').attr("style"));
        // $('.js-gallery-thumbs .swiper-wrapper').removeAttr('style');
    }
});

galleryThumbs.params.control = galleryTop;
galleryTop.params.control = galleryThumbs;



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
    var parentid = $(this).attr('parentid');
    var ajaxBackData = [{
        src:'/website/images/estate/b1.jpg'
    },{
        src:'/website/images/estate/b2.jpg'
    }]
    if(parentid){
        ajaxBackData = [{
            src:`/website/images/estate/${parentid}/1.jpg`
        },{
            src:`/website/images/estate/${parentid}/2.jpg`
        },{
            src:`/website/images/estate/${parentid}/3.jpg`
        },{
            src:`/website/images/estate/${parentid}/4.jpg`
        },{
            src:`/website/images/estate/${parentid}/5.jpg`
        }]
    }


    photosJson.data = ajaxBackData;

    // layer.photos({
    //     photos: photosJson,
    //     area: ['1000px', '580px'],

    //     // anim: 6 //0-6的选择，指定弹出图片动画类型，默认随机
    // });
    photosJson.pageButton = true;
    layer.open({
        type: 1,
        title: false, //不显示标题
        area: ['1000px', '580px'],
        content: photostpl(photosJson), //捕获的元素
        cancel: function() {

        },
        success: function(layero, index){
            new Swiper('.js-photos', {

                nextButton: '.button-prev',
                prevButton: '.button-next',
                loop: true,

                autoplay: 5000,


            });
        }
    });
})
// 经典回顾
$(document).on('click', '.js-classic-review', function() {
    var ajaxBackData = [{
        src:'/website/images/estate/b1.jpg'
    }]
    var bigSrc = $(this).attr('big-src');
    if(bigSrc){
        ajaxBackData = [{
            src:bigSrc
        }]
    }
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

                // nextButton: '.button-next',
                // prevButton: '.button-prev',
                // loop: true,
                // autoplay: 5000,


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
        src:'/website/images/estate/b1.jpg'
    }]
    var parentid = $(this).attr('parentid');
    var bigSrc = $(this).attr('big-src');
    if(parentid && bigSrc){
        ajaxBackData = [{
            src:bigSrc
        }]
    }
    photosPageJson.html = '这里传入自定义的html，也可以不传';
    photosPageJson.json.data =  ajaxBackData

    // layer.photos(photosPageJson);

    photosJson.data = ajaxBackData;
    photosJson.parentid = parentid;
    var contentDom = photosPagetpl;
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

                // nextButton: '.button-next',
                // prevButton: '.button-prev',
                // loop: true,

                // autoplay: 5000,


            });
        }
    });
})
$(document).on('change', '[name=isperson]', function() {
    console.log($(this).val())
    var isPerson = $(this).val();
    var companyname = $('#companyname');
    if(isPerson == 1){
        companyname.attr('readonly',true)
    }else{
        companyname.removeAttr('readonly')
    }
})
$(document).on('change', '#phone', function() {
    var phone = $(this).val();
    if(!(/^1[34578]\d{9}$/.test(phone))){

        layer.open({
          type: 4,
          content: ['手机号码有误，请重填', '#phone'] //数组第二项即吸附元素选择器或者DOM
        });
        return false;
    }
})
$(document).on('change', '#qq', function() {
    var qq = $(this).val();
    if(!(/^\d{5,12}$/.test(qq))){

        layer.open({
          type: 4,
          content: ['QQ号码有误，请重填', '#qq'] //数组第二项即吸附元素选择器或者DOM
        });
        return false;
    }
})
$(document).on('change', '#area', function() {
    var area = $(this).val();
    if(!(/^\d{1,99}$/.test(area))){

        layer.open({
          type: 4,
          content: ['只能输入数字', '#area'] //数组第二项即吸附元素选择器或者DOM
        });
        return false;
    }
})






