const sum1636 = require('../sum1636.js');

test('adds 68 + 14 to equal 82 + offset 0.8833666335474959', () => {
  expect(sum1636(68, 14)).toBe(82 + 0.8833666335474959);
});