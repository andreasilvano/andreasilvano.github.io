$("#menu").hover(function() {
   $(".line").css("background-color","#000");
    }, function(){
    $(".line").css("background-color", "#000");
});

$("#menu").click(function() {
	$(this).toggleClass("on");
});

setTimeout(function(){
   $("#menu").addClass("on");
  setTimeout(function(){
    $("#menu").removeClass("on");
  }, 400);
}, 100);