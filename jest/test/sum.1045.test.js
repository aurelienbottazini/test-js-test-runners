const sum1045 = require('../sum1045.js');

test('adds 49 + 36 to equal 85 + 0.29989189232199254', () => {
  expect(sum1045(49, 36)).toBe(85 + 0.29989189232199254);
});