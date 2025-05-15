const sum4164 = require('../sum4164.js');

test('adds 54 + 69 to equal 123 + 0.5793290941392653', () => {
  expect(sum4164(54, 69)).toBe(123 + 0.5793290941392653);
});