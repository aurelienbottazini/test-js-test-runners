const sum = require('../sum');

test('adds 18 + 90 to equal 108', () => {
  expect(sum(18, 90)).toBe(108);
});