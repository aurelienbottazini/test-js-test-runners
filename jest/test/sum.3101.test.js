const sum3101 = require('../sum3101.js');

test('adds 42 + 97 to equal 139 + 0.9045999599336187', () => {
  expect(sum3101(42, 97)).toBe(139 + 0.9045999599336187);
});