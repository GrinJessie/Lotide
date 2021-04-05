const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual([], []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);