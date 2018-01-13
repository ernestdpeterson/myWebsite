/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    // gutil = require('gulp-util'),
    jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

// create a default task and just log a mesage
// gulp.task('default', function() {
//     return gutil.log('Gulp is running!');
// });

// define the default task an add the watch task to it
gulp.task('default', ['watch']);

//configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('js/dom.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('js/dom.js', ['jshint']);
});

// copy files from production to distribution
gulp.task('copyThat', function() {
  // copy files to distro/
  // gulp.src(['*.html ', 'images/*.*']).pipe(gulp.dest('distro'));
  // gulp.src('images/*.*').pipe(gulp.dest('distro/images'));
  // gulp.src('Frogger-master/*/*').pipe(gulp.dest('distro/Frogger-master'));
  gulp.src('js/dom.js').pipe(uglify()).pipe(gulp.dest('distro/js'));
});

// atempt at browser sinc
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "."
//         }
//     });
// });