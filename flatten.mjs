import { assertArraysEqual } from "./assertArraysEqual.mjs";

// const flatten = function(nestedArray, flattenArray) {
//     for (const item of nestedArray) {
//         if(Array.isArray(item)) {
//             flatten(item, flattenArray);
//         } else {
//             flattenArray.push(item);
//         }
//     }

//     return flattenArray;
// }

const flatten = function(nestedArray, flattenArray) {
    for (const item of nestedArray) {
        if(Array.isArray(item)) {
            flatten(item, flattenArray);
        } else {
            flattenArray.push(item);
        }
    }
    return flattenArray;
}

assertArraysEqual(flatten([[1, [2]], 3, [4, 5]], []), [1, 2, 3, 4, 5]);