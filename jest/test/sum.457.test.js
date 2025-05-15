const sum457 = require('../sum457.js');

test('adds 20 + 65 to equal 85 + offset 0.19115777495316888', () => {
  expect(sum457(20, 65)).toBe(85 + 0.19115777495316888);
});