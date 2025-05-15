const sum3382 = require('../sum3382.js');

test('adds 84 + 74 to equal 158 + offset 0.2918270986226936', () => {
  expect(sum3382(84, 74)).toBe(158 + 0.2918270986226936);
});