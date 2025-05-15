const sum4861 = require('../sum4861.js');

test('adds 25 + 12 to equal 37 + offset 0.5858222204643077', () => {
  expect(sum4861(25, 12)).toBe(37 + 0.5858222204643077);
});