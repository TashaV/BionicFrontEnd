$(document).ready(function(){
	// всплывашка
	// 	alert('my_ok');

	// консоль - f12 console
	// 	console.log('sms');

	// all blocks
	// $('.block').click(function(){
	// 	$('.block').addClass('blue');
	// });

	// current block
	// $('.block').click(function(){
	// 	$(this).addClass('blue');
	// });

	// click-on click-off
	// $('.block').click(function(){
	// 	$(this).toggleClass('blue');
	// });

	// click_this-on click_next-this-off next-on
	// $('.block').click(function(){
	// 	$('.block').removeClass('blue');
	// 	$(this).toggleClass('blue');
	// });

	// click_this-on click_next-this-off next-on ==> wrong
	// $('.block').click(function(){
	// 	$(this).toggleClass('blue');
	// 	$('.block').removeClass('blue');
	// });

	// click_this-on click_next-this-off next-on 
	// second click_this-on-this-off
	// $('.block').click(function(){
	// 	if($(this).hasClass('blue')) {
	// 		$(this).removeClass('blue');
	// 	} else {
	// 		$('.block').removeClass('blue');
	// 		$(this).toggleClass('blue');
	// 	}	
	// });

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
});