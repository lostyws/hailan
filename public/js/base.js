// require('{plugins}/artDialog/6.0.2/ui-dialog.css');

require('{plugins}/artDialog/6.0.2/dialog');
var ZeroClipboard = require('{plugins}/ZeroClipboard.js');
var sharetpl = require('{website}/tpl/share.hbs');
var legaltpl = require('{website}/tpl/legal.html');






// 法律声明 唤出
(function () {
    $(legaltpl).appendTo('body');

    var btn_legal = $('.js-legal'),
        mask = $('#mask'),
        wraps = mask.find('.wrap'),
        legal = wraps.filter('#legal'),
        win = $(window),
        curr = $(),
        body = $(document.body),
        m_left = (win.width() - body.width()) / 2;
        win.on('resize', function () {
            m_left = (win.width() - body.width()) / 2;
            body.css('margin-left', m_left);
        });

        btn_legal.on('click', function () { open(legal); });

        mask.on('click', close);

        function open(elem) {
            console.log('open');
            mask.show()
            curr = elem.animate({ 'right': 0 }, 189);
            body.stop().animate({ 'margin-left': m_left - 410 }, 189);
        }
        function close() {

            legal.stop().animate({ 'right': -410 }, 189, function () {
                mask.hide();
                console.log('close');
            });
            body.stop().animate({ 'margin-left': m_left }, 189);
        }

}());


// 底部分享 首页
$(document).on('click', '.js-share-hailan', function() {
    var $param = window.location.host;
    new dialog({
        title: "分享",
        content: sharetpl($param)
    }).showModal();
    new ZeroClipboard( document.getElementById("btnCopy"));

});
// 资讯分享 详情页
$(document).on('click', '.js-share-news', function() {
    var $param = location.href;
    new dialog({
        title: "分享",
        content: sharetpl($param)
    }).showModal();
    new ZeroClipboard( document.getElementById("btnCopy"));

})
// 顶部搜索
$('#bs-example-navbar-collapse-1').on('click', '.js-searchbtn', function() {
    var searchVal = $('#search-val').val();
    if(searchVal){
        alert(searchVal)
    }


})
// 子菜单宽度计算
var nav = $('#header-nav>li.dropdown'),

    subNav = $('#subNav'),
    subitem = $('#subNav').find('.item');

for (var i = 0; nav.length > i; i++) {
    var itemName = $(nav[i]).attr('item-name');
    var W = $(document.body).width();
    var w = $(nav[i]).width();
    var l = $(nav[i]).offset().left;

    subNav.find('.'+itemName).css({
        'left':l,
        'width':W-l
    })


}

nav.hover(function(){
    var itemName = $(this).attr('item-name');
    subitem.removeClass('active');
    subNav.find('.'+itemName).addClass('active');

},function(){
    var itemName = $(this).attr('item-name');
    subNav.find('.'+itemName).removeClass('active');
})
subitem.hover(function(){
    subitem.removeClass('active');
    $(this).addClass('active');
},function(){
    $(this).removeClass('active');
})