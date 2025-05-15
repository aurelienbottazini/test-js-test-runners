const sum3454 = require('../sum3454.js');

test('adds 97 + 48 to equal 145 + 0.908206633722624', () => {
  expect(sum3454(97, 48)).toBe(145 + 0.908206633722624);
});