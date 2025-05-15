const sum2102 = require('../sum2102.js');

test('adds 27 + 74 to equal 101 + 0.5270085925625119', () => {
  expect(sum2102(27, 74)).toBe(101 + 0.5270085925625119);
});