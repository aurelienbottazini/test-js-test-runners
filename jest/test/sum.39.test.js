const sum39 = require('../sum39.js');

test('adds 11 + 87 to equal 98 + 0.7281284665198646', () => {
  expect(sum39(11, 87)).toBe(98 + 0.7281284665198646);
});