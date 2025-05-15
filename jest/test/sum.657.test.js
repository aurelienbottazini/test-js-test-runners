const sum657 = require('../sum657.js');

test('adds 27 + 36 to equal 63 + offset 0.9384322059565934', () => {
  expect(sum657(27, 36)).toBe(63 + 0.9384322059565934);
});