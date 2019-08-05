module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        /**
         * Minify JavaScript source files.
         */
        uglify: {
            gravityflowfolders: {
                expand: true,
                ext: '.min.js',
                src: [
                    'js/*-build.js',

                    // Exclusions
                    '!js/*.min.js',
                ]
            }
        },
        /**
         * Minify CSS source files.
         */
        cssmin: {
            gravityflowfolders: {
                expand: true,
                ext: '.min.css',
                src: [
                    'css/*.css',
                    // Exclusions
                    '!css/*.min.css',
                ]
            }
        },
    });

    grunt.registerTask('minimize', ['uglify:gravityflowfolders', 'cssmin:gravityflowfolders']);
};