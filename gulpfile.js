var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var sass_config = {
    includePaths: [
        'node_modules/breakpoint-sass/stylesheets/',
        'node_modules/compass-mixins/lib/'
    ]
};


gulp.task('style', function () {
    return gulp.src('scss/*.scss')

        .pipe(sass())
        .pipe(sass(sass_config).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('css'));

});


