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

     // GET BUTTON DATA
     $('.btn_1, .btn_2, .btn_3, .btn_4').click(function(){

     	var id = $(this).attr('id');

     	// add button ID to the forms
     	$('#button_id').val(id);

     	// alert("Button was clicked! " + id);

     	$.ajax({
          method: "GET",
          url: "/get/button_data",
          data: { id: id }
        })
        	// Add button data to the forms
          .done(function( msg ) {
            	console.log(msg);

          })

	 });

	 // CREATE/UPDATE BUTTON DATA
	 $('#Ajax_button').bind("click keypress", function (evt) {

		 	var button_name = $('#button_name').val();
		 	var template =	$('#template').val();
		 	var button_id = $('#button_id').val();
		 	var f0 = $('#f0').val();
		 	var f1 = $('#f1').val();
		 	var f2 = $('#f2').val();
		 	var f3 = $('#f3').val();
		 	var f4 = $('#f4').val();
		 	var f5 = $('#f5').val();
		 	var f6 = $('#f6').val();

		 	$.ajax({
		      method: "POST",
		      url:"/update/button_data",
		      data: { button_name: button_name, template: template, button_id: button_id, f0: f0, f1: f1, f2:f2, f3: f3, f4: f4, f5: f5, f6:f6 }
	    	});
	 });


 });