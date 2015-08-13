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

var _plumTest = require('plum-test');

var _plumTest2 = _interopRequireDefault(_plumTest);

var plum = function plum(grunt) {

  grunt.registerMultiTask('plum', 'Grunt plugin to build and run visual regression tests against plum stylesheets.', function () {
    var done = this.async();
    var options = this.options();
    var config = {
      base: options.base,
      stylesheets: grunt.file.expand(options.stylesheets),
      tests: grunt.option('tests') ? grunt.option('tests').split(',') : options.tests,
      results: options.results
    };

    if (!grunt.file.exists(options.results)) {
      grunt.file.mkdir(options.results);
    }

    (0, _plumTest2['default'])(config, function (err, res) {
      if (err) {
        return grunt.fail.error(err);
      }
      grunt.log.ok(res);
      done();
    });
  });
};

exports['default'] = plum;
module.exports = exports['default'];