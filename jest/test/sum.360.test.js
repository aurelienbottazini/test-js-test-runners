const sum360 = require('../sum360.js');

test('adds 39 + 81 to equal 120 + 0.7155259863828551', () => {
  expect(sum360(39, 81)).toBe(120 + 0.7155259863828551);
});