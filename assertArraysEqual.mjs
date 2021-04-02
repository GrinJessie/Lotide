export const eqArrays = function(array1, array2) {
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

export const assertArraysEqual = function(array1, array2) {
  const isEqual = eqArrays(array1, array2);
  if (isEqual) {
    console.log(`Assertion Passed🙃: [${array1}] === [${array2}]`);
    return;
  }
  console.log(`Assertion Failed🤣: [${array1}] !== [${array2}]`);
};

assertArraysEqual([8, 9, 7], [8, 9, 7]);