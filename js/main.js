$(document).ready(function () {

  $('.header__nav-vectical .header__nav-icon').on('click', function () {
    $('.header__nav-dropmenu').slideToggle('slow');
  })


  $('.sale__inner').slick({
    dots: true,
    arrows: false,
  });


  $('.deals__body-slider').slick({
    arrows: true,
    prevArrow: '<button class="arrows-left__btn"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="arrows-right__btn"><i class="fas fa-chevron-right"></i>',
  });

  $('.testimonials__item-slider').slick({
    dots: true,
    arrows: false,
  })

  $(".rate-yo").rateYo({
    rating: 4,
    starWidth: "10px",
  });

  $('.arrivals__sliders').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.arrivals__head-prev',
    nextArrow: '.arrivals__head-next',
    arrows: true,
    infinite: true,
    variableWidth: true,
  });

  $('.best__sliders').slick({
    rows: 3,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '.best__arrows-prev',
    nextArrow: '.best__arrows-next',
    arrows: true,
    infinite: true,
  });

  $('.featured__sliders').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.featured__arrows .featured__arrows-prev',
    nextArrow: '.featured__arrows .featured__arrows-next',
    arrows: true,
    infinite: true,
    variableWidth: true,
  });
});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    autoWidth: true,
    // nav: true,
    loop: true,

  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".categories__arrows-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".categories__arrows-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});