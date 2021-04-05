const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');


const originalArray = [0, 0, 0];
without(originalArray, [0]);
assertArraysEqual(originalArray, [0, 0,0]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5]), [2, 4]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5, 8]), [2, 4]);
assertArraysEqual(without(["1", "2", "3", 4, 5], ["1", "3", 5, 8]), ["2", 4]);


