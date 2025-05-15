const sum3546 = require('../sum3546.js');

test('adds 50 + 98 to equal 148 + offset 0.4710505031768165', () => {
  expect(sum3546(50, 98)).toBe(148 + 0.4710505031768165);
});