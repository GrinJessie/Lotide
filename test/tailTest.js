const tail = require('../tail');
const assertEqual = require('../assertEqual');

const originalArray = [1 ,2, 3];
tail(originalArray);
assertEqual(originalArray.length, 3);

assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);

