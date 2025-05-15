const sum2218 = require('../sum2218.js');

test('adds 29 + 5 to equal 34 + 0.5619278550715827', () => {
  expect(sum2218(29, 5)).toBe(34 + 0.5619278550715827);
});