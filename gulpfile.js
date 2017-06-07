/**
 * Created by Stuart Jones on 07/06/2017.
 */
var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
    return gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'))
});

// gulp.task('less', function(){
//     return gulp.src('client/templates/*.less')
//         .pipe(less())
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('build/css'))
// });

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', [ 'html', 'sass' ]);
