const sum2965 = require('../sum2965.js');

test('adds 92 + 50 to equal 142 + 0.34618825377458995', () => {
  expect(sum2965(92, 50)).toBe(142 + 0.34618825377458995);
});