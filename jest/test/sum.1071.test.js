const sum1071 = require('../sum1071.js');

test('adds 17 + 42 to equal 59 + 0.4575654510937258', () => {
  expect(sum1071(17, 42)).toBe(59 + 0.4575654510937258);
});