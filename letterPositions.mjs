import { assertArraysEqual } from "./assertArraysEqual.mjs";

const letterPositions = function(sentence) {
    const summary = {};

    const cleanedSentence = sentence.replace(/\s/g, "");
    cleanedSentence.split('').forEach((letter, index) => {
        summary[letter] = letter in summary ? [...summary[letter], index] : [index];
    });


    return summary;
}

var sentence = "LHL";
assertArraysEqual(letterPositions(sentence)["L"], [0, 2]);
assertArraysEqual(letterPositions(sentence)["H"], [1]);
