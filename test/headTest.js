const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head("not an Array"), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["onlyOne"]), "onlyOne");
assertEqual(head([]), undefined);