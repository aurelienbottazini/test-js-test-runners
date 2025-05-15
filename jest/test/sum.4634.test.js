const sum4634 = require('../sum4634.js');

test('adds 32 + 51 to equal 83 + offset 0.8599603235431462', () => {
  expect(sum4634(32, 51)).toBe(83 + 0.8599603235431462);
});