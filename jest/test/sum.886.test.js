const sum886 = require('../sum886.js');

test('adds 31 + 37 to equal 68 + offset 0.9828697195123032', () => {
  expect(sum886(31, 37)).toBe(68 + 0.9828697195123032);
});