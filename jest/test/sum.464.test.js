const sum464 = require('../sum464.js');

test('adds 45 + 75 to equal 120 + offset 0.42685673961965986', () => {
  expect(sum464(45, 75)).toBe(120 + 0.42685673961965986);
});