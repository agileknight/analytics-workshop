$(document).ready(function() {
  $( "#registerForm" ).submit(function(event) {
    var $inputs = $('#registerForm :input');

    var values = {};
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
    
    alert("Registered with username " + values['username']);
    event.preventDefault();
  });
})
