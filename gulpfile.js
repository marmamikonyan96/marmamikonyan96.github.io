/** @format */
var gulp = require("gulp");
var sass = require("gulp-sass");
var uglifycss = require("gulp-uglifycss");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("css", function () {
  return gulp
    .src("./css/**/main.css")
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
});
