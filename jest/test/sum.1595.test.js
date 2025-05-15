const sum1595 = require('../sum1595.js');

test('adds 75 + 1 to equal 76 + offset 0.18188988290099806', () => {
  expect(sum1595(75, 1)).toBe(76 + 0.18188988290099806);
});