const sum1806 = require('../sum1806.js');

test('adds 11 + 56 to equal 67 + 0.3027108754798653', () => {
  expect(sum1806(11, 56)).toBe(67 + 0.3027108754798653);
});