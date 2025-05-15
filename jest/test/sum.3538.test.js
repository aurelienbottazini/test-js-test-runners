const sum3538 = require('../sum3538.js');

test('adds 77 + 5 to equal 82 + offset 0.98881116038252', () => {
  expect(sum3538(77, 5)).toBe(82 + 0.98881116038252);
});