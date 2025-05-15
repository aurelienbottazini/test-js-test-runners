const sum2026 = require('../sum2026.js');

test('adds 65 + 35 to equal 100 + 0.7309179235139888', () => {
  expect(sum2026(65, 35)).toBe(100 + 0.7309179235139888);
});