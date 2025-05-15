const sum2025 = require('../sum2025.js');

test('adds 77 + 59 to equal 136 + 0.36651325264080825', () => {
  expect(sum2025(77, 59)).toBe(136 + 0.36651325264080825);
});