const sum2854 = require('../sum2854.js');

test('adds 84 + 61 to equal 145 + offset 0.5754295403632927', () => {
  expect(sum2854(84, 61)).toBe(145 + 0.5754295403632927);
});