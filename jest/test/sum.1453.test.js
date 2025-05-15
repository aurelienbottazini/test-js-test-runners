const sum1453 = require('../sum1453.js');

test('adds 70 + 18 to equal 88 + 0.2266941955666617', () => {
  expect(sum1453(70, 18)).toBe(88 + 0.2266941955666617);
});