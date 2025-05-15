const sum1242 = require('../sum1242.js');

test('adds 12 + 35 to equal 47 + offset 0.561605905213815', () => {
  expect(sum1242(12, 35)).toBe(47 + 0.561605905213815);
});