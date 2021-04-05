const flatten = function(nestedArray, flattenArray) {
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      flatten(item, flattenArray);
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

module.exports = flatten;
