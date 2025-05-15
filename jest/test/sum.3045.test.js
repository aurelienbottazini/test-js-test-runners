const sum3045 = require('../sum3045.js');

test('adds 38 + 23 to equal 61 + 0.25880051900135537', () => {
  expect(sum3045(38, 23)).toBe(61 + 0.25880051900135537);
});