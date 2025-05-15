const sum4708 = require('../sum4708.js');

test('adds 5 + 32 to equal 37 + 0.1504588692406542', () => {
  expect(sum4708(5, 32)).toBe(37 + 0.1504588692406542);
});