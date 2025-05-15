const sum2278 = require('../sum2278.js');

test('adds 50 + 56 to equal 106 + offset 0.1534081943877703', () => {
  expect(sum2278(50, 56)).toBe(106 + 0.1534081943877703);
});