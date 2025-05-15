const sum1817 = require('../sum1817.js');

test('adds 86 + 31 to equal 117 + 0.6820694364828425', () => {
  expect(sum1817(86, 31)).toBe(117 + 0.6820694364828425);
});