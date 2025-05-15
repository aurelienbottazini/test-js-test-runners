const sum2784 = require('../sum2784.js');

test('adds 51 + 89 to equal 140 + 0.8111413323119041', () => {
  expect(sum2784(51, 89)).toBe(140 + 0.8111413323119041);
});