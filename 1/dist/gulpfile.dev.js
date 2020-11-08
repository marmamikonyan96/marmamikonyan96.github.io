"use strict";

/** @format */
var gulp = require("gulp");

var concat = require("gulp-concat");

var autoprefixer = require("gulp-autoprefixer");

var cleanCSS = require("gulp-clean-css");

var uglify = require("gulp-uglify");

var del = require("del");

var browserSync = require("browser-sync").create();

var sourcemaps = require("gulp-sourcemaps");

var sass = require("gulp-sass");

var sassFiles = ["./src/sass/main.sass"];
var jsFiles = ["./src/js/main.js"];

function browserReload(styles) {
  browserSync.reload();
  styles();
}

function styles() {
  return gulp.src(sassFiles).pipe(sourcemaps.init()).pipe(sass()).pipe(concat("style.css")).pipe(autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
  })).pipe(cleanCSS({
    level: 2
  })).pipe(sourcemaps.write("./")).pipe(gulp.dest("./build/css")).pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(jsFiles).pipe(concat("script.js")).pipe(uglify({
    toplevel: true
  })).pipe(gulp.dest("./build/js")).pipe(browserSync.stream());
}

function clean() {
  return del(["build/*"]);
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/css/**/*.sass", styles);
  gulp.watch("./src/js/**/*.js", scripts);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./img").on("change", browserSync.reload);
}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("del", clean);
gulp.task("watch", watch);
gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task("dev", gulp.series("build", "watch"));