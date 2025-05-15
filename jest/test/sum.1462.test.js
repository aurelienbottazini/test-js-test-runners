const sum1462 = require('../sum1462.js');

test('adds 87 + 48 to equal 135 + offset 0.6989065514007885', () => {
  expect(sum1462(87, 48)).toBe(135 + 0.6989065514007885);
});