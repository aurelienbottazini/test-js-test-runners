const sum623 = require('../sum623.js');

test('adds 35 + 50 to equal 85 + 0.9051548538214397', () => {
  expect(sum623(35, 50)).toBe(85 + 0.9051548538214397);
});