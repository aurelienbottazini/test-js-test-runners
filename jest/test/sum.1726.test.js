const sum1726 = require('../sum1726.js');

test('adds 32 + 59 to equal 91 + 0.8872220736788733', () => {
  expect(sum1726(32, 59)).toBe(91 + 0.8872220736788733);
});