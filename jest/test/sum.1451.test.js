const sum1451 = require('../sum1451.js');

test('adds 71 + 67 to equal 138 + 0.6754183427943613', () => {
  expect(sum1451(71, 67)).toBe(138 + 0.6754183427943613);
});