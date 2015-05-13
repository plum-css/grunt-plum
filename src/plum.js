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

  grunt.registerMultiTask('plum', 'Grunt task runner to build and run regressions tests against plum stylesheets.', function () {
    let src  = this.files[0].src;
    let dest = this.files[0].dest;
    let done = this.async();
    let fixtureOptions = {
      files       : src,
      destination : `${dest}/fixtures`
    };
    let regressionOptions = {
      stylesheets : 'css',
      tests       : src,
      fixtures    : `${dest}/fixtures`,
      results     : `${dest}/results`,
      failures    : `${dest}/failures`
    };

    grunt.file.mkdir(regressionOptions.fixtures);

    fixture(fixtureOptions, (err, response) => {
      if (err) grunt.fail.error(err);

      regression(regressionOptions, (err, resp) => {
        if (err) grunt.fail.error(err);

        grunt.file.delete(dest);
        grunt.log.ok(resp);
        done();
      });
    });

  });
};

export default plum;
