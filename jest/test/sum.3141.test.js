const sum3141 = require('../sum3141.js');

test('adds 68 + 88 to equal 156 + offset 0.9773667696932464', () => {
  expect(sum3141(68, 88)).toBe(156 + 0.9773667696932464);
});