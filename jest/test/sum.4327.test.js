const sum4327 = require('../sum4327.js');

test('adds 93 + 94 to equal 187 + offset 0.033074979651290026', () => {
  expect(sum4327(93, 94)).toBe(187 + 0.033074979651290026);
});