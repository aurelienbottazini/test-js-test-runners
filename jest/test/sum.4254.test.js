const sum4254 = require('../sum4254.js');

test('adds 13 + 22 to equal 35 + offset 0.2026870454375117', () => {
  expect(sum4254(13, 22)).toBe(35 + 0.2026870454375117);
});