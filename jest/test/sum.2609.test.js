const sum2609 = require('../sum2609.js');

test('adds 51 + 89 to equal 140 + offset 0.14906111671442301', () => {
  expect(sum2609(51, 89)).toBe(140 + 0.14906111671442301);
});