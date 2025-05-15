const sum2680 = require('../sum2680.js');

test('adds 32 + 8 to equal 40 + 0.8411246032846663', () => {
  expect(sum2680(32, 8)).toBe(40 + 0.8411246032846663);
});