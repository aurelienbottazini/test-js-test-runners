const sum3572 = require('../sum3572.js');

test('adds 33 + 49 to equal 82 + 0.9966685568614125', () => {
  expect(sum3572(33, 49)).toBe(82 + 0.9966685568614125);
});