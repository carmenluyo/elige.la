$(document).ready(function(){
	$(window).scroll(function(){
		var prueba = $(this).scrollTop();
		$("#carmen").text(prueba);
		if (prueba > 658) {
			$(".navbar").addClass("navegacion");
		}
			else if (prueba < 658) {
			$(".navbar").removeClass("navegacion");
		}
	});
});

// deslis lento


$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
});