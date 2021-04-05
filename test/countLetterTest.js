const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');



let sentence = "LHL";
assertEqual(countLetters(sentence)["L"], 2);
assertEqual(countLetters(sentence)["H"], 1);

