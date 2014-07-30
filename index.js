/*
 * is-money-usd
 * @param {string OR number} string or number to be checked if in a currency format.
 */

'use strict';

module.exports = function(num) {

  // convert the number to a string
  num = num.toString();

  var numReg = /^\$?\d{1,3}(,\d{3})*(\.\d*)?$/;

  // check for numbers and regex patterns
  if ( ( !isNaN(+num) ) ||
       ( numReg.test(num) ) ) {
    return true;
  }
  return false;

};
