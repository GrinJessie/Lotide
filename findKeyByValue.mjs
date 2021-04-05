import { assertEqual } from "./assertEqual.mjs";

const findKeyByValue = (obj, value) => {
    for (const key of Object.keys(obj)) {
        if (obj[key] === value) {
            return key;
        }
    }
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);