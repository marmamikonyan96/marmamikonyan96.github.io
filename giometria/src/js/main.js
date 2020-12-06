/** @format */

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});

var $owl = $(".owl-carousel");

$owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    798: {
      items: 1,
      nav: true,
    },
    831: {
      items: 1,
      nav: true,
    },
    999: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
    },
    1920: {
      items: 1,
      nav: true,
    },
  },
});

$(document).on("click", ".owl-item>div", function () {
  var $speed = 100; // in ms
  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});
