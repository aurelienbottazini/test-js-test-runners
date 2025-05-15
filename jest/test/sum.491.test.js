const sum491 = require('../sum491.js');

test('adds 47 + 16 to equal 63 + 0.8959799665595971', () => {
  expect(sum491(47, 16)).toBe(63 + 0.8959799665595971);
});