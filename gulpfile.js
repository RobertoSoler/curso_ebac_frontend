const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false},gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial: false},gulp.series(comprimeImagens));
}
