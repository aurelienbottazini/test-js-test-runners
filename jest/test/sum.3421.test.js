const sum3421 = require('../sum3421.js');

test('adds 39 + 73 to equal 112 + 0.8436765742574202', () => {
  expect(sum3421(39, 73)).toBe(112 + 0.8436765742574202);
});