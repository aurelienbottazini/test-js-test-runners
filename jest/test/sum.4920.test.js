const sum4920 = require('../sum4920.js');

test('adds 79 + 4 to equal 83 + 0.5354771957561325', () => {
  expect(sum4920(79, 4)).toBe(83 + 0.5354771957561325);
});