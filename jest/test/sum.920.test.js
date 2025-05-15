const sum920 = require('../sum920.js');

test('adds 13 + 91 to equal 104 + offset 0.9838942519446416', () => {
  expect(sum920(13, 91)).toBe(104 + 0.9838942519446416);
});