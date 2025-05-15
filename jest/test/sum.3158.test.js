const sum3158 = require('../sum3158.js');

test('adds 77 + 51 to equal 128 + offset 0.830446075200799', () => {
  expect(sum3158(77, 51)).toBe(128 + 0.830446075200799);
});