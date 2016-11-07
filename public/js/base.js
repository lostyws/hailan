var win = $(window);
$(function () {
    // 导航栏控制
    (function () {
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
        
        

            

            

        
        
        


       
        
        
        
    }());

    // 搜索按钮
    (function () {
        
    }());
   

    // placeholder 处理
    (function () {
        // 情况1，如果浏览器支持 placeholder，则优先使用默认。
        var input = document.createElement("input");
        input.type = "text";
        if ("placeholder" in input) return;

        // 情况2，如果没有任何标签使用 placeholder，则不做任何处理。
        var inputs = $("*[placeholder]"),
            val = "";
        if (!inputs.length) return;

        // 情况3，对于不支持 placeholder 属性的元素进行预加载和事件挂载。
        inputs
            .each(function () {
                input = $(this);
                input.val(input.attr("placeholder"));
            })
            .on("focus", focus)
            .on("blur", blur)
            .on("change", change);

        // 处理函数
        function focus() {
            input = $(this);
            val = input.val();
            if (val && (val !== input.attr('placeholder'))) return;
            else input.val("");
        }
        function blur() {
            // input.val(input.attr("placeholder"));
            val = input.val();
            if (val && (val !== input.attr('placeholder'))) {
                return;
            } else {
                input.val(input.attr("placeholder"));
            }
        }
        function change() {
            if (input.val()) {
                input.off("focus").off("blur");
            } else {
                input.on("focus", focus).on("blur", blur);
            }
        }
    })();

    // 法律声明 & 网站地图 唤出
    (function () {
        var copyright = $('#copyright'),
            btn_legal = copyright.find('.legal'),
            btn_map = copyright.find('.sitemap'),
            mask = $('#mask'),
            wraps = mask.find('.wrap'),
            legal = wraps.filter('#legal'),
            map = wraps.filter('#sitemap'),
            curr = $(),
            body = $(document.body),
            m_left = (win.width() - body.width()) / 2;
        win.on('resize', function () {
            m_left = (win.width() - body.width()) / 2;
            body.css('margin-left', m_left);
        });

        btn_legal.on('click', function () { open(legal); });
        btn_map.on('click', function () { open(map); });
        mask.on('click', close);

        function open(elem) {
            mask.show()
            curr = elem.animate({ 'right': 0 }, 189);
            body.stop().animate({ 'margin-left': m_left - 378 }, 189);
        }
        function close() {
            curr.stop().animate({ 'right': -378 }, 189, function () {
                mask.hide();
            });
            body.stop().animate({ 'margin-left': m_left }, 189);
        }
        // wraps.on('click', function (e) {
        //     if (e && e.stopPropagation) {
        //         e.stopPropagation();
        //     } else window.event.cancelBubble = true;
        //     // return false;
        // });
    }());
    // 调整高度
    (function () {
        var copyright = $('#copyright'),
            hei = $('html').height() - $('body').height();
        if (hei <= 0) return;
        copyright.find('.g-wrap div').height(37 + hei);
    }());
});
$(function(){})