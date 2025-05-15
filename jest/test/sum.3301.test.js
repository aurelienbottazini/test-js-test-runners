const sum3301 = require('../sum3301.js');

test('adds 98 + 27 to equal 125 + 0.983751448625589', () => {
  expect(sum3301(98, 27)).toBe(125 + 0.983751448625589);
});