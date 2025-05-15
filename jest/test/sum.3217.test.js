const sum = require('../sum');

test('adds 95 + 13 to equal 108', () => {
  expect(sum(95, 13)).toBe(108);
});