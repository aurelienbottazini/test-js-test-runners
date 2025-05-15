const sum2141 = require('../sum2141.js');

test('adds 30 + 74 to equal 104 + offset 0.23260125929232822', () => {
  expect(sum2141(30, 74)).toBe(104 + 0.23260125929232822);
});