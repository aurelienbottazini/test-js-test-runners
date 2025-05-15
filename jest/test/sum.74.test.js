const sum74 = require('../sum74.js');

test('adds 64 + 52 to equal 116 + offset 0.5180962852117356', () => {
  expect(sum74(64, 52)).toBe(116 + 0.5180962852117356);
});