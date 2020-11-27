/** @format */
$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});

const prev = document.getElementById("btn-prev"),
  prev = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide");
slides.Wrapper = document.querySelectorAll(".slider-wrapper");
