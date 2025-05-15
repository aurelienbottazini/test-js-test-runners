const sum2841 = require('../sum2841.js');

test('adds 34 + 80 to equal 114 + 0.3791893687303429', () => {
  expect(sum2841(34, 80)).toBe(114 + 0.3791893687303429);
});