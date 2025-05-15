const sum1713 = require('../sum1713.js');

test('adds 43 + 55 to equal 98 + 0.7659219776793884', () => {
  expect(sum1713(43, 55)).toBe(98 + 0.7659219776793884);
});