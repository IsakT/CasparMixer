var button_id = $('#button_id').val();

$('#clear_data').click(function() {

    clear_button_data(button_id)
    display_button_name(button_id)
    display_button_data(button_id)

});

$('#clear_all_button_data').click(function() {

	$('#status_button').text("Please wait!");

	$.each( button_array, function( i, l ){
	  clear_button_data(l);
	  display_button_name(l);
	});

	display_button_data(button_id);

	$('#status_button').text("Deleted!");

});
