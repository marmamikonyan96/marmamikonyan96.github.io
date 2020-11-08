/** @format */

const { src, dest, parallel, series, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const del = require("del");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");
const gutil = require("gulp-util");
const ftp = require("vinyl-ftp");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");

const htmlmin = require("gulp-htmlmin");

// DEV
//svg sprite

const resources = () => {
  return src("./src/resources/**").pipe(dest("./app"));
};

const imgToApp = () => {
  return src([
    "./src/img/**.jpg",
    "./src/img/**.png",
    "./src/img/**.jpeg",
    "./src/img/*.svg",
  ]).pipe(dest("./app/img"));
};

const htmlInclude = () => {
  return src(["./src/*.html"])
    .pipe(
      fileinclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(dest("./app"))
    .pipe(browserSync.stream());
};

const styles = () => {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./app/css/"))
    .pipe(browserSync.stream());
};
function scripts() {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону './src/js/**/*.js'
  return (
    gulp
      .src(jsFiles)
      //Объединение файлов в один
      .pipe(concat("script.js"))
      //Минификация JS
      .pipe(
        uglify({
          toplevel: true,
        })
      )
      //Выходная папка для скриптов
      .pipe(gulp.dest("./build/js"))
      .pipe(browserSync.stream())
  );
}
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./app",
    },
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

const clean = () => {
  return del(["app/*"]);
};

const stylesBuild = () => {
  return src("./src/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest("./app/css/"));
};

const htmlMinify = () => {
  return src("app/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("app"));
};

exports.cache = series(cache, rewrite);

exports.build = series(
  clean,
  parallel(htmlInclude, scriptsBuild, fonts, imgToApp),
  stylesBuild,
  htmlMinify
);

// deploy
const deploy = () => {
  let conn = ftp.create({
    host: "",
    user: "",
    password: "",
    parallel: 10,
    log: gutil.log,
  });

  let globs = ["app/**"];

  return src(globs, {
    base: "./app",
    buffer: false,
  })
    .pipe(conn.newer("")) // only upload newer files
    .pipe(conn.dest(""));
};

exports.deploy = deploy;
