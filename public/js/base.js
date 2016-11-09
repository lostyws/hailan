require('{plugins}/artDialog/6.0.2/ui-dialog.css');

require('{plugins}/artDialog/6.0.2/dialog');
var ZeroClipboard = require('{plugins}/ZeroClipboard.js');
var sharetpl = require('{website}/tpl/share.hbs');

$(document).on('click', '.js-share-hailan', function() {
    var $param = location.href;
    new dialog({
        title: "分享",
        content: sharetpl($param)
    }).showModal();
    new ZeroClipboard( document.getElementById("btnCopy"));

})
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
    console.log('w====='+w)
    console.log('l====='+l)

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