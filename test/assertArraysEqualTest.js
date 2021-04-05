const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([8, 9, 7], [8, 9, 7]);
assertArraysEqual([8, 9, [7]], [8, 9, [7]]);

