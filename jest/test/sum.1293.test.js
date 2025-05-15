const sum = require('../sum');

test('adds 98 + 18 to equal 116', () => {
  expect(sum(98, 18)).toBe(116);
});