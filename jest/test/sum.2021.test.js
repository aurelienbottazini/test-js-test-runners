const sum2021 = require('../sum2021.js');

test('adds 35 + 5 to equal 40 + 0.28935565007170205', () => {
  expect(sum2021(35, 5)).toBe(40 + 0.28935565007170205);
});