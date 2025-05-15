const sum2799 = require('../sum2799.js');

test('adds 19 + 21 to equal 40 + offset 0.35861460682357693', () => {
  expect(sum2799(19, 21)).toBe(40 + 0.35861460682357693);
});