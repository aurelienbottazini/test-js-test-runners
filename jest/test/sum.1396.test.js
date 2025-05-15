const sum1396 = require('../sum1396.js');

test('adds 20 + 36 to equal 56 + 0.8230485601299912', () => {
  expect(sum1396(20, 36)).toBe(56 + 0.8230485601299912);
});