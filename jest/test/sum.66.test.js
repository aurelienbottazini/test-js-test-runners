const sum66 = require('../sum66.js');

test('adds 14 + 53 to equal 67 + 0.05277140514865686', () => {
  expect(sum66(14, 53)).toBe(67 + 0.05277140514865686);
});