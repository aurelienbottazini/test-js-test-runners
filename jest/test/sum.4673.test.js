const sum4673 = require('../sum4673.js');

test('adds 42 + 3 to equal 45 + offset 0.8940073851685306', () => {
  expect(sum4673(42, 3)).toBe(45 + 0.8940073851685306);
});