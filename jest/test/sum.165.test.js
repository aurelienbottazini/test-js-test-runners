const sum165 = require('../sum165.js');

test('adds 58 + 76 to equal 134 + offset 0.2356673994515739', () => {
  expect(sum165(58, 76)).toBe(134 + 0.2356673994515739);
});