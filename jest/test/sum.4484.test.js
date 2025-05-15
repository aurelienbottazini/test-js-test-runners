const sum4484 = require('../sum4484.js');

test('adds 61 + 3 to equal 64 + offset 0.1750969554634334', () => {
  expect(sum4484(61, 3)).toBe(64 + 0.1750969554634334);
});