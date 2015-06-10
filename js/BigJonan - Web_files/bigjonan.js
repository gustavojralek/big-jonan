	/*	Parallax
	/* ---------------------------------------------------------------------- */
    $('.parallax-window').parallax({imageSrc: 'img/parallax/back.png'});
    $('.back').parallax({imageSrc: 'img/trabajos/back.png'});
    
	


    jQuery(window).trigger('resize').trigger('scroll');


	$(document).ready( function() {
			$('.back').blurjs({
				source: 'body',
				radius: 30,
				overlay: 'rgba(0, 0, 0, .2)'
			});
	});
    /*	Bullets Derecha
     /* ---------------------------------------------------------------------- */

