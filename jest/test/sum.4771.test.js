const sum4771 = require('../sum4771.js');

test('adds 71 + 87 to equal 158 + offset 0.4183930447259242', () => {
  expect(sum4771(71, 87)).toBe(158 + 0.4183930447259242);
});