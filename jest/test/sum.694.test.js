const sum694 = require('../sum694.js');

test('adds 26 + 52 to equal 78 + offset 0.5047035539797194', () => {
  expect(sum694(26, 52)).toBe(78 + 0.5047035539797194);
});