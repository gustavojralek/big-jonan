
var screenh = $(window).height();
var movieh = $("#somos").height();
var mainh = $("#top").height();
var menuh = 0;


$(document).ready(function() {
    windowMainScroll();
    $(window).scroll(function() {
        windowMainScroll();
    });

	$(".nav-main, .menu li a").on('click', function(e){
		e.preventDefault();
		var newtop = $( "#" + $(this).data("section") ).offset().top - menuh;
		scrolling=true;
		$("html,body").stop(true,true).animate({scrollTop:  newtop + "px"}, 2000, 'easeInOutQuint',function(){
			scrolling=false;
		});
	});

/*  $(".nav li a").on('click', function(e){
    e.preventDefault(); 
    var $this = $(this);
    
    $("body").stop(true,true).animate({scrollTop:  newtop + "px"}, 1500, 'easeInOutQuint',function(){
        location.href = $this.data("href");
        scrolling=false;
    });

  });*/

});




function windowMainScroll(){


    var st = $(window).scrollTop(); // console.log("st:" + st);

  // parallax general
 /*   $('.parallax').each(function(){
        var obj = $(this);
        if((st+screenh) > obj.offset().top){
            var nt =  (st + screenh - obj.position().top) * obj.attr("yof") * 0.1;
            $(this).css({"margin-top": nt + "px"});
        }
    });*/

    // Oculta bullets en Top
 /*	if(st>( movieh + mainh - screenh * 0.5 )){
    	$("#nav_main").fadeIn();    	
    }
    else{
    	$("#nav_main").fadeOut();    
    }*/

    // nav lateral
    $(".nav-main").each(function(e,i){
    	var sec = $( "#" + $(this).data("section") );
      if (!sec.offset()) return
    	if( (st+$(window).height()/2) >= sec.offset().top && (sec.offset().top+$(window).height()) > st && !sec.hasClass("active")){
			$(".nav-main").removeClass("active");
    		$(this).addClass("active");
    	}
    });



   $(".dots-light, .dots-dark").each(function(){

      var $this = $(this);

      // console.log($this.attr("id"));

      if( st > $this.offset().top-$(window).height()*0.5 && st < $this.offset().top+$(window).height()){


          return;

      }

  })


}

