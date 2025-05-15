const sum1143 = require('../sum1143.js');

test('adds 48 + 3 to equal 51 + 0.48549557450255043', () => {
  expect(sum1143(48, 3)).toBe(51 + 0.48549557450255043);
});