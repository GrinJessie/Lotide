export const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed🙃: [${actual}] === [${expected}]`);
    return;
  }
  console.log(`Assertion Failed🤣: [${actual}] !== [${expected}]`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("ApPle", "ApPle");
assertEqual("Apple", "apple");
assertEqual(1, 1);
assertEqual(0, 1);
assertEqual("1", 1);