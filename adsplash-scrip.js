	$(document).ready(function(){
		$(".for-you-tab").click(function(){
			var target = $(this).attr("href");
			$(".for-you-list").hide();
			$(target).show();
			$(".for-you-tab").removeClass("active");
			$(this).addClass("active");
			return false;
		});
		$(".tab-bar a").click(function(){
			var tabvalue = $(this).attr("href");
			$(".tabs-info-row").removeClass("active");
			$(tabvalue).addClass("active");
			$(".tab-bar a").removeClass("active");
			$(this).addClass("active");
			return false;
		});
		$(".faq-title").click(function(){
			$(this).toggleClass("active")
			$(this).next(".faq-info").slideToggle();
		});
		$("a.guesswork-tab").click(function(){
			var adsvalue = $(this).attr("href");
			$(".guesswork-slider").hide();
			$(adsvalue).show();
			$("a.guesswork-tab").removeClass("active");
			$(this).addClass("active");
			return false;
		});
	});
	$('.brand-slider .owl-carousel').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:false,
    	dots:false,
    	autoplay:true,
    	autoplaySpeed:4500,
    	autoplayTimeout:4000,
    	slideTransition:"linear",
    	responsive:{
        	0:{
	            items:2.5
        	},
        	768:{
	            items:4
        	}
    	}
	});
	$('.call-now-slider .owl-carousel').owlCarousel({
    	loop:true,
    	margin:20,
    	nav:false,
    	dots:false,
    	autoplay:true,
    	autoplaySpeed:4500,
    	autoplayTimeout:4000,
    	slideTransition:"linear",
    	responsive:{
    		0:{
	            items:1,
    			margin:10
        	},
        	480:{
	            items:1.5
        	},
        	768:{
	            items:2
        	},
        	991:{
	            items:2.5
        	},
    	}
	});
	$('.guesswork-slider .owl-carousel').owlCarousel({
		center:true,
	    loop:true,
	    dots:true,
	    nav:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	$('.client-review-slider .owl-carousel').owlCarousel({
    	loop:true,
    	margin:20,
    	nav:false,
    	dots:false,
    	autoplay:true,
    	autoplaySpeed:4500,
    	autoplayTimeout:4000,
    	slideTransition:"linear",
    	responsive:{
    		0:{
	            items:1
        	},
        	500:{
	            items:1.5
        	},
        	768:{
	            items:2
        	},
        	992:{
	            items:2.8
        	},
    	}
	});
