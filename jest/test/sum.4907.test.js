const sum4907 = require('../sum4907.js');

test('adds 11 + 81 to equal 92 + offset 0.5136677388145633', () => {
  expect(sum4907(11, 81)).toBe(92 + 0.5136677388145633);
});