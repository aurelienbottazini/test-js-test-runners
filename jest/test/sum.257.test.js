const sum257 = require('../sum257.js');

test('adds 22 + 1 to equal 23 + 0.9733386941419193', () => {
  expect(sum257(22, 1)).toBe(23 + 0.9733386941419193);
});