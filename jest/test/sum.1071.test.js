const sum1071 = require('../sum1071.js');

test('adds 58 + 10 to equal 68 + offset 0.3193617900933521', () => {
  expect(sum1071(58, 10)).toBe(68 + 0.3193617900933521);
});