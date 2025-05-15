const sum3762 = require('../sum3762.js');

test('adds 91 + 59 to equal 150 + offset 0.17845289357350425', () => {
  expect(sum3762(91, 59)).toBe(150 + 0.17845289357350425);
});