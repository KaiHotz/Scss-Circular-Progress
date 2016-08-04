var gulp = require('gulp'),
	  sass = require('gulp-sass'),
    scss = require('gulp-scss'),
	  autoprefixer = require('gulp-autoprefixer'),
	  sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    del = require('del');


//GULP Default Task, colpiles all Scss files to CSS files
gulp.task('default', function() {
  return gulp.src('*.scss')
      .pipe(sass())
      .pipe(autoprefixer('last 10 version'))
      .pipe(sourcemaps.write('.'))
      //.pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('css/'))
});


//Gulp Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('scss/site/**/*.scss', ['default']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['css/site/**']).on('change', livereload.changed);

});

