	/*	Revolution Slider
	/* ---------------------------------------------------------------------- */
	
	(function(){
				
		if($('.fullwidthbanner').length) {
			
			$('.fullwidthbanner').revolution({	
				delay: 5000,												
				startwidth:890,
				startheight:490,

				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:4,

				hideThumbs:200,
				navigationType:"none",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
				navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
				navigationStyle:"square",				//round,square,navbar

				touchenabled:"on",						// Enable Swipe Function : on/off

				navOffsetHorizontal:0,
				navOffsetVertical:20,

				fullWidth:"on",

				shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

			});		
			
		}


	})();
	
	/* end Revolution Slider */	