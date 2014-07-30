'use strict';

var isMoney = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.isMoney = {
  setUp: function(done) {
    // setup here
    done();
  },
  'Integers': function(test) {
    test.expect(2);
    test.equal(isMoney(3), true, 'small integer should be true.');
    test.equal(isMoney(50000000), true, 'large integer should be true.');
    test.done();
  },
  'Strings': function(test) {
    test.expect(5);
    test.equal(isMoney('3'), true, 'small numeric string should be true.');
    test.equal(isMoney('50000000'), true, 'large numeric string should be true.');
    test.equal(isMoney('dollar dollar bill'), false, 'non-numeric string should be false.');
    test.equal(isMoney('500.27.45'), false, 'misformated float should return false.');
    test.equal(isMoney('#45.00'), false, 'strings with special characters should return false');
    test.done();
  },
  'Floats': function(test) {
    test.expect(2);
    test.equal(isMoney(3.25), true, 'small float should be true.');
    test.equal(isMoney(50000000.72), true, 'large float should be true.');
    test.done();
  },
  'Dollar strings': function(test) {
    test.expect(7);
    test.equal(isMoney('$3'), true, 'simple dollar formated strings should return true');
    test.equal(isMoney('$5,000,000'), true, 'strings with dollar signs and commas should return true');
    test.equal(isMoney('3,000'), true, 'strings with commas but no dollar sign should return true');
    test.equal(isMoney('$3.56'), true, 'dollar and decimal place should return true');
    test.equal(isMoney('$3,000.45'), true, 'dollar sign, commas, and decimals should return true');
    test.equal(isMoney('3,672.38'), true, 'commas and decimals should return true');
    test.equal(isMoney(',45$.00'), false, 'incorrectly formatted $ strings should return false');
    test.done();
  },
  "Dollar strings vs. Floats":function(test) {
    test.expect(4);
    test.equal(isMoney("$3."),isMoney(3.),"Dollar strings that would otherwise parse as floats show return true");
    test.equal(isMoney("$3.1"),isMoney(3.1),"Dollar strings that would otherwise parse as floats show return true");
    test.equal(isMoney("$3.14"),isMoney(3.14),"Dollar strings that would otherwise parse as floats show return true");
    test.equal(isMoney("$3.141"),isMoney(3.141),"Dollar strings that would otherwise parse as floats show return true");
    test.done();
  } 

};
