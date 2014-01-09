(function($){
	
	
	/*
	*  acf/setup_fields
	*
	*  This event is triggered when ACF adds any new elements to the DOM. 
	*
	*  @type	function
	*  @since	1.0.0
	*  @date	01/01/12
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	N/A
	*/
	
	$(document).live('acf/setup_fields', function(e, postbox){
		
		$(postbox).find('.acf-uniqueid').each(function(){

			// if value isn't from database, replace it
			console.log('data-value', $(this).attr('data-value'));
			if ( $(this).attr('data-value') === '' )
			{
				// change the value dynamicly
				var rand = Math.round(new Date().getTime() * Math.random() * 100000);
				$(this).val( rand );
				console.log('new', $(this).val());
			}
		});


	
	});

})(jQuery);
