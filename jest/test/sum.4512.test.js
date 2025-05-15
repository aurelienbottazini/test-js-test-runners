const sum4512 = require('../sum4512.js');

test('adds 81 + 32 to equal 113 + offset 0.8291119744985673', () => {
  expect(sum4512(81, 32)).toBe(113 + 0.8291119744985673);
});