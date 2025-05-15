const sum = require('../sum');

test('adds 10 + 98 to equal 108', () => {
  expect(sum(10, 98)).toBe(108);
});