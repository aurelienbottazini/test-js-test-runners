const sum = require('../sum');

test('adds 61 + 63 to equal 124', () => {
  expect(sum(61, 63)).toBe(124);
});