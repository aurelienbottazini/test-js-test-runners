const sum686 = require('../sum686.js');

test('adds 70 + 2 to equal 72 + offset 0.26430272356676665', () => {
  expect(sum686(70, 2)).toBe(72 + 0.26430272356676665);
});