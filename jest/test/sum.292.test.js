const sum292 = require('../sum292.js');

test('adds 4 + 3 to equal 7 + offset 0.2666142313159393', () => {
  expect(sum292(4, 3)).toBe(7 + 0.2666142313159393);
});