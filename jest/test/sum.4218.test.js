const sum = require('../sum');

test('adds 24 + 92 to equal 116', () => {
  expect(sum(24, 92)).toBe(116);
});