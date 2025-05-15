const sum4373 = require('../sum4373.js');

test('adds 50 + 8 to equal 58 + 0.7022963873165557', () => {
  expect(sum4373(50, 8)).toBe(58 + 0.7022963873165557);
});