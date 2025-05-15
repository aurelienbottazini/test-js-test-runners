const sum2111 = require('../sum2111.js');

test('adds 45 + 18 to equal 63 + 0.6770076706482433', () => {
  expect(sum2111(45, 18)).toBe(63 + 0.6770076706482433);
});