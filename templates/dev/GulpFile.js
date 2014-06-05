'use strict';

var gulp = require('gulp');
var header = require('gulp-header');
var pkg = require('./package.json');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var qunit = require('gulp-qunit');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var zip = require('gulp-zip');

var banner = ['/*!\n',
    ' * reveal.js <%= pkg.version %> (<%= now() %>)\n' ,
    ' * http://lab.hakim.se/reveal-js\n' ,
    ' * MIT licensed\n' ,
    ' *\n' ,
    ' * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n' ,
    ' */',
    '\n'].join('');

gulp.task('qunit', function() {
    return gulp.src('test/*.html')
        .pipe(qunit());
});

gulp.task('uglify', function() {
  gulp.src('js/reveal.js')
    .pipe(uglify())
    .pipe(rename('reveal.min.js'))
    .pipe(header(banner, { 
        pkg : pkg,
        now: function () {
            var d = new Date();
            var date = d.getDate() < 10 ? '0'+d.getDate() : d.getDate();
            var month = d.getMonth() < 9 ? '0'+ (d.getMonth() + 1) : (d.getMonth() + 1);
            var year = d.getFullYear();
            var hours = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
            var mins = d.getMinutes();
         return (year+'-'+month+'-'+date+', '+hours+':'+mins);
       }
    }))
    .pipe(gulp.dest('js'));
});

gulp.task('cssmin', function () {
    gulp.src('css/reveal.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
    gulp.src('css/theme/source/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/theme'));
});

gulp.task('jshint', function() {
  return gulp.src([ 'gulpFile.js', 'js/reveal.js' ])
    .pipe(jshint({
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false
                }
            }))
    .pipe(jshint.reporter('default'));
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port : 8000
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('zip', function () {
    return gulp.src([
                'index.html',
                'css/**',
                'js/**',
                'lib/**',
                'images/**',
                'plugin/**'
            ], {base: "."})
        .pipe(zip('reveal-js-presentation.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch([ 'gulpFile.js', 'js/reveal.js', 'css/reveal.css' ], ['themes','html']);
  gulp.watch([ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ], ['themes']);
});

// Default task
gulp.task( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

// Theme task
gulp.task( 'themes', [ 'sass' ] );

// Package presentation to archive
gulp.task( 'package', [ 'default', 'zip' ] );

// Serve presentation locally
gulp.task( 'serve', [ 'connect', 'watch' ] );

// Run tests
gulp.task( 'test', [ 'jshint', 'qunit' ] );
