# is-money-usd

Test for a USD formatted input

[![Build Status](https://travis-ci.org/cfpb/is-money-usd.svg)](http://travis-ci.org/cfpb/is-money-usd)

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install is-money-usd --save
```

## Usage

```javascript
var isMoney = require('is-money-usd');
isMoney('$1,999.99'); // true
isMoney(400); // true
isMoney('not money') // false
isMoney(',45$.00') //false
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