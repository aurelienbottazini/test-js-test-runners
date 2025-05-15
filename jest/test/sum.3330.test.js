const sum3330 = require('../sum3330.js');

test('adds 24 + 84 to equal 108 + offset 0.7693262306872798', () => {
  expect(sum3330(24, 84)).toBe(108 + 0.7693262306872798);
});