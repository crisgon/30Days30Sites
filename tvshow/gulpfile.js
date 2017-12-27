var gulp = require('gulp');
var pug	 = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['server']);

gulp.task('pug', function() {
	return gulp.src('./src/pug/*.pug')
				.pipe(pug())
				.pipe(gulp.dest('./src/'));
});

gulp.task('sass', function() {
	return gulp.src('./src/scss/main.scss')
				.pipe(sass())
				.pipe(gulp.dest('./src/css/'));
});


gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});

	gulp.watch('./src/pug/**/*.pug', ['pug'] );
	gulp.watch('./src/**/*.html').on('change', reload);

	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/scss/**/*.scss').on('change', reload);
});
