const sum3527 = require('../sum3527.js');

test('adds 19 + 31 to equal 50 + offset 0.22231010833038456', () => {
  expect(sum3527(19, 31)).toBe(50 + 0.22231010833038456);
});