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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _plumFixture = require('plum-fixture');

var _plumFixture2 = _interopRequireDefault(_plumFixture);

var _plumRegression = require('plum-regression');

var _plumRegression2 = _interopRequireDefault(_plumRegression);

var plum = function plum(grunt) {

  grunt.registerMultiTask('plum', 'Grunt task runner to build and run regressions tests against plum stylesheets.', function () {
    var src = this.files[0].src;
    var dest = this.files[0].dest;
    var done = this.async();
    var fixtureOptions = {
      files: src,
      destination: '' + dest + '/fixtures'
    };
    var regressionOptions = {
      stylesheets: 'css',
      tests: src,
      fixtures: '' + dest + '/fixtures',
      results: '' + dest + '/results',
      failures: '' + dest + '/failures'
    };

    grunt.file.mkdir(regressionOptions.fixtures);

    (0, _plumFixture2['default'])(fixtureOptions, function (err, response) {
      if (err) grunt.fail.error(err);

      (0, _plumRegression2['default'])(regressionOptions, function (err, resp) {
        if (err) grunt.fail.error(err);

        grunt.file['delete'](dest);
        grunt.log.ok(resp);
        done();
      });
    });
  });
};

exports['default'] = plum;
module.exports = exports['default'];