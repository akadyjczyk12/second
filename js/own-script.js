$('#fullpage').imagesLoaded(function(){
// bx slider   
  var slider = $('.bxslider').bxSlider({
      mode: 'fade',
      auto: true,
      controls:false     
  });

//owl carusel
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
//viewport
      $('*[data-animate]').addClass('.hide').each(function(){
			$(this).viewportChecker({
				classToAdd: 'show animated ' + $(this).data('animate'),
				classToRemove: 'hide',
				offset: 200
			});
		}); 
    
    
	});


$(document).ready(function() {
    
//slick nav
    $('.content-nav').slicknav({
        prependTo: '#prepend-menu',
        label:''
    });

//smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
// cv modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var header = document.getElementsByClassName("header")[0];
    
    btn.onclick = function() {
        modal.style.display = "block";
        header.style.display= "none";
    }

    span.onclick = function() {
        modal.style.display = "none";
        header.style.display= "block";
      

    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            header.style.display= "block";
        }   
    }    
    
// typed.js
$(".element").typed({
            strings: ["Profesjonalnie", "Strony www", "wizytówki", "sklepy internetowe"],
            typeSpeed: 90,
            loop: true,         
            backDelay: 2000
    
});
    
    $('svg').addClass('.hide').each(function(){
			$(this).viewportChecker({
				classToAdd: 'show path',
				classToRemove: 'hide',
				offset: 200
			});
		}); 
    
    
});


