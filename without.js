const without = function(sourceArray, itemsToRemoveArray) {
  return sourceArray.filter(item => {
    if (itemsToRemoveArray.includes(item)) {
      return false;
    } else {
      return true;
    }
  });
};

module.exports = without;

