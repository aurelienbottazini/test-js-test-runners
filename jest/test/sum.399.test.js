const sum = require('../sum');

test('adds 31 + 85 to equal 116', () => {
  expect(sum(31, 85)).toBe(116);
});