const sum2834 = require('../sum2834.js');

test('adds 4 + 40 to equal 44 + 0.6806746472616695', () => {
  expect(sum2834(4, 40)).toBe(44 + 0.6806746472616695);
});