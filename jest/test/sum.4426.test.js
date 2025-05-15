const sum4426 = require('../sum4426.js');

test('adds 83 + 69 to equal 152 + offset 0.9205889163347304', () => {
  expect(sum4426(83, 69)).toBe(152 + 0.9205889163347304);
});