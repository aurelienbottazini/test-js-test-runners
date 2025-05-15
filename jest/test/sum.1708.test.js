const sum1708 = require('../sum1708.js');

test('adds 72 + 52 to equal 124 + 0.825501434429', () => {
  expect(sum1708(72, 52)).toBe(124 + 0.825501434429);
});