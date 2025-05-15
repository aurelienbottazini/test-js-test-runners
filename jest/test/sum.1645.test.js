const sum1645 = require('../sum1645.js');

test('adds 17 + 98 to equal 115 + offset 0.21028374275253747', () => {
  expect(sum1645(17, 98)).toBe(115 + 0.21028374275253747);
});