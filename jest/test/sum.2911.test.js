const sum2911 = require('../sum2911.js');

test('adds 26 + 81 to equal 107 + offset 0.840102477026086', () => {
  expect(sum2911(26, 81)).toBe(107 + 0.840102477026086);
});