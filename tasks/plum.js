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
      src: options.src,
      dest: options.dest,
      stylesheets: grunt.file.expand(options.stylesheets)
    };

    if (!grunt.file.exists(options.dest)) {
      grunt.file.mkdir(options.dest);
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