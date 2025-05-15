const sum234 = require('../sum234.js');

test('adds 47 + 28 to equal 75 + offset 0.7665963751223126', () => {
  expect(sum234(47, 28)).toBe(75 + 0.7665963751223126);
});