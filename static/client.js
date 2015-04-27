$(document).ready(function() {
  $( "#registerForm" ).submit(function(event) {
    var $inputs = $('#registerForm :input');

    var values = {};
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
    
    mixpanel.identify(values['username');
    mixpanel.track("user registered", {});
    event.preventDefault();
  });
})
