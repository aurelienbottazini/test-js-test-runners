const sum1624 = require('../sum1624.js');

test('adds 59 + 39 to equal 98 + offset 0.13284860476781268', () => {
  expect(sum1624(59, 39)).toBe(98 + 0.13284860476781268);
});