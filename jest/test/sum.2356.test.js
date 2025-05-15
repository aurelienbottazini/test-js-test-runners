const sum2356 = require('../sum2356.js');

test('adds 39 + 49 to equal 88 + offset 0.8102605144522116', () => {
  expect(sum2356(39, 49)).toBe(88 + 0.8102605144522116);
});