/*
 * grunt-plum
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import path from 'path';
import fixture from 'plum-fixture';
import regression from 'plum-regression';

let plum = (grunt) => {

  grunt.registerMultiTask('plum', 'Grunt plugin to build and run visual regression tests against plum stylesheets.', function () {
    let done     = this.async();
    let options  = this.options();
    let fixtures = `${options.results}/fixtures`;
    let failures = `${options.results}/failures`;
    let results  = `${options.results}/results`;
    let tests    = (() => {
      if (grunt.option('tests')) {
        return grunt.option('tests').split(',');
      }
      return options.tests;
    })().map(test => `${options.stylesheets}/${test}`);


    if (grunt.file.exists(options.results)) {
      grunt.file.delete(options.results);
    }

    if (!grunt.file.exists(fixtures)) {
      grunt.file.mkdir(fixtures);
    }

    fixture({ files: tests, destination: fixtures }, (err, response) => {
      if (err) {
        return grunt.fail.error(err);
      }

      regression({
        stylesheets: options.stylesheets,
        tests: tests,
        fixtures: fixtures,
        results: results,
        failures: failures
        }, (err, resp) => {
          if (err) {
            return grunt.fail.error(err);
          }

          grunt.file.delete(fixtures);
          grunt.file.delete(results);
          grunt.log.ok(resp);
          done();
      });
    });

  });
};

export default plum;
