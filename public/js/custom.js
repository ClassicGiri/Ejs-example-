'use strict'
$(function() {
    $( "#slider-range" ).slider({
      orientation: "horizontal",
      range: true,
	  min:0,
	  max:9999,
      values: [ 10, 9999 ],
      slide: function( event, ui ) {
        $( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		 $("input[name='minPrice']").val( ui.values[ 0 ]);
		 $("input[name='maxPrice']").val( ui.values[ 1 ]);
      }
    });
    $( "#amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	
	
	 
	  
	  //date picker
	 $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
	
	$("#rateit5").bind('rated', function (event, value) {
					$("input[name='rating']").val(value);
                    $("#rating").html(value);
				});
	  
  });
  