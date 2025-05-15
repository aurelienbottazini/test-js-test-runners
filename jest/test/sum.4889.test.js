const sum4889 = require('../sum4889.js');

test('adds 68 + 55 to equal 123 + 0.708789412347739', () => {
  expect(sum4889(68, 55)).toBe(123 + 0.708789412347739);
});