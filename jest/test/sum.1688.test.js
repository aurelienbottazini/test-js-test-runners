const sum1688 = require('../sum1688.js');

test('adds 5 + 22 to equal 27 + offset 0.769764178454086', () => {
  expect(sum1688(5, 22)).toBe(27 + 0.769764178454086);
});