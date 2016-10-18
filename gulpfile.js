var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");

var paths = {
	ts : 'engine/**/*.ts'
};

// Typescript transpilation
gulp.task('typescript', function(){
	return gulp.src(paths.ts)
	.pipe(ts())
	.pipe();
});

// Uglify
gulp.task('uglify', function(){
	return gulp.src(paths.js)
	.pipe(uglify())
	.pipe(gulp.dest('./'));
});

// Watch files
gulp.task('watch', function(){
	gulp.watch(paths.ts, ['typescript']);
});

// Default task
gulp.task('default', ['watch']);