const sum1101 = require('../sum1101.js');

test('adds 32 + 18 to equal 50 + 0.34896375503194166', () => {
  expect(sum1101(32, 18)).toBe(50 + 0.34896375503194166);
});