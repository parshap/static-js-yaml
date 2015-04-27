"use strict";

var PACKAGE_NAME = require("./package.json").name;
var staticModule = require("static-module");
var through = require("through2");
var yaml = require("./index");

function wrap(fn) {
  return function() {
    return JSON.stringify(fn.apply(null, arguments));
  };
}

var wrapped = {};
Object.keys(yaml).forEach(function(name) {
  wrapped[name] = wrap(yaml[name]);
});

var modules = {};
modules[PACKAGE_NAME] = wrapped;


module.exports = function(file) {
  if (/\.json$/.test(file)) {
    return through();
  }

  return staticModule(modules);
};
