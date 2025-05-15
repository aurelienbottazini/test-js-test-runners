const sum565 = require('../sum565.js');

test('adds 85 + 12 to equal 97 + offset 0.7190061201425786', () => {
  expect(sum565(85, 12)).toBe(97 + 0.7190061201425786);
});