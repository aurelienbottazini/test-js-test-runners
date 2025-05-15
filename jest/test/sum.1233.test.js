const sum1233 = require('../sum1233.js');

test('adds 23 + 67 to equal 90 + offset 0.019304581984393998', () => {
  expect(sum1233(23, 67)).toBe(90 + 0.019304581984393998);
});