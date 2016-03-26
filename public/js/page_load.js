$(document).ready(function() {

	var dfd;

    // On page load, get the caspar IP and display it.
     display_caspar_ip()

    // On page load, get the button names from their YAML-file and display it on the buttons.
     
     button_array = ["btn1_0", "btn1_1", "btn1_2", "btn1_3", "btn1_4", "btn1_5", "btn1_6", "btn1_7", "btn2_0", "btn2_1", "btn2_2", "btn2_3", "btn2_4", "btn2_5", "btn2_6", "btn2_7", "btn3_0", "btn3_1", "btn3_2", "btn3_3", "btn3_4", "btn3_5", "btn3_6", "btn3_7", "btn4_0", "btn4_1", "btn4_2", "btn4_3", "btn4_4", "btn4_5", "btn4_6", "btn4_7"]

     $.each( button_array, function( i, l ){
       display_button_name(l);
     });

     $(':button').prop('disabled', false);

});