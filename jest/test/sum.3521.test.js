const sum3521 = require('../sum3521.js');

test('adds 26 + 58 to equal 84 + 0.13783120424935713', () => {
  expect(sum3521(26, 58)).toBe(84 + 0.13783120424935713);
});