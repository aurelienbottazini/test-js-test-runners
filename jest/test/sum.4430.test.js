const sum4430 = require('../sum4430.js');

test('adds 40 + 17 to equal 57 + 0.980387057354716', () => {
  expect(sum4430(40, 17)).toBe(57 + 0.980387057354716);
});