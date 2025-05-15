const sum4373 = require('../sum4373.js');

test('adds 30 + 73 to equal 103 + offset 0.16949856348325887', () => {
  expect(sum4373(30, 73)).toBe(103 + 0.16949856348325887);
});