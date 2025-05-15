const sum = require('../sum');

test('adds 79 + 63 to equal 142', () => {
  expect(sum(79, 63)).toBe(142);
});