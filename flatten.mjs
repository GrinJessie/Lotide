import { assertArraysEqual } from "./assertArraysEqual.mjs";

let flattenArray = [];
const flatten = function(nestedArray) {
    for (const item of nestedArray) {
        if(Array.isArray(item)) {
            flatten(item);
        } else {
            flattenArray.push(item);
        }
    }

    return flattenArray;
}

assertArraysEqual(flatten([[1, [2]], 3, [4, 5]]), [1, 2, 3, 4, 5]);