webpackJsonp([2],{0:function(e,t,i){e.exports=i(39)},39:function(e,t,i){(function(e){i(34),i(2),i(40),i(42),i(44),i(10),i(8);var t=i(45),n=(i(11),i(13),i(46)),a=i(47);new t(".js-media-serive",{nextButton:".button-next",prevButton:".button-prev",loop:!0,height:523,autoplay:5e3}),new t(".business-container .swiper-container",{nextButton:".js-button-next",prevButton:".js-button-prev",slidesPerView:2,slidesPerGroup:2,loop:!0,height:523,autoplay:5e3}),new t(".container-review .swiper-container",{scrollbar:".swiper-scrollbar",scrollbarHide:!1,scrollbarDraggable:!0,scrollbarSnapOnRelease:!0,slidesPerView:3,slidesPerGroup:1,loop:!0,autoplay:3e3});var o=new t(".js-businessitem",{prevButton:".button-next",nextButton:".button-prev",slidesPerView:1,initialSlide:3,loop:!0}),s=new t(".js-gallery-thumbs",{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.1,initialSlide:3,slideToClickedSlide:!0,onInit:function(e){}});s.params.control=o,o.params.control=s;var r={title:"",id:123,start:0,data:[{alt:"图片名",pid:666,src:"",thumb:""}]};e(document).on("click",".js-business-layout",function(){var e=[{src:"/website/images/estate/b1.jpg"},{src:"/website/images/estate/b2.jpg"}];r.data=e,layer.open({type:1,title:!1,area:["1000px","580px"],content:n(r),cancel:function(){},success:function(e,i){new t(".js-photos",{nextButton:".button-next",prevButton:".button-prev",loop:!0,autoplay:5e3})}})}),e(document).on("click",".js-classic-review",function(){var e=[{src:"/website/images/estate/b1.jpg"},{src:"/website/images/estate/b2.jpg"}];r.data=e,layer.open({type:1,title:!1,area:["1000px","580px"],content:n(r),cancel:function(){},success:function(e,i){new t(".js-photos",{nextButton:".button-next",prevButton:".button-prev",loop:!0,autoplay:5e3})}})});var l={html:"",tab:function(e){},json:{status:1,msg:"",title:"",id:11,start:0,data:[{name:"",pid:11,src:"",thumb:"",area:[638,851]}]},page:{parent:"",start:0,title:""}};e(document).on("click",".js-service-case",function(){var e=[{src:"/website/images/estate/b1.jpg"},{src:"/website/images/estate/b2.jpg"}];l.html="这里传入自定义的html，也可以不传",l.json.data=e,r.data=e;var i=a;console.log(i),layer.open({type:1,title:!1,area:["1000px","670px"],content:a,cancel:function(){},success:function(e,i){new t(".js-photos-page",{nextButton:".button-next",prevButton:".button-prev",loop:!0,autoplay:5e3})}})}),e(document).on("change","[name=isperson]",function(){console.log(e(this).val());var t=e(this).val(),i=e("#companyname");1==t?i.attr("readonly",!0):i.removeAttr("readonly")}),e(document).on("change","#phone",function(){var t=e(this).val();if(!/^1[34578]\d{9}$/.test(t))return layer.open({type:4,content:["手机号码有误，请重填","#phone"]}),!1}),e(document).on("change","#qq",function(){var t=e(this).val();if(!/^\d{5,12}$/.test(t))return layer.open({type:4,content:["QQ号码有误，请重填","#qq"]}),!1}),e(document).on("change","#area",function(){var t=e(this).val();if(!/^\d{1,99}$/.test(t))return layer.open({type:4,content:["只能输入数字","#area"]}),!1})}).call(t,i(9))},40:function(e,t){},42:function(e,t){},44:function(e,t,i){var n,a;(function(o){var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r,l){"use strict";var c,f,d=r.layui&&layui.define,u={getPath:function(){var e=document.scripts,t=e[e.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},p={v:"3.0",ie:function(){var e=navigator.userAgent.toLowerCase();return!!(r.ActiveXObject||"ActiveXObject"in r)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:r.layer&&r.layer.v?1e5:0,path:u.getPath,config:function(e,t){return e=e||{},p.cache=u.config=c.extend({},u.config,e),p.path=u.config.path||p.path,"string"==typeof e.extend&&(e.extend=[e.extend]),u.config.path&&p.ready(),e.extend?(d?layui.addcss("modules/layer/"+e.extend):p.link("skin/"+e.extend),this):this},link:function(e,t,i){if(p.path){var n=c("head")[0],a=document.createElement("link");"string"==typeof t&&(i=t);var o=(i||e).replace(/\.|\//g,""),s="layuicss-"+o,l=0;a.rel="stylesheet",a.href=p.path+e,a.id=s,c("#"+s)[0]||n.appendChild(a),"function"==typeof t&&!function e(){return++l>80?r.console&&console.error("layer.css: Invalid"):void(1989===parseInt(c("#"+s).css("width"))?t():setTimeout(e,100))}()}},ready:function(e){var t="skinlayercss",i="1172";return d?layui.addcss("modules/layer/default/layer.css?v="+p.v+i,e,t):p.link("skin/default/layer.css?v="+p.v+i,e,t),this},alert:function(e,t,i){var n="function"==typeof t;return n&&(i=t),p.open(c.extend({content:e,yes:i},n?{}:t))},confirm:function(e,t,i,n){var a="function"==typeof t;return a&&(n=i,i=t),p.open(c.extend({content:e,btn:u.btn,yes:i,btn2:n},a?{}:t))},msg:function(e,t,i){var n="function"==typeof t,a=u.config.skin,o=(a?a+" "+a+"-msg":"")||"layui-layer-msg",s=h.anim.length-1;return n&&(i=t),p.open(c.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},n&&!u.config.skin?{skin:o+" layui-layer-hui",anim:s}:function(){return t=t||{},(t.icon===-1||t.icon===l&&!u.config.skin)&&(t.skin=o+" "+(t.skin||"layui-layer-hui")),t}()))},load:function(e,t){return p.open(c.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,i){return p.open(c.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},i))}},y=function(e){var t=this;t.index=++p.index,t.config=c.extend({},t.config,u.config,e),document.body?t.creat():setTimeout(function(){t.creat()},50)};y.pt=y.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],y.pt.config={type:0,shade:.3,fixed:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},y.pt.vessel=function(e,t){var i=this,n=i.index,a=i.config,o=a.zIndex+n,r="object"==s(a.title),l=a.maxmin&&(1===a.type||2===a.type),f=a.title?'<div class="layui-layer-title" style="'+(r?a.title[1]:"")+'">'+(r?a.title[0]:a.title)+"</div>":"";return a.zIndex=o,t([a.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+n+'" times="'+n+'" style="'+("z-index:"+(o-1)+"; background-color:"+(a.shade[1]||"#000")+"; opacity:"+(a.shade[0]||a.shade)+"; filter:alpha(opacity="+(100*a.shade[0]||100*a.shade)+");")+'"></div>':"",'<div class="'+h[0]+(" layui-layer-"+u.type[a.type])+(0!=a.type&&2!=a.type||a.shade?"":" layui-layer-border")+" "+(a.skin||"")+'" id="'+h[0]+n+'" type="'+u.type[a.type]+'" times="'+n+'" showtime="'+a.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+a.area[0]+";height:"+a.area[1]+(a.fixed?"":";position:absolute;")+'">'+(e&&2!=a.type?"":f)+'<div id="'+(a.id||"")+'" class="layui-layer-content'+(0==a.type&&a.icon!==-1?" layui-layer-padding":"")+(3==a.type?" layui-layer-loading"+a.icon:"")+'">'+(0==a.type&&a.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+a.icon+'"></i>':"")+(1==a.type&&e?"":a.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=l?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return a.closeBtn&&(e+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(a.title?a.closeBtn:4==a.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(a.btn?function(){var e="";"string"==typeof a.btn&&(a.btn=[a.btn]);for(var t=0,i=a.btn.length;t<i;t++)e+='<a class="'+h[6]+t+'">'+a.btn[t]+"</a>";return'<div class="'+h[6]+" layui-layer-btn-"+(a.btnAlign||"")+'">'+e+"</div>"}():"")+(a.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],f,c('<div class="layui-layer-move"></div>')),i},y.pt.creat=function(){var e=this,t=e.config,i=e.index,n=t.content,a="object"==("undefined"==typeof n?"undefined":s(n)),o=c("body");if(!c("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==p.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:u.btn[0],p.closeAll("dialog");break;case 2:var n=t.content=a?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+i+'" name="'+h[4]+i+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,p.closeAll("loading");break;case 4:a||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==s(t.tips)?t.tips:[t.tips,!0],t.tipsMore||p.closeAll("tips")}e.vessel(a,function(s,r,l){o.append(s[0]),a?function(){2==t.type||4==t.type?function(){c("body").append(s[1])}():function(){n.parents("."+h[0])[0]||(n.data("display",n.css("display")).show().addClass("layui-layer-wrap").wrap(s[1]),c("#"+h[0]+i).find("."+h[5]).before(r))}()}():o.append(s[1]),c(".layui-layer-move")[0]||o.append(u.moveElem=l),e.layero=c("#"+h[0]+i),t.scrollbar||h.html.css("overflow","hidden").attr("layer-full",i)}).auto(i),2==t.type&&6==p.ie&&e.layero.find("iframe").attr("src",n[0]),4==t.type?e.tips():e.offset(),t.fixed&&f.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(i),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){p.close(e.index)},t.time),e.move().callback(),h.anim[t.anim]&&e.layero.addClass(h.anim[t.anim])}},y.pt.auto=function(e){function t(e){e=a.find(e),e.height(o[1]-s-r-2*(0|parseFloat(e.css("padding"))))}var i=this,n=i.config,a=c("#"+h[0]+e);""===n.area[0]&&n.maxWidth>0&&(p.ie&&p.ie<8&&n.btn&&a.width(a.innerWidth()),a.outerWidth()>n.maxWidth&&a.width(n.maxWidth));var o=[a.innerWidth(),a.innerHeight()],s=a.find(h[1]).outerHeight()||0,r=a.find("."+h[6]).outerHeight()||0;switch(n.type){case 2:t("iframe");break;default:""===n.area[1]?n.fixed&&o[1]>=f.height()&&(o[1]=f.height(),t("."+h[5])):t("."+h[5])}return i},y.pt.offset=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a="object"==s(t.offset);e.offsetTop=(f.height()-n[1])/2,e.offsetLeft=(f.width()-n[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=f.width()-n[0]:"b"===t.offset?e.offsetTop=f.height()-n[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=f.width()-n[0]):"rb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=f.width()-n[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?f.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?f.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=f.scrollTop(),e.offsetLeft+=f.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=f.height()-(i.find(h[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},y.pt.tips=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a=c(t.follow);a[0]||(a=c("body"));var o={width:a.outerWidth(),height:a.outerHeight(),top:a.offset().top,left:a.offset().left},s=i.find(".layui-layer-TipsG"),r=t.tips[0];t.tips[1]||s.remove(),o.autoLeft=function(){o.left+n[0]-f.width()>0?(o.tipLeft=o.left+o.width-n[0],s.css({right:12,left:"auto"})):o.tipLeft=o.left},o.where=[function(){o.autoLeft(),o.tipTop=o.top-n[1]-10,s.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left+o.width+10,o.tipTop=o.top,s.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){o.autoLeft(),o.tipTop=o.top+o.height+10,s.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left-n[0]-10,o.tipTop=o.top,s.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],o.where[r-1](),1===r?o.top-(f.scrollTop()+n[1]+16)<0&&o.where[2]():2===r?f.width()-(o.left+o.width+n[0]+16)>0||o.where[3]():3===r?o.top-f.scrollTop()+o.height+n[1]+16-f.height()>0&&o.where[0]():4===r&&n[0]+16-o.left>0&&o.where[1](),i.find("."+h[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),i.css({left:o.tipLeft-(t.fixed?f.scrollLeft():0),top:o.tipTop-(t.fixed?f.scrollTop():0)})},y.pt.move=function(){var e=this,t=e.config,i=c(document),n=e.layero,a=n.find(t.move),o=n.find(".layui-layer-resize"),s={};return t.move&&a.css("cursor","move"),a.on("mousedown",function(e){e.preventDefault(),t.move&&(s.moveStart=!0,s.offset=[e.clientX-parseFloat(n.css("left")),e.clientY-parseFloat(n.css("top"))],u.moveElem.css("cursor","move").show())}),o.on("mousedown",function(e){e.preventDefault(),s.resizeStart=!0,s.offset=[e.clientX,e.clientY],s.area=[n.outerWidth(),n.outerHeight()],u.moveElem.css("cursor","se-resize").show()}),i.on("mousemove",function(i){if(s.moveStart){var a=i.clientX-s.offset[0],o=i.clientY-s.offset[1],r="fixed"===n.css("position");if(i.preventDefault(),s.stX=r?0:f.scrollLeft(),s.stY=r?0:f.scrollTop(),!t.moveOut){var l=f.width()-n.outerWidth()+s.stX,c=f.height()-n.outerHeight()+s.stY;a<s.stX&&(a=s.stX),a>l&&(a=l),o<s.stY&&(o=s.stY),o>c&&(o=c)}n.css({left:a,top:o})}if(t.resize&&s.resizeStart){var a=i.clientX-s.offset[0],o=i.clientY-s.offset[1];i.preventDefault(),p.style(e.index,{width:s.area[0]+a,height:s.area[1]+o}),s.isResize=!0}}).on("mouseup",function(e){s.moveStart&&(delete s.moveStart,u.moveElem.hide(),t.moveEnd&&t.moveEnd()),s.resizeStart&&(delete s.resizeStart,u.moveElem.hide())}),e},y.pt.callback=function(){function e(){var e=n.cancel&&n.cancel(t.index,i);e===!1||p.close(t.index)}var t=this,i=t.layero,n=t.config;t.openLayer(),n.success&&(2==n.type?i.find("iframe").on("load",function(){n.success(i,t.index)}):n.success(i,t.index)),6==p.ie&&t.IE6(i),i.find("."+h[6]).children("a").on("click",function(){var e=c(this).index();if(0===e)n.yes?n.yes(t.index,i):n.btn1?n.btn1(t.index,i):p.close(t.index);else{var a=n["btn"+(e+1)]&&n["btn"+(e+1)](t.index,i);a===!1||p.close(t.index)}}),i.find("."+h[7]).on("click",e),n.shadeClose&&c("#layui-layer-shade"+t.index).on("click",function(){p.close(t.index)}),i.find(".layui-layer-min").on("click",function(){var e=n.min&&n.min(i);e===!1||p.min(t.index,n)}),i.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(p.restore(t.index),n.restore&&n.restore(i)):(p.full(t.index,n),setTimeout(function(){n.full&&n.full(i)},100))}),n.end&&(u.end[t.index]=n.end)},u.reselect=function(){c.each(c("select"),function(e,t){var i=c(this);i.parents("."+h[0])[0]||1==i.attr("layer")&&c("."+h[0]).length<1&&i.removeAttr("layer").show(),i=null})},y.pt.IE6=function(e){c("select").each(function(e,t){var i=c(this);i.parents("."+h[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},y.pt.openLayer=function(){var e=this;p.zIndex=e.config.zIndex,p.setTop=function(e){var t=function(){p.zIndex++,e.css("z-index",p.zIndex+1)};return p.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),p.zIndex}},u.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},u.rescollbar=function(e){h.html.attr("layer-full")==e&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},r.layer=p,p.getChildFrame=function(e,t){return t=t||c("."+h[4]).attr("times"),c("#"+h[0]+t).find("iframe").contents().find(e)},p.getFrameIndex=function(e){return c("#"+e).parents("."+h[4]).attr("times")},p.iframeAuto=function(e){if(e){var t=p.getChildFrame("html",e).outerHeight(),i=c("#"+h[0]+e),n=i.find(h[1]).outerHeight()||0,a=i.find("."+h[6]).outerHeight()||0;i.css({height:t+n+a}),i.find("iframe").css({height:t})}},p.iframeSrc=function(e,t){c("#"+h[0]+e).find("iframe").attr("src",t)},p.style=function(e,t,i){var n=c("#"+h[0]+e),a=n.find(".layui-layer-content"),o=n.attr("type"),s=n.find(h[1]).outerHeight()||0,r=n.find("."+h[6]).outerHeight()||0;n.attr("minLeft"),o!==u.type[3]&&o!==u.type[4]&&(i||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-s-r<=64&&(t.height=64+s+r)),n.css(t),o===u.type[2]?n.find("iframe").css({height:parseFloat(t.height)-s-r}):a.css({height:parseFloat(t.height)-s-r-parseFloat(a.css("padding-top"))-parseFloat(a.css("padding-bottom"))}))},p.min=function(e,t){var i=c("#"+h[0]+e),n=i.find(h[1]).outerHeight()||0,a=i.attr("minLeft")||181*u.minIndex+"px",o=i.css("position");u.record(i),u.minLeft[0]&&(a=u.minLeft[0],u.minLeft.shift()),i.attr("position",o),p.style(e,{width:180,height:n,left:a,top:f.height()-n,position:"fixed",overflow:"hidden"},!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(h[4]).hide(),u.rescollbar(e),i.attr("minLeft")||u.minIndex++,i.attr("minLeft",a)},p.restore=function(e){var t=c("#"+h[0]+e),i=t.attr("area").split(",");t.attr("type"),p.style(e,{width:parseFloat(i[0]),height:parseFloat(i[1]),top:parseFloat(i[2]),left:parseFloat(i[3]),position:t.attr("position"),overflow:"visible"}),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(h[4]).show(),u.rescollbar(e)},p.full=function(e){var t,i=c("#"+h[0]+e);u.record(i),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===i.css("position");p.style(e,{top:t?0:f.scrollTop(),left:t?0:f.scrollLeft(),width:f.width(),height:f.height()}),i.find(".layui-layer-min").hide()},100)},p.title=function(e,t){var i=c("#"+h[0]+(t||p.index)).find(h[1]);i.html(e)},p.close=function(e){var t=c("#"+h[0]+e),i=t.attr("type"),n="layer-anim-close";if(t[0]){var a="layui-layer-wrap",o=function n(){if(i===u.type[1]&&"object"===t.attr("conType")){t.children(":not(."+h[5]+")").remove();for(var o=t.find("."+a),s=0;s<2;s++)o.unwrap();o.css("display",o.data("display")).removeClass(a)}else{if(i===u.type[2])try{var n=c("#"+h[4]+e)[0];n.contentWindow.document.write(""),n.contentWindow.close(),t.find("."+h[5])[0].removeChild(n)}catch(e){}t[0].innerHTML="",t.remove()}};t.addClass(n),c("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==p.ie&&u.reselect(),u.rescollbar(e),"function"==typeof u.end[e]&&u.end[e](),delete u.end[e],t.attr("minLeft")&&(u.minIndex--,u.minLeft.push(t.attr("minLeft"))),setTimeout(function(){o()},p.ie&&p.ie<10?0:200)}},p.closeAll=function(e){c.each(c("."+h[0]),function(){var t=c(this),i=e?t.attr("type")===e:1;i&&p.close(t.attr("times")),i=null})};var m=p.cache||{},v=function(e){return m.skin?" "+m.skin+" "+m.skin+"-"+e:""};p.prompt=function(e,t){var i="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var n=e.area;i='style="width: '+n[0]+"; height: "+n[1]+';"',delete e.area}var a,o=2==e.formType?'<textarea class="layui-layer-input"'+i+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}();return p.open(c.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:o,skin:"layui-layer-prompt"+v("prompt"),maxWidth:f.width(),success:function(e){a=e.find(".layui-layer-input"),a.focus()},resize:!1,yes:function(i){var n=a.val();""===n?a.focus():n.length>(e.maxlength||500)?p.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",a,{tips:1}):t&&t(n,i,a)}},e))},p.tab=function(e){e=e||{};var t=e.tab||{};return p.open(c.extend({type:1,skin:"layui-layer-tab"+v("tab"),resize:!1,title:function(){var e=t.length,i=1,n="";if(e>0)for(n='<span class="layui-layer-tabnow">'+t[0].title+"</span>";i<e;i++)n+="<span>"+t[i].title+"</span>";return n}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,n="";if(e>0)for(n='<li class="layui-layer-tabli xubox_tab_layer">'+(t[0].content||"no content")+"</li>";i<e;i++)n+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return n}()+"</ul>",success:function(t){var i=t.find(".layui-layer-title").children(),n=t.find(".layui-layer-tabmain").children();i.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var i=c(this),a=i.index();i.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),n.eq(a).show().siblings().hide(),"function"==typeof e.change&&e.change(a)})}},e))},p.photos=function(e,t,i){function n(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var a={};if(e=e||{},e.photos){var o=e.photos.constructor===Object,s=o?e.photos:{},l=s.data||[],f=s.start||0;if(a.imgIndex=(0|f)+1,e.img=e.img||"img",o){if(0===l.length)return p.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var d=c(e.photos),u=function(){l=[],d.find(e.img).each(function(e){var t=c(this);t.attr("layer-index",e),l.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(u(),0===l.length)return;if(t||d.on("click",e.img,function(){var t=c(this),i=t.attr("layer-index");p.photos(c.extend(e,{photos:{start:i,data:l,tab:e.tab},full:e.full}),!0),u()}),!t)return}a.imgprev=function(e){a.imgIndex--,a.imgIndex<1&&(a.imgIndex=l.length),a.tabimg(e)},a.imgnext=function(e,t){a.imgIndex++,a.imgIndex>l.length&&(a.imgIndex=1,t)||a.tabimg(e)},a.keyup=function(e){if(!a.end){var t=e.keyCode;e.preventDefault(),37===t?a.imgprev(!0):39===t?a.imgnext(!0):27===t&&p.close(a.index)}},a.tabimg=function(t){l.length<=1||(s.start=a.imgIndex-1,p.close(a.index),p.photos(e,!0,t))},a.event=function(){a.bigimg.hover(function(){a.imgsee.show()},function(){a.imgsee.hide()}),a.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),a.imgprev()}),a.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),a.imgnext()}),c(document).on("keyup",a.keyup)},a.loadi=p.load(1,{shade:!("shade"in e)&&.9,scrollbar:!1}),n(l[f].src,function(t){p.close(a.loadi),a.index=p.open(c.extend({type:1,area:function(){var i=[t.width,t.height],n=[c(r).width()-100,c(r).height()-100];if(!e.full&&(i[0]>n[0]||i[1]>n[1])){var a=[i[0]/n[0],i[1]/n[1]];a[0]>a[1]?(i[0]=i[0]/a[0],i[1]=i[1]/a[0]):a[0]<a[1]&&(i[0]=i[0]/a[1],i[1]=i[1]/a[1])}return[i[0]+"px",i[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,anim:5*Math.random()|0,skin:"layui-layer-photos"+v("photos"),content:'<div class="layui-layer-phimg"><img src="'+l[f].src+'" alt="'+(l[f].alt||"")+'" layer-pid="'+l[f].pid+'"><div class="layui-layer-imgsee">'+(l.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(i?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(l[f].alt||"")+"</a><em>"+a.imgIndex+"/"+l.length+"</em></span></div></div></div>",success:function(t,i){a.bigimg=t.find(".layui-layer-phimg"),a.imgsee=t.find(".layui-layer-imguide,.layui-layer-imgbar"),a.event(t),e.tab&&e.tab(l[f],t)},end:function(){a.end=!0,c(document).off("keyup",a.keyup)}},e))},function(){p.close(a.loadi),p.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){l.length>1&&a.imgnext(!0,!0)}})})}},u.run=function(e){c=e,f=c(r),h.html=c("html"),p.open=function(e){var t=new y(e);return t.index}},r.layui&&layui.define?(p.ready(),layui.define("jquery",function(e){p.path=layui.cache.dir,u.run(layui.jquery),r.layer=p,e("layer",p)})):(n=[i(9)],a=function(){return u.run(o),p}.apply(t,n),!(void 0!==a&&(e.exports=a)))}(window)}).call(t,i(9))},46:function(e,t,i){var n=i(14);e.exports=(n.default||n).template({1:function(e,t,i,n,a){var o;return'        <div class="img-responsive swiper-slide" style="background:url('+e.escapeExpression((o=null!=(o=i.src||(null!=t?t.src:t))?o:i.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"src",hash:{},data:a}):o))+')no-repeat scroll center top">\n            \n        </div>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,i,n,a){var o;return'<div class="swiper-container photos-container js-photos">\n    <div class="swiper-wrapper">\n'+(null!=(o=i.each.call(null!=t?t:{},null!=t?t.data:t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?o:"")+'        \n            \n        \n\n\n    </div>\n    <div class="button-next"><i class="iconfont icon-arrownext1"></i></div>\n    <div class="button-prev"><i class="iconfont icon-arrownext"></i></div>\n    \n    \n</div>'},useData:!0})},47:function(e,t){e.exports='<div class="swiper-container photos-page-container-fixed js-photos-page"> <div class=swiper-wrapper> <div class=swiper-slide> <div class=img-responsive> <img class=img-responsive src=/website/images/estate/b1.jpg> </div> <div class="photos-page-bottom photos-page-bottom-fixed"> <div class="col-md-4 title"> <h4>海蓝·天行国际中心</h4> </div> <div class=col-md-4> <div class=adress> <p>物业地址：杭州市拱墅区丰潭路508号</p> <p>物业面积：144096平方米</p> </div> </div> <div class=col-md-4> <p>物业性质：大型城市综合体</p> <p>管理方式：全权管理，兼商业招商。</p> </div> </div> </div> <div class="img-responsive swiper-slide"> <div class=img-responsive> <img class=img-responsive src=/website/images/estate/b2.jpg> </div> <div class="photos-page-bottom photos-page-bottom-fixed"> <div class="col-md-4 title"> <h4>人力资源服务产业园</h4> </div> <div class=col-md-4> <div class=adress> <p>物业地址：杭州市下城区白石路318号</p> <p>物业面积：94250平方米</p> </div> </div> <div class=col-md-4> <p>物业性质：国家一级现代化综合性楼宇</p> <p>管理方式：全权管理，兼商业招商</p> </div> </div> </div> </div> <div class=button-next><i class="iconfont icon-arrownext1"></i></div> <div class=button-prev><i class="iconfont icon-arrownext"></i></div> </div> '}});