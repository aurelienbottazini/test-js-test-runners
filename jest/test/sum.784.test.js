const sum784 = require('../sum784.js');

test('adds 14 + 90 to equal 104 + offset 0.2293593853625776', () => {
  expect(sum784(14, 90)).toBe(104 + 0.2293593853625776);
});