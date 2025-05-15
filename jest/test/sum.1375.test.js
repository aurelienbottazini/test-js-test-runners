const sum1375 = require('../sum1375.js');

test('adds 41 + 92 to equal 133 + offset 0.5554199265264292', () => {
  expect(sum1375(41, 92)).toBe(133 + 0.5554199265264292);
});