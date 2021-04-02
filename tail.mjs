import { assertEqual } from "./assertEqual.mjs";

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

