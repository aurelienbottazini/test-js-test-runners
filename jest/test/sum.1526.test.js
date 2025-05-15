const sum1526 = require('../sum1526.js');

test('adds 99 + 48 to equal 147 + offset 0.48030113817601383', () => {
  expect(sum1526(99, 48)).toBe(147 + 0.48030113817601383);
});