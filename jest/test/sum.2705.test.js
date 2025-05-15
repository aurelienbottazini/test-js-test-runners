const sum2705 = require('../sum2705.js');

test('adds 81 + 16 to equal 97 + 0.3797382739618762', () => {
  expect(sum2705(81, 16)).toBe(97 + 0.3797382739618762);
});