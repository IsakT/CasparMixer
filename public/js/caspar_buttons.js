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