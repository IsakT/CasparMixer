 $(document).ready(function() {
     $('.edit').editable('http://localhost:6003/test');


     $('.casparip_update').click(function(){

     	var caspar_ip = $('#InputCasparIP').val();
     	// alert(caspar_ip);

     	$.ajax({
		    method: "POST",
		    url:"/test",
		    data: { caspar_ip: caspar_ip},
          	dataType: "json"
		});

     	$('#casparip_label').text("Caspar IP " + caspar_ip);
     });





 });