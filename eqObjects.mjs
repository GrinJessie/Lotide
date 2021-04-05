import { assertEqual } from "./assertEqual.mjs";
import { eqArrays } from "./eqArrays.mjs";

export const eqObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (const key of Object.keys(obj1)) {
        if (obj1[key] !== obj2[key]) {
            if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                return eqArrays(obj1[key], obj2[key]);
            }
            return false;
        }
    }
    return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


