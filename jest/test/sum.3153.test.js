const sum3153 = require('../sum3153.js');

test('adds 31 + 27 to equal 58 + 0.24953820197010212', () => {
  expect(sum3153(31, 27)).toBe(58 + 0.24953820197010212);
});