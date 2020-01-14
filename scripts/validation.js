$(document).ready(function () {

 // Source: lab 10 Kyle Harms

// when user submits form
  $("#knowMore").on("submit", function() {
    // Assume that the form input is valid.
    var valid = true;

    // Check whether the name was provided and show an error if not.
    if( $("#userName").prop("validity").valid ) {
    $("#userNameError").addClass("hidden");
    } else {
    $("#userNameError").removeClass("hidden");
      valid = false;
    };

    // Check whether the NetID is valid and show an error if not.
    if ( $("#userNetID").prop("validity").valid ) {
    $("#NetIDError").addClass("hidden");
    } else {
    $("#NetIDError").removeClass("hidden");
      valid = false;
    };

    // Year

    if($("#Year").val()){ // or this.value == 'volvo'
      $("#YearError").addClass("hidden");
    }
    else {
    $("#YearError").removeClass("hidden");
      valid = false;
  }

    // Tell the browser whether the form is valid (sent form data to server).
    return valid;
  });

});
