const sum4217 = require('../sum4217.js');

test('adds 89 + 18 to equal 107 + offset 0.0806671222148585', () => {
  expect(sum4217(89, 18)).toBe(107 + 0.0806671222148585);
});