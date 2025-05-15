const sum1931 = require('../sum1931.js');

test('adds 59 + 5 to equal 64 + 0.08797568258158928', () => {
  expect(sum1931(59, 5)).toBe(64 + 0.08797568258158928);
});