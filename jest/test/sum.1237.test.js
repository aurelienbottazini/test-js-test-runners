const sum1237 = require('../sum1237.js');

test('adds 47 + 62 to equal 109 + 0.9930117629357018', () => {
  expect(sum1237(47, 62)).toBe(109 + 0.9930117629357018);
});