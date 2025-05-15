const sum = require('../sum');

test('adds 8 + 63 to equal 71', () => {
  expect(sum(8, 63)).toBe(71);
});