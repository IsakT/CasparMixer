$(document).ready(function() {

  var dfd;

  button_array = ["btn1_0", "btn1_1", "btn1_2", "btn1_3", "btn1_4", "btn1_5", "btn1_6", "btn2_0", "btn2_1", "btn2_2", "btn2_3", "btn2_4", "btn2_5", "btn2_6"]


 // *******************************************
 
 //              SLIDERS 

 // *******************************************
  $(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  });

  $(function() {
    $( "#slider-vertical2" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 250,
      value: 20,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider-vertical2" ).slider( "value" ) );
  });

// *******************************************

//              CLICK EVENTS

// *******************************************

$(".program-btn").click(function(){

  // Selected button
  $('.program-btn').removeClass("selected-button");       
  $(this).addClass( "selected-button" );

  // Get id
  var button_id = $(this).attr('id');

  // Add button ID to the forms
  $('#button_id1').val(button_id); 

  // Display data; send command when finished.
  dfd = $.Deferred();
  display_button_data(button_id, "1");
  dfd.done(function(message) {
    // Send command
    console.log("JQUERY DEFERRED CALLBACK: " + message)
    var file =  $('#file_resource1').val();
    // Caspar_cmd("play", 1, 1, file);
  });
  

})

$(".preset-btn").click(function(){

  // Selected button
  $('.preset-btn').removeClass("selected-button");       
  $(this).addClass( "selected-button" );

  // Get id
  var button_id = $(this).attr('id');

  // Add button ID to the forms
  $('#button_id2').val(button_id); 

  // Display data; send command when finished.
  dfd = $.Deferred();
  display_button_data(button_id, "2");
  dfd.done(function(message) {
    // Send command
    var file =  $('#file_resource2').val();
    // Caspar_cmd("play", 2, 1, file);
  });
	
})

// UPDATE BUTTON DATA 1
$('#update_button').click(function() {

  // GET
  var button_name = $('#button_name1').val();
  var resource = $('#file_resource1').val();
  var button_id = $('#button_id1').val();

  var button_data = update_button_data(button_name, resource, button_id);

  button_data.done(function() { 
    console.log("Update done");
    display_button_name(button_id) 
  });

});

// UPDATE BUTTON DATA 2
$('#update_button2').click(function() {

  // GET
  var button_name = $('#button_name2').val();
  var resource = $('#file_resource2').val();
  var button_id = $('#button_id2').val();

  var button_data = update_button_data(button_name, resource, button_id);

  button_data.done(function() { 
    console.log("Update done");
    display_button_name(button_id) 
  });

});

$('#clear_data1').click(function() {

  var button_id = $('#button_id1').val();

  var clear_data = clear_button_data(button_id);

    clear_data.always(function() { 

      // display_button_name(button_id);
      display_button_data(button_id, "1");

    });

});

$('#clear_data2').click(function() {

  var button_id = $('#button_id2').val();

  var clear_data = clear_button_data(button_id);

    clear_data.always(function() { 

      // display_button_name(button_id);
      display_button_data(button_id, "2");

    });

});

$('#clear_all_button_data').click(function() {

  var button_id1 = $('#button_id1').val();
  var button_id2 = $('#button_id2').val();

  $('#status_button').text("Please wait!");

  // button_array is declared at the start
  $.each( button_array, function( i, l ){
    clear_button_data(l);
  });

  display_button_data(button_id1, "1" );
  display_button_data(button_id2, "2" );

  console.log("Deleted");

});

$(".image-adjustments").click(function(){




  	
  })
$("#Mixer-clear").click(function(){




  	
  })
$(".chroma").click(function(){




  	
  })

$(".chroma-media").click(function(){




  	
  })

$(".trans-fx").click(function(){




  	
  })

$(".trans").click(function(){




  	
  })

// *******************************************

//              FUNCTIONS

// *******************************************


function display_button_data(button_id, channel) {

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
          $('#button_name'+channel).val(elem);
          break;

        case "resource":
          $('#file_resource'+channel).val(elem);
          dfd.resolve("I was resolved");
          break;
      } // Case Switch
    });  // Each loop          
  }); // Promise   
};






// CLEAR BUTTON DATA
function clear_button_data(button_id) {

  console.log("clear_button_data() invoked");

    return $.ajax({
      method: "POST",
      url: "/delete/button_data/?",
      data: { button_id: button_id, db: "mixer_buttons" }
    })

  console.log("Clear button data done.");
};

function Caspar_cmd(command, channel, layer, file, effect, duration, animation, parameters) // Optional parameters
{ 
    return $.ajax({
      method: "GET",
      url: "/Caspar/Command",
      data: { command: "play", channel: channel, layer: layer, file: file, effect: effect, duration: duration, animation: animation, parameters: parameters}
    })

};

// GET BUTTON DATA
function get_button_data(button_id) {

    return $.ajax({
      method: "GET",
      url: "/get/button_data",
      data: { button_id: button_id, db: "mixer_buttons" }
    });          

};


// UPDATE BUTTON DATA
function update_button_data(button_name, resource, button_id) {

  console.log("Calling ajax update")
  return $.ajax({
      method: "POST",
      url:"/update/button_data",
      data: { db: "mixer_buttons", button_name: button_name, resource: resource, button_id: button_id,  }
    });        

};

// CLEAR BUTTON DATA
function clear_button_data(button_id) {

    return $.ajax({
      method: "POST",
      url: "/delete/button_data/?",
      data: { button_id: button_id, db: "mixer_buttons" }
    })

    console.log("Clear button data done.");
};


});