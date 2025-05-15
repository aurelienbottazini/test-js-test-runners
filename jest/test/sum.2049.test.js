const sum2049 = require('../sum2049.js');

test('adds 53 + 76 to equal 129 + offset 0.7521815943860183', () => {
  expect(sum2049(53, 76)).toBe(129 + 0.7521815943860183);
});