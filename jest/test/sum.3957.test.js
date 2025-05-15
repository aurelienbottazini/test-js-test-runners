const sum = require('../sum');

test('adds 49 + 63 to equal 112', () => {
  expect(sum(49, 63)).toBe(112);
});