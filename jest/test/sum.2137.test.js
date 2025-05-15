const sum2137 = require('../sum2137.js');

test('adds 32 + 80 to equal 112 + 0.2019328696984447', () => {
  expect(sum2137(32, 80)).toBe(112 + 0.2019328696984447);
});