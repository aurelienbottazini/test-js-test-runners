const sum2216 = require('../sum2216.js');

test('adds 30 + 39 to equal 69 + offset 0.9611694650383342', () => {
  expect(sum2216(30, 39)).toBe(69 + 0.9611694650383342);
});