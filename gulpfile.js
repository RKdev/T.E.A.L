// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

gulp.task('default', ['jshint']);

// JS hint task
gulp.task('jshint', function() {
  gulp.src(['./js/*.js', '!./js/jquery*'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// watch for JS changes
gulp.watch('./js/*.js', function() {
  gulp.run('jshint');
});
