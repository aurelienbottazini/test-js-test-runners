const sum1191 = require('../sum1191.js');

test('adds 1 + 74 to equal 75 + offset 0.049355589120392396', () => {
  expect(sum1191(1, 74)).toBe(75 + 0.049355589120392396);
});