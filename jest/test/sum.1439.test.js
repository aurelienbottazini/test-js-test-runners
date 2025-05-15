const sum1439 = require('../sum1439.js');

test('adds 56 + 36 to equal 92 + 0.6861422520077451', () => {
  expect(sum1439(56, 36)).toBe(92 + 0.6861422520077451);
});