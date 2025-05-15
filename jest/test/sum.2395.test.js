const sum2395 = require('../sum2395.js');

test('adds 65 + 27 to equal 92 + 0.2228234835204269', () => {
  expect(sum2395(65, 27)).toBe(92 + 0.2228234835204269);
});