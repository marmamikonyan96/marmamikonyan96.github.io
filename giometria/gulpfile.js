/** @format */

const gulp = require("gulp");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const styleFiles = ["./src/sass/main.scss"];
const scriptFiles = ["./src/js/main.js"];

gulp.task("styles", () => {
  return gulp
    .src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())

    .pipe(concat("style.css"))

    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )

    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("./"))

    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
});

gulp.task("img-compress", () => {
  return gulp
    .src("./src/img/**")
    .pipe(
      imagemin({
        progresive: true,
      })
    )
    .pipe(gulp.dest("./build/img/"));
});

gulp.task("scripts", () => {
  return gulp
    .src(scriptFiles)

    .pipe(concat("script.js"))

    .pipe(
      uglify({
        toplevel: true,
      })
    )
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
});

gulp.task("del", () => {
  return del(["build/*"]);
});
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./src/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("./src/img/**", gulp.series("img-compress"));
  gulp.watch("./src/js/**/*.js", gulp.series("scripts"));

  gulp.watch("./*.html").on("change", browserSync.reload);
});
gulp.task(
  "default",
  gulp.series(
    "del",
    gulp.parallel("styles", "scripts", "img-compress"),
    "watch"
  )
);
