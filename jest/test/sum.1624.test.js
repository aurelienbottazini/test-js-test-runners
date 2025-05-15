const sum = require('../sum');

test('adds 19 + 63 to equal 82', () => {
  expect(sum(19, 63)).toBe(82);
});