import { eqObjects } from "./eqObjects.mjs";

const assertObjectsEqual = (actual, expected) => {
    const isEqual = eqObjects(actual, expected);
    if (isEqual) {
      console.log(`Assertion Passed🙃: `, actual, expected);
      return;
    }
    console.log(`Assertion Failed🤣: `,  actual, expected);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);