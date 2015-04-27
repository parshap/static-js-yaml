"use strict";

// Tests using the module from node directly (i.e., no transform applied)

var yaml = require("../");
var test = require("tape");

test("parse static string", function(t) {
  t.deepEqual(yaml.safeLoad("foo: 1"), { foo: 1 });
  t.end();
});
