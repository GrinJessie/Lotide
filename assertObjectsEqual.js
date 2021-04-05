const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`Assertion Passed🙃: `, actual, expected);
    return;
  }
  console.log(`Assertion Failed🤣: `,  actual, expected);
};

module.exports = assertObjectsEqual;
