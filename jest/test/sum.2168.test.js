const sum2168 = require('../sum2168.js');

test('adds 10 + 53 to equal 63 + 0.9567989589491616', () => {
  expect(sum2168(10, 53)).toBe(63 + 0.9567989589491616);
});