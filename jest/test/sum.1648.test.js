const sum1648 = require('../sum1648.js');

test('adds 1 + 82 to equal 83 + offset 0.7700717547009848', () => {
  expect(sum1648(1, 82)).toBe(83 + 0.7700717547009848);
});