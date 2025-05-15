const sum3156 = require('../sum3156.js');

test('adds 65 + 41 to equal 106 + offset 0.9311523599887115', () => {
  expect(sum3156(65, 41)).toBe(106 + 0.9311523599887115);
});