const sum2328 = require('../sum2328.js');

test('adds 10 + 48 to equal 58 + 0.16564348921259564', () => {
  expect(sum2328(10, 48)).toBe(58 + 0.16564348921259564);
});