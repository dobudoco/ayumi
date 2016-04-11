const gulp = require('gulp')
const stylus = require('gulp-stylus')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('stylus', () => {
  return gulp.src('./src/ayumi.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('minify-css', () => {
  return gulp.src('dist/ayumi.css')
    .pipe(cleanCSS())
    .pipe(rename('ayumi.min.css'))
    .pipe(gulp.dest('dist'))
})
