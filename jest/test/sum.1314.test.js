const sum1314 = require('../sum1314.js');

test('adds 8 + 86 to equal 94 + offset 0.812004330669158', () => {
  expect(sum1314(8, 86)).toBe(94 + 0.812004330669158);
});