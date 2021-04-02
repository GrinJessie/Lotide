import { assertEqual } from "./assertEqual.mjs";

const head = function(array) {
  if (array !== null && Array.isArray(array) && array.length > 0) {
    return array[0];
  }
  return undefined;
};

assertEqual(head("not an Array"), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["onlyOne"]), "onlyOne");
assertEqual(head([]), undefined);