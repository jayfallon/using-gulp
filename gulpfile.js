// 1. Include the required packages
var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var cleanCSS     = require('gulp-clean-css');

// 2. Write your task
gulp.task('stylus-to-css', function(){
  return gulp.src('src/example.styl')
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build'));
});
