const sum = require('../sum');

test('adds 64 + 44 to equal 108', () => {
  expect(sum(64, 44)).toBe(108);
});