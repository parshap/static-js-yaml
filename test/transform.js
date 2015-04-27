"use strict";

// Tests using the module through browserify (i.e., transform applied)
//
// Uses source files from the cases/ directory
//
// Adapted from https://github.com/substack/brfs/blob/master/test/bundle.js

var test = require('tape');
var browserify = require('browserify');
var vm = require('vm');
var path = require('path');

function bundleAndRun(file, context, callback) {
  var b = browserify();
  b.add(file);
  b.transform(path.dirname(__dirname) + "/transform.js");

  b.bundle(function(err, src) {
    if ( ! err) {
      try {
        vm.runInNewContext(src, context);
      }
      catch (e) {
        err = e;
      }
    }
    callback(err);
  });
}

test('test static.js (static yaml.safeLoad)', function(t) {
  t.plan(5);
  var context = {
    console: {
      log: function(msg) {
        t.deepEqual(msg.safeLoad, { foo: 1 });
        t.deepEqual(msg.load, { foo: 1 });
        t.deepEqual(msg.safeDump, "foo: 1\n" );
        t.deepEqual(msg.dump, "foo: 1\n" );
      },
    },
  };
  bundleAndRun(__dirname + '/cases/static.js', context, function(err) {
    t.ifError(err);
  });
});

test('test dynamic.js (dynamic yaml.safeLoad)', function(t) {
  bundleAndRun(__dirname + '/cases/dynamic.js', null, function(err) {
    t.ok(err);
    t.equal(err.name, "ReferenceError");
    t.end();
  });
});
