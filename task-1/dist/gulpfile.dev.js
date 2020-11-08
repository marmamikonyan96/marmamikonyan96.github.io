"use strict";

/** @format */
var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest,
    parallel = _require.parallel,
    series = _require.series,
    watch = _require.watch;

var autoprefixer = require("gulp-autoprefixer");

var cleanCSS = require("gulp-clean-css");

var uglify = require("gulp-uglify-es")["default"];

var del = require("del");

var browserSync = require("browser-sync").create();

var sass = require("gulp-sass");

var rename = require("gulp-rename");

var fileinclude = require("gulp-file-include");

var gutil = require("gulp-util");

var ftp = require("vinyl-ftp");

var sourcemaps = require("gulp-sourcemaps");

var notify = require("gulp-notify");

var htmlmin = require("gulp-htmlmin"); // DEV
//svg sprite


var resources = function resources() {
  return src("./src/resources/**").pipe(dest("./app"));
};

var imgToApp = function imgToApp() {
  return src(["./src/img/**.jpg", "./src/img/**.png", "./src/img/**.jpeg", "./src/img/*.svg"]).pipe(dest("./app/img"));
};

var htmlInclude = function htmlInclude() {
  return src(["./src/*.html"]).pipe(fileinclude({
    prefix: "@",
    basepath: "@file"
  })).pipe(dest("./app")).pipe(browserSync.stream());
};

var styles = function styles() {
  return src("./src/scss/**/*.scss").pipe(sourcemaps.init()).pipe(sass({
    outputStyle: "expanded"
  }).on("error", notify.onError())).pipe(rename({
    suffix: ".min"
  })).pipe(autoprefixer({
    cascade: false
  })).pipe(cleanCSS({
    level: 2
  })).pipe(sourcemaps.write(".")).pipe(dest("./app/css/")).pipe(browserSync.stream());
};

function scripts() {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону './src/js/**/*.js'
  return gulp.src(jsFiles) //Объединение файлов в один
  .pipe(concat("script.js")) //Минификация JS
  .pipe(uglify({
    toplevel: true
  })) //Выходная папка для скриптов
  .pipe(gulp.dest("./build/js")).pipe(browserSync.stream());
}

var watchFiles = function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  watch("./src/scss/**/*.scss", styles);
  watch("./src/js/**/*.js", scripts);
  watch("./src/html/*.html", htmlInclude);
  watch("./src/*.html", htmlInclude);
  watch("./src/img/**.jpg", imgToApp);
  watch("./src/img/**.jpeg", imgToApp);
  watch("./src/img/**.png", imgToApp);
  watch("./src/fonts/**", fonts);
};

var clean = function clean() {
  return del(["app/*"]);
};

var stylesBuild = function stylesBuild() {
  return src("./src/scss/**/*.scss").pipe(sass({
    outputStyle: "expanded"
  }).on("error", notify.onError())).pipe(rename({
    suffix: ".min"
  })).pipe(autoprefixer({
    cascade: false
  })).pipe(cleanCSS({
    level: 2
  })).pipe(dest("./app/css/"));
};

var htmlMinify = function htmlMinify() {
  return src("app/**/*.html").pipe(htmlmin({
    collapseWhitespace: true
  })).pipe(dest("app"));
};

exports.cache = series(cache, rewrite);
exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, imgToApp), stylesBuild, htmlMinify); // deploy

var deploy = function deploy() {
  var conn = ftp.create({
    host: "",
    user: "",
    password: "",
    parallel: 10,
    log: gutil.log
  });
  var globs = ["app/**"];
  return src(globs, {
    base: "./app",
    buffer: false
  }).pipe(conn.newer("")) // only upload newer files
  .pipe(conn.dest(""));
};

exports.deploy = deploy;