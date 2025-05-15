const sum1585 = require('../sum1585.js');

test('adds 33 + 38 to equal 71 + 0.44459834955630895', () => {
  expect(sum1585(33, 38)).toBe(71 + 0.44459834955630895);
});