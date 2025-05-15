const sum3247 = require('../sum3247.js');

test('adds 2 + 34 to equal 36 + 0.25081671768012725', () => {
  expect(sum3247(2, 34)).toBe(36 + 0.25081671768012725);
});