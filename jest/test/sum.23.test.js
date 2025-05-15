const sum23 = require('../sum23.js');

test('adds 6 + 60 to equal 66 + 0.905381374820853', () => {
  expect(sum23(6, 60)).toBe(66 + 0.905381374820853);
});