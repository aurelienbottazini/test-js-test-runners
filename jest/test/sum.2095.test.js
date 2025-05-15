const sum2095 = require('../sum2095.js');

test('adds 35 + 96 to equal 131 + 0.07865437554920929', () => {
  expect(sum2095(35, 96)).toBe(131 + 0.07865437554920929);
});