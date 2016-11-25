//注册一个比较大小的Helper,判断v1是否等于v2
module.exports = function(v1,v2,options) {
	 if(v1==v2){
    //满足添加继续执行
    return options.fn(this);
  }else{
    //不满足条件执行{{else}}部分
    return options.inverse(this);
  }
}



