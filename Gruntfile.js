'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    plum: {
      test: {
        options: {
          src: 'test/fixtures',
          dest: 'test/tmp',
          stylesheets: ['compiled.css']
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['plum']);
};
