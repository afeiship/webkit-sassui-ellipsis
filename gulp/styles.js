(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles',function() {
    return gulp.src('src/*.scss')
      .pipe(gulp.dest('dist'))
      .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
      .pipe(gulp.dest('dist'))
      .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
      .pipe($.rename({
        extname:'.min.css'
      }))
      .pipe(gulp.dest('dist'));
  });


}());
