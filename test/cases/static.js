"use strict";
var yaml = require("static-js-yaml");
console.log({
  safeLoad: yaml.safeLoad("foo: 1"),
  load: yaml.load("foo: 1"),
  safeDump: yaml.safeDump({ foo: 1 }),
  dump: yaml.dump({ foo: 1 }),
});
