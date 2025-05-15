const sum440 = require('../sum440.js');

test('adds 32 + 5 to equal 37 + offset 0.3911098531325974', () => {
  expect(sum440(32, 5)).toBe(37 + 0.3911098531325974);
});