const sum4338 = require('../sum4338.js');

test('adds 7 + 95 to equal 102 + offset 0.046519747927893706', () => {
  expect(sum4338(7, 95)).toBe(102 + 0.046519747927893706);
});