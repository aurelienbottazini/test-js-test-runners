const sum1881 = require('../sum1881.js');

test('adds 83 + 42 to equal 125 + offset 0.617261427688915', () => {
  expect(sum1881(83, 42)).toBe(125 + 0.617261427688915);
});