$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('header').addClass('scrolling',2500);
           $('header').removeClass('mt-3');
        } else {
           $('header').removeClass('scrolling');
        }
    });

});