const sum1337 = require('../sum1337.js');

test('adds 48 + 84 to equal 132 + offset 0.272999391084617', () => {
  expect(sum1337(48, 84)).toBe(132 + 0.272999391084617);
});