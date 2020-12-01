/** @format */

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});

new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
