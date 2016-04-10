var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('stylus', function () {
  return gulp.src('./src/ayumi.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
})
