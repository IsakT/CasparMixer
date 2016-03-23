$('.caspar_play').click(function() {

	var layer = $('#layer').val();

	CG_PLAY(layer);

});

$('.caspar_stop').click(function() {

	var layer = $('#layer').val();

	CG_STOP(layer);

});

$('.caspar_next').click(function() {

	var layer = $('#layer').val();

	CG_NEXT(layer);

});

$('.caspar_remove').click(function() {

	var layer = $('#layer').val();

	CG_REMOVE(layer);

});

$('.caspar_clear').click(function() {

	CG_CLEAR();

});

$('.caspar_update').click(function() {

			// Get the data from the forms
              var layer =  $('#layer').val();
              var f0 = $('#f0').val();
              var f1 = $('#f1').val();
              var f2 = $('#f2').val();
              var f3 = $('#f3').val();
              var f4 = $('#f4').val();
              var f5 = $('#f5').val();
              var f6 = $('#f6').val();
              console.log("Data from F6 taken.");

              // CG ADD Command
              console.log("Calling CG_ADD...");
              CG_UPDATE(layer, f0, f1, f2, f3, f4, f5, f6);   

              
});

$('.autoplay').click(function() {

	$('.autoplay').toggleClass("autoplaychar autoplay-enabled");

	if($('.autoplay').hasClass("autoplay-enabled")){
        $('#status_button').text("Autoplay enabled!");
    }
    else{
    	$('#status_button').text("Autoplay disabled!");
    }
	

});