# is-money [![Build Status](https://secure.travis-ci.org/cfpb/is-money.png?branch=master)](http://travis-ci.org/cfpb/is-money-usd)

> Test for a USD formatted input

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install is-money --save
```

## Usage

[Require](http://browserify.org/) the module and pass it a [`Position` object](https://developer.mozilla.org/en-US/docs/Web/API/Position):

```javascript
var isMoney = require('is-money-usd');
isMoney('$1,999.99'); // true
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```