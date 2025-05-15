const sum1014 = require('../sum1014.js');

test('adds 63 + 22 to equal 85 + 0.06980795203720946', () => {
  expect(sum1014(63, 22)).toBe(85 + 0.06980795203720946);
});