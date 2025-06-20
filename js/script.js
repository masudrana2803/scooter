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
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
		