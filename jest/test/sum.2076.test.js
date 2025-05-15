const sum2076 = require('../sum2076.js');

test('adds 40 + 51 to equal 91 + 0.30154057558080527', () => {
  expect(sum2076(40, 51)).toBe(91 + 0.30154057558080527);
});