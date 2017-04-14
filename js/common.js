$(document).ready(function() {
  
  // Burger menu
  $('.burger-wrap').click(function(){
    $(this).children().toggleClass('active');
    $('.nav-list').toggleClass('active');
    return false;
  });
  
  // Sliders
  
  $('.feedbacks-carousel').slick({
    speed: 300,
    dots: true
  });

});





