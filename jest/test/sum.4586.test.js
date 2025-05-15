const sum4586 = require('../sum4586.js');

test('adds 50 + 53 to equal 103 + offset 0.36004631625981887', () => {
  expect(sum4586(50, 53)).toBe(103 + 0.36004631625981887);
});