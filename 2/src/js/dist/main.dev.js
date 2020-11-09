"use strict";

/** @format */

/** @format */
var $owl = $(".owl-carousel");
$owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});
$owl.owlCarousel({
  center: true,
  loop: true,
  items: 2,
  nav: true,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    798: {
      items: 2,
      nav: false
    },
    835: {
      items: 2,
      nav: true,
      loop: true
    },
    999: {
      items: 2,
      nav: true,
      loop: true
    },
    1000: {
      items: 2,
      nav: true,
      loop: true
    },
    1920: {
      items: 3,
      nav: true,
      loop: true
    }
  }
});
$(document).on("click", ".owl-item>div", function () {
  var $speed = 100; // in ms

  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});