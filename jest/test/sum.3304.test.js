const sum = require('../sum');

test('adds 4 + 63 to equal 67', () => {
  expect(sum(4, 63)).toBe(67);
});