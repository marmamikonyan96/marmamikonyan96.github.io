"use strict";

/** @format */
var gulp = require("gulp");

var concat = require("gulp-concat");

var imagemin = require("gulp-imagemin");

var autoprefixer = require("gulp-autoprefixer");

var cleanCSS = require("gulp-clean-css");

var uglify = require("gulp-uglify");

var browserSync = require("browser-sync").create();

var sourcemaps = require("gulp-sourcemaps");

var sass = require("gulp-sass");

var styleFiles = ["./src/sass/main.scss"];
var scriptFiles = ["./src/js/main.js"];
gulp.task("styles", function () {
  return gulp.src(styleFiles).pipe(sourcemaps.init()).pipe(sass()).pipe(concat("style.css")).pipe(autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
  })).pipe(cleanCSS({
    level: 2
  })).pipe(sourcemaps.write("./")).pipe(gulp.dest("./build/css")).pipe(browserSync.stream());
});
gulp.task("img-compress", function () {
  return gulp.src("./src/img/**").pipe(imagemin({
    progresive: true
  })).pipe(gulp.dest("./build/img/"));
});
gulp.task("scripts", function () {
  return gulp.src(scriptFiles).pipe(concat("script.js")).pipe(uglify({
    toplevel: true
  })).pipe(gulp.dest("./build/js")).pipe(browserSync.stream());
});
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("./src/img/**", gulp.series("img-compress"));
  gulp.watch("./src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});
gulp.task("default", gulp.series(gulp.parallel("styles", "scripts", "img-compress"), "watch"));