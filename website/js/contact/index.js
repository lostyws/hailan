require('{plugins}/artDialog/6.0.2/ui-dialog.css');
require('{plugins}/swiper/3.1.7/swiper.css');
require('{website}/css/contact/index.css');

require('{public}/js/base.js');
require('{plugins}/jquery.SuperSlide.js')




if(document.getElementById('allmap')){
	$(".slideTxtBox").slide({effect:"top"});
	ShowMap('120.112556,30.309737', '杭州海蓝控股集团有限公司', '杭州市拱墅区丰潭路508号21楼', '0571-85222886', '0571-88888888', '19');
}


$(document).on('keyup', '#reportInfo', function() {
	var reportInfoLen = $(this).val().length;
	
	var tipDom = $('.reportInfo-tip');
	tipDom.html('提示：举报内容不能超过5000字，您已经输入'+reportInfoLen+'字');
});
function ShowMap(zuobiao, name, addrsee, phone, chuanzhen, zoom) {
    var arrzuobiao = zuobiao.split(',');
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom);
    map.addControl(new BMap.NavigationControl());
    var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]));
    map.addOverlay(marker);
    var html = '<p style="color: #bf0008;font-size:14px;">' + name + '</p>';
    if (addrsee + "" != "") {
        html += '<p>地址：' + addrsee + '</p>';
    }
    // if (chuanzhen + "" != "") {
    //     html += '<p>传真：' + chuanzhen + '</p>';
    // }
    var infoWindow = new BMap.InfoWindow(html);
    marker.addEventListener("click", function () {
        this.openInfoWindow(infoWindow);
    });
    marker.openInfoWindow(infoWindow);
}

