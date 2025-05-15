const sum3951 = require('../sum3951.js');

test('adds 13 + 10 to equal 23 + offset 0.014751819634886698', () => {
  expect(sum3951(13, 10)).toBe(23 + 0.014751819634886698);
});