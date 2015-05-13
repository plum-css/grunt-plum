# grunt-plum [![Build Status](https://travis-ci.org/plum-css/grunt-plum.png?branch=master)](https://travis-ci.org/plum-css/grunt-plum)

> Grunt plugin to build and run regressions tests against plum stylesheets.


## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plum --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-plum');
```


## Usage

In your project's Gruntfile, add a section named `plum` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  plum: {
    test: {
      files: [
        {
          src: ['paths/to/your/test/files'],
          dest: 'path/where/your/fixtures/and/results/should/be/saved'
        }
      ]
    }
  }
})
```


## Options

Name       | Type     | Argument     | Description
-----------|----------|--------------|--------------|------------
files.src  | `array`  | `<required>` | the path(s) where your test files are located.
files.dest | `string` | `<required>` | the path to save your fixtures and results to.


## Developing

[grunt-plum](https://github.com/plum-css/grunt-plum) is built using **ES6**. Run the following task to compile the `src/` into `tasks/`.

```shell
npm run build
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
