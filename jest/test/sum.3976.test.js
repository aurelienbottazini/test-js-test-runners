const sum = require('../sum');

test('adds 27 + 63 to equal 90', () => {
  expect(sum(27, 63)).toBe(90);
});