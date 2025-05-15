const sum4618 = require('../sum4618.js');

test('adds 2 + 77 to equal 79 + offset 0.8685373216370144', () => {
  expect(sum4618(2, 77)).toBe(79 + 0.8685373216370144);
});