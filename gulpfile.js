var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src([
      'app/scripts/card.js',
      'app/scripts/player.js',
      'app/scripts/game.js',
      'app/scripts/app.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
