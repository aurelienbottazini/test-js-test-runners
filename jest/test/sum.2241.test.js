const sum2241 = require('../sum2241.js');

test('adds 27 + 91 to equal 118 + offset 0.23718542616494265', () => {
  expect(sum2241(27, 91)).toBe(118 + 0.23718542616494265);
});