var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

gulp.task("upload", ["mocha"], function() {
  return gulp.src(".")
    .pipe($.exec("gapps upload"));
});

gulp.task("mocha", function() {
  return gulp
    .src(["test/*.js"])
    .pipe($.mocha({ reporter: "spec" }));
});

gulp.task("watch", function() {
  return gulp
    .watch(["src/**", "test/**"], ["upload"]);
});
