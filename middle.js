const middle = function(array) {
  if (array.length <= 1) {
    return [];
  }
  const remainder = array.length % 2;
  if (remainder !== 0) {
    return [array[(array.length - remainder) / 2 + remainder - 1]];
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
};

module.exports = middle;


