
$(document).ready(function () {
  // background images 
  var images = [
  "images/Images%20Slides/MainIMage/Layer%2041.png",
  "images/Images%20Slides/MainIMage/shutterstock_140369722.png",
  "images/Images%20Slides/MainIMage/shutterstock_146450198.png",
  "images/Images%20Slides/MainIMage/shutterstock_163701617.png"
  ]
  // background images div in html
  var imageHead = document.getElementById("image-head");
  var i = 0;
  setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
  }, 8000);


  $('#datepicker').datepicker({
      uiLibrary: 'bootstrap4'
  });  
  
  
});

