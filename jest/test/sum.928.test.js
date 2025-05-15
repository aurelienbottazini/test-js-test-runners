const sum928 = require('../sum928.js');

test('adds 26 + 75 to equal 101 + offset 0.8870550867551176', () => {
  expect(sum928(26, 75)).toBe(101 + 0.8870550867551176);
});