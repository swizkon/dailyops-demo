

$(document).ready(function(){
    $.get( "nav.html", function( data ) {
        
        
    $("body").append(data);
        // $( ".result" ).html( data );
      });
});