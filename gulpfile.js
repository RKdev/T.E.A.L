// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

/*gulp.task('default', ['jshint']);*/

gulp.task('default', ['jasmine']);


//jasmine
gulp.task('jasmine', function() {
  gulp.src('spec/jasmine_examples/*.js')
		.pipe(jasmine({config: {
      "spec_dir": "spec",
      "spec_files": [
        "**/*[sS]pec.js"
      ],
      "helpers": [
        "helpers/**/*.js"
      ],
      "stopSpecOnExpectationFailure": false,
      "random": false
    }}));
});

// watch for JS changes
gulp.watch('spec/**/*.js', function() {
  gulp.run('jasmine');
});

/*
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

*/
