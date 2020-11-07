var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var swiper =  require ('swiper')
var browserSync = require('browser-sync').create();

function style(done){
    gulp.src('./app/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(rename({suffix: '.min'}))

    .pipe(sourcemaps.write('./app/css'))
    .pipe( gulp.dest('./app/css/'))
    .pipe(browserSync.stream());




    done();
}
function sync(done){
    browserSync.init({
        server: {
            baseDir:"./app/"
        }, 
        
        port:8080
    });

    done();
}
function browserReload(done){
    browserSync.reload();
    done();
}


function watchSass(){
   gulp.watch("./app/sass/**/*.scss", style);
}
function watchFiles(){
    gulp.watch("./scss/**/*", style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
    gulp.watch("./**/*.php", browserReload);

}

gulp.task(style);
gulp.task('default', gulp.parallel(style, sync, watchSass,));