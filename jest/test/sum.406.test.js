const sum406 = require('../sum406.js');

test('adds 18 + 9 to equal 27 + 0.9111128896380585', () => {
  expect(sum406(18, 9)).toBe(27 + 0.9111128896380585);
});