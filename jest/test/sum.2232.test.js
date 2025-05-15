const sum2232 = require('../sum2232.js');

test('adds 28 + 17 to equal 45 + 0.5899354165335078', () => {
  expect(sum2232(28, 17)).toBe(45 + 0.5899354165335078);
});