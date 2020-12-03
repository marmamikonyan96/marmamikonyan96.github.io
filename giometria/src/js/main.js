/** @format */

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".overlay").addClass("open");
  });

  $(".close-menu").on("click", function () {
    $(".overlay").removeClass("open");
  });
});

function slider(el) {
  let self = this,
    _slide = null,
    _buttons = null;

  this.el = el;

  function init() {
    _slide = self.el.getElementById("slide p");
    _buttons = self.el.querySelector(".buttons");
    self.currentSlide = 0;

    _buttons.querySelector(".btn-left").addEventListener("click", function () {
      if (self.currentSlide > 0) {
        self.showSlide(self.currentSlide - 1);
      }
      self.showSlide(_slide.length - 1);
    });

    _buttons.querySelector(".btn-right").addEventListener("click", function () {
      if (self.currentSlide < _slide.length - 1) {
        self.showSlide(self.currentSlide + 1);
      }
      self.showSlide(0);
    });
  }
}
let slider = new Slider(document.getElementById("slider"));
