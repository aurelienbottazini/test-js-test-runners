const sum = require('../sum');

test('adds 87 + 63 to equal 150', () => {
  expect(sum(87, 63)).toBe(150);
});