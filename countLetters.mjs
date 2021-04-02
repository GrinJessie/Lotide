import { assertEqual } from "./assertEqual.mjs";

const countLetters = function(sentence) {
    const summary = {};
    for (const letter of sentence) {
        summary[letter] = letter in summary ? summary[letter] + 1 : 1;
    }

    return summary;
}

var sentence = "LHL";
assertEqual(countLetters(sentence)["L"], 2);
assertEqual(countLetters(sentence)["H"], 1);

