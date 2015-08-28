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
      options: {
        src: 'path/to/plum/directory',
        dest: 'path/to/save/results/to',
        stylesheets: ['path/to/compiled/stylesheets']
      }
    }
  }
})
```

### CLI

```bash
grunt plum:test
```

To run only a specific test(s) you can pass a comma `,` seperated list of paths to the the `--tests`.

```bash
# run all the modules tests.
grunt plum:test --tests=modules

# run only the button modules tests.
grunt plum:test --tests=modules/button
```

## Options

Name                | Type            | Argument     | Description
--------------------|-----------------|--------------|------------
options.src         | `string`        | `<required>` | the src path to your plum stylesheets.
options.dest        | `string`        | `<required>` | the path to save the test results to.
options.stylesheets | `array|string`  | `<required>` | the path to your compiled css stylesheets.
options.tests       | `array|string`  | `<optional>` | the paths to the tests to be run.


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
