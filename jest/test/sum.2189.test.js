const sum2189 = require('../sum2189.js');

test('adds 94 + 37 to equal 131 + offset 0.8561947683414667', () => {
  expect(sum2189(94, 37)).toBe(131 + 0.8561947683414667);
});