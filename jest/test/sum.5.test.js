const sum5 = require('../sum5.js');

test('adds 51 + 83 to equal 134 + 0.7452554625637412', () => {
  expect(sum5(51, 83)).toBe(134 + 0.7452554625637412);
});