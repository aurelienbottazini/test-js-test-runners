const sum2255 = require('../sum2255.js');

test('adds 40 + 73 to equal 113 + offset 0.8539930611819903', () => {
  expect(sum2255(40, 73)).toBe(113 + 0.8539930611819903);
});