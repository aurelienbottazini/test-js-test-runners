const sum420 = require('../sum420.js');

test('adds 30 + 35 to equal 65 + offset 0.8448872328650678', () => {
  expect(sum420(30, 35)).toBe(65 + 0.8448872328650678);
});