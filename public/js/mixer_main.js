$(document).ready(function() {
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

    var file =  $('#file').val();
    PLAY(file, 1, 1);

  })

  $(".preset-btn").click(function(){

    var file =  $('#file').val();
    PLAY(file, 2, 1);
  	
  })

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

function PLAY(file, channel, layer) {

    return $.ajax({
      method: "GET",
      url: "/Caspar/Command",
      data: { command: "play", channel: channel, layer: layer, file: file}
    })

};




});