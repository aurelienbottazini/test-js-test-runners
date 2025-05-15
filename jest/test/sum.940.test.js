const sum940 = require('../sum940.js');

test('adds 7 + 76 to equal 83 + offset 0.6739684921730138', () => {
  expect(sum940(7, 76)).toBe(83 + 0.6739684921730138);
});