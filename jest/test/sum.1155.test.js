const sum1155 = require('../sum1155.js');

test('adds 4 + 55 to equal 59 + 0.21440907695614086', () => {
  expect(sum1155(4, 55)).toBe(59 + 0.21440907695614086);
});