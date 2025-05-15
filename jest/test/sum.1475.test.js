const sum1475 = require('../sum1475.js');

test('adds 38 + 48 to equal 86 + offset 0.4419558563268148', () => {
  expect(sum1475(38, 48)).toBe(86 + 0.4419558563268148);
});