const allUpper = (sentence) => sentence.toUpperCase();
const firstLetter = (sentence) => sentence.slice(0, 1);
const join = (sentence, otherSentence) => `${sentence} ${otherSentence}`;

console.log(allUpper('cri cri cri'));
console.log(firstLetter('cri cri cri'));
console.log(join('cri cri cri', 'cururu'));

module.exports = { allUpper, firstLetter, join };
