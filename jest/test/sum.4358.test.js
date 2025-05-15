const sum4358 = require('../sum4358.js');

test('adds 65 + 18 to equal 83 + 0.18650838437834483', () => {
  expect(sum4358(65, 18)).toBe(83 + 0.18650838437834483);
});