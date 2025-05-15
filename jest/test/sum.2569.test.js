const sum = require('../sum');

test('adds 6 + 63 to equal 69', () => {
  expect(sum(6, 63)).toBe(69);
});