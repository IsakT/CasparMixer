
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

           	var button_id = $(this).attr('id');

           	// add button ID to the forms
           	$('#button_id').val(button_id);

            // JQUERY DEFERRED 
            var Displaying_data = display_button_data(button_id)

            $.when(Displaying_data).done(function () {

                console.log("Display data is done! Proceeding...");

              var template =  $('#template').val();
              var layer =  $('#layer').val();
              var f0 = $('#f0').val();
              var f1 = $('#f1').val();
              var f2 = $('#f2').val();
              var f3 = $('#f3').val();
              var f4 = $('#f4').val();
              var f5 = $('#f5').val();
              var f6 = $('#f6').val();

              // CG ADD Command
              CG_ADD(layer, template, f0, f1, f2, f3, f4, f5, f6);

            });
    	 });

    	 // UPDATE BUTTON DATA
    	 $('#Ajax_button').click(function() {

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

          // Here would be good to wait for the ajax call to finish before proceeding.

          display_button_name(button_id)

    	 });


       function display_button_name(button_id) {
              $.ajax({
                method: "GET",
                url: "/get/button_data",
                data: { button_id: button_id }
              })
              
              // Add the caspar IP to the label
              .done(function( msg ) {

                  // Parse the response.
                  var json = jQuery.parseJSON(msg);

                  // Iterate the JSON and add the data to the form in graphics layout.
                  $.each(json, function(n, elem) {

                      if(n=="button_name" && elem==""){

                        $('#'+button_id).text("EDIT");
                      }
                      else if (n=="button_name")
                      {
                        $('#'+button_id).text(elem);
                      }
                  }
              );
            })
         };

         function display_button_data(button_id) {

            var dfd = jQuery.Deferred();

              $.ajax({
              method: "GET",
              url: "/get/button_data",
              data: { button_id: button_id }
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
                        dfd.resolve();
                        console.log("Log after resolve");
                        break;
                    } // Case Switch
                });  // Each loop            
              }); // AJAX .done

           console.log("logging promise");
           return dfd.promise();
        };


         function clear_button_data(button_id) {

              $.ajax({
                method: "POST",
                url: "/delete/button_data",
                data: { button_id: button_id }
              })

          };

     // *******************************************

     //            CASPAR FUNCTIONS and EVENTS
 
     // *******************************************


     function CG_ADD(layer, template, f0, f1, f2, f3, f4, f5, f6) {

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_ADD",
                data: { layer: layer, template: template, f0: f0, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6 }
              })

          };