const sum2963 = require('../sum2963.js');

test('adds 12 + 64 to equal 76 + offset 0.6339467948191122', () => {
  expect(sum2963(12, 64)).toBe(76 + 0.6339467948191122);
});