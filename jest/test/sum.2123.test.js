const sum2123 = require('../sum2123.js');

test('adds 0 + 41 to equal 41 + offset 0.8884592693543505', () => {
  expect(sum2123(0, 41)).toBe(41 + 0.8884592693543505);
});