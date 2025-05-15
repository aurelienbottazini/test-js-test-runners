const sum869 = require('../sum869.js');

test('adds 43 + 69 to equal 112 + 0.8581868431139283', () => {
  expect(sum869(43, 69)).toBe(112 + 0.8581868431139283);
});