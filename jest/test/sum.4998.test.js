const sum4998 = require('../sum4998.js');

test('adds 63 + 21 to equal 84 + offset 0.8141928043468791', () => {
  expect(sum4998(63, 21)).toBe(84 + 0.8141928043468791);
});