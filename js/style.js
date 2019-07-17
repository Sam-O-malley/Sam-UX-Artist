// $(document).ready(function(){
//   $("#paintingOne18").click(function(){
//     $("#paintingOne_text").show();
//   });
// });



$(function() {
   
    $(document).on("click", "#flip", function() {
        $('#panel').toggle("slow");
             $('.carousel-control-prev').hide('.carousel-control-prev');
    			$('.carousel-control-next').hide('.carousel-control-next');
    			// $('#thumbnailContainer').fadeOut('slow');
    	});
    
  });

$(document).ready(function () {
    $('#flip').click(function () {
        $('#main').stop(true).fadeToggle(2000);

        $('#art_text').stop(true).fadeToggle(2000);
        $('#thumbnail').stop(true).fadeToggle(2000);
        $('#AboutContentTwo').stop(true).fadeToggle(2000);
        $('.contactForm').stop(true).fadeToggle(2000);
    });
})
  

