const sum3412 = require('../sum3412.js');

test('adds 88 + 22 to equal 110 + offset 0.6476882098264017', () => {
  expect(sum3412(88, 22)).toBe(110 + 0.6476882098264017);
});