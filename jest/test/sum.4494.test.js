const sum4494 = require('../sum4494.js');

test('adds 18 + 99 to equal 117 + offset 0.9088560526981282', () => {
  expect(sum4494(18, 99)).toBe(117 + 0.9088560526981282);
});