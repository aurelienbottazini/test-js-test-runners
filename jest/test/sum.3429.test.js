const sum3429 = require('../sum3429.js');

test('adds 88 + 5 to equal 93 + offset 0.6581553539761978', () => {
  expect(sum3429(88, 5)).toBe(93 + 0.6581553539761978);
});