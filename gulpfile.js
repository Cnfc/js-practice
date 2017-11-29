const gulp   = require('gulp');
const babel  = require('gulp-babel');

gulp.task('default', function() {
  // Gulp
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  // Browser for
  gulp.scr("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dest"));
});
