const sum1656 = require('../sum1656.js');

test('adds 47 + 3 to equal 50 + offset 0.3984668350535079', () => {
  expect(sum1656(47, 3)).toBe(50 + 0.3984668350535079);
});