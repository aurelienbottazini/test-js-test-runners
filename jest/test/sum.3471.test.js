const sum3471 = require('../sum3471.js');

test('adds 61 + 29 to equal 90 + offset 0.758951554089894', () => {
  expect(sum3471(61, 29)).toBe(90 + 0.758951554089894);
});