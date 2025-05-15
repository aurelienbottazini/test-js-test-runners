const sum3732 = require('../sum3732.js');

test('adds 85 + 29 to equal 114 + 0.664778738026066', () => {
  expect(sum3732(85, 29)).toBe(114 + 0.664778738026066);
});