$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })

	$(document).keydown(function(e){
		if (e.keyCode == 88) {
//      	playEyeoftiger();
        $('.ryu-fight').hide();
     	$('.ryu-cool').show(); 
	}	

	}).keyup(function(e) {
    	if (e.keyCode == 88) {
//	    $('#eye-of-tiger')[0].pause();
//	    $('#eye-of-tiger')[0].load();
        $('.ryu-cool').hide();
        $('.ryu-fight').show();
    }
  });
});

    

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

//function playEyeoftiger () {
//  $('#eye-of-tiger')[0].volume = 0.5;
//  $('#eye-of-tiger')[0].load();
//  $('#eye-of-tiger')[0].play();
//}



