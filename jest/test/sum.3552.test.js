const sum3552 = require('../sum3552.js');

test('adds 4 + 24 to equal 28 + offset 0.38236371639983835', () => {
  expect(sum3552(4, 24)).toBe(28 + 0.38236371639983835);
});