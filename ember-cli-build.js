'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const json = require('broccoli-json-module');
const Funnel = require('broccoli-funnel');
const Rollup = require('broccoli-rollup');
const merge = require('broccoli-merge-trees');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  var features = new Rollup(json('features-source'), {
    rollup: {
      entry: 'main.js',
      format: 'umd',
      dest: 'main.js',
      moduleName: 'features'
    }
  });

  var extraAssets = new Funnel(features, {
    srcDir: '/',
    destDir: '/assets/features'
  });

  return merge([app.toTree(), extraAssets]);
};
