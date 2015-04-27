"use strict";

// Wrapper around js-yaml exporting a subset of the api.

var yaml = require("js-yaml");

module.exports = {
  safeLoad: yaml.safeLoad,
  load: yaml.load,
  safeDump: yaml.safeDump,
  dump: yaml.dump,
};
