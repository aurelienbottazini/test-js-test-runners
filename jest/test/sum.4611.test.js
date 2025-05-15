const sum4611 = require('../sum4611.js');

test('adds 59 + 67 to equal 126 + 0.43326215236539545', () => {
  expect(sum4611(59, 67)).toBe(126 + 0.43326215236539545);
});