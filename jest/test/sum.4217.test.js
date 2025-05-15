const sum = require('../sum');

test('adds 58 + 58 to equal 116', () => {
  expect(sum(58, 58)).toBe(116);
});