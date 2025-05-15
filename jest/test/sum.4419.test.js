const sum4419 = require('../sum4419.js');

test('adds 90 + 85 to equal 175 + 0.1492217903479386', () => {
  expect(sum4419(90, 85)).toBe(175 + 0.1492217903479386);
});