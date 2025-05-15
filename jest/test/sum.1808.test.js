const sum1808 = require('../sum1808.js');

test('adds 62 + 30 to equal 92 + offset 0.3555186440448379', () => {
  expect(sum1808(62, 30)).toBe(92 + 0.3555186440448379);
});