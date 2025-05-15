const sum1305 = require('../sum1305.js');

test('adds 61 + 79 to equal 140 + offset 0.973898492048018', () => {
  expect(sum1305(61, 79)).toBe(140 + 0.973898492048018);
});