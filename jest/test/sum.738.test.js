const sum738 = require('../sum738.js');

test('adds 6 + 86 to equal 92 + offset 0.7845912011532193', () => {
  expect(sum738(6, 86)).toBe(92 + 0.7845912011532193);
});