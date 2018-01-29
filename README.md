# no-optional-catch-binding

[![Current Version](https://img.shields.io/npm/v/no-optional-catch-binding.svg)](https://www.npmjs.org/package/no-optional-catch-binding)
[![Build Status via Travis CI](https://travis-ci.org/continuationlabs/no-optional-catch-binding.svg?branch=master)](https://travis-ci.org/continuationlabs/no-optional-catch-binding)
![Dependencies](http://img.shields.io/david/continuationlabs/no-optional-catch-binding.svg)

# disallow optional error variable binding in `catch` blocks (no-optional-catch-binding)

JavaScript allows error variables to be optionally omitted from `catch` clauses. For example:

```js
(() => {
    try {
        throw new Error();
        return 1;
    } catch {
        // The caught exception is not used, and has been omitted.
        return 2;
    }
})();
```

## Rule Details

This rule requires that each `catch` clause includes an error variable binding.

An example of **incorrect** code for this rule:

```js
/*eslint no-optional-catch-binding: "error"*/
(() => {
    try {
        throw new Error();
        return 1;
    } catch {
        return 2;
    }
})();
```

An example of **correct** code for this rule:

```js
/*eslint no-optional-catch-binding: "error"*/
(() => {
    try {
        throw new Error();
        return 1;
    } catch (err) {
        return 2;
    }
})();
```

## When Not To Use It

If you want to allow optional `catch` binding, you can turn this rule off.
