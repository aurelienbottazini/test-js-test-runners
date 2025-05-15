const sum3544 = require('../sum3544.js');

test('adds 66 + 87 to equal 153 + 0.5276947983097445', () => {
  expect(sum3544(66, 87)).toBe(153 + 0.5276947983097445);
});