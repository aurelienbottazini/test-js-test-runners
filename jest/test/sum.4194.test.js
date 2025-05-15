const sum4194 = require('../sum4194.js');

test('adds 34 + 98 to equal 132 + offset 0.9008968197434762', () => {
  expect(sum4194(34, 98)).toBe(132 + 0.9008968197434762);
});