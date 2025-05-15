const sum1570 = require('../sum1570.js');

test('adds 29 + 91 to equal 120 + offset 0.5199636394634517', () => {
  expect(sum1570(29, 91)).toBe(120 + 0.5199636394634517);
});