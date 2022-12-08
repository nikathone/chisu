const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const paths = {
  scss: {
    src: './scss/style.scss',
    dest: './css',
    watch: './scss/**/*.scss',
    bootstrap: './node_modules/bootstrap/scss/bootstrap.scss',
  }
};

// specific sass options
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const postcssPlugins = [autoprefixer({cascade: false})];

function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sassGlob())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scss.dest));
}

exports.watch = function () {
  gulp.watch([paths.scss.watch, paths.scss.bootstrap], styles).on('change', function(path, stats) {
    console.log(`File ${path} was changed`);
  });
}
exports.default = gulp.series(styles);
