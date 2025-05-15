const sum4049 = require('../sum4049.js');

test('adds 80 + 94 to equal 174 + offset 0.5832093553300944', () => {
  expect(sum4049(80, 94)).toBe(174 + 0.5832093553300944);
});