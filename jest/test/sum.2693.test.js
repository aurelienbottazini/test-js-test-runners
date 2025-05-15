const sum2693 = require('../sum2693.js');

test('adds 47 + 7 to equal 54 + offset 0.24949375863349643', () => {
  expect(sum2693(47, 7)).toBe(54 + 0.24949375863349643);
});