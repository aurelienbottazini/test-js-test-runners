const sum3608 = require('../sum3608.js');

test('adds 83 + 98 to equal 181 + 0.2915353046964614', () => {
  expect(sum3608(83, 98)).toBe(181 + 0.2915353046964614);
});