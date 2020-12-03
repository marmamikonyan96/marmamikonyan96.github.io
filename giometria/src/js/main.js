/** @format */

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});

$(document).ready(function () {
  let position = 0;
  const slidesToShow = 1;
  const container = $("slider-container");
  const wrap = $(".slider_wrap");
  const slide = $(".slide");
  const btnLeft = $(".btn-left");
  const btnRight = $(".btn-right");
  const slideWidth = container.width() / slidesToShow;

  slideWidth.each(function (index, slide) {
    $(slide).css({
      minWidth: itemWidth,
    });
  });
  btnLeft.click(function () {
    console.log("btn");
  });
  btnRight.click(function () {});
});
