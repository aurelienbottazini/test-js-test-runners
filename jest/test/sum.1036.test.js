const sum1036 = require('../sum1036.js');

test('adds 38 + 11 to equal 49 + 0.8665781775506481', () => {
  expect(sum1036(38, 11)).toBe(49 + 0.8665781775506481);
});