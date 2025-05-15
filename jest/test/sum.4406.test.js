const sum4406 = require('../sum4406.js');

test('adds 31 + 65 to equal 96 + offset 0.059240814892864035', () => {
  expect(sum4406(31, 65)).toBe(96 + 0.059240814892864035);
});