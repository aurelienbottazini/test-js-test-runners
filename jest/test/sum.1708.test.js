const sum1708 = require('../sum1708.js');

test('adds 86 + 0 to equal 86 + offset 0.5980383486976747', () => {
  expect(sum1708(86, 0)).toBe(86 + 0.5980383486976747);
});