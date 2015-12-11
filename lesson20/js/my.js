$(document).ready(function(){

	$slider = $('.slider');
	$block_in_slider = $('.slider .block');

	//click tab-1 first block blue, click tab-2 second block blue, first block green - not working
	$('.tab').click(function(){
		if($('.block').eq($(this).index()).hasClass('blue')) {
			$('.block').eq($(this).index()).removeClass('blue');
		} else {
			$('.block').removeClass('blue');
			$('.block').eq($(this).index()).toggleClass('blue');
		}	
		console.log($(this).index());
	});

	//swiches blocks until you put cursor on .slider div
	if($block_in_slider.length > 1) {
		$slider.append('<i class="prev">prev</i><i class="next">next</i>');

		// setInterval(nextClick,2000);
		$slider.hover(function(){
			clearInterval(sliding);
		},function(){
			sliding = setInterval(nextClick,2000);
		});
		$slider.trigger('mouseout');
	}

	$('.next').click(function(){
		nextClick();
	});

	function nextClick() {
		$slider.find('.blue').removeClass('blue').next().addClass('blue');
		if(!($block_in_slider.hasClass('blue'))) {
			$('.block:first').addClass('blue');
		}
	}
});

