const sum1190 = require('../sum1190.js');

test('adds 98 + 73 to equal 171 + 0.41835035922154507', () => {
  expect(sum1190(98, 73)).toBe(171 + 0.41835035922154507);
});