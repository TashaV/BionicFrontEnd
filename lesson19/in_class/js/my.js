$(document).ready(function(){

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

	//create tab span for each .block
	// $('.block').each(function(){
	// 	$('.tabs').append('<span class="tab">tab-' + ($(this).index() + 1) + '</span>');
	// });

	//create tab span for each .block with variable <!-- <span> -->
	// $block_in_slider = $('.slider .block');
	// $i = 0;
	// $block_in_slider.each(function(){
	// 	$i++;
	// 	$('.tabs').append('<span class="tab">tab-' + $i + '</span>');
	// });

	if($block_in_slider.length > 1) {
		$('.slider').append('<i class="prev">prev</i><i class="next">next</i>')
	}
});