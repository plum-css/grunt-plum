/*
 * grunt-plum
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import test from 'plum-test';

const plum = (grunt) => {

  grunt.registerMultiTask('plum', 'Grunt plugin to build and run visual regression tests against plum stylesheets.', function () {
    const done        = this.async();
    const options     = this.options();
    const config      = {
      base: options.base,
      stylesheets: grunt.file.expand(options.stylesheets),
      tests: grunt.option('tests') ? grunt.option('tests').split(',') : options.tests,
      results: options.results
    };

    if (!grunt.file.exists(options.results)) {
      grunt.file.mkdir(options.results);
    }

    test(config, (err, res) => {
      if (err) {
        return grunt.fail.error(err);
      }
      grunt.log.ok(res);
      done();
    });

  });
};

export default plum;
