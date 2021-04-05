const letterPositions = function(sentence) {
  const summary = {};

  const cleanedSentence = sentence.replace(/\s/g, "");
  cleanedSentence.split('').forEach((letter, index) => {
    summary[letter] = letter in summary ? [...summary[letter], index] : [index];
  });


  return summary;
};

module.exports = letterPositions;

