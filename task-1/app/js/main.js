/** @format */

!(function (e) {
  var n = {};
  function r(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = ""),
    r((r.s = "./src/js/main.js"));
})({
  "./src/js/_vars.js":
    /*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/

    /*! no exports provided */ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");\n/** @format */\n\nvar slider = document.querySelector(".swiper-container");\nvar mySwiper = new Swiper(slider, {\n  slidesPerView: 3,\n  spaceBetween: 50,\n  pagination: {\n    el: ".swiper-pagination",\n    clickable: true,\n    type: "String"\n  },\n  centeredSlides: true,\n  loop: true,\n  // Navigation arrows\n  navigation: {\n    nextEl: ".swiper-button-next",\n    prevEl: ".swiper-button-prev"\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?'
      );
    },
});
//# sourceMappingURL=main.js.map
