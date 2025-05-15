const sum1937 = require('../sum1937.js');

test('adds 28 + 21 to equal 49 + offset 0.07523052998165047', () => {
  expect(sum1937(28, 21)).toBe(49 + 0.07523052998165047);
});