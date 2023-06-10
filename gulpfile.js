const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

const paths = {
  scripts: {
    src: 'src/*.js',
    dest: 'dist/'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist/'
  },
 

};

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(connect.reload());
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload());
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src, html);
}

function serve() {
  connect.server({
    livereload: true,
    port: 8080,
    root: 'dist'
  });
}

exports.default = gulp.series(gulp.parallel(scripts, html, serve, watch));
