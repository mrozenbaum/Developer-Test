
$(document).ready(function () {
  // Rotation for background images of website
  $('.carousel').carousel({
  interval: 8000
  });
  // Validation for required fields in Booking Form
  $("input").attr('required',true);
  $("select").attr('required',true);
  
});

