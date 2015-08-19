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
      src: options.src,
      dest: options.dest,
      stylesheets: grunt.file.expand(options.stylesheets),
    };

    if (!grunt.file.exists(options.dest)) {
      grunt.file.mkdir(options.dest);
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
