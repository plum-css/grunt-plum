'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    plum: {
      test: {
        options: {
          base: 'test/fixtures',
          stylesheets: ['compiled.css'],
          tests: ['test/fixtures/units'],
          results: 'test/tmp'
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['plum']);
};
