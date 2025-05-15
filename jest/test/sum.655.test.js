const sum655 = require('../sum655.js');

test('adds 76 + 91 to equal 167 + 0.9543368648856587', () => {
  expect(sum655(76, 91)).toBe(167 + 0.9543368648856587);
});