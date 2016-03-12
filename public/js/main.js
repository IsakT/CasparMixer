 $(document).ready(function() {
     $('.edit').editable('http://localhost:6003/test');


     // ************CASPAR IP UPDATE************
     $('.casparip_update').click(function(){

     	var caspar_ip = $('#InputCasparIP').val();
     	// alert(caspar_ip);

     	$.ajax({
		    method: "POST",
		    url:"/update/caspar_ip",
		    data: { caspar_ip: caspar_ip},
          	dataType: "json"
		});

     	$('#casparip_label').text("Caspar IP " + caspar_ip);
     });


     // ********** GRAPHICS BUTTON ******************
     $('.btn_1, .btn_2, .btn_3, .btn_4').click(function(){

     	var id = $(this).attr('id');

     	$('#button_id').val(id);

     	alert("Button was clicked! " + id);

     	$.ajax({
          method: "GET",
          url: "/get/button_data",
          data: { id: id }
        })
          .done(function( msg ) {
            	alert(msg);
          })

	 });



 });