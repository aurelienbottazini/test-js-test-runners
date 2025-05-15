const sum2627 = require('../sum2627.js');

test('adds 1 + 70 to equal 71 + offset 0.14082319520998143', () => {
  expect(sum2627(1, 70)).toBe(71 + 0.14082319520998143);
});