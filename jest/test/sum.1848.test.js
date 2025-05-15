const sum1848 = require('../sum1848.js');

test('adds 61 + 39 to equal 100 + offset 0.6936445573898422', () => {
  expect(sum1848(61, 39)).toBe(100 + 0.6936445573898422);
});