const sum1805 = require('../sum1805.js');

test('adds 47 + 55 to equal 102 + 0.3854788053025753', () => {
  expect(sum1805(47, 55)).toBe(102 + 0.3854788053025753);
});