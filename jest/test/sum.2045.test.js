const sum2045 = require('../sum2045.js');

test('adds 59 + 91 to equal 150 + 0.25642302487131763', () => {
  expect(sum2045(59, 91)).toBe(150 + 0.25642302487131763);
});