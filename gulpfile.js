const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
gulp.task('clean',  function(cb) {
    del(['dist/*']);
    cb();
})

gulp.task('copy:jpg', function(cb) {
    gulp.src('./src/*.jpg')
        .pipe(gulp.dest('./dist'));
    cb();
})
gulp.task('copy:png', function(cb) {
    gulp.src('./src/*.png')
        .pipe(gulp.dest('./dist'));
    cb();
})
gulp.task('sass', function(cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})

gulp.task('copy:html', function (cb) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    cb();
})
gulp.task('copy:js', function (cb) {
    gulp.src('./src/*.js')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss', './src/**/*.jpg', './src/**/*.png', './src/**/*.js', './src/**/*.html'], gulp.series(['clean', 'copy:jpg', 'copy:png', 'sass', 'copy:html', 'copy:js']));
})
gulp.task('default', gulp.series(['clean','copy:jpg', 'copy:png', 'sass', 'copy:html', 'copy:js']))