const sum2958 = require('../sum2958.js');

test('adds 24 + 62 to equal 86 + offset 0.6745639083535069', () => {
  expect(sum2958(24, 62)).toBe(86 + 0.6745639083535069);
});