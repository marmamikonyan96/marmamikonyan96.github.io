"use strict";

/** @format */
var o = $(".owl-carousel");
o.children().each(function (o) {
  $(this).attr("data-position", o);
}), o.owlCarousel({
  center: !0,
  loop: !0,
  items: 3,
  nav: !0,
  dots: !0,
  responsiveClass: !0,
  responsive: {
    0: {
      items: 1,
      nav: !0
    },
    600: {
      items: 2,
      nav: !1
    },
    798: {
      items: 2,
      nav: !1
    },
    835: {
      items: 2,
      nav: !0,
      loop: !0
    },
    999: {
      items: 2,
      nav: !0,
      loop: !0
    },
    1e3: {
      items: 2,
      nav: !0,
      loop: !0
    },
    1920: {
      items: 3,
      nav: !0,
      loop: !0
    }
  }
}), $(document).on("click", ".owl-item>div", function () {
  o.trigger("to.owl.carousel", [$(this).data("position"), 100]);
});