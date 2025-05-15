const sum2709 = require('../sum2709.js');

test('adds 77 + 31 to equal 108 + offset 0.10987729219356235', () => {
  expect(sum2709(77, 31)).toBe(108 + 0.10987729219356235);
});