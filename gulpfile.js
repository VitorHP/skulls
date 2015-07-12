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
      'node_modules/gulp-babel/node_modules/babel-core/browser-polyfill.js',
      'app/scripts/lib/*.js',
      'app/scripts/mixins/*.js',
      'app/scripts/services/*.js',
      'app/scripts/actions/*.js',
      'app/scripts/card.js',
      'app/scripts/player.js',
      'app/scripts/turn.js',
      'app/scripts/round.js',
      'app/scripts/game.js',
      'app/scripts/app.js',
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({ ignore: ['node_modules/**/*.js'], optional: ['es7.decorators'] }))
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
