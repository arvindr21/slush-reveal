/*
 * slush-reveal
 * https://github.com/arvindr21/slush-reveal
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {
    var prompts = [{
        type: 'input',
        name: 'appName',
        message: 'What is the name of your presentation?',
        default: path.basename(process.cwd())
    }, {
        type: 'list',
        name: 'setupType',
        message: 'What type of setup do you want?',
        choices: [{
            name: "I would like to use the default options and build a presentation",
            value: "basic"
          }, {
            name: "I would like to modify the source & theme and build a presentation",
            value: "dev"
          }
        ],
        default: 'basic'
      }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            if(answers.setupType == "dev")
            {
                gulp.src(__dirname + '/templates/dev/**')
                    .pipe(rename(function (file) {
                        if (file.basename[0] === '_') {
                            file.basename = '.' + file.basename.slice(1);
                        }
                    }))
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'))
                    .pipe(install())
                    .on('end', function () {
                        done();
                    });
            }

            if(answers.setupType == "basic")
            {
                gulp.src(__dirname + '/templates/basic/**')
                    .pipe(rename(function (file) {
                        if (file.basename[0] === '_') {
                            file.basename = '.' + file.basename.slice(1);
                        }
                    }))
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'))
                    .pipe(install())
                    .on('end', function () {
                        done();
                    });
            }
        });
});
