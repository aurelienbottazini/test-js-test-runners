const sum1131 = require('../sum1131.js');

test('adds 83 + 50 to equal 133 + offset 0.2539415461520147', () => {
  expect(sum1131(83, 50)).toBe(133 + 0.2539415461520147);
});