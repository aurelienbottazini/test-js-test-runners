const sum2215 = require('../sum2215.js');

test('adds 43 + 79 to equal 122 + offset 0.021449402229374748', () => {
  expect(sum2215(43, 79)).toBe(122 + 0.021449402229374748);
});