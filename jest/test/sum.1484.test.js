const sum1484 = require('../sum1484.js');

test('adds 12 + 43 to equal 55 + offset 0.882128319747386', () => {
  expect(sum1484(12, 43)).toBe(55 + 0.882128319747386);
});