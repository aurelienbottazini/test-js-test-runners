const sum2848 = require('../sum2848.js');

test('adds 82 + 82 to equal 164 + offset 0.9890371554906873', () => {
  expect(sum2848(82, 82)).toBe(164 + 0.9890371554906873);
});