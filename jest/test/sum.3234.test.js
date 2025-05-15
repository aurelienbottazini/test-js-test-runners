const sum3234 = require('../sum3234.js');

test('adds 16 + 24 to equal 40 + offset 0.35883775990426436', () => {
  expect(sum3234(16, 24)).toBe(40 + 0.35883775990426436);
});