$(document).ready(function () {

    $('.hamburger').on('click', function() {
        $('.hamburger-nav').fadeToggle();
        $('.overlay').fadeToggle();
    });
    	
    $('.overlay, .hamburger-nav a').on('click', function() {
        $('.hamburger-nav').fadeToggle();
        $('.overlay').fadeToggle();
        $('.hamburger').removeClass("is-active");
    });
            		
	//product slider
	$('.product-slider').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  speed: 20000,
		  autoplaySpeed: 0,
		  swipe: true,
		  dots: true,
		  infinite: true,
		  cssEase: 'linear',
		  stopOnHover: true,	  
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				speed: 12000,
				dots: true,
				swipe: true,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				speed: 12000,
				dots: true,
				swipe: true,
				arrows: false
			  }
			},			
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				  autoplay: true,
				  speed: 12000,
				  autoplaySpeed: 0,
				  arrows: false,
				  swipe: true,
				  dots: true,
				  infinite: true,
				  cssEase: 'ease-in-out',
			  }
			},

		  ]
	});

 	$('.product-slide').slickLightbox();

	//process slider
    $('.process-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  speed: 300,
	  autoplaySpeed: 1000,
	  swipe: false,
	  fade: true,
	  dots: true,
	  infinite: true,
	  arrows: false,
	  cssEase: 'linear'
  	});
  	
	//inquiry slider
    $('.inquiry-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  vertical: true,
	  autoplay: false,
	  arrows: true,
	  speed: 100,
	  swipe: true,
	  dots: true,
	  infinite: true,
	  cssEase: 'linear'
  	});

});

$(document).ready(function () {

  	
	wow = new WOW(
		{
		boxClass:     'wow',       
		animateClass: 'animated',  
		offset:       500,           
		mobile:       true,     
		live:         true        
		}
	)
	
	wow.init();
	
	wow2 = new WOW(
		{
		boxClass:     'wow',       
		animateClass: 'animated',  
		offset:       100,           
		mobile:       true,     
		live:         true        
		}
	)	
	
	wow2.init();
	
	
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top < scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul.nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
hamburger.classList.toggle("is-active");
});



