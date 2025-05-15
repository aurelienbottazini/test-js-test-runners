const sum1655 = require('../sum1655.js');

test('adds 38 + 1 to equal 39 + offset 0.46977056220624225', () => {
  expect(sum1655(38, 1)).toBe(39 + 0.46977056220624225);
});