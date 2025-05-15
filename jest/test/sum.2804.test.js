const sum2804 = require('../sum2804.js');

test('adds 13 + 16 to equal 29 + 0.49508016928204746', () => {
  expect(sum2804(13, 16)).toBe(29 + 0.49508016928204746);
});