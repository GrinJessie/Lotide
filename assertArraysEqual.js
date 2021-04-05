const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const isEqual = eqArrays(array1, array2);
  if (isEqual) {
    console.log(`Assertion Passed🙃: ${array1} === ${array2}.`);
    return;
  }
  console.log(`Assertion Failed🤣: ${array1} !== ${array2}.`);
};

module.exports = assertArraysEqual;
