var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    concat     = require('gulp-concat'),
    watch      = require('gulp-watch'),
    plumber    = require('gulp-plumber'),
    connect    = require('gulp-connect')
    ;

gulp.task('scripts', function() {
  return gulp.src([
      'app/scripts/component.js',
      'app/scripts/card.js',
      'app/scripts/player.js',
      'app/scripts/turn.js',
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

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['scripts', 'webserver', 'watch']);
