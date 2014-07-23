/*
 * is-money
 *
 *
 * Copyright (c) 2014
 * Licensed under the  license.
 */

'use strict';

module.exports = function(num) {

  // convert the number to a string
  num = num.toString();

  var numReg = /^\$?(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$/;

  // check for numbers and regex patterns
  if ( ( !isNaN(+num) ) ||
       ( numReg.test(num) ) ) {
    return true;
  }
  return false;

};