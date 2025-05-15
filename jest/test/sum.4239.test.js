const sum4239 = require('../sum4239.js');

test('adds 33 + 7 to equal 40 + offset 0.04393998393078524', () => {
  expect(sum4239(33, 7)).toBe(40 + 0.04393998393078524);
});