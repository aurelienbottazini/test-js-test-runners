const sum2026 = require('../sum2026.js');

test('adds 3 + 53 to equal 56 + offset 0.8253816486198737', () => {
  expect(sum2026(3, 53)).toBe(56 + 0.8253816486198737);
});