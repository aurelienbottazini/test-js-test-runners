const sum = require('../sum');

test('adds 32 + 76 to equal 108', () => {
  expect(sum(32, 76)).toBe(108);
});