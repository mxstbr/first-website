$(document).ready(function (){

    // =====
    // Frontpage Buttons
    // =====

    // About Me Button
    $("#a").click(function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutme").offset().top
        }, 1500);
    });

    // Portfolio Button
    $("#p").click(function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
    });

    // =====
    // Scroll To Top Button
    // =====
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.btn-scrollToTop').fadeIn();
        } else {
            $('.btn-scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.btn-scrollToTop').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.title').addClass('animated fadeInUp');

    setTimeout(function () {
        $('.subtitle').show().addClass('animated fadeInUp');}, 300
    );
});