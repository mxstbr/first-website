window.touchCheck = function() {
    return Modernizr.touch;
};
window.mobileCheck = function(){
    return $(window).width()<=mobileThreshold;
};
window.mobileThreshold=767;

$(document).ready(function (){

    if(mobileCheck() || touchCheck()){
        return 0;
    } else {
        var s = skrollr.init();
    }
    
});