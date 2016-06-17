// require
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var cssbeautify = require('gulp-cssbeautify');


// task SCSS
gulp.task('scss', function() {
	return gulp
			.src('./scss/**/*.scss')
			.pipe(autoprefixer({
				browsers: ['last 7 version', 'Android 4'],
				cascade: false
			}))
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./css'));
});


// task CSS beautify
gulp.task('css', function() {
	return gulp
			.src('./css/**/*.css')
			.pipe(cssbeautify())
			.pipe(csscomb())
			.pipe(gulp.dest('./css'));
});


// task WATCH
gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', ['scss']);
});


// task RUN
gulp.task('default', ['scss', 'watch']);


// task DIST
gulp.task('dist', ['css']);