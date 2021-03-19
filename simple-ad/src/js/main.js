/** @format */
$(document).ready(function () {
  $(".wrapper").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
});

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});