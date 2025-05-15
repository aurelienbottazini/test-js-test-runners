const sum = require('../sum');

test('adds 60 + 56 to equal 116', () => {
  expect(sum(60, 56)).toBe(116);
});