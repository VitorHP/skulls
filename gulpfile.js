var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    watch      = require('gulp-watch'),
    plumber    = require('gulp-plumber'),
    connect    = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    babelify   = require('babelify'),
    karma      = require('karma-as-promised')
    ;

function bundleBroserify () {
  return browserify({ 
    insertGlobals: true,
    transform: [ babelify.configure({ optional: 'es7.decorators' }) ]
  })
}

gulp.task('scripts', function() {
  return gulp.src('app/scripts/app.js')
    .pipe(plumber())
    .pipe(bundleBroserify())
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

gulp.task('specs', function(){
  return karma.server.start({
    files: [
      'spec/**/*_spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'spec/**/*_spec.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    reporters: ['spec', 'failed'],
    browserify: {
      debug: true,
      transform: [ babelify.configure({ optional: 'es7.decorators' }) ]
    }
  })
})

gulp.task('default', ['scripts', 'webserver', 'watch', 'specs']);
