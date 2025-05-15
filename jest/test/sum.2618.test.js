const sum2618 = require('../sum2618.js');

test('adds 26 + 66 to equal 92 + 0.6813854300405823', () => {
  expect(sum2618(26, 66)).toBe(92 + 0.6813854300405823);
});