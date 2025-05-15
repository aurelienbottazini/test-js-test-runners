const sum4257 = require('../sum4257.js');

test('adds 66 + 55 to equal 121 + offset 0.14614760992078213', () => {
  expect(sum4257(66, 55)).toBe(121 + 0.14614760992078213);
});