const sum2224 = require('../sum2224.js');

test('adds 10 + 15 to equal 25 + offset 0.20986878941420606', () => {
  expect(sum2224(10, 15)).toBe(25 + 0.20986878941420606);
});