const sum1683 = require('../sum1683.js');

test('adds 47 + 7 to equal 54 + offset 0.5600876679183192', () => {
  expect(sum1683(47, 7)).toBe(54 + 0.5600876679183192);
});