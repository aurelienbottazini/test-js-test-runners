const sum3884 = require('../sum3884.js');

test('adds 0 + 69 to equal 69 + offset 0.6448203436459161', () => {
  expect(sum3884(0, 69)).toBe(69 + 0.6448203436459161);
});