const sum3240 = require('../sum3240.js');

test('adds 36 + 20 to equal 56 + offset 0.5893734658977741', () => {
  expect(sum3240(36, 20)).toBe(56 + 0.5893734658977741);
});