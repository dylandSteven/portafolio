

var el = $('.js-tilt-container');

el.on('mousemove', function(e){
	const {left, top} = $(this).offset();
	const cursPosX = e.pageX - left;
	const cursPosY = e.pageY - top;
	const cursFromCenterX = $(this).width() / 2 - cursPosX;
	const cursFromCenterY = $(this).height() / 2 - cursPosY;
	

	$(this).css('transform','perspective(500px) rotateX('+ (cursFromCenterY / 40) +'deg) rotateY('+ -(cursFromCenterX / 40) +'deg) translateZ(10px)');
    
    console.log("2")
  const invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs( cursFromCenterX ) : Math.abs( cursFromCenterX );
  
  //Parallax transform on image
  $(this).find('.js-perspective-neg').css('transform','translateY('+ ( cursFromCenterY / 10) +'px) translateX('+ -(invertedX  / 10) +'px) scale(1.15)');

	$(this).removeClass('leave');
});

el.on('mouseleave', function(){
	$(this).addClass('leave');
    
    console.log("3")
});


