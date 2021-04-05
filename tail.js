const tail = function(array) {
  if (array !== null && Array.isArray(array)) {
    return array.slice(1);
  }
  return undefined;
};

module.exports = tail;



