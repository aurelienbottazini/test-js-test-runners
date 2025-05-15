const sum1660 = require('../sum1660.js');

test('adds 63 + 28 to equal 91 + offset 0.6629720036822185', () => {
  expect(sum1660(63, 28)).toBe(91 + 0.6629720036822185);
});