const sum2001 = require('../sum2001.js');

test('adds 85 + 43 to equal 128 + 0.5092653293792313', () => {
  expect(sum2001(85, 43)).toBe(128 + 0.5092653293792313);
});