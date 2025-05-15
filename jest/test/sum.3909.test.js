const sum3909 = require('../sum3909.js');

test('adds 0 + 64 to equal 64 + 0.6519525065867974', () => {
  expect(sum3909(0, 64)).toBe(64 + 0.6519525065867974);
});