const sum1095 = require('../sum1095.js');

test('adds 8 + 36 to equal 44 + offset 0.3336702724705374', () => {
  expect(sum1095(8, 36)).toBe(44 + 0.3336702724705374);
});