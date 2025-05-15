const sum = require('../sum');

test('adds 99 + 17 to equal 116', () => {
  expect(sum(99, 17)).toBe(116);
});