const sum950 = require('../sum950.js');

test('adds 66 + 10 to equal 76 + 0.12731940533145059', () => {
  expect(sum950(66, 10)).toBe(76 + 0.12731940533145059);
});