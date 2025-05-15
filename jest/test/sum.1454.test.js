const sum1454 = require('../sum1454.js');

test('adds 39 + 1 to equal 40 + offset 0.5296312458387488', () => {
  expect(sum1454(39, 1)).toBe(40 + 0.5296312458387488);
});