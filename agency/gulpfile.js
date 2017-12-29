var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;


gulp.task('default', ['server']);

gulp.task('pug', function() {
	return gulp.src('./src/pug/**/*.pug')
				.pipe(pug())
				.pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function() {
	return gulp.src('./src/scss/**/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('./dist/css/'))
});


gulp.task('imagemin', function() {
	return gulp.src('./src/images/**')
				.pipe(imagemin())
				.pipe(gulp.dest('./dist/images/'))
});


gulp.task('server', function() {
	browsersync.init({
		server: {
			baseDir: './dist/'
		}
	});

	gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch('./src/pug/**/*.pug').on('change', reload);

	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./dist/css/*.css').on('change', reload);

	gulp.watch('./src/images/**', ['imagemin']);
	gulp.watch('./dist/images/**').on('change', reload);
});
