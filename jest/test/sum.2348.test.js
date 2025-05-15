const sum2348 = require('../sum2348.js');

test('adds 49 + 62 to equal 111 + offset 0.8962306054754933', () => {
  expect(sum2348(49, 62)).toBe(111 + 0.8962306054754933);
});