const sum752 = require('../sum752.js');

test('adds 41 + 95 to equal 136 + offset 0.2728706415199337', () => {
  expect(sum752(41, 95)).toBe(136 + 0.2728706415199337);
});