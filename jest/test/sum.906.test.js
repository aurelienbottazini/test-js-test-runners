const sum906 = require('../sum906.js');

test('adds 24 + 34 to equal 58 + 0.3112245986064296', () => {
  expect(sum906(24, 34)).toBe(58 + 0.3112245986064296);
});