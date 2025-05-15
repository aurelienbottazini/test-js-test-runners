const sum3255 = require('../sum3255.js');

test('adds 24 + 26 to equal 50 + offset 0.4930595174420678', () => {
  expect(sum3255(24, 26)).toBe(50 + 0.4930595174420678);
});