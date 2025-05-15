const sum909 = require('../sum909.js');

test('adds 27 + 30 to equal 57 + offset 0.4794019989230186', () => {
  expect(sum909(27, 30)).toBe(57 + 0.4794019989230186);
});