const sum2635 = require('../sum2635.js');

test('adds 63 + 59 to equal 122 + offset 0.8725349774729575', () => {
  expect(sum2635(63, 59)).toBe(122 + 0.8725349774729575);
});