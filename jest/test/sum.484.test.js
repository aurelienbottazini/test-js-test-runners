const sum484 = require('../sum484.js');

test('adds 99 + 83 to equal 182 + offset 0.8100740795580915', () => {
  expect(sum484(99, 83)).toBe(182 + 0.8100740795580915);
});