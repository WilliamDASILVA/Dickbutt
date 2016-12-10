var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var paths = {
	ts : ['engine/**/*.ts', '!engine/**/*.d.ts'],
	tsSource : 'engine/main.ts',
	source : 'engine.js',
	bundle : 'engine.min.js'
};

// Typescript transpilation
gulp.task('typescript', function(){
	return gulp.src(paths.tsSource)
	.pipe(ts({
		out : paths.source,
		declaration : true
	}))
	.pipe(gulp.dest('./'));
});

// Uglify
gulp.task('uglify', function(){
	return gulp.src(paths.source)
	.pipe(uglify())
	.pipe(rename('engine.min.js'))
	.pipe(gulp.dest('./'));
});

// Watch files
gulp.task('watch', function(){
	gulp.watch(paths.ts, ['typescript']);
});

// Default task
gulp.task('default', ['typescript', 'watch']);