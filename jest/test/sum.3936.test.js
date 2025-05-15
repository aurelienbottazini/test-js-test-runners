const sum3936 = require('../sum3936.js');

test('adds 24 + 42 to equal 66 + offset 0.3676998665754546', () => {
  expect(sum3936(24, 42)).toBe(66 + 0.3676998665754546);
});