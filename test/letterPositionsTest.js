const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');


let sentence = "LHL";
assertArraysEqual(letterPositions(sentence)["L"], [0, 2]);
assertArraysEqual(letterPositions(sentence)["H"], [1]);
