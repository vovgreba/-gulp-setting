const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require( 'gulp-clean-css'),
    rename = require("gulp-rename");

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
});

gulp.task('minify-css', function() {
   return  gulp.src('./css/*.css')
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest('./css/'))
    
})