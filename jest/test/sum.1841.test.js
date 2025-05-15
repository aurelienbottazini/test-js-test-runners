const sum1841 = require('../sum1841.js');

test('adds 34 + 93 to equal 127 + offset 0.9624643623925482', () => {
  expect(sum1841(34, 93)).toBe(127 + 0.9624643623925482);
});