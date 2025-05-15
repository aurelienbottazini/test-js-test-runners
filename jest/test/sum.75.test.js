const sum75 = require('../sum75.js');

test('adds 8 + 61 to equal 69 + offset 0.7828581647733399', () => {
  expect(sum75(8, 61)).toBe(69 + 0.7828581647733399);
});