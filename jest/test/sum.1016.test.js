const sum1016 = require('../sum1016.js');

test('adds 82 + 97 to equal 179 + offset 0.2680060187460117', () => {
  expect(sum1016(82, 97)).toBe(179 + 0.2680060187460117);
});