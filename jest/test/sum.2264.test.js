const sum2264 = require('../sum2264.js');

test('adds 34 + 58 to equal 92 + 0.4142238683143389', () => {
  expect(sum2264(34, 58)).toBe(92 + 0.4142238683143389);
});