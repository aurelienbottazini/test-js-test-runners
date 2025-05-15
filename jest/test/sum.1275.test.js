const sum1275 = require('../sum1275.js');

test('adds 66 + 10 to equal 76 + offset 0.151574324067001', () => {
  expect(sum1275(66, 10)).toBe(76 + 0.151574324067001);
});