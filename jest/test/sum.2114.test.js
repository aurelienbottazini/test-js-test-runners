const sum2114 = require('../sum2114.js');

test('adds 40 + 51 to equal 91 + offset 0.10137366741410647', () => {
  expect(sum2114(40, 51)).toBe(91 + 0.10137366741410647);
});