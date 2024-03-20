(function ($) {
    "use strict";
	
	new WOW().init();
	
	jQuery(document).ready(function($){	
	
	// one page nav
	$('#nav').onePageNav({
	    currentClass: 'current',
	    changeHash: true,
	    scrollSpeed: 1500,
	    scrollThreshold: 0.5,
	    filter: ':not(.external)',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function(jQuerycurrentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});	
	

	//  main slider
	var mainSlider = $('#main_slider');
	
	/*----- main slider -----*/
	mainSlider.nivoSlider({
		directionNav: true,
		animSpeed: 500,
		slices: 18,
		pauseTime: 50000000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});	
		
	
	// Owl Carousel for Testimonials	
	var testiCarousel = $('.testimonials_carousel');
    testiCarousel.owlCarousel({
        loop:false,
        autoplay:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:1
            }
        }
    });		

 /*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/
		
	/*  Stellar for background scrolling  */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* End Stellar for background scrolling  */	
	});
/*---------------------
 statistics-counter
--------------------- */	
    $('.statistics-counter').counterUp({
        delay: 50,
        time: 3000
    });	
		
    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeloader").fakeLoader({
        timeToHide:1500, 
        zIndex:999999, 
        spinner:"spinner1",   //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#ffffff"
    });		
	
	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});	
	
	 /*  Textrotator */
	if ($('.rotate').length > 0) {
		$(".rotate").textrotator({
			animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
			separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
			speed: 3000 // How many milliseconds until the next word show.
		});
	}
	/* End Textrotator */	
	
	$('.player').mb_YTPlayer();
})(jQuery);