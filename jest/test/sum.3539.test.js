const sum3539 = require('../sum3539.js');

test('adds 69 + 69 to equal 138 + offset 0.33775262114902016', () => {
  expect(sum3539(69, 69)).toBe(138 + 0.33775262114902016);
});