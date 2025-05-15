const sum3436 = require('../sum3436.js');

test('adds 14 + 84 to equal 98 + 0.37653822593846764', () => {
  expect(sum3436(14, 84)).toBe(98 + 0.37653822593846764);
});