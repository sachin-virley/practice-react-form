// Toggle info section on and off
jQuery(document).ready(function($){
    $("a.info-trigger").click(function(){
        $(".super-footer").slideToggle('slow');
        return false;
    });
});