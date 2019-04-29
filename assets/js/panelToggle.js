$(document).ready(function () {
    $(".topLink").on('click', function (event){
        event.preventDefault();
        var e = $(this); //writing $(this) every time is bad
        t = $("div[data-target='"+e.attr('data-target')+"']"); //same as above
        
        if(e.hasClass('active')){ 
            //remove from this
            e.removeClass("active");
            //close box    
            t.slideUp("slow");
        } else { //toggle menu when clicking on some other link
            //remove from everywhere
            $(".topLink").removeClass('active');
            //slide every box up
            $('.toggle').slideUp("slow");
            //add to this only
            e.addClass('active'); 
            //slide associated box down
            t.slideDown("slow");
        }
    });
});