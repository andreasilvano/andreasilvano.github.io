$('.info-btn').click(function(e){   
        $('.info-content').fadeIn('fast', function(){
    });
});

$('.close-btn').click(function(e){    
    $('.info-content').fadeOut('fast', function(){
    });
});