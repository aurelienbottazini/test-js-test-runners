const sum582 = require('../sum582.js');

test('adds 37 + 50 to equal 87 + offset 0.8446451456345292', () => {
  expect(sum582(37, 50)).toBe(87 + 0.8446451456345292);
});