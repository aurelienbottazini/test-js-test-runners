const sum2436 = require('../sum2436.js');

test('adds 28 + 44 to equal 72 + 0.3703521955863437', () => {
  expect(sum2436(28, 44)).toBe(72 + 0.3703521955863437);
});