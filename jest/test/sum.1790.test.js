const sum1790 = require('../sum1790.js');

test('adds 84 + 70 to equal 154 + offset 0.05980639387812159', () => {
  expect(sum1790(84, 70)).toBe(154 + 0.05980639387812159);
});