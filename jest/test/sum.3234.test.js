const sum3234 = require('../sum3234.js');

test('adds 60 + 54 to equal 114 + 0.7647223270258136', () => {
  expect(sum3234(60, 54)).toBe(114 + 0.7647223270258136);
});