"use strict";

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
  var position = 0;
  var slidesToShow = 1;
  var container = $("slider-container");
  var wrap = $(".slider_wrap");
  var slide = $(".slide");
  var btnLeft = $(".btn-left");
  var btnRight = $(".btn-right");
  var slideWidth = container.width() / slidesToShow;
  slideWidth.each(function (index, slide) {
    $(slide).css({
      minWidth: itemWidth
    });
  });
  btnLeft.click(function () {
    console.log("btn");
  });
  btnRight.click(function () {});
});