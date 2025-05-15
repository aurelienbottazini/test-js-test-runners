const sum2378 = require('../sum2378.js');

test('adds 21 + 76 to equal 97 + offset 0.7126136135338557', () => {
  expect(sum2378(21, 76)).toBe(97 + 0.7126136135338557);
});