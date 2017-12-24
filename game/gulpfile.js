var gulp = require('gulp');
var pug = require('gulp-pug');

// Default Task - Executada apenas com o "npm run gulp"

gulp.task ('default', ['pug', 'watch']);


gulp.task ('pug', function() {
	return gulp.src('./src/pug/**/*.pug') // Compila os arquivos pug dentro da pasta pug e dentro de qualquer pasta filha de pug
				.pipe(pug([
					pretty: true
				]))
				.pipe(gulp.dest('./src/'));
});

gulp.task ('watch', function() {
	gulp.watch('./src/pug/*.pug', ['pug']);
});

