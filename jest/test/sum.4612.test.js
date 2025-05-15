const sum4612 = require('../sum4612.js');

test('adds 15 + 62 to equal 77 + offset 0.2383621586468061', () => {
  expect(sum4612(15, 62)).toBe(77 + 0.2383621586468061);
});