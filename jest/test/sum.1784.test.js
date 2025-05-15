const sum1784 = require('../sum1784.js');

test('adds 39 + 67 to equal 106 + offset 0.07716809013217829', () => {
  expect(sum1784(39, 67)).toBe(106 + 0.07716809013217829);
});