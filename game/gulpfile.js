var gulp = require('gulp');
var pug  = require('gulp-pug');
var sass = require('gulp-sass');

// Default Task - Executada apenas com o "npm run gulp"

gulp.task ('default', ['pug', 'pug-watch', 'sass', 'sass-watch']);


gulp.task ('pug', function() {
	return gulp.src('./src/pug/**/*.pug') // Compila os arquivos pug dentro da pasta pug e dentro de qualquer pasta filha de pug
				.pipe(pug())
				.pipe(gulp.dest('./src/'));
});

gulp.task ('sass', function(){
	return gulp.src('./src/assets/scss/main.scss')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('./src/assets/css/'));
});

gulp.task ('pug-watch', function() {
	gulp.watch('./src/pug/*.pug', ['pug']);
});

gulp.task ('sass-watch', function() {
	gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

