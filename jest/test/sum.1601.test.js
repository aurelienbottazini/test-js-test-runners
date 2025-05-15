const sum1601 = require('../sum1601.js');

test('adds 51 + 5 to equal 56 + 0.3090342010230158', () => {
  expect(sum1601(51, 5)).toBe(56 + 0.3090342010230158);
});