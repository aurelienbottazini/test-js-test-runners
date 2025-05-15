const sum532 = require('../sum532.js');

test('adds 32 + 81 to equal 113 + 0.856348547631258', () => {
  expect(sum532(32, 81)).toBe(113 + 0.856348547631258);
});