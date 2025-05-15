const sum4123 = require('../sum4123.js');

test('adds 55 + 84 to equal 139 + offset 0.5020980643179401', () => {
  expect(sum4123(55, 84)).toBe(139 + 0.5020980643179401);
});