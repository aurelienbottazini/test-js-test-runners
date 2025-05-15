const sum1624 = require('../sum1624.js');

test('adds 11 + 66 to equal 77 + 0.12023123062377505', () => {
  expect(sum1624(11, 66)).toBe(77 + 0.12023123062377505);
});