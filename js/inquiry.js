	
	    $('.hamburger').on('click', function() {
        $('.hamburger-nav').fadeToggle();
        $('.overlay').fadeToggle();

    	});
	
		$.fn.serializeObject = function()
		{
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};

		$(function() {
			$('form').submit(function() {
				$('#result').text(JSON.stringify($('form').serializeObject()));
				return false;
			});
		});
	
	
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("is-active");
	});	

		$(document).ready(function () {
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
				}, 1000, 'swing', function () {
					window.location.hash = target;
					$(document).on("scroll", onScroll);
				});
			});
		});

		function onScroll(event){
			var scrollPos = $(document).scrollTop();
			$('.inquiry-sidenav a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('ul.inquiry-sidenav li a').removeClass("active-dot");
					currLink.addClass("active-dot");
				}
				else{
					currLink.removeClass("active-dot");
				}
			});
		}

	wow = new WOW(
		{
		boxClass:     'wow',       
		animateClass: 'animated',  
		offset:       100,           
		mobile:       true,     
		live:         true        
		}
	)
	
	wow.init();
	
