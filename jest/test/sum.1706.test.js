const sum1706 = require('../sum1706.js');

test('adds 26 + 63 to equal 89 + offset 0.954840593463519', () => {
  expect(sum1706(26, 63)).toBe(89 + 0.954840593463519);
});