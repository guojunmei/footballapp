var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	set:function(){
		console.log("aa")
	}
}


module.exports = commonUtil;