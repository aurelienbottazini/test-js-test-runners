const sum1570 = require('../sum1570.js');

test('adds 45 + 80 to equal 125 + 0.9318166173355352', () => {
  expect(sum1570(45, 80)).toBe(125 + 0.9318166173355352);
});