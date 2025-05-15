const sum2907 = require('../sum2907.js');

test('adds 97 + 63 to equal 160 + 0.9608659365828867', () => {
  expect(sum2907(97, 63)).toBe(160 + 0.9608659365828867);
});