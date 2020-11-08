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

var svgSprite = require("gulp-svg-sprite");

var ttf2woff2 = require("gulp-ttf2woff2");

var fs = require("fs");

var tiny = require("gulp-tinypng-compress");

var rev = require("gulp-rev");

var revRewrite = require("gulp-rev-rewrite");

var revdel = require("gulp-rev-delete-original");

var htmlmin = require("gulp-htmlmin"); // DEV
//svg sprite


var svgSprites = function svgSprites() {
  return src("./src/img/svg/**.svg").pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../sprite.svg" //sprite file name

      }
    }
  })).pipe(dest("./app/img"));
};

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

var fonts = function fonts() {
  return src("./src/fonts/**.ttf").pipe(ttf2woff2()).pipe(dest("./app/fonts/"));
};

var checkWeight = function checkWeight(fontname) {
  var weight = 400;

  switch (true) {
    case /Regular/.test(fontname):
      weight = 400;
      break;

    case /Medium/.test(fontname):
      weight = 500;
      break;

    case /Semi/.test(fontname):
      weight = 600;
      break;

    case /Bold/.test(fontname):
      weight = 700;
      break;
  }

  return weight;
};

var cb = function cb() {};

var srcFonts = "./src/scss/_fonts.scss";
var appFonts = "./app/fonts/";

var fontsStyle = function fontsStyle(done) {
  var file_content = fs.readFileSync(srcFonts);
  fs.writeFile(srcFonts, "", cb);
  fs.readdir(appFonts, function (err, items) {
    if (items) {
      var c_fontname;

      for (var i = 0; i < items.length; i++) {
        var fontname = items[i].split(".");
        fontname = fontname[0];
        var font = fontname.split("-")[0];
        var weight = checkWeight(fontname);

        if (c_fontname != fontname) {
          fs.appendFile(srcFonts, '@include font-face("' + font + '", "' + fontname + '", ' + weight + ");\r\n", cb);
        }

        c_fontname = fontname;
      }
    }
  });
  done();
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

var scripts = function scripts() {
  return src("./src/js/main.js").pipe(webpackStream({
    mode: "development",
    output: {
      filename: "main.js"
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }]
    }
  })).on("error", function (err) {
    console.error("WEBPACK ERROR", err);
    this.emit("end"); // Don't stop the rest of the task
  }).pipe(sourcemaps.init()).pipe(uglify().on("error", notify.onError())).pipe(sourcemaps.write(".")).pipe(dest("./app/js")).pipe(browserSync.stream());
};

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
  watch("./src/resources/**", resources);
  watch("./src/img/**.jpg", imgToApp);
  watch("./src/img/**.jpeg", imgToApp);
  watch("./src/img/**.png", imgToApp);
  watch("./src/img/svg/**.svg", svgSprites);
  watch("./src/fonts/**", fonts);
  watch("./src/fonts/**", fontsStyle);
};

var clean = function clean() {
  return del(["app/*"]);
};

exports.fileinclude = htmlInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.watchFiles = watchFiles;
exports.fonts = fonts;
exports["default"] = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites), styles, watchFiles); // BUILD

var tinypng = function tinypng() {
  return src(["./src/img/**.jpg", "./src/img/**.png", "./src/img/**.jpeg"]).pipe(tiny({
    key: "HkdjDW01hVL5Db6HXSYlnHMk9HCvQfDT",
    sigFile: "./app/img/.tinypng-sigs",
    parallel: true,
    parallelMax: 50,
    log: true
  })).pipe(dest("./app/img"));
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

var scriptsBuild = function scriptsBuild() {
  return src("./src/js/main.js").pipe(webpackStream({
    mode: "development",
    output: {
      filename: "main.js"
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }]
    }
  })).on("error", function (err) {
    console.error("WEBPACK ERROR", err);
    this.emit("end"); // Don't stop the rest of the task
  }).pipe(uglify().on("error", notify.onError())).pipe(dest("./app/js"));
};

var cache = function cache() {
  return src("app/**/*.{css,js,svg,png,jpg,jpeg,woff2}", {
    base: "app"
  }).pipe(rev()).pipe(revdel()).pipe(dest("app")).pipe(rev.manifest("rev.json")).pipe(dest("app"));
};

var rewrite = function rewrite() {
  var manifest = src("app/rev.json");
  return src("app/**/*.html").pipe(revRewrite({
    manifest: manifest
  })).pipe(dest("app"));
};

var htmlMinify = function htmlMinify() {
  return src("app/**/*.html").pipe(htmlmin({
    collapseWhitespace: true
  })).pipe(dest("app"));
};

exports.cache = series(cache, rewrite);
exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites), stylesBuild, htmlMinify, tinypng); // deploy

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