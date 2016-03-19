$('#clear_data').click(function() {

	var button_id = $('#button_id').val();

    var clear_data = clear_button_data(button_id);

    clear_data.always(function() { 

    	display_button_name(button_id);
    	display_button_data(button_id);

    });

});

$('#clear_all_button_data').click(function() {

	var button_id = $('#button_id').val();

	$('#status_button').text("Please wait!");

	// button_array is declared in page_load.js
	$.each( button_array, function( i, l ){
	  clear_button_data(l);
	  display_button_name(l);
	});

	display_button_data(button_id);

	$('#status_button').text("Deleted!");

});
