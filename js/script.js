  AOS.init();

  // counter plugin
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slider part 1
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  // dots: true,
  centerMode: true,
  focusOnSelect: true,
});
			


// slide 2
$('.slider_single_item').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<i class="fa-solid fa-arrow-left my_arr pr"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right my_arr nx"></i>',

});
		

console.log('We are checking the variables')

var wed='I am the variable 1'
console.log(wed)

var wer='I am the variable 2 \nwith new line breakages'

console.log(wer)

