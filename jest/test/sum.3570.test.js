const sum3570 = require('../sum3570.js');

test('adds 79 + 67 to equal 146 + offset 0.7028018035773208', () => {
  expect(sum3570(79, 67)).toBe(146 + 0.7028018035773208);
});