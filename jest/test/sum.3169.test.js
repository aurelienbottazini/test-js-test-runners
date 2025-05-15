const sum3169 = require('../sum3169.js');

test('adds 13 + 10 to equal 23 + 0.3257616060864632', () => {
  expect(sum3169(13, 10)).toBe(23 + 0.3257616060864632);
});