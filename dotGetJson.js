
(function($){
	$.fn.dotGetJson = function(settings){
		var defaultSettings = {header:'td'}

		settings = $.extend(defaultSettings,settings);

		return this.each(function(){
			var elem = $(this);
			
			//var columns = elem.find("thead "+defaultSettings.header).map(function(){
			//	return $(this).text();				
			//});
			
			//map : selector�� ������� ��ȭ�ϸ鼭 �Լ��� �����Ű�� ����� ���ο� jquery ��ü�� �����Ѵ�.
			var columns = elem.find("thead "+defaultSettings.header).map(function(){
				return $(this).text();				
			}).get();

			//alert(columns[0]);
			var data = elem.find("tr").map(function(){
				alert($(this).text());
				var row = "{";
				$(this).find("td").each(function(i){
					row = row + "\"" + columns[i] + "\":" + "\"" + $(this).text() + "\",";
				});

				return row + "}";
			}).get();

			elem.attr("data-string","["+data+"]");

		});



	}

})(jQuery);

/*
	config_ems.tbl_to_json = function(table_id){
		
		//var columns = $("#tblSetting thead th").map(function(){
		var columns = $("#"+table_id+" thead td").map(function(){
				return $(this).text();				
			});

		var table_obj = $("#"+table_id+" tbody tr").map(function(){
			var row = {};
			$(this).find("td").each(function(i){
				if($(this).attr("th_sub")){
					var rowName = columns[i];
					row[rowName] = $(this).text();
				}
			});

			return row;
			// Don't forget .get() to convert the jQuery set to a regular array.
		}).get();
		
		return table_obj;
	}

});
*/