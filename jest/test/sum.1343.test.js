const sum1343 = require('../sum1343.js');

test('adds 62 + 39 to equal 101 + offset 0.2728763239995744', () => {
  expect(sum1343(62, 39)).toBe(101 + 0.2728763239995744);
});