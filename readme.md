[![npm](https://img.shields.io/npm/dm/mocha-asimov-reporter.svg)]()
[![npm](https://img.shields.io/npm/dt/mocha-asimov-reporter.svg)]()
[![npm](https://img.shields.io/npm/v/mocha-asimov-reporter.svg)]()

# 1. Mocha-asimov-reporter

<!-- TOC -->

- [1. Mocha-asimov-reporter](#1-mocha-asimov-reporter)
    - [1.1. Setup](#11-setup)
    - [1.2. Output](#12-output)
    - [1.3. Examples](#13-examples)
        - [Testing](#testing)

<!-- /TOC -->

Mocha custom reporter to be used with [asimov deploy](https://github.com/asimov-deploy/asimov-deploy) -

Asimov Deploy is a simple distributed deployment tool that enables you to deploy applications to multiple machines through a central web interface.

The Mocha-Asimov-reporter allows you to write mocha tests and generate report output in a format that asimov-deploy can read.

## 1.1. Setup

1.  `npm install @tradera/mocha-asimov-reporter`
2.  Add to mocha via the command line `--reporter @tradera/mocha-asimov-reporter`

## 1.2. Output

* Reporter only supports pass/fail for asimov;
* Tests that are skipped will be ignored

![](reporter-screenshot.png)

## 1.3. Examples

Example mocha test:

```javascript
describe("test mocha-asimov-reporter output", function() {
  it("should pass", function() {
    assert.ok(true);
  });
});
```

Expected output:

```
##asimov-deploy[test='test mocha-asimov-reporter output should pass' pass='true']
```


### Testing

`yarn test`