/*
 * grunt-plum
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _plumFixture = require('plum-fixture');

var _plumFixture2 = _interopRequireDefault(_plumFixture);

var _plumRegression = require('plum-regression');

var _plumRegression2 = _interopRequireDefault(_plumRegression);

var plum = function plum(grunt) {

  grunt.registerMultiTask('plum', 'Grunt plugin to build and run visual regression tests against plum stylesheets.', function () {
    var done = this.async();
    var options = this.options();
    var fixtures = '' + options.results + '/fixtures';
    var failures = '' + options.results + '/failures';
    var results = '' + options.results + '/results';
    var base = options.base;
    var tests = (function () {
      if (grunt.option('tests')) {
        return grunt.option('tests').split(',');
      }
      return options.tests;
    })().map(function (test) {
      return '' + base + '/' + test;
    });
    var css = grunt.file.expand(options.css).map(function (path) {
      return { url: path };
    });

    if (grunt.file.exists(options.results)) {
      grunt.file['delete'](options.results);
    }

    if (!grunt.file.exists(fixtures)) {
      grunt.file.mkdir(fixtures);
    }

    (0, _plumFixture2['default'])({
      css: css,
      files: tests,
      destination: fixtures
    }, function (err, response) {
      if (err) {
        return grunt.fail.error(err);
      }

      (0, _plumRegression2['default'])({
        stylesheets: base,
        tests: tests,
        fixtures: fixtures,
        results: results,
        failures: failures
      }, function (err, resp) {
        if (err) {
          return grunt.fail.error(err);
        }

        grunt.file['delete'](fixtures);
        grunt.file['delete'](results);
        grunt.log.ok(resp);
        done();
      });
    });
  });
};

exports['default'] = plum;
module.exports = exports['default'];