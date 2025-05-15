const sum2283 = require('../sum2283.js');

test('adds 78 + 7 to equal 85 + 0.6516737332073252', () => {
  expect(sum2283(78, 7)).toBe(85 + 0.6516737332073252);
});