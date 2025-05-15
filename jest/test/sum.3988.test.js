const sum3988 = require('../sum3988.js');

test('adds 65 + 15 to equal 80 + offset 0.005462712979836137', () => {
  expect(sum3988(65, 15)).toBe(80 + 0.005462712979836137);
});