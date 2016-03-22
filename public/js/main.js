
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


     // GRAPHIC BUTTON CLICK EVENT
         $('.btn_1, .btn_2, .btn_3, .btn_4').click(function(){       

           	var button_id = $(this).attr('id');

           	// add button ID to the forms
           	$('#button_id').val(button_id); 

            // JQUERY PROMISE
            var button_data_promise = get_button_data(button_id);

            // Only when AJAX call has finished (Promise), then proceed with this code block:
            button_data_promise.done(function (data) {

              console.log("Getting data is done! Proceeding...");

              // Parse the response.
                  var json = jQuery.parseJSON(data);

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
                        console.log("F6 has been loaded with data");
                        break;
                    } // Case Switch
                });  // Each loop      

              // Get the data from the forms
              var template =  $('#template').val();
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
              CG_ADD(layer, template, f0, f1, f2, f3, f4, f5, f6);      

            }); // Promise   
    	 });

    	 // UPDATE BUTTON DATA
    	 $('#Ajax_button').click(function() {

          var button_id = $('#button_id').val();

    		 	var button_data = update_button_data(button_id);

          button_data.done(function() { display_button_name(button_id) });

    	 });


       function display_button_data(button_id) {

              // JQUERY PROMISE
            var button_data_promise = get_button_data(button_id);

            // Only when AJAX call has finished (Promise), then proceed with this code block:
            button_data_promise.done(function (data) {

              // Parse the response.
                  var json = jQuery.parseJSON(data);

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
                    } // Case Switch
                });  // Each loop          
            }); // Promise   

         };

       function display_button_name(button_id) {

        console.log("display_button_name() invoked");

              var button_data = get_button_data(button_id);

              button_data.done(function( data ) {

                console.log("Get button data is done. Displaying button name...");

                  // Parse the response.
                  var json = jQuery.parseJSON(data);

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

         // UPDATE BUTTON DATA
         function update_button_data(button_id) {

          console.log("update_button_data() invoked");

          var button_name = $('#button_name').val();
          var template =  $('#template').val();
          var f0 = $('#f0').val();
          var f1 = $('#f1').val();
          var f2 = $('#f2').val();
          var f3 = $('#f3').val();
          var f4 = $('#f4').val();
          var f5 = $('#f5').val();
          var f6 = $('#f6').val();

          return $.ajax({
              method: "POST",
              url:"/update/button_data",
              data: { button_name: button_name, template: template, button_id: button_id, f0: f0, f1: f1, f2:f2, f3: f3, f4: f4, f5: f5, f6:f6 }
            });        

          };

         // GET BUTTON DATA
         function get_button_data(button_id) {

              return $.ajax({
                method: "GET",
                url: "/get/button_data",
                data: { button_id: button_id }
              });          

          };

         // CLEAR BUTTON DATA
         function clear_button_data(button_id) {

          console.log("clear_button_data() invoked");

              return $.ajax({
                method: "POST",
                url: "/delete/button_data/?",
                data: { button_id: button_id }
              })

              console.log("Clear button data done.");
          };

     // *******************************************

     //            CASPAR FUNCTIONS and EVENTS
 
     // *******************************************


    function CG_ADD(layer, template, f0, f1, f2, f3, f4, f5, f6) {

              console.log("CG_ADD started.");

              var autoplay = 0;

              if($('.autoplay').hasClass("autoplay-enabled")){
                  autoplay = 1;
              }

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_ADD",
                data: { layer: layer, template: template, f0: f0, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6, autoplay: autoplay }
              })

              console.log("CG ADD done.");

          };

    function CG_PLAY(layer) {

              console.log("CG_PLAY started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_PLAY",
                data: { layer: layer}
              })

              console.log("CG PLAY done.");

          };

    function CG_STOP(layer) {

              console.log("CG_STOP started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_STOP",
                data: { layer: layer}
              })

              console.log("CG STOP done.");

          };

    function CG_NEXT(layer) {

              console.log("CG_NEXT started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_NEXT",
                data: { layer: layer}
              })

              console.log("CG_NEXT done.");

          };     

    function CG_REMOVE(layer) {

              console.log("CG_REMOVE started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_REMOVE",
                data: { layer: layer}
              })

              console.log("CG_REMOVE done.");

          }; 

    function CG_CLEAR() {

              console.log("CG_CLEAR started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_CLEAR",
                data: {}
              })

              console.log("CG_CLEAR done.");

          };  
    
    function CG_UPDATE(layer, f0, f1, f2, f3, f4, f5, f6) {

              console.log("CG_UPDATE started.");

              $.ajax({
                method: "GET",
                url: "/Caspar/CG_UPDATE",
                data: { layer: layer, f0: f0, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6 }
              })

              console.log("CG UPDATE done.");

          };           