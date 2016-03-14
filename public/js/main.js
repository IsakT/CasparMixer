
     // *******************************************
     
     //              CASPAR IP 

     // *******************************************

     $('.casparip_update').click(function(){

     	var caspar_ip = $('#InputCasparIP').val();

      // Save the new IP
     	$.ajax({
		    method: "POST",
		    url:"/update/caspar_ip",
		    data: { caspar_ip: caspar_ip},
          	dataType: "json"
		  });

      // Get the new IP
        display_caspar_ip()
      });

     function display_caspar_ip() {
          $.ajax({
            method: "GET",
            url: "/get/caspar_ip",
          })
          
          // Add the caspar IP to the label
          .done(function( msg ) {

              // Parse the response.
              var json = jQuery.parseJSON(msg);

              // Iterate the JSON and add the data to the form in graphics layout.
              $.each(json, function(n, elem) {

                  $('#casparip_label').text("Caspar IP " + elem);

              }
          );
        })
     };

     // *******************************************

     //            GRAPHICS BUTTON DATA
 
     // *******************************************


     // GET AND DISPLAY BUTTON DATA
     $('.btn_1, .btn_2, .btn_3, .btn_4').click(function(){

      $('#status_button').text("Try again.");

     	var id = $(this).attr('id');

     	// add button ID to the forms
     	$('#button_id').val(id);

     	$.ajax({
          method: "GET",
          url: "/get/button_data",
          data: { id: id }
        })
        	// Add button data to the forms
          .done(function( msg ) {

              // Parse the response.
              var json = jQuery.parseJSON(msg);

              // Iterate the JSON and add the data to the forms in graphics layout.
              $.each(json, function(n, elem) {

                switch(n)
                {
                  case "button_name":
                    $('#button_name').val(elem);
                    break;

                  case "template":
                    $('#template').val(elem);
                    break;

                  case "button_id":
                    $('#button_id').val(elem);
                    break;

                  case "f0":
                    $('#f0').val(elem);
                    break;

                  case "f1":
                    $('#f1').val(elem);
                    break;

                  case "f2":
                    $('#f2').val(elem);
                    break;

                  case "f3":
                    $('#f3').val(elem);
                    break;

                  case "f4":
                    $('#f4').val(elem);
                    break;

                  case "f5":
                    $('#f5').val(elem);
                    break;

                  case "f6":
                    $('#f6').val(elem);
                    break;
                }
                $('#status_button').text("Done!");
              });
          })
	 });

    	 // UPDATE BUTTON DATA
    	 $('#Ajax_button').click(function() {
          $('#status_button').text("Try again.");

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

          display_button_name(button_id)

          $('#status_button').text("Done!");
    	 });


       function display_button_name(id) {
              $.ajax({
                method: "GET",
                url: "/get/button_data",
                data: { id: id }
              })
              
              // Add the caspar IP to the label
              .done(function( msg ) {

                  // Parse the response.
                  var json = jQuery.parseJSON(msg);

                  // Iterate the JSON and add the data to the form in graphics layout.
                  $.each(json, function(n, elem) {

                      if(n=="button_name" && elem==""){

                        $('#'+id).text("EDIT");
                      }
                      else if (n=="button_name")
                      {
                        $('#'+id).text(elem);
                      }
                  }
              );
            })
         };


         function clear_button_data(button_id) {

            $('#status_button').text("Try again.");

              $.ajax({
                method: "POST",
                url: "/delete/button_data",
                data: { button_id: button_id }
              })

            $('#status_button').text("Done!");


            };
