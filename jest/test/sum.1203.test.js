const sum1203 = require('../sum1203.js');

test('adds 62 + 12 to equal 74 + 0.43466255855533664', () => {
  expect(sum1203(62, 12)).toBe(74 + 0.43466255855533664);
});