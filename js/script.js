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
$('.lslider_single_item').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-arrow-left myArrow pr"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right myArrow nx"></i>',
});
			