const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed🙃: [${actual}] === [${expected}]`);
    return;
  }
  console.log(`Assertion Failed🤣: [${actual}] !== [${expected}]`);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);