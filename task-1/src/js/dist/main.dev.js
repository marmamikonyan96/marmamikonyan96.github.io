"use strict";

require("./_vars");

/** @format */
var slider = document.querySelector(".swiper-container");
var mySwiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "String"
  },
  centeredSlides: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});