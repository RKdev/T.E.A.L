// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

var fs = require('fs');
var jasmineconfig = JSON.parse(fs.readFileSync('spec/support/jasmine.json'));

/*gulp.task('default', ['jshint']);*/

gulp.task('default', ['jasmine', 'watch']);

//jasmine
gulp.task('jasmine', function() {
  gulp.src('spec/**/*.js')
		.pipe(jasmine({config: jasmineconfig}));
});

// watch for JS changes
gulp.task('watch', function(){
  gulp.watch(['spec/**/*.js', 'js/**/*.js'], ['jasmine']);
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
