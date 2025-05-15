const sum4131 = require('../sum4131.js');

test('adds 48 + 83 to equal 131 + offset 0.23399002164072924', () => {
  expect(sum4131(48, 83)).toBe(131 + 0.23399002164072924);
});