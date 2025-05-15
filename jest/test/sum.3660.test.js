const sum3660 = require('../sum3660.js');

test('adds 89 + 61 to equal 150 + 0.5316337280214618', () => {
  expect(sum3660(89, 61)).toBe(150 + 0.5316337280214618);
});