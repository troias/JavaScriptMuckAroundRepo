const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');
const typescript = require('gulp-typescript');

const paths = {
  scripts: {
    src: 'src/**/*.ts', // Include all TypeScript files in the src folder and its subfolders
    dest: 'dist/'
  },
  html: {
    src: 'src/**/*.html', // Include all HTML files in the src folder and its subfolders
    dest: 'dist/'
  }
};

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(typescript()) // Compile TypeScript files
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(livereload());
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(livereload());
}

function watch() {
  livereload.listen(); // Start the livereload server
  gulp.watch(paths.scripts.src, gulp.series(scripts));
  gulp.watch(paths.html.src, gulp.series(html));
}

function serve() {
  connect.server({
    livereload: true,
    port: 8080,
    root: 'dist'
  });
}

exports.default = gulp.series(gulp.parallel(scripts, html), gulp.parallel(serve, watch));
