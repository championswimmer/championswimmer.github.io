	//INITIALIZES TWITTER FEED PLUGIN
	$(document).ready(function() { 
		$(".tweet").tweet({
			username: "seaofclouds",//Change with your own twitter id
			//join_text: "auto",
			//avatar_size: 32,
			count: 2,
			//auto_join_text_default: "we said,",
			//auto_join_text_ed: "we",
			//auto_join_text_ing: "we were",
			//auto_join_text_reply: "we replied to",
			//auto_join_text_url: "we were checking out",
			loading_text: "loading tweets..."
		});		
	});
	
	//STYLE SWITICHING SCRIPT
	$(document).ready(function () {
		$(".color-scheme a").click(function () {
			$('link.alt').attr('href', $(this).attr('rel'));
			return false;
		});
		imgPathStart = "images/pattern/";
		imgPathEnd = new Array("pattern0.png","pattern1.png","pattern2.png","pattern3.png","pattern4.png","pattern5.png","pattern6.png","pattern7.png","pattern8.png","pattern9.png");
	
		$(".background-selector li img").click(function() {
			backgroundNumber = $(this).attr("data-nr");
			$("body").css({background:"url('"+imgPathStart+imgPathEnd[backgroundNumber]+"')"});
		});
	});
	
	$(document).ready(function () {		
		$('.switch-button').click(function () {	
			if ($(this).is('.open')) {
				$(this).addClass('closed');
				$(this).removeClass('open');
				$('.styleswitcher').animate({
					'left': '-130px'
				});
			} else {
				$(this).addClass('open');
				$(this).removeClass('closed');
				$('.styleswitcher').animate({
					'left': '0px'
				});
			}	
		});
	});
	
	$(document).ready(function(){
		// hide #back-top first
		$("#back-top").hide();		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});	
	});

$(document).ready(function(){
 	$("#tab-container").easytabs({
		animate: true,
		updateHash		: false,
		transitionIn		:'slideDown',
		transitionOut		:'slideUp',
		animationSpeed	:600,
	});

});
$(document).ready(function(){

	// Blur images on mouse over
	$(".portfolio a").hover( function(){ 
		$(this).children("img").animate({ opacity: 0.5 }, "slow"); 
	}, function(){ 
		$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
	}); 
	
	// Initialize prettyPhoto plugin
	$(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});

	// Clone portfolio items to get a second collection for Quicksand plugin
	var $portfolioClone = $(".portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	$(".filter a").click(function(e){
		
		$(".filter li").removeClass("current");	
		
		// Get the class attribute value of the clicked link
		var $filterClass = $(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		// Call quicksand
		$(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeInOutQuad' 
		}, function(){
			
			// Blur newly cloned portfolio items on mouse over and apply prettyPhoto
			$(".portfolio a").hover( function(){ 
				$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
			}, function(){ 
				$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
			}); 
			
			$(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
				theme:'light_square', 
				autoplay_slideshow: false, 
				overlay_gallery: false, 
				show_title: false
			});
		});


		$(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault();
	})
});
//$(document).ready(function() {
//	$("a[rel^='prettyPhoto']").prettyPhoto({
//		opacity:0.80,
//		//default_width:500,
//		//default_height:344,
//		theme:'dark_rounded',
//		hideflash:false,
//		modal:false
//	});
//});
//
//$(document).ready(function() {  
//	$('.portfolio-img').each(function() {
//		$(this).hover(
//			function() {
//				$(this).stop().animate({ opacity: 0.5 }, 400);
//			},
//		   function() {
//			   $(this).stop().animate({ opacity: 1.0 }, 400);
//	   })
//	});
//});

	$(document).ready(function(){
		$("#contact_form").validate({
			meta: "validate",
			submitHandler: function (form) {
			    $('#contact_form').hide();
				var s_name=$("#name").val();
				var s_email=$("#email").val();
				var s_website=$("#phone").val();
				var s_comment=$("#comment").val();
				$.post("contact.php",{name:s_name,email:s_email,website:s_website,comment:s_comment},
			   	function(result){
                  $('#sucessmessage').append(result);
                });
				return false;
			},
			/* */
			rules: {
				name: "required",
				
				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				subject: {
					required: true,
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: "Please enter your name.",
				lastname: "Please enter your last name.",
				email: {
					required: "Please enter email.",
					email: "Please enter valid email"
				},
				subject: "Please enter a subject.",
				comment: "Please enter a comment."
			},
		}); /*========================================*/
	});