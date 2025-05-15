const sum1687 = require('../sum1687.js');

test('adds 92 + 28 to equal 120 + offset 0.1606196820519804', () => {
  expect(sum1687(92, 28)).toBe(120 + 0.1606196820519804);
});