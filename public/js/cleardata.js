$('#clear_data').click(function() {

    var button_id = $('#button_id').val();

    clear_button_data(button_id)

    display_button_name(button_id)

});

$('#clear_all_button_data').click(function() {

	$('#status_button').text("Please wait!");

	$.each( button_array, function( i, l ){
	  clear_button_data(l);
	  display_button_name(l);
	});

	$('#status_button').text("Done!");

});
