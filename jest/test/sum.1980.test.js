const sum1980 = require('../sum1980.js');

test('adds 10 + 9 to equal 19 + offset 0.0822303403811313', () => {
  expect(sum1980(10, 9)).toBe(19 + 0.0822303403811313);
});