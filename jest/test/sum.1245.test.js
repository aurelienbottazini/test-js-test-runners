const sum = require('../sum');

test('adds 50 + 58 to equal 108', () => {
  expect(sum(50, 58)).toBe(108);
});