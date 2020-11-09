/** @format */
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1920: {
        items: 3,
      },
    },
  });
});
