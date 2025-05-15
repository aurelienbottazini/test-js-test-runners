const sum3999 = require('../sum3999.js');

test('adds 65 + 45 to equal 110 + 0.8384155085209701', () => {
  expect(sum3999(65, 45)).toBe(110 + 0.8384155085209701);
});