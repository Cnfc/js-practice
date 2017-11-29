const gulp   = require('gulp');
const babel  = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
  // ESLINT
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
  .pipe(eslint())
  .pipe(eslint.format());

  // NODE FOR
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));

  //BROWSER FOR
  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist"));
});
