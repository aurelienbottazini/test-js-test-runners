const sum264 = require('../sum264.js');

test('adds 95 + 54 to equal 149 + offset 0.8510844291731404', () => {
  expect(sum264(95, 54)).toBe(149 + 0.8510844291731404);
});