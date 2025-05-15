const sum = require('../sum');

test('adds 21 + 87 to equal 108', () => {
  expect(sum(21, 87)).toBe(108);
});