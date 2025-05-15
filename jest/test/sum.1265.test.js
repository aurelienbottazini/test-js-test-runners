const sum1265 = require('../sum1265.js');

test('adds 3 + 56 to equal 59 + offset 0.0328711949488486', () => {
  expect(sum1265(3, 56)).toBe(59 + 0.0328711949488486);
});