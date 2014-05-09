$(document).ready(function (){
    $("#a").click(function (){
        //$(this).animate(function(){
            $('html, body').animate({
                scrollTop: $("#aboutme").offset().top
            }, 1500);
        //});
    });
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});