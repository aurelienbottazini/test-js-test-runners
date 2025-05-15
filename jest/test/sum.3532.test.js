const sum3532 = require('../sum3532.js');

test('adds 91 + 48 to equal 139 + offset 0.5968085576365424', () => {
  expect(sum3532(91, 48)).toBe(139 + 0.5968085576365424);
});