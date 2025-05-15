const sum2619 = require('../sum2619.js');

test('adds 14 + 49 to equal 63 + 0.1611205873176439', () => {
  expect(sum2619(14, 49)).toBe(63 + 0.1611205873176439);
});