const sum3467 = require('../sum3467.js');

test('adds 34 + 37 to equal 71 + 0.4999684654580697', () => {
  expect(sum3467(34, 37)).toBe(71 + 0.4999684654580697);
});