const sum3477 = require('../sum3477.js');

test('adds 47 + 76 to equal 123 + offset 0.7853451733425597', () => {
  expect(sum3477(47, 76)).toBe(123 + 0.7853451733425597);
});