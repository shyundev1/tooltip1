
(function($){
	$.fn.tooltip1 = function(settings){
		return this.each(function(){
			var elem = $(this);
			
			//alert(elem.attr("title"));
			elem.bind("mouseover",function(){
				alert(elem.attr("title"));
			});
		});

	}

})(jQuery);
