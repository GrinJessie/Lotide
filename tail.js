const assertEqual = function(actual, expected) {
  if (actual !== null && typeof actual === 'object' && expected !== null && typeof expected === 'object') {
    equal(JSON.stringify(actual), JSON.stringify(expected));
  } else {
    equal(actual, expected);
  }

};

const equal = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed🙃: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed🤣: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  if (array !== null && Array.isArray(array)) {
    return array.slice(1);
  }
  return undefined;
};

const originalArray = [1 ,2, 3];
tail(originalArray);
assertEqual(originalArray.length, 3);
assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);
assertEqual(tail([1, 2, 3]), [2,3]);

