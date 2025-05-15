const sum552 = require('../sum552.js');

test('adds 24 + 2 to equal 26 + 0.3147501251819351', () => {
  expect(sum552(24, 2)).toBe(26 + 0.3147501251819351);
});