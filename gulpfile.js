const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function comprimeImage() {
  return gulp
    .src("./construcao/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./final/images"));
}

function compilaSass() {
  return gulp
    .src("./construcao/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write(""))

    .pipe(gulp.dest("./final/styles"));
}

exports.default = function () {
  gulp.watch("./construcao/images/*", gulp.series(comprimeImage));
  gulp.watch("./construcao/styles/*scss", gulp.series(compilaSass));
};
