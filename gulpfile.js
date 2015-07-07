var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    concat     = require('gulp-concat'),
    watch      = require('gulp-watch'),
    plumber    = require('gulp-plumber');

gulp.task('scripts', function() {
  return gulp.src([
      'app/scripts/card.js',
      'app/scripts/player.js',
      'app/scripts/game.js',
      'app/scripts/app.js',
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('app/scripts/**/*.js', ['scripts']);
});
