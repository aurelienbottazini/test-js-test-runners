const sum2699 = require('../sum2699.js');

test('adds 66 + 89 to equal 155 + 0.048347146378265315', () => {
  expect(sum2699(66, 89)).toBe(155 + 0.048347146378265315);
});