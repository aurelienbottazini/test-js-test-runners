const sum4360 = require('../sum4360.js');

test('adds 96 + 99 to equal 195 + offset 0.05919278030808006', () => {
  expect(sum4360(96, 99)).toBe(195 + 0.05919278030808006);
});