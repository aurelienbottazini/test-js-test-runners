const sum1758 = require('../sum1758.js');

test('adds 40 + 95 to equal 135 + offset 0.9450772266251726', () => {
  expect(sum1758(40, 95)).toBe(135 + 0.9450772266251726);
});