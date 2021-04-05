const countLetters = function(sentence) {
  const summary = {};
  for (const letter of sentence) {
    summary[letter] = letter in summary ? summary[letter] + 1 : 1;
  }

  return summary;
};

module.exports = countLetters;

