const sum1947 = require('../sum1947.js');

test('adds 36 + 21 to equal 57 + offset 0.29814912714204056', () => {
  expect(sum1947(36, 21)).toBe(57 + 0.29814912714204056);
});