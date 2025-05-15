const sum1579 = require('../sum1579.js');

test('adds 96 + 34 to equal 130 + 0.8682630586666205', () => {
  expect(sum1579(96, 34)).toBe(130 + 0.8682630586666205);
});