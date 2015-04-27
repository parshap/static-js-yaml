# static-js-yaml

Source transform static [`js-yaml`][js-yaml] expressions to remove yaml.

[js-yaml]: https://www.npmjs.com/package/js-yaml

## Example

Source:

```js
var yaml = require("static-js-yaml");
console.log(yaml.safeLoad("foo: 1"));
console.log(yaml.dump({foo: 1}));
```

Becomes:

```js
console.log({ foo: 1 });
```

## Usage

1. Use the `static-js-yaml` module with *[statically-analyzable
   expressions][static-eval]* in place of the `js-yaml` module.
1. Use the `js-yaml/transform` module as a [browserify transform][] to
   transform your source.

`js-yaml/transform`

[static-eval]: https://www.npmjs.com/package/static-eval
[browserify transform]: https://github.com/substack/browserify-handbook#transforms

## API

### `static-js-yaml`

A subset of the `js-yaml` API is exported: `safeLoad`, `load`,
`safeDump`, `dump` (everything but *multi-document* loaders).

### `static-js-yaml/transform`

The transform module is implemented as a browserify transform function
but can be used directly without browserify.
