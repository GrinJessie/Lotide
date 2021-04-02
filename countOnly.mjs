import { assertEqual } from "./assertEqual.mjs";

const countOnly = function(allItems, itemsToCount) {
    const countSummary = {};

    for (const key of Object.keys(itemsToCount)) {
        if (!itemsToCount[key] || !allItems.includes(key)) {
            continue;
        }
        countSummary[key] = allItems.filter(item => item === key).length;
   
    }

    return countSummary;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);