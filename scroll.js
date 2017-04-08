(function($) {
		//文本上无缝滚动
		//一参时间 ；二参速度
	$.fn.extend({
		scroll:function(txts_time,txts_sleep) {
			var n = 0;
			var parent = $(this);
			var first_ul = parent.children().first();
			first_ul.addClass("one");
			var firstH = first_ul.height();
    		//动态创建第二个ul并赋值
			parent.append(" <ul class = 'two' > < /ul>");
			$(".two").html($(".one").html()); 
			var second_ul=$(".two"); 
			function run(){
					
				var scrollT=parent.scrollTop(); 
				if(scrollT>=firstH){
					parent.scrollTop(0);
					n=0;
				}else{ 
					n+=txts_sleep;
					parent.scrollTop(n);
					} 
			}
				
			var ds=setInterval(run,txts_time); 
			//ul高小于父级高clear
			if(parent.height()>=firstH){
				$(".two").remove()
				clearInterval(ds)
			}
			//鼠标事件
			parent.on({
				"mouseenter":function(){clearInterval(ds);},
				"mouseleave":function(){ds=setInterval(run,txts_time);}
			})	
		}
	})
})(jQuery);
