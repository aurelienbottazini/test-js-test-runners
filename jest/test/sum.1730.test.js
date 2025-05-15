const sum1730 = require('../sum1730.js');

test('adds 87 + 46 to equal 133 + offset 0.00999147685967261', () => {
  expect(sum1730(87, 46)).toBe(133 + 0.00999147685967261);
});