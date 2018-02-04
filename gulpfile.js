/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

// define the default task an add the watch task to it
gulp.task('default', function() {
    gulp.watch('js/dom.js', ['jshint']);
    gulp.watch(['./index.html', './style.css', './js/dom.js']).on('change', browserSync.reload);

    browserSync.init({
        server: './'
    });
});

//configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('js/dom.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

// copy files from production to distribution
gulp.task('copyThat', function() {
  gulp.src('index.html').pipe(gulp.dest('distro'));
  gulp.src('js/dom.js').pipe(uglify()).pipe(gulp.dest('distro/js'));
});