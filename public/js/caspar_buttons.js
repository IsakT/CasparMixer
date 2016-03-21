$('.caspar_play').click(function() {

	var layer = $('#layer').val();

	CG_PLAY(layer);

});

$('.caspar_stop').click(function() {

	var layer = $('#layer').val();

	CG_STOP(layer);

});