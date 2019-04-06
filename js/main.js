$(function(){
    "use strict"
    var winh = $(window).height();
    var navh = $(".navbar").innerHeight();
    
    $(".slider, .carousel-item").height((winh+navh)-100);
    
    //Magnificent Popup

  $('.popup').magnificPopup({
    type: 'iframe',
  });
    
    //Start Owl-Carousel
    
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
    
    //Sticky NavBar
    
    $(window).scroll(function(){
        var ct =$(this).scrollTop();
        if(ct >120){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
        
    });
    
     //Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 500){
          $('.scroll-top i').fadeIn();
        } else{
          $('.scroll-top i').fadeOut();
        }
      });

      //Scroll To Top By Button
      $('.scroll-top i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },2000);
      });

});
