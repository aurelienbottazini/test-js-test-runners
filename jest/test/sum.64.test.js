const sum64 = require('../sum64.js');

test('adds 32 + 59 to equal 91 + 0.5764706548856291', () => {
  expect(sum64(32, 59)).toBe(91 + 0.5764706548856291);
});