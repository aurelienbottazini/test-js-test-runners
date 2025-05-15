const sum1820 = require('../sum1820.js');

test('adds 85 + 7 to equal 92 + offset 0.5826908779851471', () => {
  expect(sum1820(85, 7)).toBe(92 + 0.5826908779851471);
});