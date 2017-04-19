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
  
  $('.carousel').slick({
    dots: true,
    appendArrows: '.carousel-arrows .container'
  });
  
  $('.rating-carousel').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  })
  
  //Fixed nav
  
  $(window).scroll(function() {
    
    var nav_top = $('.header-wrap').height();
    var nav_height = $('.nav-wrap').height();
    if( $(this).scrollTop() >= nav_top ) {
      $('.nav-wrap').addClass('fixed');
      $('body').css({"padding-top": nav_height});
    }
    else {
      $('.nav-wrap').removeClass('fixed');
      $('body').css({"padding-top": "0"});
    }
  });

});





