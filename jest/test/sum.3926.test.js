const sum3926 = require('../sum3926.js');

test('adds 44 + 56 to equal 100 + 0.8862739816541718', () => {
  expect(sum3926(44, 56)).toBe(100 + 0.8862739816541718);
});