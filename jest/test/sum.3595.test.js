const sum3595 = require('../sum3595.js');

test('adds 0 + 51 to equal 51 + offset 0.4127659721397813', () => {
  expect(sum3595(0, 51)).toBe(51 + 0.4127659721397813);
});