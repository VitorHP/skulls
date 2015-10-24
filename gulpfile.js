var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    watch      = require('gulp-watch'),
    plumber    = require('gulp-plumber'),
    connect    = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    babelify   = require('babelify')
    ;

gulp.task('scripts', function() {
  return gulp.src('app/scripts/app.js')
    .pipe(plumber())
    .pipe(browserify({ 
      insertGlobals: true,
      transform: [ babelify.configure({ optional: 'es7.decorators' }) ]
    }))
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
