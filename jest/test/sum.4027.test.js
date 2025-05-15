const sum = require('../sum');

test('adds 24 + 89 to equal 113', () => {
  expect(sum(24, 89)).toBe(113);
});