	/*	Parallax
	/* ---------------------------------------------------------------------- */
function back(){

        if($('.parallax-banner').hasClass('parallax-back1'))
        {
            $('.parallax-banner').addClass('parallax-back2', 999).removeClass('parallax-back1', 999);
        }
        else
        {
            $('.parallax-banner').addClass('parallax-back1', 999).removeClass('parallax-back2', 999);
        }

}


    window.setInterval(function(){
        /// call your function here
        back();
    }, 9999);


    /*$( ".parallax-banner" ).click(function() {
        $( "#book" ).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 5000, function() {
            // Animation complete.
        });
    });*/

    /*	Bullets Derecha
     /* ---------------------------------------------------------------------- */






    /* Scroll
    /* ----------------------------------------------------------------------- */
