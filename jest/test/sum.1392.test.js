const sum1392 = require('../sum1392.js');

test('adds 91 + 34 to equal 125 + offset 0.7172702594707654', () => {
  expect(sum1392(91, 34)).toBe(125 + 0.7172702594707654);
});