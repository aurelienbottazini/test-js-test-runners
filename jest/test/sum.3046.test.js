const sum3046 = require('../sum3046.js');

test('adds 45 + 13 to equal 58 + offset 0.3275438561539038', () => {
  expect(sum3046(45, 13)).toBe(58 + 0.3275438561539038);
});