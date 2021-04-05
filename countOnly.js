const countOnly = function(allItems, itemsToCount) {
  const countSummary = {};

  for (const key of Object.keys(itemsToCount)) {
    if (!itemsToCount[key] || !allItems.includes(key)) {
      continue;
    }
    countSummary[key] = allItems.filter(item => item === key).length;
   
  }

  return countSummary;
};

module.exports = countOnly;
